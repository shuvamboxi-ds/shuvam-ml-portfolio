import json
from pathlib import Path

import torch
import torch.nn as nn
from PIL import Image
from torchvision import transforms
from torchvision.models import resnet50


BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = BASE_DIR / "models" / "resnet50_finetuned.pth"
CLASS_NAMES_PATH = BASE_DIR / "models" / "class_names.json"

CONFIDENCE_THRESHOLD = 0.90


device = torch.device("cpu")


with open(CLASS_NAMES_PATH, "r") as file:
    class_names = json.load(file)


model = resnet50(weights=None)

num_features = model.fc.in_features

model.fc = nn.Linear(
    num_features,
    len(class_names)
)

state_dict = torch.load(
    MODEL_PATH,
    map_location=device
)

model.load_state_dict(state_dict)

model = model.to(device)

model.eval()


inference_transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])


def predict_image(image: Image.Image):

    image = image.convert("RGB")

    image_tensor = inference_transform(image)

    image_tensor = image_tensor.unsqueeze(0)

    image_tensor = image_tensor.to(device)

    with torch.no_grad():

        outputs = model(image_tensor)

        probabilities = torch.softmax(
            outputs,
            dim=1
        )

        confidence, predicted_index = torch.max(
            probabilities,
            dim=1
        )

    confidence = confidence.item()

    predicted_index = predicted_index.item()

    predicted_class = class_names[predicted_index]

    crop, condition = predicted_class.split("___", 1)

    crop = crop.replace("_", " ").strip()

    condition = condition.replace("_", " ").strip()

    if confidence < CONFIDENCE_THRESHOLD:

        return {
            "prediction_available": False,
            "crop": crop,
            "condition": condition,
            "status": "Low confidence",
            "confidence": round(confidence * 100, 2),
            "message": (
                "The model is not confident enough. "
                "Please upload a clearer leaf image."
            )
        }

    if condition.lower() == "healthy":
        status = "Healthy"
    else:
        status = "Diseased"

    return {
        "prediction_available": True,
        "crop": crop,
        "condition": condition,
        "status": status,
        "confidence": round(confidence * 100, 2),
        "message": "Prediction completed successfully."
    }