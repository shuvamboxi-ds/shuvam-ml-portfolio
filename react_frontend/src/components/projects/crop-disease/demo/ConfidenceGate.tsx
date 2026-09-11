import { cropDiseaseDemoConfig } from "../../../../data/crop-disease/demo-config"

export function ConfidenceGate({
  confidence,
}: {
  confidence: number
}) {
  const passed =
    confidence >= cropDiseaseDemoConfig.confidenceGate

  return (
    <div
      className={`crop-confidence-gate ${
        passed ? "is-passed" : "is-low"
      }`}
    >
      <div>
        <span>CONFIDENCE GATE</span>
        <strong>
          {passed ? "PASSED" : "LOW CONFIDENCE"}
        </strong>
      </div>

      <div className="crop-confidence-track">
        <b
          style={{
            width: `${Math.min(
              100,
              Math.max(0, confidence)
            )}%`,
          }}
        />
        <i />
      </div>

      <div className="crop-confidence-labels">
        <span>
          MODEL CONFIDENCE · {confidence.toFixed(2)}%
        </span>

        <span>REQUIRED · 90%</span>
      </div>

      {!passed && (
        <p>
          The model is not confident enough to provide a
          reliable prediction. Try another image with the
          leaf centered, clearly visible, and well lit.
        </p>
      )}
    </div>
  )
}