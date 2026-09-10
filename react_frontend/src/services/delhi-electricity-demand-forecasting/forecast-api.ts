import type { ForecastStatusResponse, HistoricalForecastResult, HistoricalTimestampOption } from "../../types/delhi-electricity-demand-demo"

const apiUrl = import.meta.env.VITE_DELHI_FORECAST_API_URL as string | undefined

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!apiUrl) throw new Error("API_UNAVAILABLE")
  const response = await fetch(`${apiUrl.replace(/\/$/, "")}${path}`, init)
  if (!response.ok) throw new Error("API_UNAVAILABLE")
  return response.json() as Promise<T>
}

export function getForecastStatus() { return request<ForecastStatusResponse>("/status") }
export function getHistoricalTimestamps() { return request<HistoricalTimestampOption[]>("/historical/timestamps") }
export function runHistoricalForecast(timestamp: string) { return request<HistoricalForecastResult>("/predict/historical", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ timestamp }) }) }
export function runLiveForecast() { return request<never>("/predict/live", { method: "POST" }) }
