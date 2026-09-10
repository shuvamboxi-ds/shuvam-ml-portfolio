import type { FormEvent } from "react"
import { useState } from "react"
import { predictEmotion } from "../../../../services/emotion-detection/emotion-api"
import type { EmotionPredictionResponse, InferenceStatus } from "../../../../types/emotion-detection-demo"
import { EmotionInput } from "./EmotionInput"
import { EmotionResult } from "./EmotionResult"
import { SampleInputs } from "./SampleInputs"

export function EmotionInferenceConsole() { const [text, setText] = useState(""); const [status, setStatus] = useState<InferenceStatus>("idle"); const [prediction, setPrediction] = useState<EmotionPredictionResponse | null>(null); const [error, setError] = useState<string | null>(null); const [validation, setValidation] = useState<string | undefined>()
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!text.trim()) { setValidation("ENTER TEXT TO ANALYZE"); return } setValidation(undefined); setStatus("loading"); setPrediction(null); setError(null); try { const result = await predictEmotion(text.trim()); setPrediction(result); setStatus("success") } catch (caught) { setError(caught instanceof Error ? caught.message : "MODEL_INFERENCE_FAILED"); setStatus("error") } }
  return <><section className="emotion-console"><div className="emotion-console-bar"><div><span>MODEL</span><strong>distilbert-emotion</strong></div><div><span>TASK</span><strong>MULTICLASS CLASSIFICATION</strong></div><div><span>STATUS</span><strong className={status === "error" ? "is-error" : status === "loading" ? "is-loading" : ""}>{status === "error" ? "UNAVAILABLE" : status === "loading" ? "RUNNING" : "READY"}</strong></div></div><div className="emotion-console-grid"><EmotionInput value={text} disabled={status === "loading"} validationMessage={validation} onChange={(value) => { setText(value); setValidation(undefined) }} onSubmit={submit} /><EmotionResult status={status} prediction={prediction} error={error} /></div></section><SampleInputs onSelect={(sample) => { setText(sample); setValidation(undefined) }} /></> }
