import { motion, useReducedMotion } from "framer-motion"

const manufacturers = [{ name: "Lucid", value: 5.88 }, { name: "Tesla", value: 5.11 }, { name: "Rivian", value: 3.65 }, { name: "GMC", value: 2.61 }]
const scatterA = [[9, 15], [18, 27], [24, 23], [31, 40], [38, 47], [47, 49], [54, 63], [62, 58], [69, 73], [78, 82], [85, 80], [91, 91]]
const scatterB = [[10, 12], [19, 25], [28, 18], [36, 36], [43, 45], [52, 41], [60, 61], [67, 69], [75, 65], [82, 84], [90, 89]]

function Scatter({ points, label }: { points: number[][]; label: string }) {
  const reduce = useReducedMotion()
  return <div className="ev-scatter" role="img" aria-label={label}><span className="ev-scatter__axis ev-scatter__axis--y" /><span className="ev-scatter__axis ev-scatter__axis--x" /><span className="ev-scatter__trend" />{points.map(([left, top], index) => <motion.i key={`${left}-${top}`} initial={reduce ? false : { opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.025, duration: 0.32 }} style={{ left: `${left}%`, top: `${top}%` }} />)}</div>
}

export function DataInsightsSection() {
  return (
    <section className="ev-section ev-insights" aria-labelledby="ev-insights-heading">
      <div className="ev-shell">
        <div className="ev-section-heading"><p className="ev-kicker">02 / DATA INSIGHTS</p><h2 id="ev-insights-heading">What actually influenced the model?</h2></div>
        <div className="ev-insight-grid">
          <article className="ev-insight-card"><div className="ev-insight-card__head"><span>MOTOR POWER VS EFFICIENCY</span><b>−0.462</b></div><Scatter points={scatterA} label="Negative relationship between motor power and efficiency" /><p>Higher motor power tends to correspond with lower energy efficiency.</p></article>
          <article className="ev-insight-card"><div className="ev-insight-card__head"><span>RECHARGE VS EFFICIENCY</span><b>−0.473</b></div><Scatter points={scatterB} label="Negative relationship between recharge time and efficiency" /><p>Longer recharge times also trend toward lower efficiency, although the relationship is not deterministic.</p></article>
          <article className="ev-manufacturer-card"><span>MANUFACTURER AVERAGES / km/kWh</span><div>{manufacturers.map((item) => <div className="ev-manufacturer-row" key={item.name}><label>{item.name}</label><i><motion.b initial={{ width: 0 }} whileInView={{ width: `${item.value / 5.88 * 100}%` }} viewport={{ once: true }} transition={{ duration: 0.55, ease: "easeOut" }} /></i><strong>{item.value}</strong></div>)}</div><p><b>Lucid has the highest observed average</b>, ahead of Tesla. These categories carry useful signal for the baseline.</p></article>
        </div>
        <div className="ev-collinearity"><span>MOTOR POWER ↔ RECHARGE TIME</span><strong>0.631</strong><p>correlation</p><i /><p><b>VIF 1.1–1.7</b> indicates no severe multicollinearity across the final numerical inputs.</p></div>
      </div>
    </section>
  )
}
