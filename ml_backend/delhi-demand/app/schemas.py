from datetime import datetime

from pydantic import BaseModel


class ForecastFeatures(BaseModel):
    hour: int
    day_of_week: int
    month: int
    is_weekend: int
    lag_1: float
    lag_24: float
    lag_168: float
    rolling_mean_24: float


class HistoricalPredictionRequest(BaseModel):
    timestamp: datetime


class HistoricalPredictionResponse(BaseModel):
    prediction_mw: float
    forecast_timestamp: datetime
    actual_mw: float
    absolute_error_mw: float
    percentage_error: float
    features: ForecastFeatures


class HistoricalTimestampOption(BaseModel):
    timestamp: datetime
    label: str


class ForecastStatusResponse(BaseModel):
    model: str
    live_data: bool
    data_feed: str