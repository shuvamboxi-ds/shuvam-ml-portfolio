import { ArrowRight, ExternalLink, Play } from "lucide-react"
import { evEfficiencyProject, liveModelIsAvailable } from "./project-data"

const metadata = ["2012–2026 DATA", "1,197 VEHICLES", "LINEAR REGRESSION", "SCIKIT-LEARN", "GRADIO"]

export function ProjectHero() {
  return (
    <section className="ev-hero" aria-labelledby="ev-project-title">
      <div className="ev-shell ev-hero__grid">
        <div className="ev-hero__copy">
          <p className="ev-kicker">MACHINE LEARNING / REGRESSION</p>
          <h1 id="ev-project-title">EV Energy Efficiency</h1>
          <p className="ev-hero__lede">
            Predicting how efficiently battery-electric vehicles use energy from vehicle specifications using an interpretable Multiple Linear Regression pipeline.
          </p>
          <div className="ev-hero__actions">
            {liveModelIsAvailable ? (
              <a className="ev-button ev-button--primary" href={evEfficiencyProject.liveModelUrl}>
                TRY LIVE MODEL <ArrowRight aria-hidden="true" size={16} />
              </a>
            ) : (
              <span className="ev-button ev-button--disabled" aria-disabled="true" title="Live model coming soon">
                <Play aria-hidden="true" size={15} /> TRY LIVE MODEL <span>COMING SOON</span>
              </span>
            )}
            <a className="ev-button ev-button--secondary" href={evEfficiencyProject.githubUrl} target="_blank" rel="noopener noreferrer">
              VIEW SOURCE <ExternalLink aria-hidden="true" size={15} />
            </a>
          </div>
          <ul className="ev-hero__metadata" aria-label="Project metadata">
            {metadata.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="ev-model-artifact" aria-label="Multiple linear regression prediction flow">
          <div className="ev-model-artifact__topline"><span>INFERENCE PIPELINE</span><span>V1.0</span></div>
          <div className="ev-artifact-stage ev-artifact-stage--inputs">
            <p>INPUT</p>
            <div className="ev-input-list">
              <span>Model Year <b>2024</b></span><span>Manufacturer <b>Lucid</b></span><span>Vehicle Class <b>Mid-size</b></span><span>Motor Power <b>430 kW</b></span><span>Recharge Time <b>12.0 h</b></span>
            </div>
          </div>
          <div className="ev-artifact-connector"><i /><span>FEATURES</span><i /></div>
          <div className="ev-artifact-stage ev-artifact-stage--model">
            <p>MODEL</p><strong>Multiple Linear Regression</strong><small>saved pipeline · sklearn</small>
          </div>
          <div className="ev-artifact-connector"><i /><span>INFERENCE</span><i /></div>
          <div className="ev-artifact-stage ev-artifact-stage--prediction">
            <p>PREDICTION</p><strong>5.99 <em>km/kWh</em></strong><small>estimated energy efficiency</small>
          </div>
        </div>
      </div>
    </section>
  )
}
