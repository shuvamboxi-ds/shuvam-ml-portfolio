import "./tech-radar.css"

interface TechItem {
  name: string
  mark: string
}

const dataAndMl: TechItem[] = [
  { name: "Python", mark: "PY" }, { name: "NumPy", mark: "NP" }, { name: "Pandas", mark: "PD" }, { name: "Polars", mark: "PL" },
  { name: "scikit-learn", mark: "SK" }, { name: "XGBoost", mark: "XG" }, { name: "PyTorch", mark: "PT" }, { name: "Torchvision", mark: "TV" },
  { name: "Transformers", mark: "TF" }, { name: "Hugging Face", mark: "HF" }, { name: "Faster-Whisper", mark: "FW" }, { name: "CTranslate2", mark: "CT" },
  { name: "WebRTC VAD", mark: "WV" }, { name: "MLflow", mark: "ML" },
]

const engineering: TechItem[] = [
  { name: "FastAPI", mark: "FA" }, { name: "Pydantic", mark: "PYD" }, { name: "Docker", mark: "DK" }, { name: "Google Cloud Run", mark: "CR" },
  { name: "GitHub Actions", mark: "GA" }, { name: "Git", mark: "GT" }, { name: "GitHub", mark: "GH" }, { name: "React", mark: "RE" },
  { name: "TypeScript", mark: "TS" }, { name: "Vite", mark: "VT" }, { name: "Tailwind CSS", mark: "TW" }, { name: "Tauri", mark: "TR" },
  { name: "Rust", mark: "RS" }, { name: "PyInstaller", mark: "PI" }, { name: "Ollama", mark: "OL" },
]

function TechMarquee({ items, direction }: { items: TechItem[]; direction: "left" | "right" }) {
  const repeatedItems = Array.from({ length: 2 })

  return (
    <div className="tech-radar__marquee">
      <div className={`tech-radar__track tech-radar__track--${direction}`}>
        {repeatedItems.map((_, copyIndex) => (
          <div className="tech-radar__group" key={copyIndex}>
            {items.map((item) => (
              <div className="tech-radar__item" key={`${item.name}-${copyIndex}`}>
                <span className="tech-radar__mark" aria-hidden="true">{item.mark}</span>
                <span className="tech-radar__name">{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TechRadar() {
  return (
    <section className="tech-radar" id="tech-radar" aria-labelledby="tech-radar-heading">
      <div className="tech-radar__inner">
        <header className="tech-radar__header">
          <p>03 / TECH RADAR</p>
          <h2 id="tech-radar-heading">Built Across the Stack.</h2>
          <p>The tools behind the projects — from data preparation and modelling to APIs, deployment, desktop software and frontend systems.</p>
        </header>

        <div className="tech-radar__category">
          <p>DATA / ML / AI</p>
          <TechMarquee items={dataAndMl} direction="left" />
        </div>

        <div className="tech-radar__category">
          <p>ENGINEERING / DEPLOYMENT / PRODUCT</p>
          <TechMarquee items={engineering} direction="right" />
        </div>
      </div>
    </section>
  )
}
