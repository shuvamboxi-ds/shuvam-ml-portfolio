export interface ModelMetric { name: string; mae: number; rmse: number }
export interface FeatureImportance { feature: string; value: number }
export interface DataStat { label: string; value: string }
export interface ForecastPoint { actual: number; predicted: number }
