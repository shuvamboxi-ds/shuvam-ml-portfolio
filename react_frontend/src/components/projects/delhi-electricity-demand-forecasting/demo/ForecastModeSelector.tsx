import type { ForecastMode } from "../../../../types/delhi-electricity-demand-demo"

type Props = { mode: ForecastMode; onChange: (mode: ForecastMode) => void }
export function ForecastModeSelector({ mode, onChange }: Props) { return <div className="forecast-modes" role="tablist" aria-label="Forecast mode"><button type="button" className={mode === "live" ? "is-active" : ""} onClick={() => onChange("live")} role="tab" aria-selected={mode === "live"}>LIVE FORECAST</button><button type="button" className={mode === "historical" ? "is-active" : ""} onClick={() => onChange("historical")} role="tab" aria-selected={mode === "historical"}>HISTORICAL DEMO</button></div> }
