import {Suspense} from 'react'

import {mediaUrls} from '@/data/media-urls'

import {MediaItem} from './media-item'
import {MediaItemSkeleton} from './media-item-skeleton'

export default function MediaItems() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mediaUrls.map((item, i) => {
        // const item_info = getMediaItemOgCard(item.url)
        return (
          <Suspense key={`${item.url}-${i}`} fallback={<MediaItemSkeleton />}>
            <MediaItem item_info={item.url} />
          </Suspense>
        )
      })}
    </div>
  )
}
