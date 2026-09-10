import { Header } from "../../../sections/Header"
import { DataInsightsSection } from "../../../components/projects/ev-efficiency/DataInsightsSection"
import { InterpretationSection } from "../../../components/projects/ev-efficiency/InterpretationSection"
import { ModelStrategySection } from "../../../components/projects/ev-efficiency/ModelStrategySection"
import { PerformanceSection } from "../../../components/projects/ev-efficiency/PerformanceSection"
import { ProblemDataSection } from "../../../components/projects/ev-efficiency/ProblemDataSection"
import { ProjectClosing } from "../../../components/projects/ev-efficiency/ProjectClosing"
import { ProjectHero } from "../../../components/projects/ev-efficiency/ProjectHero"
import "./ev-efficiency.css"

export function EVEfficiencyPage() {
  return (
    <main className="ev-case-study">
      <Header />
      <article id="main-content">
        <ProjectHero />
        <ProblemDataSection />
        <DataInsightsSection />
        <ModelStrategySection />
        <PerformanceSection />
        <InterpretationSection />
        <ProjectClosing />
      </article>
    </main>
  )
}
