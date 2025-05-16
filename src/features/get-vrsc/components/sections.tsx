import {EarnVRSCSection} from './EarnVRSCSection'
import {ExchangesSection} from './ExchangesSection'
import {VerusDeFiContent} from './VerusDeFiContent'

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
      <VerusDeFiContent />
      <ExchangesSection />
      <EarnVRSCSection />
    </div>
  )
}
