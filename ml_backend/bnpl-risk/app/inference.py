from pathlib import Path

import joblib
import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    PROJECT_ROOT
    / "models"
    / "xgboost_bnpl_risk_model.joblib"
)

IMPUTATION_PATH = (
    PROJECT_ROOT
    / "models"
    / "imputation_values.joblib"
)


if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model not found: {MODEL_PATH}"
    )

if not IMPUTATION_PATH.exists():
    raise FileNotFoundError(
        f"Imputation values not found: {IMPUTATION_PATH}"
    )


model = joblib.load(MODEL_PATH)
imputation_values = joblib.load(IMPUTATION_PATH)


RISK_MAPPING = {
    0: "Low",
    1: "Medium",
    2: "High",
}


def prepare_customer_features(
    customer_data: dict,
):
    customer_df = pd.DataFrame(
        [customer_data]
    )

    customer_df["Income_USD"] = (
        customer_df["Income_USD"]
        .fillna(
            imputation_values["Income_USD"]
        )
    )

    customer_df["Credit_Score"] = (
        customer_df["Credit_Score"]
        .fillna(
            imputation_values["Credit_Score"]
        )
    )

    customer_df[
        "BNPL_Debt_to_Income_Ratio"
    ] = (
        customer_df["Total_BNPL_Debt_USD"]
        / customer_df["Income_USD"]
    )

    return customer_df


def predict_bnpl_risk(
    age: int,
    employment_status: str,
    income_usd: float,
    credit_score: int,
    total_bnpl_active_loans: int,
    total_bnpl_debt_usd: float,
    late_payment_history: str,
    shopping_category_most_frequent: str,
    average_transaction_value_usd: float,
):
    customer_data = {
        "Age": age,
        "Employment_Status": employment_status,
        "Income_USD": income_usd,
        "Credit_Score": credit_score,
        "Total_BNPL_Active_Loans":
            total_bnpl_active_loans,
        "Total_BNPL_Debt_USD":
            total_bnpl_debt_usd,
        "Late_Payment_History":
            late_payment_history,
        "Shopping_Category_Most_Frequent":
            shopping_category_most_frequent,
        "Average_Transaction_Value_USD":
            average_transaction_value_usd,
    }

    prepared_customer = (
        prepare_customer_features(
            customer_data
        )
    )

    prediction = int(
        model.predict(
            prepared_customer
        )[0]
    )

    probabilities = model.predict_proba(
        prepared_customer
    )[0]

    debt_to_income_ratio = float(
        prepared_customer[
            "BNPL_Debt_to_Income_Ratio"
        ].iloc[0]
    )

    return {
        "predicted_risk":
            RISK_MAPPING[prediction],

        "probabilities": {
            "low":
                float(probabilities[0]),
            "medium":
                float(probabilities[1]),
            "high":
                float(probabilities[2]),
        },

        "debt_to_income_ratio":
            debt_to_income_ratio,
    }