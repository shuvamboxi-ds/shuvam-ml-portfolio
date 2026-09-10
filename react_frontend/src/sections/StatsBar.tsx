import { StatCard } from "../components/ui/stat-card"
import "./stats-bar.css"

const stats = [
  { value: 10, title: "Project Repositories", description: "Public Data Science, ML, AI and product-focused repositories." },
  { value: 7, title: "Selected Projects", description: "The core projects presented and explored on this project lab." },
  { value: 6, title: "ML / AI Domains", description: "Regression, classification, time series, recommendation, NLP and computer vision." },
  { value: 38, title: "Svara Automated Tests", description: "24 Python tests + 14 Rust tests in the current Svara implementation.", className: "stat-card--amber" },
]

export function StatsBar() {
  return (
    <section className="stats-bar" id="stats" aria-labelledby="stats-heading">
      <div className="stats-bar__inner">
        <header className="stats-bar__header">
          <h2 id="stats-heading">Built Beyond the Notebook.</h2>
          <p>The work spans modelling, evaluation, inference, deployment and product-level implementation — not isolated experiments.</p>
        </header>

        <div className="stats-bar__grid">
          {stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
        </div>
      </div>
    </section>
  )
}
