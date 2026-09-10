import * as React from "react"
import { cn } from "../../lib/utils"

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>

function Badge({ className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center", className)} {...props} />
}

export { Badge }
