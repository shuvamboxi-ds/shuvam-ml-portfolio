import * as React from "react"
import { motion, useInView, useReducedMotion, useSpring, useTransform } from "framer-motion"
import { cn } from "../../lib/utils"
import "./stat-card.css"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  suffix?: string
  title: string
  description: string
}

export function StatCard({ value, suffix = "", title, description, className, ...props }: StatCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.55 })
  const prefersReducedMotion = useReducedMotion()
  const motionValue = useSpring(0, { damping: 100, stiffness: 100 })
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest))

  React.useEffect(() => {
    if (!isInView) return

    if (prefersReducedMotion) {
      motionValue.jump(value)
      return
    }

    motionValue.set(value)
  }, [isInView, motionValue, prefersReducedMotion, value])

  return (
    <div
      ref={cardRef}
      className={cn("stat-card", className)}
      aria-label={`${title}: ${value}${suffix}`}
      {...props}
    >
      <motion.div
        className="stat-card__motion"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="stat-card__value"><motion.span>{roundedValue}</motion.span>{suffix}</p>
        <h3>{title}</h3>
        <p className="stat-card__description">{description}</p>
      </motion.div>
    </div>
  )
}
