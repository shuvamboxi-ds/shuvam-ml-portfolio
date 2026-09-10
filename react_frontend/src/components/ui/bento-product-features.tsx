import { motion } from "framer-motion"
import { Badge } from "./badge"
import { Button } from "./button"
import { Card } from "./card"

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const metadata = [
  ["PLATFORM", "macOS"],
  ["TYPE", "On-device Speech-to-Text"],
  ["CORE MODEL", "Whisper"],
  ["CORRECTION", "Local LLM"],
  ["CLOUD INFERENCE", "None for core pipeline"],
]

const technologies = ["Python", "PyTorch", "Whisper", "VAD", "Ollama", "Tauri", "React"]
const pipeline = ["MICROPHONE", "RECORD", "VAD", "WHISPER", "CLEAN", "PERSONAL DICTIONARY", "LOCAL CORRECTION", "FINAL TEXT"]
const architecture = ["Microphone", "Recorder", "VAD", "Whisper", "Cleaner", "Personal Dictionary", "Local LLM Corrector", "Final Text"]
const svaraLiveUrl = "https://svara.shuvamboxi.in/"
const svaraGithubUrl = "https://github.com/shuvamboxi-ds/Svara"

export function BentoProductFeatures() {
  return (
    <motion.div
      className="bento-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ staggerChildren: 0.08, delayChildren: 0.04 }}
    >
      <motion.div className="bento-overview" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card bento-card--overview">
          <p className="bento-kicker">FEATURED / ON-DEVICE AI</p>
          <h3 className="bento-project-name">Svara</h3>
          <p className="bento-lede">Speak naturally. Transcribe locally. Correct locally. Use the text.</p>

          <dl className="bento-metadata">
            {metadata.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <div className="bento-tags" aria-label="Technologies">
            {technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}
          </div>

          <div className="bento-actions">
            <Button asChild variant="outline" className="bento-case-study-link">
              <a href="#featured">View Case Study</a>
            </Button>
            <a className="bento-github-placeholder" href={svaraGithubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="bento-github-placeholder" href={svaraLiveUrl} target="_blank" rel="noopener noreferrer">Open Svara ↗</a>
          </div>
        </Card>
      </motion.div>

      <motion.div className="bento-problem" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card">
          <p className="bento-kicker">THE PROBLEM</p>
          <h3>The Problem</h3>
          <p>Cloud dictation tools create a privacy trade-off: speech leaves the device, corrections depend on remote services, and personal vocabulary is often poorly handled.</p>
          <p className="bento-highlight">Goal: useful dictation without sending the core speech pipeline to the cloud.</p>
        </Card>
      </motion.div>

      <motion.div className="bento-result" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card bento-card--result">
          <p className="bento-kicker">RESULT</p>
          <p className="bento-metric">~0.90s</p>
          <p className="bento-metric-label">TRANSCRIPTION LATENCY</p>
          <p className="bento-metric-detail">7.74s sample audio</p>
          <div className="bento-result-pairs">
            <div><strong>LOCAL</strong><span>CORE INFERENCE</span></div>
            <div><strong>ZERO</strong><span>CLOUD API DEPENDENCY</span></div>
          </div>
        </Card>
      </motion.div>

      <motion.div className="bento-pipeline" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card">
          <p className="bento-kicker">APPROACH</p>
          <h3>Pipeline</h3>
          <ol className="bento-pipeline-list">
            {pipeline.map((step, index) => (
              <li key={step}>
                <span>{step}</span>
                {index < pipeline.length - 1 && <i aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </Card>
      </motion.div>

      <motion.div className="bento-privacy" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card">
          <p className="bento-kicker">LOCAL AI</p>
          <h3>Privacy by Architecture</h3>
          <p>The core pipeline runs on-device: speech recording, voice activity detection, transcription, cleanup, personal dictionary replacement, and local text correction.</p>
          <dl className="bento-status-list">
            <div><dt>SPEECH</dt><dd>LOCAL</dd></div>
            <div><dt>TRANSCRIPTION</dt><dd>LOCAL</dd></div>
            <div><dt>CORRECTION</dt><dd>LOCAL</dd></div>
          </dl>
        </Card>
      </motion.div>

      <motion.div className="bento-architecture" variants={cardVariants} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}>
        <Card className="bento-card">
          <p className="bento-kicker">ARCHITECTURE</p>
          <h3>System Architecture</h3>
          <ol className="architecture-flow">
            {architecture.map((node) => <li key={node}>{node}</li>)}
          </ol>
        </Card>
      </motion.div>
    </motion.div>
  )
}
