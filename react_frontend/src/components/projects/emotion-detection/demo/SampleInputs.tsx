import { emotionDemoConfig } from "../../../../data/emotion-detection/demo-config"
export function SampleInputs({ onSelect }: { onSelect: (sample: string) => void }) { return <section className="emotion-samples"><p>TRY AN EXAMPLE</p><div>{emotionDemoConfig.samples.map((sample) => <button type="button" key={sample} onClick={() => onSelect(sample)}>{sample}</button>)}</div></section> }
