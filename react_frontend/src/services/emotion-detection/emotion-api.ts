import type { EmotionPredictionRequest, EmotionPredictionResponse, EmotionLabel } from "../../types/emotion-detection-demo"

const labels = ["anger", "fear", "joy", "love", "sad", "surprise"] as const

function isLabel(value: unknown): value is EmotionLabel { return typeof value === "string" && labels.includes(value as EmotionLabel) }

export async function predictEmotion(text: string): Promise<EmotionPredictionResponse> {
  const endpoint = import.meta.env.VITE_EMOTION_API_URL
  if (!endpoint) throw new Error("MODEL_SERVICE_UNAVAILABLE")
  const body: EmotionPredictionRequest = { text }
  const response = await fetch(`${endpoint.replace(/\/$/, "")}/predict`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
  if (!response.ok) throw new Error("MODEL_INFERENCE_FAILED")
  const payload = await response.json() as Partial<EmotionPredictionResponse>
  if (!isLabel(payload.emotion) || typeof payload.confidence !== "number") throw new Error("MODEL_INFERENCE_FAILED")
  return payload as EmotionPredictionResponse
}
