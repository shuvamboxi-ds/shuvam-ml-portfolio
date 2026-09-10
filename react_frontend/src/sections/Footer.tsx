import { TextHoverEffect } from "../components/ui/text-hover-effect"
import "./footer.css"

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer__inner">
        <nav className="site-footer__links" aria-label="Footer links">
          <a className="site-footer__shiny-link" href="https://shuvamboxi.in"><span>Main Portfolio ↗</span></a>
          <a className="site-footer__shiny-link" href="https://github.com/shuvamboxi-ds" target="_blank" rel="noopener noreferrer"><span>GitHub ↗</span></a>
          <a className="site-footer__shiny-link" href="https://www.linkedin.com/in/shuvam-boxi/" target="_blank" rel="noopener noreferrer"><span>LinkedIn ↗</span></a>
          <a className="site-footer__shiny-link" href="mailto:shuvam@shuvamboxi.in"><span>Email Me ↗</span></a>
        </nav>

        <TextHoverEffect text="SHUVAM BOXI" />

        <p className="site-footer__domain">projects.shuvamboxi.in</p>
      </div>
    </footer>
  )
}
