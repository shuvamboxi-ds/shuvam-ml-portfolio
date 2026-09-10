import * as React from "react"
import { cn } from "../../lib/utils"
import "./glass-effect.css"

export interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}

const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
  ({ className, width, height, style, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("liquid-glass", className)}
      style={{ ...style, ...(width ? { width } : {}), ...(height ? { height } : {}) }}
      {...props}
    />
  ),
)

Glass.displayName = "Glass"

export { Glass }
