import { ArrowRight } from "lucide-react"
import { RainbowBordersButton } from "./rainbow-borders-button"

export function EnterpriseReadyLandingPageHeroWithDualCtas() {
  return (
    <div className="hero-content__inner">
      <p className="hero-eyebrow">PROJECT LAB / DATA SCIENCE / ML SYSTEMS</p>

      <h1 className="hero-heading">
        Machine Learning Projects <span>Built to Be Used.</span>
      </h1>

      <p className="hero-subheading">
        A collection of end-to-end Data Science, Machine Learning, Deep Learning and AI projects — from raw data and experimentation to APIs, containers and deployed demos.
      </p>

      <p className="hero-supporting-copy">
        Explore the problem, model decisions, evaluation results and live inference experience behind each project.
      </p>

      <div className="hero-cta-group">
        <RainbowBordersButton asChild className="hero-primary-cta">
          <a href="#projects">
            Explore Projects <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </a>
        </RainbowBordersButton>

        <RainbowBordersButton asChild variant="outline" className="hero-secondary-cta">
          <a href="https://shuvamboxi.in">View Main Portfolio</a>
        </RainbowBordersButton>
      </div>
    </div>
  )
}
