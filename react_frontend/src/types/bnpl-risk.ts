export interface ModelResult { model: string; accuracy: number; macroF1: number; highRecall: number; mediumF1: number }
export interface TargetDistributionItem { label: "Low" | "Medium" | "High"; count: number; percentage: number }
export interface FeatureImportanceItem { feature: string; importance: number }
export interface ConfusionMatrixData { labels: string[]; values: number[][] }
