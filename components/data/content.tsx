import { StorageSection } from "./sections/storage-section"
import { VDXFSection } from "./sections/vdxf-section"
import { TechnicalSection } from "./sections/technical-section"
import { ComparisonSection } from "./sections/comparison-section"

export function DataContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <StorageSection />
      <VDXFSection />
      <TechnicalSection />
      <ComparisonSection />
    </div>
  )
}