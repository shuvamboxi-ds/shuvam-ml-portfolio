from io import BytesIO

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

from app.inference import predict_image
from app.schemas import CropDiseasePredictionResponse


app = FastAPI(
    title="Crop Disease Detection API",
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
def health():
    return {
        "status": "ok",
        "model": "ResNet50",
        "classes": 38,
        "confidence_threshold": 0.90,
    }


@app.post(
    "/predict",
    response_model=CropDiseasePredictionResponse,
)
async def predict(
    file: UploadFile = File(...)
):
    if file.content_type is None:
        raise HTTPException(
            status_code=400,
            detail="Invalid image file."
        )

    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Only image files are supported."
        )

    try:
        image_bytes = await file.read()

        image = Image.open(
            BytesIO(image_bytes)
        )

        result = predict_image(image)

        return result

    except HTTPException:
        raise

    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Unable to process the uploaded image."
        )