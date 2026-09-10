const metrics = [["TRAINING DATA", "1,197 EV records"], ["VALIDATION", "5-fold CV"], ["TEST MAE", "0.306 km/kWh"], ["TEST R²", "0.795"], ["MODEL TYPE", "Multiple Linear Regression"]]

export function ModelContextStrip() { return <section className="demo-context" aria-label="Model context">{metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section> }
