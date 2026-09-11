from typing import Dict
from pydantic import BaseModel, Field

class EmotionPredictionRequest(BaseModel):
    text: str = Field(
        min_length=1,
        max_length=5000,
    )


class EmotionPredictionResponse(BaseModel):
    emotion: str
    confidence: float
    probabilities: Dict[str, float]
    token_count: int
    truncated: bool