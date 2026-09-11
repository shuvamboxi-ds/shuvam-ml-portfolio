from pathlib import Path

import joblib
import pandas as pd


PROJECT_ROOT = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    PROJECT_ROOT
    / "models"
    / "ev_battery_failure_logistic.joblib"
)

DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "ev_battery_test_demo.csv"
)


if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model not found: {MODEL_PATH}"
    )

if not DATA_PATH.exists():
    raise FileNotFoundError(
        f"Test data not found: {DATA_PATH}"
    )


model = joblib.load(MODEL_PATH)

test_data = pd.read_csv(DATA_PATH)


MODEL_FEATURES = list(model.feature_names_in_)


def get_example_row(
    label: int,
):
    matching_rows = test_data[
        test_data["battery_failure"] == label
    ]

    if matching_rows.empty:
        raise ValueError(
            "No matching battery example found."
        )

    random_row = matching_rows.sample(
        n=1
    ).iloc[0]

    return int(
        random_row["source_row"]
    )


def predict_battery_failure(
    source_row: int,
):
    matching_rows = test_data[
        test_data["source_row"] == source_row
    ]

    if matching_rows.empty:
        raise ValueError(
            "Battery row not available in test data."
        )

    row = matching_rows.iloc[0]

    input_data = pd.DataFrame(
        [
            {
                feature: row[feature]
                for feature in MODEL_FEATURES
            }
        ]
    )

    prediction = int(
        model.predict(input_data)[0]
    )

    failure_probability = float(
        model.predict_proba(input_data)[0, 1]
    )

    actual_label = int(
        row["battery_failure"]
    )

    signals = {
        "battery_health_percent":
            float(row["battery_health_percent"]),

        "state_of_health":
            float(row["state_of_health"]),

        "capacity_loss_percent":
            float(row["capacity_loss_percent"]),

        "cycle_count":
            float(row["cycle_count"]),

        "internal_resistance":
            float(row["internal_resistance"]),

        "thermal_runaway_risk":
            float(row["thermal_runaway_risk"]),

        "bms_warning_count":
            float(row["BMS_warning_count"]),

        "maintenance_score":
            float(row["maintenance_score"]),
    }

    return {
        "source_row": source_row,

        "prediction": prediction,

        "predicted_label":
            "Failure"
            if prediction == 1
            else "Healthy",

        "failure_probability":
            failure_probability,

        "actual_label":
            actual_label,

        "actual_status":
            "Failure"
            if actual_label == 1
            else "Healthy",

        "correct_prediction":
            prediction == actual_label,

        "signals":
            signals,
    }

def get_battery_record(
    source_row: int,
):
    matching_rows = test_data[
        test_data["source_row"] == source_row
    ]

    if matching_rows.empty:
        raise ValueError(
            "Battery row not available in test data."
        )

    row = matching_rows.iloc[0]

    actual_label = int(
        row["battery_failure"]
    )

    telemetry = {
        "battery_health":
            float(row["battery_health_percent"]),

        "state_of_health":
            float(row["state_of_health"]),

        "capacity_loss":
            float(row["capacity_loss_percent"]),

        "cycle_count":
            float(row["cycle_count"]),

        "internal_resistance":
            float(row["internal_resistance"]),

        "thermal_runaway_risk":
            float(row["thermal_runaway_risk"]),

        "bms_warning_count":
            float(row["BMS_warning_count"]),

        "maintenance_score":
            float(row["maintenance_score"]),
    }

    return {
        "row": source_row,
        "actual_label":
            "Failure"
            if actual_label == 1
            else "Healthy",
        "telemetry": telemetry,
    }