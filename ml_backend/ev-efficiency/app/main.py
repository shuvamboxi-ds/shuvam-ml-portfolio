from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
import logging

from app.inference import predict_efficiency
from app.schemas import EVPredictionRequest, EVPredictionResponse

app = FastAPI(
    title="EV Energy Efficiency API",
    description="Predict EV energy efficiency using a trained Linear Regression pipeline.",
    version="1.0.0"
)

logger = logging.getLogger(__name__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://projects.shuvamboxi.in"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/health")
def health_check():
    return {
        "status":"healthy",
        "model":"Linear_Regression_Pipeline"
    }

@app.post("/predict", response_model=EVPredictionResponse)
def predict(request: EVPredictionRequest):
    try:
        prediction = predict_efficiency(
            model_year=request.model_year,
            make=request.make,
            vehicle_class=request.vehicle_class,
            motor_kw=request.motor_kw,
            recharge_time=request.recharge_time,
        )

        return EVPredictionResponse(
            prediction=round(prediction, 3),
            unit="km/kWh",
        )

    except Exception:
        logger.exception("EV efficiency prediction failed")

        raise HTTPException(
            status_code=500,
            detail="Prediction failed. Please try again.",
        )