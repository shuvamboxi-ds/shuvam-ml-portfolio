import { LabProjectCard } from "../components/ui/lab-project-card"
import "../components/ui/lab-project-card.css"
import "./lab-section.css"

const projects = [
  {
    title: "Railway Equipment Failure Early Warning", category: "PREDICTIVE MAINTENANCE / AUTOML", status: "RESEARCHING" as const,
    description: "An early-warning system for railway equipment failure using MetroPT-3 sensor data, abnormal-behaviour detection and predictive maintenance modelling.",
    stack: ["Polars", "AutoML", "Anomaly Detection", "Time Series", "Python"], glowText: "Exploring failure signals before breakdown", statusTone: "scarlet" as const,
  },
  {
    title: "On-device Vision Assistant", category: "MULTIMODAL / LOCAL AI", status: "CONCEPT" as const,
    description: "A local macOS assistant designed around wake/sleep commands, screen understanding, contextual suggestions and an always-available desktop companion interface.",
    stack: ["Vision Models", "Local AI", "macOS", "Speech", "React / Tauri"], glowText: "Exploring local multimodal interaction", statusTone: "amber" as const,
  },
  {
    title: "Spotify Personal Music Recommender", category: "RECOMMENDATION SYSTEM", status: "REFINING" as const,
    description: "A recommendation system built from personal Spotify listening history, focused on behaviour patterns, repeat listening, familiarity and discovery.",
    stack: ["Python", "Recommendation Systems", "Similarity", "Feature Engineering", "Ranking"], glowText: "Refining recommendation quality and presentation", statusTone: "bright" as const,
  },
]

export function LabSection() {
  return (
    <section className="lab-section" id="lab" aria-labelledby="lab-heading">
      <div className="lab-section__inner">
        <header className="lab-section__header">
          <p>04 / LAB / WIP</p>
          <h2 id="lab-heading">What I&apos;m Building Next.</h2>
          <p>Experiments, prototypes and unfinished systems that are still being tested, refined or intentionally kept in the lab.</p>
        </header>

        <div className="lab-section__grid">
          {projects.map((project, index) => <LabProjectCard key={project.title} {...project} index={index} />)}
        </div>
      </div>
    </section>
  )
}
