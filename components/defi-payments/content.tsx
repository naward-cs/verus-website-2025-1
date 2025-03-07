import { DeFiSection } from "./sections/defi-section"
import { PaymentsSection } from "./sections/payments-section"
import { ComparisonSection } from "./sections/comparison-section"
import { TechnicalSection } from "./sections/technical-section"

export function DeFiContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <DeFiSection />
      <PaymentsSection />
      <TechnicalSection />
      <ComparisonSection />
    </div>
  )
}