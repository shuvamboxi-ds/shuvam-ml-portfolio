from pathlib import Path

import joblib
import pandas as pd

PROJECT_ROOT = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    PROJECT_ROOT
    / "models"
    / "linear_regression_pipeline.joblib"
)


if not MODEL_PATH.exists():
    raise FileNotFoundError(
        f"Model not found: {MODEL_PATH}"
    )


model = joblib.load(MODEL_PATH)


def predict_efficiency(
    model_year: int,
    make: str,
    vehicle_class: str,
    motor_kw: float,
    recharge_time: float,
) -> float:
    """Predict EV energy efficiency in km/kWh."""

    input_data = pd.DataFrame(
        [
            {
                "Model year": model_year,
                "Make": make,
                "Vehicle class": vehicle_class,
                "Motor (kW)": motor_kw,
                "Recharge time (h)": recharge_time,
            }
        ]
    )

    prediction = model.predict(input_data)[0]

    return float(prediction)