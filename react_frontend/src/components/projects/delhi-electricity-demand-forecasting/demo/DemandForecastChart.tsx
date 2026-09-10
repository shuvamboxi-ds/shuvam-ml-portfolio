import type { HistoricalForecastResult } from "../../../../types/delhi-electricity-demand-demo"

type Props = { result: HistoricalForecastResult | null }
export function DemandForecastChart({ result }: Props) {
  if (!result) return <div className="demand-chart demand-chart--empty"><span>FORECAST CONTEXT</span><p>A historical context chart will appear after inference.</p></div>
  const values = [result.features.lag_168, result.features.lag_24, result.features.lag_1, result.prediction_mw, result.actual_mw]
  const points = values.map((value, index) => `${(index / 4) * 100},${92 - ((value - Math.min(...values)) / Math.max(1, Math.max(...values) - Math.min(...values))) * 76}`)
  return <div className="demand-chart"><div className="demand-chart__legend"><span><i className="legend-history" /> HISTORY</span><span><i className="legend-forecast" /> FORECAST</span><span><i className="legend-actual-point" /> ACTUAL</span></div><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Historical demand context with forecast and actual point"><path className="demand-grid" d="M0 18H100M0 42H100M0 66H100M0 90H100M25 0V100M50 0V100M75 0V100" /><polyline className="demand-line demand-line--history" points={points.slice(0, 3).join(" ")} /><polyline className="demand-line demand-line--forecast" points={points.slice(2).join(" ")} /><circle className="demand-point" cx="75" cy={points[3].split(",")[1]} r="2" /><circle className="demand-point demand-point--actual" cx="100" cy={points[4].split(",")[1]} r="2" /></svg><div className="demand-chart__axis"><span>{result.forecast_timestamp}</span><span>FORECAST → ACTUAL</span></div></div>
}
