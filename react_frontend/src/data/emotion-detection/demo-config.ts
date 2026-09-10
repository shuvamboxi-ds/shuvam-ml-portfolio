import type { EmotionLabel } from "../../types/emotion-detection-demo"

export const emotionDemoConfig = {
  model: "distilbert-base-uncased",
  displayModel: "DistilBERT",
  task: "6-class emotion classification",
  classes: ["anger", "fear", "joy", "love", "sad", "surprise"] as EmotionLabel[],
  maxLength: "64 tokens",
  training: "Fine-tuned",
  trainingSubset: "80,000",
  testSamples: "55,730",
  testAccuracy: "99.31%",
  testMacroF1: "99.07%",
  sourceUrl: "https://github.com/shuvamboxi-ds/emotion-detection-transformers",
  caseStudyUrl: "/projects/emotion-detection",
  samples: [
    "I finally got the job I wanted!",
    "I don't know what will happen tomorrow.",
    "I miss the people I grew up with.",
    "I can't believe they treated me like that.",
  ],
} as const
