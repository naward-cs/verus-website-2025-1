import {StructureSection} from './sections/structure-section'
import {UseCasesSection} from './sections/use-cases-section'

export function VerusIDContent() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <StructureSection />
      <UseCasesSection />
    </div>
  )
}
