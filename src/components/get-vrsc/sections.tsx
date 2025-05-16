import {EarnVRSCSection} from './EarnVRSCSection'
import {ExchangesSection} from './ExchangesSection'
import {ProtocolDataProvider} from './ProtocolDataProvider'
import {VerusDeFiContentWrapper} from './VerusDeFiContentWrapper'

/*
 * GetVrscSections Component - Main container component for get-vrsc page
 * - Uses a modular architecture with separate components for each section
 * - Only the data provider and wrapper components are client components
 * - All UI rendering is done in server components whenever possible
 * - Minimizes client-side JavaScript for better performance and SEO
 */

export function GetVrscSections() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <ProtocolDataProvider>
        <VerusDeFiContentWrapper />
      </ProtocolDataProvider>
      <ExchangesSection />
      <EarnVRSCSection />
    </div>
  )
}
