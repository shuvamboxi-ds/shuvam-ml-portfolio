from pathlib import Path

import torch
from transformers import (
    AutoModelForSequenceClassification,
    AutoTokenizer,
)


PROJECT_ROOT = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    PROJECT_ROOT
    / "models"
    / "emotion-transformer"
)

MAX_LENGTH = 64


tokenizer = AutoTokenizer.from_pretrained(
    MODEL_PATH
)

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_PATH
)

model.eval()


def predict_emotion(text: str):
    tokenized_without_truncation = tokenizer(
        text,
        add_special_tokens=True,
        truncation=False,
    )

    token_count = len(
        tokenized_without_truncation["input_ids"]
    )

    truncated = token_count > MAX_LENGTH

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        max_length=MAX_LENGTH,
    )

    with torch.no_grad():
        outputs = model(**inputs)

    probabilities_tensor = torch.softmax(
        outputs.logits,
        dim=-1,
    )[0]

    predicted_id = int(
        torch.argmax(probabilities_tensor).item()
    )

    predicted_emotion = model.config.id2label[
        predicted_id
    ]

    confidence = float(
        probabilities_tensor[predicted_id].item()
    )

    probabilities = {}

    for label_id, probability in enumerate(
        probabilities_tensor
    ):
        label = model.config.id2label[
            label_id
        ]

        probabilities[label] = float(
            probability.item()
        )

    return {
        "emotion": predicted_emotion,
        "confidence": confidence,
        "probabilities": probabilities,
        "token_count": token_count,
        "truncated": truncated,
    }