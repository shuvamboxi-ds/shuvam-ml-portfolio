import { ShinyButton } from "../components/ui/ShinyButton"
import { Glass } from "../components/ui/glass-effect"
import "./header.css"

export function Header() {
  return (
    <header className="site-header">
      <Glass className="site-header-shell">
        <div className="site-header-grid">
          <div className="site-header-brand">
            SHUVAM/PROJECT
          </div>

          <div className="site-header-center">All Projects by Shuvam</div>

          <div className="site-header-action">
            <ShinyButton href="https://shuvamboxi.in">Main Portfolio ↗</ShinyButton>
          </div>
        </div>
      </Glass>
    </header>
  )
}
