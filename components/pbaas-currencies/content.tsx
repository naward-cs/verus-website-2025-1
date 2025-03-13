import { RealWorldApplications } from "./sections/real-world-applications"
import { CurrencyTypes } from "./sections/currency-types"
import { ControlModels } from "./sections/control-models"
import { CrowdfundingSection } from "./sections/crowdfunding-section"
import { TerminalExample } from "./sections/terminal-example"
import { SubIDSection } from "./sections/subid-section"

export function PBaaSContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-8 md:mt-32 relative">
      {/* Introduction section - intentionally left for spacing */}
      <div className="mb-16"></div>
      
      {/* Main content sections with proper spacing */}
      <CurrencyTypes />
      <ControlModels />
      <CrowdfundingSection />
      <TerminalExample />
      <RealWorldApplications />
      <SubIDSection />
    </div>
  )
}