import Link from 'next/link'

import {getMediaItemOgCard} from '@/features/media/server/get-media-og-card'
import {Calendar, ExternalLink} from 'lucide-react'

export async function MediaItem({item_info}: {item_info: string}) {
  const item = await getMediaItemOgCard(item_info)

  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-lg border border-[#E9EFFC] bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
    >
      <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-blue-50/70 to-indigo-50/70 p-4 dark:from-blue-950/50 dark:to-indigo-950/30">
        <div className="text-center">
          <div className="text-[24px] font-medium capitalize tracking-tight text-verus-blue dark:text-blue-300 md:text-[28px]">
            {item.source}
          </div>
          <div className="mt-1 text-[12px] text-gray-500 dark:text-gray-400">
            {item.date}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-base font-medium text-gray-900 transition-colors group-hover:text-verus-blue dark:text-white dark:group-hover:text-blue-400">
          {item.title}
        </h3>

        <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {item.description}
        </p>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Calendar className="h-3 w-3" />
            <time dateTime={new Date(item.date).toISOString()}>
              {item.date}
            </time>
          </div>
          <span className="flex items-center gap-1 text-verus-blue dark:text-blue-400">
            Read more
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
