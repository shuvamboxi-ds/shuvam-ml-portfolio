FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --default-timeout=300 \
    torch==2.14.0 \
    torchvision==0.29.0 \
    --index-url https://download.pytorch.org/whl/cpu

RUN pip install --no-cache-dir --default-timeout=300 \
    -r requirements.txt

COPY app ./app
COPY models ./models

ENV PORT=8080

CMD ["sh", "-c", "uvicorn app.main:app --host 0.0.0.0 --port ${PORT}"]