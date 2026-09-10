export interface CropDiseasePredictionResponse { prediction_available: boolean; crop?: string; condition?: string; status?: "healthy" | "diseased" | "low_confidence"; confidence?: number; message?: string; gradcam_url?: string }
export type InferenceStatus = "idle" | "loading" | "success" | "low-confidence" | "error"
