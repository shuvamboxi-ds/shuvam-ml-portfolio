from typing import Literal

from pydantic import BaseModel, Field


class BNPLPredictionRequest(BaseModel):
    age: int = Field(ge=18, le=100)

    employment_status: Literal[
        "Employed",
        "Freelancer",
        "Student",
        "Unemployed",
    ]

    income_usd: float = Field(gt=0)

    credit_score: int = Field(ge=300, le=850)

    total_bnpl_active_loans: int = Field(
        ge=0,
        le=20,
    )

    total_bnpl_debt_usd: float = Field(ge=0)

    late_payment_history: Literal[
        "No",
        "Yes",
    ]

    shopping_category_most_frequent: Literal[
        "Fashion",
        "Electronics",
        "Home/Furniture",
        "Travel",
        "Groceries/Essentials",
    ]

    average_transaction_value_usd: float = Field(
        ge=0
    )


class BNPLProbabilities(BaseModel):
    low: float
    medium: float
    high: float


class BNPLPredictionResponse(BaseModel):
    predicted_risk: Literal[
        "Low",
        "Medium",
        "High",
    ]

    probabilities: BNPLProbabilities

    debt_to_income_ratio: float