import type {
    BNPLCustomerInput,
    BNPLPredictionResponse,
    RiskClass,
  } from "../../types/bnpl-risk-demo"
  
  const risks = ["Low", "Medium", "High"] as RiskClass[]
  
  export async function predictBNPLRisk(
    customer: BNPLCustomerInput,
  ): Promise<BNPLPredictionResponse> {
    const endpoint = import.meta.env.VITE_BNPL_API_URL
  
    if (!endpoint) {
      throw new Error("MODEL_SERVICE_UNAVAILABLE")
    }
  
    const requestBody = {
      age: customer.age,
      employment_status: customer.employment_status,
      income_usd: customer.annual_income,
      credit_score: customer.credit_score,
      total_bnpl_active_loans: customer.active_bnpl_loans,
      total_bnpl_debt_usd: customer.total_bnpl_debt,
      late_payment_history: customer.late_payment_history ? "Yes" : "No",
      shopping_category_most_frequent: customer.shopping_category,
      average_transaction_value_usd: customer.average_transaction_value,
    }
  
    const response = await fetch(
      `${endpoint.replace(/\/$/, "")}/predict`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      },
    )
  
    if (!response.ok) {
      throw new Error("MODEL_INFERENCE_FAILED")
    }
  
    const payload =
      (await response.json()) as Partial<BNPLPredictionResponse>
  
    if (
      !risks.includes(payload.predicted_risk as RiskClass) ||
      !payload.probabilities ||
      typeof payload.debt_to_income_ratio !== "number"
    ) {
      throw new Error("MODEL_INFERENCE_FAILED")
    }
  
    return payload as BNPLPredictionResponse
  }