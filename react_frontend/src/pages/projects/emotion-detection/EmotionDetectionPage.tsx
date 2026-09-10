import { Header } from "../../../sections/Header"
import { ProjectHero } from "../../../components/projects/emotion-detection/ProjectHero"
import { ProblemDataSection } from "../../../components/projects/emotion-detection/ProblemDataSection"
import { ExperimentDesignSection } from "../../../components/projects/emotion-detection/ExperimentDesignSection"
import { TrainingEvaluationSection } from "../../../components/projects/emotion-detection/TrainingEvaluationSection"
import { FailureAnalysisSection } from "../../../components/projects/emotion-detection/FailureAnalysisSection"
import { ConclusionSection } from "../../../components/projects/emotion-detection/ConclusionSection"
import "./emotion-detection.css"

export function EmotionDetectionPage() { return <main className="emotion-case-study"><Header /><article><ProjectHero /><ProblemDataSection /><ExperimentDesignSection /><TrainingEvaluationSection /><FailureAnalysisSection /><ConclusionSection /></article></main> }
