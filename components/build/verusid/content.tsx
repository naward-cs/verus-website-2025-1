import { StructureSection } from "./sections/structure-section"
import { UseCasesSection } from "./sections/use-cases-section"

export function VerusIDContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <StructureSection />
      <UseCasesSection />
    </div>
  )
}