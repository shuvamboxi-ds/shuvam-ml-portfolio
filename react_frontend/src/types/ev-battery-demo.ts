export interface BatteryTelemetry {
  battery_health?: number
  state_of_health?: number
  capacity_loss?: number
  cycle_count?: number
  internal_resistance?: number
  thermal_runaway_risk?: number
  bms_warning_count?: number
  maintenance_score?: number
}

export interface BatteryRecord {
  row: number
  actual_label: "Healthy" | "Failure"
  telemetry: BatteryTelemetry
  features?: Record<string, number | string | null>
}

export interface BatteryPredictionResponse {
  row?: number
  prediction: "Healthy" | "Failure"
  failure_probability: number
  actual_label?: "Healthy" | "Failure"
  correct?: boolean
}

export type PredictionStatus = "idle" | "loading" | "success" | "error"
