import type { ButtonProps } from "./button"
import { Button } from "./button"
import "./rainbow-borders-button.css"

export function RainbowBordersButton({ className = "", ...props }: ButtonProps) {
  return <Button className={`rainbow-border ${className}`.trim()} {...props} />
}
