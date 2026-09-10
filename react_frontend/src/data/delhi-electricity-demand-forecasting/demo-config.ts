export const FORECAST_FEATURE_ORDER = ["hour", "day_of_week", "month", "is_weekend", "lag_1", "lag_24", "lag_168", "rolling_mean_24"] as const

export const forecastDemoConfig = {
  model: "HistGradientBoosting",
  horizon: "1 Hour",
  features: "8",
  metrics: [["TEST MAE", "63.54 MW"], ["TEST RMSE", "87.49 MW"], ["TEST MAPE", "1.70%"]],
  testPeriod: "22 Aug 2025 → 12 Jan 2026",
} as const
