import { ArrowLeft, ArrowRight, Check, ExternalLink, Play } from "lucide-react"
import { evEfficiencyProject, liveModelIsAvailable } from "./project-data"

const steps = ["DATA", "PREPROCESSING", "TRAINING", "VALIDATION", "SAVED PIPELINE", "TESTS", "LIVE INFERENCE"]

export function ProjectClosing() {
  return (
    <section className="ev-closing" aria-labelledby="ev-closing-heading">
      <div className="ev-shell">
        <div className="ev-closing__panel"><p className="ev-kicker">PROJECT STATUS</p><h2 id="ev-closing-heading">From notebook analysis to usable inference.</h2><div className="ev-delivery-chain">{steps.map((step, index) => <span key={step}>{step}{index < steps.length - 1 && <ArrowRight aria-hidden="true" size={13} />}</span>)}</div><div className="ev-closing__status">{["MODEL SAVED", "TESTS PASSING", "LIVE DEMO AVAILABLE"].map((status) => <span key={status}><Check aria-hidden="true" size={13} />{status}</span>)}</div><div className="ev-closing__actions">{liveModelIsAvailable ? <a className="ev-button ev-button--primary" href={evEfficiencyProject.liveModelUrl}>TRY LIVE MODEL <ArrowRight aria-hidden="true" size={16} /></a> : <span className="ev-button ev-button--disabled" aria-disabled="true"><Play aria-hidden="true" size={15} />TRY LIVE MODEL <span>COMING SOON</span></span>}<a className="ev-button ev-button--secondary" href={evEfficiencyProject.githubUrl} target="_blank" rel="noopener noreferrer">VIEW SOURCE <ExternalLink aria-hidden="true" size={15} /></a></div></div>
        <a className="ev-back-link" href="/"><ArrowLeft aria-hidden="true" size={15} /> ALL PROJECTS</a>
      </div>
    </section>
  )
}
