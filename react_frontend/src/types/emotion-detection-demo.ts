export type EmotionLabel = "anger" | "fear" | "joy" | "love" | "sad" | "surprise"

export interface EmotionProbability { label: EmotionLabel; probability: number }
export interface EmotionPredictionRequest { text: string }
export interface EmotionPredictionResponse { emotion: EmotionLabel; confidence: number; probabilities?: EmotionProbability[]; truncated?: boolean; token_count?: number }
export type InferenceStatus = "idle" | "loading" | "success" | "error"
