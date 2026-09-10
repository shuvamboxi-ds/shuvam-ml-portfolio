import { Activity, ArrowLeft } from "lucide-react"

export function DemoHeader() {
  return <header className="demo-header"><a className="demo-header__back" href="/projects/ev-efficiency"><ArrowLeft aria-hidden="true" size={15} /> CASE STUDY</a><div className="demo-header__title">EV ENERGY EFFICIENCY</div><div className="demo-header__status"><Activity aria-hidden="true" size={13} /> LIVE MODEL / ONLINE</div></header>
}
