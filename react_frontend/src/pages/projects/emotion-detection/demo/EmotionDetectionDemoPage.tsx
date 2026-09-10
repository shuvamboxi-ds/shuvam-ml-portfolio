import { DemoHeader } from "../../../../components/projects/emotion-detection/demo/DemoHeader"
import { EmotionInferenceConsole } from "../../../../components/projects/emotion-detection/demo/EmotionInferenceConsole"
import { ModelContext } from "../../../../components/projects/emotion-detection/demo/ModelContext"
import "./emotion-detection-demo.css"

export function EmotionDetectionDemoPage() { return <main className="emotion-demo-page"><DemoHeader /><EmotionInferenceConsole /><ModelContext /></main> }
