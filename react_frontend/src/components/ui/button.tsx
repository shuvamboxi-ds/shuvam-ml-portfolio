import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5383B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B090A] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#D00000] text-[#F5F3F4] hover:bg-[#E5383B]",
        outline: "border border-[rgba(245,243,244,0.16)] bg-transparent text-[#F5F3F4] hover:bg-[#1E2225]",
      },
      size: {
        default: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)

Button.displayName = "Button"

export { Button }
