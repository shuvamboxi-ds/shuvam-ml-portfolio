import type { ClassMetric, ConfusionPair, ErrorExample, Metric } from "../../types/emotion-detection"

export const emotionProject = {
  title: "Emotion Detection from Text",
  sourceUrl: "https://github.com/shuvamboxi-ds/emotion-detection-transformers",
  demoUrl: "/projects/emotion-detection/demo",
  tags: ["NLP", "PyTorch", "Transformers", "Hugging Face", "DistilBERT", "Scikit-learn", "Streamlit"],
  rawRows: "422,746", cleanRows: "371,527", classes: "6", trainRows: "260,068", validationRows: "55,729", testRows: "55,730", trainingSubset: "80,000",
  baselineAccuracy: "96.86%", baselineMacroF1: "96.08%", distilbertValidationAccuracy: "99.33%", distilbertValidationMacroF1: "99.06%", distilbertTestAccuracy: "99.31%", distilbertTestMacroF1: "99.07%", testLoss: "0.0286", testErrors: "387",
  conflictSentences: "22,295", conflictRows: "45,293", conflictPercentage: "10.71%",
  heroMetrics: [{ value: "371,527", label: "CLEAN SAMPLES" }, { value: "6", label: "EMOTION CLASSES" }, { value: "96.08%", label: "BASELINE MACRO F1" }, { value: "99.07%", label: "DISTILBERT TEST MACRO F1" }] as Metric[],
  classesList: ["Anger", "Fear", "Joy", "Love", "Sad", "Surprise"],
  confusionPairs: [{ trueLabel: "Sad", predictedLabel: "Anger", count: 53 }, { trueLabel: "Surprise", predictedLabel: "Fear", count: 40 }, { trueLabel: "Anger", predictedLabel: "Fear", count: 38 }, { trueLabel: "Joy", predictedLabel: "Sad", count: 37 }, { trueLabel: "Sad", predictedLabel: "Joy", count: 26 }] as ConfusionPair[],
  classMetrics: [{ label: "Surprise", precision: 99.86, recall: 97.01 }] as ClassMetric[],
  errorExamples: [] as ErrorExample[],
  stack: ["Python", "Pandas", "PyTorch", "Transformers", "Hugging Face", "scikit-learn", "Streamlit"],
  takeaways: [["01", "DATA QUALITY BEFORE MODEL COMPLEXITY", "Cleaning conflicting examples and preventing leakage mattered before choosing a Transformer."], ["02", "BASELINES MATTER", "TF-IDF + Logistic Regression already achieved 96.08% Macro F1, providing a meaningful benchmark."], ["03", "CONTEXT STILL HELPED", "DistilBERT improved Macro F1 to 99.07%, but error analysis showed that high test performance does not equal universal emotion understanding."]],
  trainingConfig: [["MODEL", "distilbert-base-uncased"], ["TRAINING SUBSET", "80,000"], ["MAX LENGTH", "64"], ["EPOCHS", "2"], ["BATCH SIZE", "32"], ["LEARNING RATE", "2e-5"]] as const,
} as const

export const experimentMetrics = {
  baseline: [["Accuracy", "96.86%"], ["Macro F1", "96.08%"]],
  transformer: [["Accuracy", "99.33%"], ["Macro F1", "99.06%"]],
  test: [["TEST ACCURACY", "99.31%"], ["MACRO F1", "99.07%"], ["TEST LOSS", "0.0286"], ["ERRORS", "387 / 55,730"]],
} as const
