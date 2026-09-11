import type {
    CropDiseasePredictionResponse,
  } from "../../types/crop-disease-demo"
  
  interface CropDiseaseApiResponse {
    prediction_available: boolean
    crop?: string
    condition?: string
    status?: "Healthy" | "Diseased" | "Low confidence"
    confidence?: number
    message?: string
  }
  
  function mapStatus(
    status?: CropDiseaseApiResponse["status"]
  ): CropDiseasePredictionResponse["status"] | undefined {
    if (status === "Healthy") {
      return "healthy"
    }
  
    if (status === "Diseased") {
      return "diseased"
    }
  
    if (status === "Low confidence") {
      return "low_confidence"
    }
  
    return undefined
  }
  
  export async function predictCropDisease(
    file: File
  ): Promise<CropDiseasePredictionResponse> {
    const endpoint =
      import.meta.env.VITE_CROP_DISEASE_API_URL
  
    if (!endpoint) {
      throw new Error("MODEL_SERVICE_UNAVAILABLE")
    }
  
    const form = new FormData()
  
    form.append("file", file)
  
    const response = await fetch(
      `${endpoint.replace(/\/$/, "")}/predict`,
      {
        method: "POST",
        body: form,
      }
    )
  
    if (!response.ok) {
      throw new Error(
        response.status === 503
          ? "MODEL_UNAVAILABLE"
          : "INFERENCE_FAILED"
      )
    }
  
    const payload =
      await response.json() as CropDiseaseApiResponse
  
    if (
      typeof payload.prediction_available !== "boolean"
    ) {
      throw new Error("INFERENCE_FAILED")
    }
  
    return {
      prediction_available: payload.prediction_available,
      crop: payload.crop,
      condition: payload.condition,
      status: mapStatus(payload.status),
      confidence: payload.confidence,
      message: payload.message,
    }
  }