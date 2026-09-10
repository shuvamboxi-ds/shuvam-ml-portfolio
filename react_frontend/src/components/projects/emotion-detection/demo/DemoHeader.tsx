import { ArrowLeft, ExternalLink } from "lucide-react"
import { emotionDemoConfig } from "../../../../data/emotion-detection/demo-config"

export function DemoHeader() { return <header className="emotion-demo-header"><a href={emotionDemoConfig.caseStudyUrl} className="emotion-demo-back"><ArrowLeft size={15} /> BACK TO CASE STUDY</a><div className="emotion-demo-heading"><p>LIVE MODEL / NLP</p><h1>What emotion<br />does this text carry?</h1><span>Run text through my fine-tuned DistilBERT emotion classifier.</span></div><div className="emotion-demo-meta"><span>DISTILBERT</span><span>6 CLASSES</span><span>MAX 64 TOKENS</span><a href={emotionDemoConfig.sourceUrl} target="_blank" rel="noopener noreferrer">VIEW SOURCE <ExternalLink size={13} /></a></div></header> }
