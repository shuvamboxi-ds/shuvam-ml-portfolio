export type EmploymentStatus = "Employed" | "Freelancer" | "Student" | "Unemployed"
export type ShoppingCategory = "Fashion" | "Electronics" | "Home/Furniture" | "Travel" | "Groceries/Essentials"
export type RiskClass = "Low" | "Medium" | "High"
export interface BNPLCustomerInput { age: number; employment_status: EmploymentStatus; annual_income: number; credit_score: number; total_bnpl_debt: number; active_bnpl_loans: number; late_payment_history: boolean; shopping_category: ShoppingCategory; average_transaction_value: number }
export interface BNPLPredictionResponse { predicted_risk: RiskClass; probabilities: { low: number; medium: number; high: number }; debt_to_income_ratio: number }
export type InferenceStatus = "idle" | "loading" | "success" | "error"
