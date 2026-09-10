import type { ConfusionMatrixData, FeatureImportanceItem, ModelResult, TargetDistributionItem } from "../../types/bnpl-risk"

export const bnplProject = {
  sourceUrl: "https://github.com/shuvamboxi-ds/bnpl-default-risk",
  demoUrl: "/projects/bnpl-risk/demo",
  rows: "10,000", originalColumns: "11", missingIncome: "305", missingCreditScore: "298", targetClasses: "3", medianIncome: "$58,596", medianCreditScore: "673",
  targetDistribution: [{ label: "Low", count: 8801, percentage: 88.01 }, { label: "Medium", count: 678, percentage: 6.78 }, { label: "High", count: 521, percentage: 5.21 }] as TargetDistributionItem[],
  featureImportance: [{ feature: "BNPL Debt-to-Income Ratio", importance: 44.5 }, { feature: "Late Payment History", importance: 19.9 }, { feature: "Employment — Unemployed", importance: 7.7 }, { feature: "Active BNPL Loans", importance: 4.3 }, { feature: "Employment — Student", importance: 3.2 }, { feature: "Employment — Employed", importance: 3.2 }, { feature: "Total BNPL Debt", importance: 2.9 }] as FeatureImportanceItem[],
  modelResults: [{ model: "Logistic Regression", accuracy: 93.4, macroF1: .847, highRecall: 94.2, mediumF1: .647 }, { model: "Random Forest", accuracy: 95.7, macroF1: .868, highRecall: 90.4, mediumF1: .726 }, { model: "XGBoost", accuracy: 96.5, macroF1: .876, highRecall: 91.3, mediumF1: .739 }] as ModelResult[],
  confusionMatrix: { labels: ["Low", "Medium", "High"], values: [[1735, 25, 0], [26, 99, 11], [1, 8, 95]] } as ConfusionMatrixData,
  headlineMetrics: [["96.5%", "TEST ACCURACY"], ["0.876", "MACRO F1"], ["0.991", "MACRO ROC-AUC"]] as const,
  stack: ["Python", "Pandas", "scikit-learn", "XGBoost", "Joblib", "Streamlit"],
  artifacts: ["xgboost_bnpl_risk_model.joblib", "imputation_values.joblib", "src/predict.py", "Streamlit Demo"],
  limitations: ["Move imputation fully inside the training pipeline to eliminate pre-split preprocessing leakage.", "Use stratified cross-validation for model selection and preserve the test set for one final evaluation.", "Evaluate probability calibration before treating class probabilities as real-world risk probabilities.", "Validate against real temporal BNPL repayment data before any production use."],
} as const
