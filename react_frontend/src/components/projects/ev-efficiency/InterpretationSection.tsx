import { motion, useReducedMotion } from "framer-motion"

const coefficients = [["Lucid", "+2.10", 100], ["Tesla", "+1.12", 65], ["Motor Power", "−0.0024 / kW", 30], ["Recharge Time", "−0.0318 / hour", 42]]
const limits = ["Only 1,197 observations", "Linear and additive relationships", "Important physical variables are absent", "Some manufacturer categories have weak representation", "Observational data does not establish causation", "Use caution for out of distribution predictions"]

export function InterpretationSection() {
  const reduce = useReducedMotion()
  return (
    <section className="ev-section ev-interpretation" aria-labelledby="ev-interpretation-heading">
      <div className="ev-shell">
        <div className="ev-section-heading ev-section-heading--split"><div><p className="ev-kicker">05 / INTERPRETATION</p><h2 id="ev-interpretation-heading">Useful, but not infallible.</h2></div><p>Coefficient direction helps explain the fitted baseline, but it must never be read as proof of a causal vehicle effect.</p></div>
        <div className="ev-interpretation-grid"><article className="ev-coefficients"><span>WHAT THE MODEL LEARNED</span>{coefficients.map(([name, value, width]) => <div className="ev-coefficient" key={name}><label>{name}</label><i><motion.b initial={{ width: 0 }} whileInView={{ width: `${width}%` }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.55, ease: "easeOut" }} /></i><strong>{value}</strong></div>)}<p>Categories are relative to a reference category. Values describe associations within this dataset, not causal effects.</p></article>
          <article className="ev-failure-case"><span>WHERE IT STRUGGLES</span><h3>2024 Fisker · SUV Standard</h3><div><p>ACTUAL <b>3.759</b></p><p>PREDICTED <b>4.843</b></p><p>ABS. ERROR <b className="ev-amber">1.083</b></p></div><p><strong>45 / 240 test predictions</strong> had absolute error above .5 km/kWh: 18.75%. Broad vehicle features cannot fully describe every individual configuration.</p></article></div>
        <div className="ev-limitations"><span>LIMITATIONS</span><ul>{limits.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
    </section>
  )
}
