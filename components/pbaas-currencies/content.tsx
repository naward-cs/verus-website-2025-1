import { RealWorldApplications } from "./sections/real-world-applications"
import { ControlModels } from "./sections/control-models"
import { CrowdfundingSection } from "./sections/crowdfunding-section"
import { TerminalExample } from "./sections/terminal-example"
import { SubIDSection } from "./sections/subid-section"

export function PBaaSContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <CrowdfundingSection />
      <TerminalExample />
      <RealWorldApplications />
      <ControlModels />
      <SubIDSection />
    </div>
  )
}