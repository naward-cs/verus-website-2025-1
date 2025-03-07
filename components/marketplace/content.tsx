import { MarketplaceSection } from "./sections/marketplace-section"
import { TechnicalSection } from "./sections/technical-section"
import { UseCasesSection } from "./sections/use-cases-section"

export function MarketplaceContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <MarketplaceSection />
      <TechnicalSection />
      <UseCasesSection />
    </div>
  )
}