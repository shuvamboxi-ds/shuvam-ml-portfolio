import { BentoProductFeatures } from "../components/ui/bento-product-features"
import "./featured-case-study.css"

export function FeaturedCaseStudy() {
  return (
    <section className="featured-case-study" id="featured" aria-labelledby="featured-heading">
      <div className="featured-case-study__inner">
        <header className="featured-case-study__header">
          <p>01 / FEATURED CASE STUDY</p>
          <h2 id="featured-heading">Svara — Private Dictation, Built to Stay Local.</h2>
          <p>
            A privacy-first macOS dictation assistant that records speech, detects voice activity, transcribes locally with Whisper, cleans the output, and applies local corrections without cloud inference in the core ML pipeline.
          </p>
        </header>

        <BentoProductFeatures />
      </div>
    </section>
  )
}
