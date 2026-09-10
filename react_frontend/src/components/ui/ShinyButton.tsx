import type { ReactNode } from "react"
import "./shiny-button.css"

interface ShinyButtonProps {
  children: ReactNode
  href: string
  className?: string
}

export function ShinyButton({ children, href, className = "" }: ShinyButtonProps) {
  return (
    <a href={href} className={`shiny-cta ${className}`.trim()}>
      <span>{children}</span>
    </a>
  )
}
