import "./hero.css"
import { EnterpriseReadyLandingPageHeroWithDualCtas } from "../components/ui/hero-section-enterprise-ready-landing-page-hero-with-dual-ctas"

export function Hero() {
  return (
    <section className="hero-section" role="region" aria-label="Projects Hero Section">
      <div className="hero-radial-layer" />
      <div className="hero-grid-background" />

      <div className="hero-content">
        <EnterpriseReadyLandingPageHeroWithDualCtas />
      </div>
    </section>
  )
}
