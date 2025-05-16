import {ComparisonSection} from './sections/comparison-section'
import {DeFiSection} from './sections/defi-section'
import {TechnicalSection} from './sections/technical-section'

export function DeFiContent() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <DeFiSection />

      <TechnicalSection />
      <ComparisonSection />
    </div>
  )
}
