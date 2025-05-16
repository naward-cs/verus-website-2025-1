// Media mentions component displaying articles and press about Verus
'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'

import {Calendar, ExternalLink} from 'lucide-react'

// Only URL is required; all other data will be fetched from the URL
interface RawMediaItem {
  url: string
}

// Full media item with all metadata
interface MediaItem {
  title: string
  source: string
  date: string
  description: string
  url: string
  image: string
  isLoading: boolean
  error?: string
}

// Example data with just URLs - the rest will be fetched
const mediaUrls: RawMediaItem[] = [
  {
    url: 'https://finance.yahoo.com/news/introducing-llama-3-verusgpt-open-183700217.html',
  },
]

export function MediaMentions() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize with loading placeholders
    setMediaItems(
      mediaUrls.map((item) => ({
        ...item,
        title: '',
        source: '',
        date: '',
        description: '',
        image: '',
        isLoading: true,
      }))
    )

    // Fetch metadata for each URL
    const fetchMetadataForUrls = async () => {
      const promises = mediaUrls.map(async (item, index) => {
        try {
          const response = await fetch(
            `/api/og-metadata?url=${encodeURIComponent(item.url)}`
          )
          if (!response.ok) {
            throw new Error('Failed to fetch metadata')
          }

          const metadata = await response.json()
          return {
            ...metadata,
            isLoading: false,
          }
        } catch (error) {
          console.error('Error fetching metadata for URL:', item.url, error)
          // Return a fallback item with error state
          return {
            url: item.url,
            title: `Article from ${new URL(item.url).hostname.replace('www.', '')}`,
            source: new URL(item.url).hostname
              .replace('www.', '')
              .split('.')[0],
            date: 'Publication date unavailable',
            description: 'Article description could not be loaded.',
            image: '',
            isLoading: false,
            error: 'Failed to load article metadata',
          }
        }
      })

      // Wait for all promises to resolve
      const results = await Promise.all(promises)
      setMediaItems(results)
      setIsLoading(false)
    }

    fetchMetadataForUrls()
  }, [])

  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
          Media Coverage
        </h2>
        <p className="mt-2 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
          Recent articles, interviews, and press features about Verus and its
          technology.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mediaItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-lg border border-[#E9EFFC] bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
          >
            <div className="relative flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-blue-50/70 to-indigo-50/70 p-4 dark:from-blue-950/50 dark:to-indigo-950/30">
              {item.isLoading ? (
                <div className="h-8 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              ) : (
                <div className="text-center">
                  <div className="text-[24px] font-medium capitalize tracking-tight text-verus-blue dark:text-blue-300 md:text-[28px]">
                    {item.source}
                  </div>
                  <div className="mt-1 text-[12px] text-gray-500 dark:text-gray-400">
                    {item.date}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              {item.isLoading ? (
                // Loading state
                <>
                  <div className="mb-2 h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-1 h-4 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mb-3 h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-3 w-1/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </>
              ) : (
                // Loaded content
                <>
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
                </>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-[14px] text-gray-600 dark:text-gray-300">
          For press inquiries, please contact our media team at{' '}
          <a
            href="mailto:press@veruscoin.io"
            className="text-verus-blue hover:underline dark:text-blue-400"
          >
            press@verus.io
          </a>
        </p>
      </div>
    </div>
  )
}
