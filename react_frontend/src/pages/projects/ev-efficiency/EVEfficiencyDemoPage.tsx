import { DemoDisclaimer } from "../../../components/projects/ev-efficiency/demo/DemoDisclaimer"
import { DemoHeader } from "../../../components/projects/ev-efficiency/demo/DemoHeader"
import { InferenceWorkspace } from "../../../components/projects/ev-efficiency/demo/InferenceWorkspace"
import { ModelContextStrip } from "../../../components/projects/ev-efficiency/demo/ModelContextStrip"
import "./ev-efficiency-demo.css"

export function EVEfficiencyDemoPage() { return <main className="ev-demo"><DemoHeader /><article className="demo-shell"><section className="demo-intro"><span>LIVE INFERENCE</span><h1>Predict EV energy efficiency.</h1><p>Enter basic EV specifications and run them through the trained Multiple Linear Regression pipeline.</p><div className="demo-meta"><span>SCIKIT-LEARN</span><span>MULTIPLE LINEAR REGRESSION</span><span>R² 0.795</span></div></section><InferenceWorkspace /><ModelContextStrip /><DemoDisclaimer /></article></main> }
