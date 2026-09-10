import { LoaderCircle } from "lucide-react"
import type { EVEfficiencyPredictionResponse, PredictionStatus } from "../../../../types/ev-efficiency"
import { PredictionExplanation } from "./PredictionExplanation"

type Props = { status: PredictionStatus; result: EVEfficiencyPredictionResponse | null; error: string | null }

export function PredictionResult({ status, result, error }: Props) {
  const interpretation = result && result.prediction >= 5.5 ? "HIGHER EFFICIENCY RANGE" : "MODERATE EFFICIENCY RANGE"
  return <section className="demo-output" aria-live="polite"><div className="demo-panel-heading"><span>02 / PREDICTION</span><span>{status === "success" ? "RESULT" : "OUTPUT"}</span></div>{status === "idle" && <div className="demo-empty"><span>WAITING FOR INPUT</span><p>Run the model to estimate energy efficiency.</p></div>}{status === "loading" && <div className="demo-empty demo-empty--loading"><LoaderCircle aria-hidden="true" size={20} /><span>RUNNING MODEL...</span></div>}{status === "error" && <div className="demo-empty demo-empty--error"><span>MODEL UNAVAILABLE</span><p>{error ?? "The inference service could not be reached."}</p><small>Try again shortly.</small></div>}{status === "success" && result && <div className="demo-success"><span className="demo-result-label">PREDICTED ENERGY EFFICIENCY</span><div className="demo-result-value">{result.prediction.toFixed(2)} <span>{result.unit}</span></div><div className="demo-interpretation"><span>PREDICTION INTERPRETATION</span><strong>{interpretation}</strong></div><div className="demo-model-metrics"><div><span>MODEL</span><strong>Multiple Linear Regression</strong></div><div><span>TEST MAE</span><strong>0.306 km/kWh</strong></div><div><span>TEST R²</span><strong>0.795</strong></div></div><PredictionExplanation /></div>}</section>
}
