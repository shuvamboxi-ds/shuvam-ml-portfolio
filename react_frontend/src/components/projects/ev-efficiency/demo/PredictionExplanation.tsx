import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function PredictionExplanation() {
  const [open, setOpen] = useState(false)
  return <div className={`demo-explanation ${open ? "is-open" : ""}`}><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><span>HOW WAS THIS ESTIMATED?</span><ChevronDown aria-hidden="true" size={16} /></button>{open && <div className="demo-explanation__body"><p>This prediction was produced by a preprocessing + Multiple Linear Regression pipeline using model year, manufacturer, vehicle class, motor power and recharge time.</p><p>Categorical values are transformed using one-hot encoding before regression.</p><a href="/projects/ev-efficiency">VIEW FULL METHODOLOGY →</a></div>}</div>
}
