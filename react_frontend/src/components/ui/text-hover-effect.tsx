import { motion, useReducedMotion } from "framer-motion"
import { useRef, useState } from "react"
import "./text-hover-effect.css"

interface TextHoverEffectProps {
  text: string
}

export function TextHoverEffect({ text }: TextHoverEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pointer, setPointer] = useState({ x: 600, y: 120 })
  const prefersReducedMotion = useReducedMotion()

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return

    setPointer({
      x: ((event.clientX - bounds.left) / bounds.width) * 1200,
      y: ((event.clientY - bounds.top) / bounds.height) * 240,
    })
  }

  return (
    <div ref={containerRef} className="text-hover-effect" onPointerMove={handlePointerMove}>
      <span className="sr-only">Shuvam Boxi</span>
      <svg viewBox="0 0 1200 240" role="img" aria-label="Shuvam Boxi" aria-hidden="true">
        <defs>
          <linearGradient id="footer-text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5F3F4" />
            <stop offset="25%" stopColor="#E5383B" />
            <stop offset="50%" stopColor="#D00000" />
            <stop offset="75%" stopColor="#660708" />
            <stop offset="100%" stopColor="#FCA311" />
          </linearGradient>
          <mask id="footer-hover-mask">
            <rect width="1200" height="240" fill="black" />
            <motion.circle
              cx={pointer.x}
              cy={pointer.y}
              r="180"
              fill="white"
              animate={prefersReducedMotion ? undefined : { cx: pointer.x, cy: pointer.y }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
          </mask>
        </defs>

        <motion.text
          x="600"
          y="164"
          textAnchor="middle"
          className="text-hover-effect__outline"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -96] }}
          transition={{ duration: 9, ease: "linear", repeat: Infinity }}
        >
          {text}
        </motion.text>
        <text x="600" y="164" textAnchor="middle" className="text-hover-effect__base">{text}</text>
        <motion.text
          x="600"
          y="164"
          textAnchor="middle"
          className="text-hover-effect__reveal"
          mask="url(#footer-hover-mask)"
          animate={prefersReducedMotion ? undefined : { strokeDashoffset: [0, -72] }}
          transition={{ duration: 7, ease: "linear", repeat: Infinity }}
        >
          {text}
        </motion.text>
      </svg>
    </div>
  )
}
