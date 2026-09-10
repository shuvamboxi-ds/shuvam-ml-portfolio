import { SpatialProjectShowcase } from "../components/ui/spatial-project-showcase"
import { GradientBars } from "../components/ui/gradient-bars-background"
import "../components/ui/spatial-project-showcase.css"
import "./projects-showcase.css"

export function ProjectsShowcase() {
  return (
    <section className="projects-showcase" id="projects" aria-labelledby="projects-heading">
      <div className="projects-showcase__inner">
        <header className="projects-showcase__header">
          <GradientBars
            numBars={15}
            gradientFrom="var(--accent)"
            gradientTo="rgba(102, 7, 8, 0)"
            animationDuration={2.8}
          />
          <div className="projects-showcase__header-content">
            <p>02 / SELECTED PROJECTS</p>
            <h2 id="projects-heading">Explore the Work.</h2>
            <p>Seven end-to-end Data Science and AI projects — select a project to inspect the problem, stack, status and live experience.</p>
          </div>
        </header>

        <SpatialProjectShowcase />
      </div>
    </section>
  )
}
