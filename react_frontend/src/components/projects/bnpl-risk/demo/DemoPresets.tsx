import type { BNPLCustomerInput } from "../../../../types/bnpl-risk-demo"
import { bnplDemoConfig } from "../../../../data/bnpl-risk/demo-config"
export function DemoPresets({ onSelect }: { onSelect: (values: BNPLCustomerInput) => void }) { return <div className="bnpl-presets"><span>QUICK PRESETS</span><div>{bnplDemoConfig.presets.map(preset => <button type="button" key={preset.label} onClick={() => onSelect(preset.values)}>{preset.label}</button>)}</div></div> }
