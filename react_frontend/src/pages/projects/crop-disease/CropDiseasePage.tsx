import { Header } from "../../../sections/Header"
import { ProjectHero } from "../../../components/projects/crop-disease/ProjectHero"
import { ProblemSystemSection } from "../../../components/projects/crop-disease/ProblemSystemSection"
import { ModelEvolutionSection } from "../../../components/projects/crop-disease/ModelEvolutionSection"
import { PerformanceEngineeringSection } from "../../../components/projects/crop-disease/PerformanceEngineeringSection"
import { ExplainabilityLimitationsSection } from "../../../components/projects/crop-disease/ExplainabilityLimitationsSection"
import { ProjectClosing } from "../../../components/projects/crop-disease/ProjectClosing"
import "./crop-disease.css"
export function CropDiseasePage() { return <main className="crop-case-study"><Header /><article><ProjectHero /><ProblemSystemSection /><ModelEvolutionSection /><PerformanceEngineeringSection /><ExplainabilityLimitationsSection /><ProjectClosing /></article></main> }
