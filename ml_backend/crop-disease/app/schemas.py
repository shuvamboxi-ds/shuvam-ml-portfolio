from pydantic import BaseModel


class CropDiseasePredictionResponse(BaseModel):
    prediction_available: bool
    crop: str
    condition: str
    status: str
    confidence: float
    message: str