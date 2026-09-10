import { ExternalLink } from "lucide-react"
import { evEfficiencyProject } from "../project-data"

export function DemoDisclaimer() { return <footer className="demo-footer"><div className="demo-disclaimer"><span>PORTFOLIO MODEL</span><p>This estimator was built as a machine-learning case study and is not an automotive engineering certification or consumer purchasing tool.</p></div><div className="demo-actions"><a href="/projects/ev-efficiency">VIEW CASE STUDY →</a><a href={evEfficiencyProject.githubUrl} target="_blank" rel="noopener noreferrer">VIEW SOURCE <ExternalLink aria-hidden="true" size={14} /></a></div></footer> }
