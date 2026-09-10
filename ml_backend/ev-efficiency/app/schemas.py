from pydantic import BaseModel, Field


class EVPredictionRequest(BaseModel):
    model_year: int = Field(ge=2012, le=2026)
    make: str
    vehicle_class: str
    motor_kw: float = Field(gt=0)
    recharge_time: float = Field(gt=0)


class EVPredictionResponse(BaseModel):
    prediction: float
    unit: str