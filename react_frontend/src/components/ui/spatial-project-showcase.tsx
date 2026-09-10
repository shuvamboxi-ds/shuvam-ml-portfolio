import { ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { Badge } from "./badge"
import { Button } from "./button"
import bnplImage from "../../assets/BPNL.png"
import cropImage from "../../assets/crop.png"
import electricityImage from "../../assets/electricity.png"
import emotionImage from "../../assets/emotion.png"
import evBatteryImage from "../../assets/ev battery failure.png"
import evEfficiencyImage from "../../assets/ev_efficiency.png"
import svaraImage from "../../assets/Svara.png"

type ProjectId =
  | "svara"
  | "crop-disease"
  | "emotion-detection"
  | "bnpl-risk"
  | "delhi-demand"
  | "ev-battery"
  | "ev-efficiency"

interface ProjectData {
  id: ProjectId
  selectorLabel: string
  eyebrow: string
  title: string
  description: string
  image?: string
  status: "LIVE" | "IN PROGRESS" | "ARCHIVED"
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  caseStudyUrl?: string
  metadata: { label: string; value: string }[]
}

const projects: ProjectData[] = [
  {
    id: "svara", selectorLabel: "Svara", eyebrow: "ON-DEVICE AI / SPEECH", title: "Svara",
    description: "A privacy-first macOS dictation assistant that records speech, detects voice activity, transcribes locally with Faster-Whisper, cleans the result and pastes corrected text into the active application.",
    image: svaraImage, status: "IN PROGRESS", technologies: ["Python", "Faster-Whisper", "CTranslate2", "WebRTC VAD", "Tauri", "Rust", "React", "TypeScript"], githubUrl: "https://github.com/shuvamboxi-ds/Svara", demoUrl: "https://svara.shuvamboxi.in/",
    metadata: [{ label: "MODEL", value: "Whisper Tiny" }, { label: "INFERENCE", value: "On-device" }, { label: "WARM MIC", value: "~0.085–0.104s" }, { label: "FINAL CLEAN RESULT", value: "~0.34–0.67s" }],
  },
  {
    id: "crop-disease", selectorLabel: "Crop Disease", eyebrow: "COMPUTER VISION / CNN", title: "Crop Disease Detector",
    description: "Identify plant diseases from crop-leaf images using a custom convolutional neural network, covering image preprocessing, training and model evaluation across 38 classes.",
    image: cropImage, status: "IN PROGRESS", technologies: ["Python", "PyTorch", "Torchvision", "CNN", "Pillow", "scikit-learn"], githubUrl: "https://github.com/shuvamboxi-ds/crop-disease-detector", demoUrl: "/projects/crop-disease/demo", caseStudyUrl: "/projects/crop-disease",
    metadata: [{ label: "DATASET", value: "54,303 images" }, { label: "CLASSES", value: "38" }, { label: "VAL ACCURACY", value: "85.28%" }, { label: "MACRO F1", value: "0.8077" }],
  },
  {
    id: "emotion-detection", selectorLabel: "Emotion", eyebrow: "NLP / TRANSFORMERS", title: "Emotion Detection with Transformers",
    description: "Classify text into six emotion categories while comparing a verified TF-IDF + Logistic Regression baseline with a Transformer-based NLP workflow.",
    image: emotionImage, status: "IN PROGRESS", technologies: ["Python", "Transformers", "PyTorch", "TF-IDF", "Logistic Regression", "NLP"], githubUrl: "https://github.com/shuvamboxi-ds/emotion-detection-transformers", demoUrl: "/projects/emotion-detection/demo", caseStudyUrl: "/projects/emotion-detection",
    metadata: [{ label: "CLEAN DATA", value: "371,527 rows" }, { label: "CLASSES", value: "6" }, { label: "BASELINE ACCURACY", value: "96.86%" }, { label: "MACRO F1", value: "0.9608" }],
  },
  {
    id: "bnpl-risk", selectorLabel: "BNPL Risk", eyebrow: "MACHINE LEARNING / CLASSIFICATION", title: "BNPL Default Risk Prediction",
    description: "Predict Buy Now, Pay Later default risk across Low, Medium and High risk classes while handling class imbalance and evaluating the model beyond simple accuracy.",
    image: bnplImage, status: "IN PROGRESS", technologies: ["Python", "XGBoost", "scikit-learn", "Logistic Regression", "HistGradientBoosting"], githubUrl: "https://github.com/shuvamboxi-ds/bnpl-default-risk", demoUrl: "/projects/bnpl-risk/demo", caseStudyUrl: "/projects/bnpl-risk",
    metadata: [{ label: "ROWS", value: "10,000" }, { label: "BEST MODEL", value: "XGBoost" }, { label: "TEST ACCURACY", value: "96.5%" }, { label: "MACRO ROC-AUC", value: "0.991" }],
  },
  {
    id: "delhi-demand", selectorLabel: "Delhi Demand", eyebrow: "TIME SERIES / MACHINE LEARNING", title: "Delhi Electricity Demand Forecasting",
    description: "Forecast Delhi electricity demand from recent, daily and weekly load patterns using lag features and gradient boosting to estimate future consumption.",
    image: electricityImage, status: "IN PROGRESS", technologies: ["Python", "Gradient Boosting", "scikit-learn", "Time Series", "Feature Engineering"], githubUrl: "", demoUrl: "/projects/delhi-electricity-demand-forecasting/demo", caseStudyUrl: "/projects/delhi-electricity-demand-forecasting",
    metadata: [{ label: "RAW ROWS", value: "293,184" }, { label: "TEST MAE", value: "63.54" }, { label: "TEST RMSE", value: "87.49" }, { label: "MAPE", value: "1.695%" }],
  },
  {
    id: "ev-battery", selectorLabel: "EV Battery", eyebrow: "MACHINE LEARNING / RISK PREDICTION", title: "EV Battery Failure Prediction",
    description: "Predict battery failure risk from high-dimensional EV telemetry while treating the minority failure class as the primary modelling challenge.",
    image: evBatteryImage, status: "IN PROGRESS", technologies: ["Python", "scikit-learn", "Logistic Regression", "Random Forest", "Gradient Boosting"], githubUrl: "https://github.com/shuvamboxi-ds/ev-battery-failure-prediction", demoUrl: "/projects/ev-battery-failure/demo", caseStudyUrl: "/projects/ev-battery-failure",
    metadata: [{ label: "ROWS", value: "200,000" }, { label: "FEATURES", value: "70" }, { label: "ROC-AUC", value: "0.9893" }, { label: "PR-AUC", value: "0.9222" }],
  },
  {
    id: "ev-efficiency", selectorLabel: "EV Efficiency", eyebrow: "MACHINE LEARNING / REGRESSION", title: "EV Energy Efficiency",
    description: "Model electric-vehicle energy efficiency from motor power, recharge time, vehicle class, manufacturer and model-year characteristics.",
    image: evEfficiencyImage, status: "IN PROGRESS", technologies: ["Python", "scikit-learn", "Linear Regression", "Feature Engineering", "Regression"], githubUrl: "https://github.com/shuvamboxi-ds/ev-energy-efficiency-ml", demoUrl: "/projects/ev-efficiency/demo", caseStudyUrl: "/projects/ev-efficiency",
    metadata: [{ label: "ROWS", value: "1,197" }, { label: "TARGET", value: "km/kWh" }, { label: "STRONGEST CORRELATE", value: "Recharge Time" }, { label: "TASK", value: "Regression" }],
  },
]

const enter = { opacity: 0, y: 12, scale: 0.98, filter: "blur(6px)" }
const settle = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }

