import { useState } from "react"
import { predictEVEfficiency } from "../../../../services/ev-efficiency-api"
import type { EVEfficiencyPredictionInput, EVEfficiencyPredictionResponse, PredictionStatus } from "../../../../types/ev-efficiency"
import { PredictionResult } from "./PredictionResult"
import { VehicleInputForm } from "./VehicleInputForm"

const initialInput: EVEfficiencyPredictionInput = { model_year: 2026, make: "Tesla", vehicle_class: "Mid-size", motor_kw: 350, recharge_time: 8.5 }

export function InferenceWorkspace() {
  const [input, setInput] = useState(initialInput)
  const [status, setStatus] = useState<PredictionStatus>("idle")
  const [result, setResult] = useState<EVEfficiencyPredictionResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [fieldError, setFieldError] = useState<string>()
  const runPrediction = async () => {
    if (!input.model_year || !input.make || !input.vehicle_class || !input.motor_kw || !input.recharge_time) { setFieldError("MISSING INPUT / Complete all vehicle specifications before running inference."); return }
    if (input.motor_kw < 0 || input.recharge_time < 0) { setFieldError("INVALID VALUE / Enter positive numeric specifications."); return }
    setFieldError(undefined); setStatus("loading"); setError(null)
    try { setResult(await predictEVEfficiency(input)); setStatus("success") } catch { setStatus("error"); setError("The inference service could not be reached.") }
  }
  return <div className="demo-workspace"><VehicleInputForm input={input} onChange={setInput} onSubmit={runPrediction} loading={status === "loading"} fieldError={fieldError} /><PredictionResult status={status} result={result} error={error} /></div>
}
