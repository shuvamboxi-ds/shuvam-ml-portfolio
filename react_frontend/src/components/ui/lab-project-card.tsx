import { motion } from "framer-motion"
import { Badge } from "./badge"
import { Button } from "./button"
import { Card } from "./card"

interface LabProjectCardProps {
  title: string
  category: string
  status: "RESEARCHING" | "CONCEPT" | "REFINING"
  description: string
  stack: string[]
  glowText: string
  statusTone: "scarlet" | "amber" | "bright"
  index: number
}

export function LabProjectCard({ title, category, status, description, stack, glowText, statusTone, index }: LabProjectCardProps) {
  return (
    <motion.div
      className="lab-project-card__motion"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card className="lab-project-card">
        <div className="lab-project-card__meta">
          <p className={`lab-project-card__status lab-project-card__status--${statusTone}`}><span aria-hidden="true" />{status}</p>
          <p>{category}</p>
        </div>

        <h3>{title}</h3>
        <p className="lab-project-card__description">{description}</p>

        <div className="lab-project-card__tags" aria-label="Technology stack">
          {stack.map((technology) => <Badge key={technology}>{technology}</Badge>)}
        </div>

        <div className="lab-project-card__actions">
          <Button className="lab-project-card__notes" disabled>View Notes</Button>
          <Button variant="outline" className="lab-project-card__github" disabled>GitHub ↗</Button>
        </div>
      </Card>

      <div className="lab-project-card__glow" aria-hidden="true" />
      <p className="lab-project-card__glow-text"><span aria-hidden="true" />{glowText}</p>
    </motion.div>
  )
}