export function SpatialProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId>("svara")
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0]

  return (
    <div className="spatial-showcase">
      <div className="spatial-showcase__body">
        <div className="spatial-showcase__visual-column">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className="project-visual-stage"
              initial={enter}
              animate={settle}
              exit={enter}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="project-visual-stage__ring project-visual-stage__ring--outer" aria-hidden="true" />
              <span className="project-visual-stage__ring project-visual-stage__ring--inner" aria-hidden="true" />
              <div className="project-visual-stage__core">
                {activeProject.image ? (
                  <img src={activeProject.image} alt={`${activeProject.title} project visual`} />
                ) : (
                  <div className="project-visual-placeholder" aria-label={`${activeProject.title} project visual placeholder`}>
                    <span>PROJECT VISUAL</span>
                    <strong>{activeProject.title}</strong>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="project-status"><span aria-hidden="true" />{activeProject.status}</p>
        </div>

        <div className="spatial-showcase__details-column">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeProject.id}
              initial={enter}
              animate={settle}
              exit={enter}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="project-detail-eyebrow">{activeProject.eyebrow}</p>
              <h3>{activeProject.title}</h3>
              <p className="project-detail-description">{activeProject.description}</p>

              <div className="project-technologies" aria-label="Technology stack">
                {activeProject.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}
              </div>

              <dl className="project-metadata-panel">
                {activeProject.metadata.map(({ label, value }, index) => (
                  <div key={label} className={index === 0 ? "project-metadata-panel__important" : ""}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="project-actions">
                {activeProject.demoUrl ? (
                  <Button asChild className="project-demo-button"><a href={activeProject.demoUrl}>Demo</a></Button>
                ) : (
                  <Button className="project-demo-button" disabled>Demo Coming Soon</Button>
                )}

                {activeProject.caseStudyUrl ? (
                  <Button asChild variant="outline" className="project-case-study-button"><a href={activeProject.caseStudyUrl}>Case Study</a></Button>
                ) : activeProject.id !== "svara" ? (
                  <Button variant="outline" className="project-case-study-button" disabled>Case Study Coming Soon</Button>
                ) : null}

                {activeProject.githubUrl ? (
                  <Button asChild variant="outline" className="project-github-button">
                    <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} /></a>
                  </Button>
                ) : (
                  <Button variant="outline" className="project-github-button" disabled>GitHub <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} /></Button>
                )}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <div className="project-selector" role="group" aria-label="Select a project">
        <div className="project-selector__track">
          {projects.map((project) => {
            const isActive = project.id === activeProjectId

            return (
              <button
                key={project.id}
                type="button"
                className="project-selector__button"
                aria-pressed={isActive}
                onClick={() => setActiveProjectId(project.id)}
              >
                {isActive && <motion.span className="project-selector__active-surface" layoutId="active-project-selector" transition={{ type: "tween", duration: 0.32, ease: [0.16, 1, 0.3, 1] }} />}
                <span>{project.selectorLabel}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
