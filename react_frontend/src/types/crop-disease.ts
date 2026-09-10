export interface ModelStage { name: string; accuracy: number; macroF1: number; description: string }
export interface MetricItem { label: string; value: string }
export interface GradCamExample { image: string; heatmap: string; label: string; note: string }
export interface ExperimentComparison { label: string; value: string }
