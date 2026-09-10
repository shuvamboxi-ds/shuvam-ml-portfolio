export type ForecastMode = "live" | "historical"
export type DataFeedStatus = "connected" | "historical-only" | "stale" | "unavailable"
export type ForecastStatus = "idle" | "loading" | "success" | "error"

export interface ForecastFeatures { hour: number; day_of_week: number; month: number; is_weekend: number; lag_1: number; lag_24: number; lag_168: number; rolling_mean_24: number }
export interface ForecastPrediction { prediction_mw: number; forecast_timestamp: string }
export interface HistoricalForecastResult extends ForecastPrediction { actual_mw: number; absolute_error_mw: number; percentage_error: number; features: ForecastFeatures }
export interface HistoricalTimestampOption { timestamp: string; label: string }
export interface ForecastApiError { code: string; message: string }
export interface ForecastStatusResponse { model: string; live_data: boolean; data_feed: DataFeedStatus }
