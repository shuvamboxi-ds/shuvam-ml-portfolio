import type { DataStat, FeatureImportance, ForecastPoint, ModelMetric } from "../../types/delhi-electricity-demand"

export const delhiDemandProject = {
  title: "Delhi Electricity Demand Forecasting",
  demoUrl: "/projects/delhi-electricity-demand-forecasting/demo",
  sourceUrl: "",
  metadata: [
    ["FORECAST", "1 Hour Ahead"], ["DATA", "5-Min → Hourly"], ["FINAL MODEL", "HistGradientBoosting"], ["TEST MAPE", "1.70%"], ["STATUS", "Completed"],
  ],
  dataStats: [
    { label: "RAW OBSERVATIONS", value: "293,184" }, { label: "ORIGINAL FREQUENCY", value: "5 MINUTES" }, { label: "DATE RANGE", value: "2023-04-01 → 2026-01-12" }, { label: "MISSING LOAD OBSERVATIONS", value: "7,932" }, { label: "MISSING RUNS", value: "886" }, { label: "LONGEST MISSING RUN", value: "590 / ≈ 49 HOURS" },
  ] as DataStat[],
  features: [
    ["hour", "Hour of the target day"], ["day_of_week", "Monday to Sunday pattern"], ["month", "Seasonal calendar information"], ["is_weekend", "Weekend indicator"],
    ["lag_1", "Demand one hour earlier"], ["lag_24", "Demand at the same hour yesterday"], ["lag_168", "Demand at the same hour one week earlier"], ["rolling_mean_24", "Average recent demand over the previous 24 hours"],
  ],
  correlations: [["lag_1", "0.981"], ["lag_24", "0.964"], ["lag_168", "0.902"]],
  splits: [["TRAIN", "15,690 rows", "2023-04-08 → 2025-03-28", "Learn parameters"], ["VALIDATION", "3,362 rows", "2025-03-28 → 2025-08-22", "Compare models and select configuration"], ["TEST", "3,363 rows", "2025-08-22 → 2026-01-12", "Final untouched future evaluation"]],
  validationModels: [
    { name: "Naive Persistence", mae: 200.97, rmse: 250.19 }, { name: "Linear Regression", mae: 173.25, rmse: 236.73 }, { name: "Random Forest", mae: 82.88, rmse: 129.01 }, { name: "Gradient Boosting v1", mae: 75.66, rmse: 120.44 }, { name: "Gradient Boosting v2", mae: 73.64, rmse: 118.15 },
  ] as ModelMetric[],
  finalMetrics: [["MAE", "63.54 MW"], ["RMSE", "87.49 MW"], ["MAPE", "1.70%"]],
  importance: [{ feature: "lag_1", value: 1119.52 }, { feature: "lag_24", value: 152.51 }, { feature: "hour", value: 129.97 }, { feature: "day_of_week", value: 10.59 }, { feature: "rolling_mean_24", value: 10.51 }, { feature: "month", value: 10.33 }, { feature: "lag_168", value: 6.72 }, { feature: "is_weekend", value: 0 }] as FeatureImportance[],
  stack: ["Python", "Pandas", "scikit-learn", "HistGradientBoostingRegressor", "Matplotlib", "Joblib", "Streamlit"],
  limitations: ["Historical load is the primary signal. The current model does not include weather forecasts.", "One main chronological validation block was used. Rolling-origin validation would provide stronger robustness testing.", "Live forecasting requires a current Delhi electricity-load feed. The saved historical dataset alone cannot generate a genuine current forecast.", "Demand patterns can drift. A production system would require monitoring and periodic retraining."],
} as const

export const forecastPoints: ForecastPoint[] = [
  { actual: 3300, predicted: 3260 }, { actual: 3450, predicted: 3490 }, { actual: 3900, predicted: 3840 }, { actual: 4550, predicted: 4480 }, { actual: 5100, predicted: 5180 }, { actual: 4750, predicted: 4690 }, { actual: 4100, predicted: 4160 }, { actual: 3650, predicted: 3610 }, { actual: 3400, predicted: 3460 }, { actual: 3520, predicted: 3500 }, { actual: 4200, predicted: 4140 }, { actual: 4850, predicted: 4910 }, { actual: 5350, predicted: 5260 }, { actual: 4980, predicted: 5050 }, { actual: 4300, predicted: 4250 }, { actual: 3700, predicted: 3760 },
]
