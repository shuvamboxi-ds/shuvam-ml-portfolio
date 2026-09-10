import { motion, useReducedMotion } from "framer-motion"

const finalMetrics = [["0.306", "MAE"], ["0.382", "RMSE"], ["0.795", "R²"]]
const validation = [["5 FOLD CV", "MAE", ".301 ± .024"], ["5 FOLD CV", "RMSE", ".385 ± .034"], ["5 FOLD CV", "R²", ".795 ± .036"], ["FINAL TEST", "MAE", ".306"], ["FINAL TEST", "RMSE", ".382"], ["FINAL TEST", "R²", ".795"]]

export function PerformanceSection() {
  const reduce = useReducedMotion()
  return (
    <section className="ev-section ev-performance" aria-labelledby="ev-performance-heading">
      <div className="ev-shell">
        <div className="ev-section-heading"><p className="ev-kicker">04 / PERFORMANCE</p><h2 id="ev-performance-heading">Strong performance, stable validation.</h2></div>
        <div className="ev-performance__primary">{finalMetrics.map(([value, label], index) => <motion.div key={label} initial={reduce ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><strong className={label === "R²" ? "ev-amber" : ""}>{value}</strong><span>{label}</span></motion.div>)}</div>
        <div className="ev-baseline-comparison"><div><span>MEAN BASELINE</span><p>MAE <b>.691</b></p><p>R² <b>≈ 0</b></p></div><i aria-hidden="true" /><div><span>LINEAR REGRESSION</span><p>MAE <b>.306</b></p><p>R² <b className="ev-amber">.795</b></p></div></div>
        <div className="ev-validation-grid">{validation.map(([group, label, value]) => <div key={`${group}-${label}`}><span>{group}</span><b>{label}</b><strong>{value}</strong></div>)}</div>
        <div className="ev-takeaways"><span>READOUT</span><p>The model explains about <b>79.5% of variance</b>. Average error is around <b>0.31 km/kWh</b>, and cross validation remains stable across folds.</p></div>
      </div>
    </section>
  )
}
