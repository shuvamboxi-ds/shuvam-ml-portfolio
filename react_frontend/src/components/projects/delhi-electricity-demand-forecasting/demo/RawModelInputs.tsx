import { useState } from "react"
import { FORECAST_FEATURE_ORDER } from "../../../../data/delhi-electricity-demand-forecasting/demo-config"
import type { ForecastFeatures } from "../../../../types/delhi-electricity-demand-demo"

type Props = { features: ForecastFeatures | null }
export function RawModelInputs({ features }: Props) { const [open, setOpen] = useState(false); return <div className="raw-inputs"><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><span>VIEW RAW MODEL INPUTS</span><span>{open ? "−" : "+"}</span></button>{open && <div className="raw-inputs__grid">{FORECAST_FEATURE_ORDER.map((feature) => <div key={feature}><span>{feature}</span><strong>{features ? features[feature].toFixed(2) : "—"}</strong></div>)}</div>}</div> }
