import type React from "react"
import "./gradient-bars-background.css"

interface GradientBarsProps {
  numBars?: number
  gradientFrom?: string
  gradientTo?: string
  animationDuration?: number
  className?: string
}

interface BarStyle extends React.CSSProperties {
  "--initial-scale": number
}

function calculateHeight(index: number, total: number) {
  const position = index / Math.max(total - 1, 1)
  const distanceFromCenter = Math.abs(position - 0.5)
  const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2)

  return 30 + 70 * heightPercentage
}

export function GradientBars({
  numBars = 15,
  gradientFrom = "var(--accent)",
  gradientTo = "transparent",
  animationDuration = 2,
  className = "",
}: GradientBarsProps) {
  return (
    <div className={`gradient-bars ${className}`.trim()} aria-hidden="true">
      <div className="gradient-bars__track">
        {Array.from({ length: numBars }).map((_, index) => {
          const scale = calculateHeight(index, numBars) / 100

          return (
            <div
              key={index}
              className="gradient-bars__bar"
              style={{
                background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
                transform: `scaleY(${scale})`,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${index * 0.1}s`,
                "--initial-scale": scale,
              } as BarStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

interface ComponentProps extends GradientBarsProps {
  backgroundColor?: string
  children?: React.ReactNode
}

export default function Component({ backgroundColor = "var(--background)", children, ...props }: ComponentProps) {
  return (
    <section className="gradient-bars-component" style={{ backgroundColor }}>
      <GradientBars {...props} />
      {children && <div className="gradient-bars-component__content">{children}</div>}
    </section>
  )
}
