import { Header } from "../../../sections/Header"
import { ProjectHero } from "../../../components/projects/bnpl-risk/ProjectHero"
import { ProblemDataSection } from "../../../components/projects/bnpl-risk/ProblemDataSection"
import { FeatureEngineeringSection } from "../../../components/projects/bnpl-risk/FeatureEngineeringSection"
import { ModelArenaSection } from "../../../components/projects/bnpl-risk/ModelArenaSection"
import { ErrorAnalysisSection } from "../../../components/projects/bnpl-risk/ErrorAnalysisSection"
import { InterpretationClosingSection } from "../../../components/projects/bnpl-risk/InterpretationClosingSection"
import "./bnpl-risk.css"

export function BNPLRiskPage() { return <main className="bnpl-case-study"><Header /><article><ProjectHero /><ProblemDataSection /><FeatureEngineeringSection /><ModelArenaSection /><ErrorAnalysisSection /><InterpretationClosingSection /></article></main> }
