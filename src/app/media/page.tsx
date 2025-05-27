import {PressKit, TabBar} from '@/features/media/components'

//default is PressKit
export default function DefaultPage() {
  return (
    <div>
      <TabBar activeTab="press-kit" />
      <div className="py-8">
        <PressKit />
      </div>
    </div>
  )
}
