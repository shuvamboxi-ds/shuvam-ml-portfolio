from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.inference import (
    get_battery_record,
    get_example_row,
    predict_battery_failure,
)
from app.schemas import (
    BatteryPredictionRequest,
    BatteryPredictionResponse,
)


app = FastAPI(
    title="EV Battery Failure Prediction API",
    version="1.0.0",
)


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
        "status": "ok",
        "model": "Logistic Regression",
        "features": 67,
    }


@app.get("/examples/healthy")
def healthy_example():
    source_row = get_example_row(0)

    return get_battery_record(
        source_row
    )


@app.get("/examples/failure")
def failure_example():
    source_row = get_example_row(1)

    return get_battery_record(
        source_row
    )

@app.get("/records/{source_row}")
def battery_record(
    source_row: int,
):
    try:
        return get_battery_record(
            source_row
        )

    except ValueError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error),
        )

@app.post(
    "/predict",
    response_model=BatteryPredictionResponse,
)
def predict(
    request: BatteryPredictionRequest,
):
    try:
        result = predict_battery_failure(
            request.source_row
        )

        return result

    except ValueError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error),
        )

