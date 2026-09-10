import * as React from "react"
import "./page-loader.css"

interface LoaderProps {
  size?: number
  text?: string
}

export const PageLoader: React.FC<LoaderProps> = ({
  size = 180,
  text = "Loading Projects",
}) => {
  const letters = text.split("")

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label={text}>
      <div className="page-loader-inner" style={{ width: size, height: size }}>
        {letters.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="page-loader-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-hidden="true"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}

        <div className="page-loader-circle" />
      </div>
    </div>
  )
}
