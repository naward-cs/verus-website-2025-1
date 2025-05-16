import {ComparisonSection} from './sections/comparison-section'
import {DataStorageExample} from './sections/data-storage-example'
import {StorageSection} from './sections/storage-section'
import {TechnicalSection} from './sections/technical-section'
import {VDXFSection} from './sections/vdxf-section'

export function DataContent() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <StorageSection />
      <DataStorageExample />
      <VDXFSection />
      <TechnicalSection />
      <ComparisonSection />
    </div>
  )
}
