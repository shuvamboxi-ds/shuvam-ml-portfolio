import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"
import { FeaturedCaseStudy } from "./sections/FeaturedCaseStudy"
import { ProjectsShowcase } from "./sections/ProjectsShowcase"
import { StatsBar } from "./sections/StatsBar"
import { TechRadar } from "./components/ui/tech-radar"
import { LabSection } from "./sections/LabSection"
import { Footer } from "./sections/Footer"
import { EVEfficiencyPage } from "./pages/projects/ev-efficiency/EVEfficiencyPage"
import { EVEfficiencyDemoPage } from "./pages/projects/ev-efficiency/EVEfficiencyDemoPage"
import { DelhiElectricityDemandPage } from "./pages/projects/delhi-electricity-demand-forecasting/DelhiElectricityDemandPage"
import { DelhiElectricityDemandDemoPage } from "./pages/projects/delhi-electricity-demand-forecasting/demo/DelhiElectricityDemandDemoPage"
import { EmotionDetectionPage } from "./pages/projects/emotion-detection/EmotionDetectionPage"
import { EmotionDetectionDemoPage } from "./pages/projects/emotion-detection/demo/EmotionDetectionDemoPage"
import { BNPLRiskPage } from "./pages/projects/bnpl-risk/BNPLRiskPage"
import { BNPLRiskDemoPage } from "./pages/projects/bnpl-risk/demo/BNPLRiskDemoPage"
import { CropDiseasePage } from "./pages/projects/crop-disease/CropDiseasePage"
import { CropDiseaseDemoPage } from "./pages/projects/crop-disease/demo/CropDiseaseDemoPage"
import { EVBatteryFailurePage } from "./pages/projects/ev-battery-failure/EVBatteryFailurePage"
import { EVBatteryFailureDemoPage } from "./pages/projects/ev-battery-failure/demo/EVBatteryFailureDemoPage"
import "./home-glass.css"

function App() {
  if (window.location.pathname === "/projects/ev-efficiency") {
    return <EVEfficiencyPage />
  }

  if (window.location.pathname === "/projects/ev-efficiency/demo") {
    return <EVEfficiencyDemoPage />
  }

  if (window.location.pathname === "/projects/delhi-electricity-demand-forecasting") {
    return <DelhiElectricityDemandPage />
  }

  if (window.location.pathname === "/projects/delhi-electricity-demand-forecasting/demo") {
    return <DelhiElectricityDemandDemoPage />
  }

  if (window.location.pathname === "/projects/emotion-detection") {
    return <EmotionDetectionPage />
  }

  if (window.location.pathname === "/projects/emotion-detection/demo") {
    return <EmotionDetectionDemoPage />
  }

  if (window.location.pathname === "/projects/bnpl-risk") {
    return <BNPLRiskPage />
  }

  if (window.location.pathname === "/projects/bnpl-risk/demo") {
    return <BNPLRiskDemoPage />
  }

  if (window.location.pathname === "/projects/crop-disease") {
    return <CropDiseasePage />
  }

  if (window.location.pathname === "/projects/crop-disease/demo") {
    return <CropDiseaseDemoPage />
  }

  if (window.location.pathname === "/projects/ev-battery-failure") {
    return <EVBatteryFailurePage />
  }

  if (window.location.pathname === "/projects/ev-battery-failure/demo") {
    return <EVBatteryFailureDemoPage />
  }

  return (
    <main className="home-page bg-[#0B090A]">
      <Header />
      <Hero />
      <FeaturedCaseStudy />
      <ProjectsShowcase />
      <StatsBar />
      <TechRadar />
      <LabSection />
      <Footer />
    </main>
  )
}

export default App
