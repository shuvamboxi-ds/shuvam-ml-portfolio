import { useEffect, useState } from "react"
import { ForecastContext } from "../../../../components/projects/delhi-electricity-demand-forecasting/demo/ForecastContext"
import { ForecastConsole } from "../../../../components/projects/delhi-electricity-demand-forecasting/demo/ForecastConsole"
import { ForecastHeader } from "../../../../components/projects/delhi-electricity-demand-forecasting/demo/ForecastHeader"
import { ModelTrustPanel } from "../../../../components/projects/delhi-electricity-demand-forecasting/demo/ModelTrustPanel"
import { getForecastStatus, getHistoricalTimestamps } from "../../../../services/delhi-electricity-demand-forecasting/forecast-api"
import type { DataFeedStatus, HistoricalForecastResult, HistoricalTimestampOption } from "../../../../types/delhi-electricity-demand-demo"
import "./delhi-electricity-demand-demo.css"

export function DelhiElectricityDemandDemoPage() { const [feedStatus, setFeedStatus] = useState<DataFeedStatus>("unavailable"); const [timestamps, setTimestamps] = useState<HistoricalTimestampOption[]>([]); const [result, setResult] = useState<HistoricalForecastResult | null>(null); useEffect(() => { Promise.all([getForecastStatus(), getHistoricalTimestamps()]).then(([status, options]) => { setFeedStatus(status.data_feed); setTimestamps(options) }).catch(() => { setFeedStatus("unavailable") }) }, []); return <main className="delhi-demo"><ForecastHeader feedStatus={feedStatus} /><div className="delhi-demo-shell"><ForecastConsole timestamps={timestamps} feedStatus={feedStatus} onResult={setResult} /><ForecastContext features={result?.features ?? null} /><ModelTrustPanel /></div></main> }
