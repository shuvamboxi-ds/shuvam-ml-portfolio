import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.inference import (
    get_historical_timestamps,
    predict_historical_demand,
)
from app.schemas import (
    ForecastStatusResponse,
    HistoricalPredictionRequest,
    HistoricalPredictionResponse,
    HistoricalTimestampOption,
)


app = FastAPI(
    title="Delhi Electricity Demand Forecasting API",
    description="Historical electricity demand forecasting using HistGradientBoosting.",
    version="1.1.0",
)

logger = logging.getLogger(__name__)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://projects.shuvamboxi.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model": "HistGradientBoostingRegressor",
        "mode": "historical_test",
    }


@app.get(
    "/status",
    response_model=ForecastStatusResponse,
)
def forecast_status():
    return ForecastStatusResponse(
        model="HistGradientBoostingRegressor",
        live_data=False,
        data_feed="historical-only",
    )


@app.get(
    "/historical/timestamps",
    response_model=list[HistoricalTimestampOption],
)
def historical_timestamps():
    return get_historical_timestamps()


@app.post(
    "/predict/historical",
    response_model=HistoricalPredictionResponse,
)
def historical_prediction(
    request: HistoricalPredictionRequest,
):
    try:
        result = predict_historical_demand(
            request.timestamp
        )

        return HistoricalPredictionResponse(
            prediction_mw=round(
                result["prediction_mw"],
                2,
            ),
            forecast_timestamp=result[
                "forecast_timestamp"
            ],
            actual_mw=round(
                result["actual_mw"],
                2,
            ),
            absolute_error_mw=round(
                result["absolute_error_mw"],
                2,
            ),
            percentage_error=round(
                result["percentage_error"],
                2,
            ),
            features=result["features"],
        )

    except ValueError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error),
        )

    except Exception:
        logger.exception(
            "Historical Delhi demand prediction failed"
        )

        raise HTTPException(
            status_code=500,
            detail="Prediction failed. Please try again.",
        )


@app.post(
    "/predict/live",
)
def live_prediction():
    raise HTTPException(
        status_code=503,
        detail="Live Delhi electricity data source is not connected.",
    )


@app.post(
    "/predict",
    response_model=HistoricalPredictionResponse,
)
def predict(
    request: HistoricalPredictionRequest,
):
    return historical_prediction(request)