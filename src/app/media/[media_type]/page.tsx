import {Suspense} from 'react'

import {
  BrandAssets,
  MediaMentions,
  PressKit,
  TabBar,
} from '@/features/media/components'

type Params = Promise<{media_type: string}>
type SearchParams = Promise<{[key: string]: string | undefined}>

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const {media_type} = await props.params

  return (
    <div>
      <TabBar activeTab={media_type} />
      <div className="py-8">
        {media_type === 'press-kit' && <PressKit />}
        {media_type === 'media-coverage' && <MediaMentions />}
        {media_type === 'brand-assets' && (
          <Suspense>
            <BrandAssets searchParams={props.searchParams} />
          </Suspense>
        )}
      </div>
    </div>
  )
  // <div>
  //       <TabBar activeTab="press-kit" />
  //       <div className="py-8">
  //         <PressKit />
  //       </div>
  //     </div>
}
