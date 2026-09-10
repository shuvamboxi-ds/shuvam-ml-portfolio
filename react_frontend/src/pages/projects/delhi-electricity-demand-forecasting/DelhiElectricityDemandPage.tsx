import { Header } from "../../../sections/Header"
import { ProjectHero } from "../../../components/projects/delhi-electricity-demand-forecasting/ProjectHero"
import { ProblemDataSection } from "../../../components/projects/delhi-electricity-demand-forecasting/ProblemDataSection"
import { FeatureEngineeringSection } from "../../../components/projects/delhi-electricity-demand-forecasting/FeatureEngineeringSection"
import { ValidationModelSection } from "../../../components/projects/delhi-electricity-demand-forecasting/ValidationModelSection"
import { ResultsInterpretationSection } from "../../../components/projects/delhi-electricity-demand-forecasting/ResultsInterpretationSection"
import { EngineeringLimitationsSection } from "../../../components/projects/delhi-electricity-demand-forecasting/EngineeringLimitationsSection"
import "./delhi-electricity-demand.css"

export function DelhiElectricityDemandPage() {
  return <main className="delhi-case-study"><Header /><article><ProjectHero /><ProblemDataSection /><FeatureEngineeringSection /><ValidationModelSection /><ResultsInterpretationSection /><EngineeringLimitationsSection /></article></main>
}
