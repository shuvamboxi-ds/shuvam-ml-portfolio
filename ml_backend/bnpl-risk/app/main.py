import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.inference import predict_bnpl_risk
from app.schemas import (
    BNPLPredictionRequest,
    BNPLPredictionResponse,
)


app = FastAPI(
    title="BNPL Default Risk Prediction API",
    description="Predict BNPL customer risk class using a trained XGBoost pipeline.",
    version="1.0.0",
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
        "model": "XGBoost",
        "task": "multiclass_classification",
    }


@app.post(
    "/predict",
    response_model=BNPLPredictionResponse,
)
def predict(
    request: BNPLPredictionRequest,
):
    try:
        result = predict_bnpl_risk(
            age=request.age,
            employment_status=request.employment_status,
            income_usd=request.income_usd,
            credit_score=request.credit_score,
            total_bnpl_active_loans=(
                request.total_bnpl_active_loans
            ),
            total_bnpl_debt_usd=(
                request.total_bnpl_debt_usd
            ),
            late_payment_history=(
                request.late_payment_history
            ),
            shopping_category_most_frequent=(
                request.shopping_category_most_frequent
            ),
            average_transaction_value_usd=(
                request.average_transaction_value_usd
            ),
        )

        return BNPLPredictionResponse(
            predicted_risk=result[
                "predicted_risk"
            ],
            probabilities=result[
                "probabilities"
            ],
            debt_to_income_ratio=round(
                result[
                    "debt_to_income_ratio"
                ],
                6,
            ),
        )

    except Exception:
        logger.exception(
            "BNPL risk prediction failed"
        )

        raise HTTPException(
            status_code=500,
            detail="Prediction failed. Please try again.",
        )