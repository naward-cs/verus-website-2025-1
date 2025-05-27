import {ControlModels} from './sections/control-models'
import {CrowdfundingSection} from './sections/crowdfunding-section'
import {CurrencyTypes} from './sections/currency-types'
import {RealWorldApplications} from './sections/real-world-applications'
import {SubIDSection} from './sections/subid-section'
import {TerminalExample} from './sections/terminal-example'

export function PBaaSContent() {
  return (
    <div className="relative -mx-4 mt-8 w-screen md:mx-0 md:mt-32 md:max-w-[1220px]">
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
