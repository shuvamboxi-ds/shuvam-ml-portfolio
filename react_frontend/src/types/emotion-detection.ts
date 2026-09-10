export interface Metric { label: string; value: string }
export interface ConfusionPair { trueLabel: string; predictedLabel: string; count: number }
export interface ClassMetric { label: string; precision: number; recall: number }
export interface ErrorExample { text: string; trueLabel: string; predictedLabel: string; confidence?: number }
