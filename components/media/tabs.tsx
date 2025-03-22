// Tabs component for navigating between media sections
"use client"

import { useState, useEffect } from "react"
import { PressKit } from "./press-kit"
import { MediaMentions } from "./media-mentions"
import { BrandAssets } from "./brand-assets"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

type TabType = "press-kit" | "media-coverage" | "brand-assets"

export function MediaTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("press-kit")
  const pathname = usePathname()
  
  // Handle direct tab links on initial render and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'press-kit' || hash === 'media-coverage' || hash === 'brand-assets') {
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
        <div className="flex overflow-x-auto scrollbar-hide space-x-1 md:space-x-2">
          <Link
            href={`${pathname}#press-kit`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab("press-kit")
              window.location.hash = "press-kit"
            }}
            className={`py-3 px-5 md:px-8 text-[14px] md:text-[16px] font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "press-kit"
                ? "border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Press Kit
          </Link>
          
          <Link
            href={`${pathname}#media-coverage`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab("media-coverage")
              window.location.hash = "media-coverage"
            }}
            className={`py-3 px-5 md:px-8 text-[14px] md:text-[16px] font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "media-coverage"
                ? "border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Media Coverage
          </Link>
          
          <Link
            href={`${pathname}#brand-assets`}
            onClick={(e) => {
              e.preventDefault()
              setActiveTab("brand-assets")
              window.location.hash = "brand-assets"
            }}
            className={`py-3 px-5 md:px-8 text-[14px] md:text-[16px] font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === "brand-assets"
                ? "border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Brand Assets
          </Link>
        </div>
      </div>
      
      <div className="py-8">
        {activeTab === "press-kit" && <PressKit />}
        {activeTab === "media-coverage" && <MediaMentions />}
        {activeTab === "brand-assets" && <BrandAssets />}
      </div>
    </div>
  )
} 