import type { DataFeedStatus } from "../../../../types/delhi-electricity-demand-demo"

type Props = { feedStatus: DataFeedStatus }

export function ForecastHeader({ feedStatus }: Props) {
  const feedLabel = feedStatus === "historical-only" ? "HISTORICAL ONLY" : feedStatus === "connected" ? "LIVE" : feedStatus === "stale" ? "STALE" : "UNAVAILABLE"
  return <header className="forecast-header"><div><a className="forecast-breadcrumb" href="/projects/delhi-electricity-demand-forecasting">PROJECTS / DELHI DEMAND</a><h1>Forecast Delhi's<br />Next Hour</h1><p>Explore how historical electricity demand is transformed into a one-hour-ahead machine-learning forecast.</p></div><div className="forecast-header__meta"><div><span>MODEL</span><strong>HistGradientBoosting</strong></div><div><span>HORIZON</span><strong>1 HOUR</strong></div><div><span>FEATURES</span><strong>8</strong></div><div><span>MODEL STATUS</span><strong className={feedStatus === "unavailable" ? "is-warning" : ""}>{feedStatus === "unavailable" ? "UNAVAILABLE" : "READY"}</strong></div><div><span>DATA FEED</span><strong className={feedStatus === "stale" || feedStatus === "unavailable" ? "is-warning" : ""}>{feedLabel}</strong></div></div></header>
}
