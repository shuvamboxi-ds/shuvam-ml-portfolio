from pathlib import Path

import joblib
import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parent.parent

MODEL_PATH = PROJECT_ROOT / "models" / "delhi_demand_hist_gradient_boosting.joblib"
DATA_PATH = PROJECT_ROOT / "data" / "delhi_test_data.csv"


FEATURES = [
    "hour",
    "day_of_week",
    "month",
    "is_weekend",
    "lag_1",
    "lag_24",
    "lag_168",
    "rolling_mean_24",
]


if not MODEL_PATH.exists():
    raise FileNotFoundError(f"Model not found: {MODEL_PATH}")

if not DATA_PATH.exists():
    raise FileNotFoundError(f"Test data not found: {DATA_PATH}")


model = joblib.load(MODEL_PATH)

test_data = pd.read_csv(
    DATA_PATH,
    parse_dates=["timestamp"],
)


def get_historical_timestamps():
    options = []

    for timestamp in test_data["timestamp"]:
        options.append(
            {
                "timestamp": timestamp,
                "label": timestamp.strftime("%d %b %Y, %I:%M %p"),
            }
        )

    return options


def predict_historical_demand(timestamp):
    matching_rows = test_data[
        test_data["timestamp"] == timestamp
    ]

    if matching_rows.empty:
        raise ValueError(
            "Timestamp not available in historical test data."
        )

    row = matching_rows.iloc[0]

    input_data = pd.DataFrame(
        [[row[feature] for feature in FEATURES]],
        columns=FEATURES,
    )

    prediction = float(
        model.predict(input_data)[0]
    )

    actual_demand = float(
        row["load_MW"]
    )

    absolute_error = abs(
        actual_demand - prediction
    )

    percentage_error = (
        absolute_error / actual_demand
    ) * 100

    features = {
        "hour": int(row["hour"]),
        "day_of_week": int(row["day_of_week"]),
        "month": int(row["month"]),
        "is_weekend": int(row["is_weekend"]),
        "lag_1": float(row["lag_1"]),
        "lag_24": float(row["lag_24"]),
        "lag_168": float(row["lag_168"]),
        "rolling_mean_24": float(
            row["rolling_mean_24"]
        ),
    }

    return {
        "prediction_mw": prediction,
        "forecast_timestamp": row["timestamp"],
        "actual_mw": actual_demand,
        "absolute_error_mw": absolute_error,
        "percentage_error": percentage_error,
        "features": features,
    }