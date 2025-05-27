'use client'

import {useCallback} from 'react'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

/* Asset type filter */

function BrandAssetFilterController() {
  // Function to update search params
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const selectedFilter = searchParams.get('filter') || undefined
  const updateSearchParams = useCallback(
    (newFilter: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('filter', newFilter)

      router.push(pathname + (params.toString() ? '?' + params.toString() : ''))
    },
    [searchParams, router, pathname]
  )
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateSearchParams('all')}
          className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            selectedFilter === 'all' || selectedFilter === undefined
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          All Assets
        </button>

        <button
          onClick={() => updateSearchParams('logo')}
          className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            selectedFilter === 'logo'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Logos
        </button>

        <button
          onClick={() => updateSearchParams('icon')}
          className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            selectedFilter === 'icon'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Icons
        </button>

        <button
          onClick={() => updateSearchParams('wallpaper')}
          className={`rounded-md px-4 py-2 text-[14px] font-medium transition-colors ${
            selectedFilter === 'wallpaper'
              ? 'bg-verus-blue text-white dark:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          Wallpapers
        </button>
      </div>
    </div>
  )
}

export default BrandAssetFilterController
