import type { ChangeEvent } from "react"
import { manufacturerOptions, vehicleClassOptions } from "../../../../data/ev-efficiency/model-options"
import type { EVEfficiencyPredictionInput } from "../../../../types/ev-efficiency"

type Props = { input: EVEfficiencyPredictionInput; onChange: (input: EVEfficiencyPredictionInput) => void; onSubmit: () => void; loading: boolean; fieldError?: string }

export function VehicleInputForm({ input, onChange, onSubmit, loading, fieldError }: Props) {
  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    onChange({ ...input, [name]: name === "make" || name === "vehicle_class" ? value : Number(value) })
  }
  const rangeWarnings = [
    input.model_year < 2012 || input.model_year > 2026 ? "MODEL YEAR" : "",
    input.motor_kw < 35 || input.motor_kw > 930 ? "MOTOR POWER" : "",
    input.recharge_time < 3 || input.recharge_time > 18.6 ? "RECHARGE TIME" : "",
  ].filter(Boolean)
  return <form className="demo-form" onSubmit={(event) => { event.preventDefault(); onSubmit() }}>
    <div className="demo-panel-heading"><span>01 / VEHICLE SPECIFICATION</span><span>INPUT</span></div>
    <div className="demo-fields">
      <label className="demo-field"><span>MODEL YEAR</span><input name="model_year" type="number" min="1900" max="2100" value={input.model_year} onChange={update} /><small>TRAINING RANGE / 2012–2026</small></label>
      <label className="demo-field"><span>MANUFACTURER</span><select name="make" value={input.make} onChange={update}>{manufacturerOptions.map((option) => <option key={option}>{option}</option>)}</select><small>CONTROLLED CATEGORY</small></label>
      <label className="demo-field"><span>VEHICLE CLASS</span><select name="vehicle_class" value={input.vehicle_class} onChange={update}>{vehicleClassOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select><small>CONTROLLED CATEGORY</small></label>
      <label className="demo-field"><span>MOTOR POWER <em>kW</em></span><input name="motor_kw" type="number" min="0" step="1" value={input.motor_kw} onChange={update} /><small>TRAINING RANGE / 35–930 kW</small></label>
      <label className="demo-field"><span>RECHARGE TIME <em>hours</em></span><input name="recharge_time" type="number" min="0" step="0.1" value={input.recharge_time} onChange={update} /><small>TRAINING RANGE / 3.0–18.6 h</small></label>
    </div>
    {rangeWarnings.length > 0 && <div className="demo-range-warning"><strong>OUTSIDE OBSERVED TRAINING RANGE</strong><p>{rangeWarnings.join(", ")} falls outside the range observed during model training. The model can still produce a prediction, but extrapolated results may be less reliable.</p></div>}
    {fieldError && <p className="demo-inline-error">{fieldError}</p>}
    <button className="demo-run" type="submit" disabled={loading}>{loading ? "RUNNING MODEL..." : "RUN PREDICTION →"}</button>
  </form>
}
