export interface EVEfficiencyPredictionInput {
  model_year: number
  make: string
  vehicle_class: string
  motor_kw: number
  recharge_time: number
}

export interface EVEfficiencyPredictionResponse {
  prediction: number
  unit: string
}

export type PredictionStatus = "idle" | "loading" | "success" | "error"
