export const evBatteryFailureData = {
  github: "https://github.com/shuvamboxi-ds/ev-battery-failure-prediction",
  metrics: [
    ["200K", "RECORDS"],
    ["96%", "FAILURE RECALL"],
    ["0.922", "PR AUC"],
    ["164", "MISSED FAILURES"],
  ],
  dataset: [
    ["200,000", "OBSERVATIONS"],
    ["70", "ORIGINAL COLUMNS"],
    ["67", "MODELING FEATURES"],
    ["~9.96%", "FAILURE CASES"],
  ],
  signals: [
    ["AVERAGE BATTERY HEALTH", "90.04%", "63.34%", "HEALTHY", "FAILURE"],
    ["CAPACITY LOSS", "9.96%", "36.69%", "HEALTHY", "FAILURE"],
    ["CYCLE COUNT", "248", "737", "HEALTHY", "FAILURE"],
    ["THERMAL RUNAWAY RISK", "44.93", "69.15", "HEALTHY", "FAILURE"],
  ],
  models: [
    ["Logistic Regression", "0.63", "0.96", "0.76", "0.9893", "0.9222", "164"],
    ["Random Forest", "0.75", "0.84", "0.79", "0.9841", "0.8794", "633"],
    ["HistGradientBoosting", "0.66", "0.95", "0.78", "0.9887", "0.9184", "213"],
  ],
} as const

export const evBatteryDomains = [
  "BATTERY INFORMATION", "VEHICLE INFORMATION", "CHARGING HISTORY", "DRIVING BEHAVIOR",
  "ENVIRONMENT", "MAINTENANCE", "DIAGNOSTIC SENSORS", "DERIVED FEATURES",
]
