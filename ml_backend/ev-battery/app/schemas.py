from pydantic import BaseModel, Field


class BatteryPredictionRequest(BaseModel):
    source_row: int = Field(ge=0)


class BatterySignals(BaseModel):
    battery_health_percent: float
    state_of_health: float
    capacity_loss_percent: float
    cycle_count: float
    internal_resistance: float
    thermal_runaway_risk: float
    bms_warning_count: float
    maintenance_score: float


class BatteryPredictionResponse(BaseModel):
    source_row: int
    prediction: int
    predicted_label: str
    failure_probability: float
    actual_label: int
    actual_status: str
    correct_prediction: bool
    signals: BatterySignals