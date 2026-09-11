from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.inference import predict_emotion
from app.schemas import (
    EmotionPredictionRequest,
    EmotionPredictionResponse,
)


app = FastAPI(
    title="Emotion Detection API",
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
        "model": "DistilBERT",
        "classes": 6,
        "max_length": 64,
    }


@app.post(
    "/predict",
    response_model=EmotionPredictionResponse,
)
def predict(
    request: EmotionPredictionRequest,
):
    return predict_emotion(
        request.text
    )