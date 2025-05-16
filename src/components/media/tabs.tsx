// Tabs component for navigating between media sections
'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import {usePathname, useSearchParams} from 'next/navigation'

import {BrandAssets} from './brand-assets'
import {MediaMentions} from './media-mentions'
import {PressKit} from './press-kit'

type TabType = 'press-kit' | 'media-coverage' | 'brand-assets'

export function MediaTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('press-kit')
  const pathname = usePathname()

  // Handle direct tab links on initial render and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (
        hash === 'press-kit' ||
        hash === 'media-coverage' ||
        hash === 'brand-assets'
      ) {
        setActiveTab(hash as TabType)
      }
    }

    // Set initial tab based on hash if present
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="scrollbar-hide flex space-x-1 overflow-x-auto md:space-x-2">
          <Link
            href={`${pathname}#press-kit`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab('press-kit')
              window.location.hash = 'press-kit'
            }}
            className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
              activeTab === 'press-kit'
                ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Press Kit
          </Link>

          <Link
            href={`${pathname}#media-coverage`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab('media-coverage')
              window.location.hash = 'media-coverage'
            }}
            className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
              activeTab === 'media-coverage'
                ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Media Coverage
          </Link>

          <Link
            href={`${pathname}#brand-assets`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab('brand-assets')
              window.location.hash = 'brand-assets'
            }}
            className={`whitespace-nowrap border-b-2 px-5 py-3 text-[14px] font-medium transition-colors md:px-8 md:text-[16px] ${
              activeTab === 'brand-assets'
                ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Brand Assets
          </Link>
        </div>
      </div>

      <div className="py-8">
        {activeTab === 'press-kit' && <PressKit />}
        {activeTab === 'media-coverage' && <MediaMentions />}
        {activeTab === 'brand-assets' && <BrandAssets />}
      </div>
    </div>
  )
}
