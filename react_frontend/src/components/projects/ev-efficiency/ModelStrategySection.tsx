import { motion, useReducedMotion } from "framer-motion"

const stages = ["RAW DATA", "CLEANING", "TRAIN / TEST SPLIT", "COLUMN TRANSFORMER", "MULTIPLE LINEAR REGRESSION", "PREDICTED km/kWh"]

export function ModelStrategySection() {
  const reduce = useReducedMotion()
  return (
    <section className="ev-section ev-strategy" aria-labelledby="ev-strategy-heading">
      <div className="ev-shell">
        <div className="ev-section-heading ev-section-heading--split"><div><p className="ev-kicker">03 / MODEL STRATEGY</p><h2 id="ev-strategy-heading">Interpretability before complexity.</h2></div><p>This is an intentionally transparent baseline: every transformation and model decision stays available for inspection.</p></div>
        <div className="ev-pipeline" aria-label="Machine learning pipeline">
          {stages.slice(0, 4).map((stage, index) => <motion.div className="ev-pipeline__node" key={stage} initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><span>0{index + 1}</span><strong>{stage}</strong>{index < 3 && <i aria-hidden="true" />}</motion.div>)}
          <div className="ev-pipeline__branches"><div><span>NUMERICAL</span><p>Model Year<br />Motor Power<br />Recharge Time</p><b>PASS-THROUGH</b></div><div><span>CATEGORICAL</span><p>Make<br />Vehicle Class</p><b>ONE-HOT ENCODING</b></div></div>
          {stages.slice(4).map((stage, index) => <motion.div className="ev-pipeline__node ev-pipeline__node--final" key={stage} initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index + 4) * 0.08 }}><span>0{index + 5}</span><strong>{stage}</strong>{index === 0 && <i aria-hidden="true" />}</motion.div>)}
        </div>
        <div className="ev-decision-grid"><article><span>WHY LINEAR REGRESSION</span><p>Designed as an interpretable baseline, not a shortcut to complexity. Coefficients make the learned relationships readable.</p></article><article><span>WHY DROP MODEL</span><p>590 model names across 1,197 records would create sparse features and invite overfitting.</p></article><article><span>WHY KEEP OUTLIERS</span><p>Extreme configurations were plausible vehicles, not obvious data errors, so they remained in the analysis.</p></article></div>
      </div>
    </section>
  )
}
