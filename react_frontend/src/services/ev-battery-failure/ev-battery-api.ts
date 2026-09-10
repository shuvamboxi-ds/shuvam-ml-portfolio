import type { BatteryPredictionResponse, BatteryRecord } from "../../types/ev-battery-demo"

function baseUrl() {
  const endpoint = import.meta.env.VITE_EV_BATTERY_API_URL
  if (!endpoint) throw new Error("MODEL_SERVICE_UNAVAILABLE")
  return endpoint.replace(/\/$/, "")
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try { response = await fetch(`${baseUrl()}${path}`, init) } catch { throw new Error("MODEL_SERVICE_UNAVAILABLE") }
  if (response.status === 404) throw new Error("RECORD_NOT_FOUND")
  if (!response.ok) throw new Error(response.status >= 500 ? "MODEL_SERVICE_UNAVAILABLE" : "INFERENCE_ERROR")
  try { return await response.json() as T } catch { throw new Error("INFERENCE_ERROR") }
}

export function getHealthyExample() { return request<BatteryRecord>("/examples/healthy") }
export function getFailureExample() { return request<BatteryRecord>("/examples/failure") }
export function getBatteryRecord(row: number) { return request<BatteryRecord>(`/records/${row}`) }
export function predictBattery(record: BatteryRecord) {
  return request<BatteryPredictionResponse>("/predict", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(record.features ?? {}) })
}
