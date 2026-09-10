import { Database, Filter, Target } from "lucide-react"

const stats = [["1,197", "VEHICLES"], ["7", "RAW COLUMNS"], ["2012–2026", "MODEL YEARS"], ["0", "MISSING VALUES"]]
const rows = [
  ["2024", "Lucid", "Mid-size", "430", "12.0", "5.99"],
  ["2023", "Tesla", "SUV", "250", "10.5", "5.11"],
  ["2024", "Rivian", "Pickup", "400", "16.0", "3.65"],
  ["2023", "GMC", "SUV", "212", "11.5", "2.61"],
]

export function ProblemDataSection() {
  return (
    <section className="ev-section ev-problem" aria-labelledby="ev-problem-heading">
      <div className="ev-shell">
        <div className="ev-section-heading ev-section-heading--split">
          <div><p className="ev-kicker">01 / PROBLEM</p><h2 id="ev-problem-heading">Can vehicle specifications explain EV energy efficiency?</h2></div>
          <p>EVs with similar market positioning can have very different energy efficiency. The model estimates <strong>Energy Efficiency (km/kWh)</strong> from a compact, inspectable feature set.</p>
        </div>
        <div className="ev-problem-grid">
          <div className="ev-problem-intent">
            <Target aria-hidden="true" size={22} />
            <span>REGRESSION TARGET</span>
            <strong>Energy Efficiency</strong>
            <b>km/kWh</b>
            <p>Make each prediction traceable back to practical vehicle specifications instead of hiding the relationship in a black box.</p>
          </div>
          <div className="ev-stats-bento">
            {stats.map(([value, label]) => <div className="ev-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
          <div className="ev-feature-card">
            <div><Database aria-hidden="true" size={19} /><span>FINAL MODEL INPUTS</span></div>
            <ul>{["Model Year", "Motor (kW)", "Recharge Time (h)", "Make", "Vehicle Class"].map((item) => <li key={item}>{item}</li>)}</ul>
            <aside><Filter aria-hidden="true" size={15} /><span><b>Model</b> was intentionally excluded because of its high cardinality. <strong>590 unique models</strong> existed across only <strong>1,197 observations.</strong></span></aside>
          </div>
        </div>
        <div className="ev-data-preview" aria-label="Sample EV data preview">
          <div className="ev-data-preview__label"><span>CURATED DATA PREVIEW</span><span>6 OF 7 COLUMNS SHOWN</span></div>
          <div className="ev-data-preview__scroll"><table><thead><tr>{["Year", "Make", "Class", "Motor", "Recharge", "km/kWh"].map((head) => <th key={head}>{head}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.join("-")}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
        </div>
      </div>
    </section>
  )
}
