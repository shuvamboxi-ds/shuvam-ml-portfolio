import type { EVEfficiencyPredictionInput, EVEfficiencyPredictionResponse } from "../types/ev-efficiency"

const apiUrl = import.meta.env.VITE_EV_EFFICIENCY_API_URL as string | undefined

export async function predictEVEfficiency(input: EVEfficiencyPredictionInput): Promise<EVEfficiencyPredictionResponse> {
  if (!apiUrl) throw new Error("MODEL_NOT_CONFIGURED")
  const response = await fetch(`${apiUrl.replace(/\/$/, "")}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!response.ok) throw new Error("MODEL_UNAVAILABLE")
  const payload = (await response.json()) as Partial<EVEfficiencyPredictionResponse>
  if (typeof payload.prediction !== "number") throw new Error("MODEL_UNAVAILABLE")
  return { prediction: payload.prediction, unit: payload.unit ?? "km/kWh" }
}
