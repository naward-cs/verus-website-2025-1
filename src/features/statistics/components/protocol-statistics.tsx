/*
 * Protocol Statistics Component
 * - Server component serves as layout container
 * - Initial data fetched server-side for SEO and fast initial render (Price, Blockchain Info)
 * - Other components (EcosystemStatsSection) fetch their own live data for up-to-date statistics
 * - Displays Price and Blockchain sections side-by-side on desktop
 * - Removed Volume and Liquidity sections due to unreliable external API
 * - Added link to external dashboard for detailed DeFi stats
 * - Implements hybrid server/client rendering for optimal user experience
 */

import {Suspense} from 'react'

import {env} from '@/configs/env'
import {ExternalLink} from 'lucide-react'

import {EcosystemStatsSection} from './sections/ecosystem-stats-section'
import {MainStatisticsGrid} from './sections/main-section'
import {MainSectionSkeleton} from './sections/main-section-skeleton'

// Import smaller components

// Main component that fetches data and passes it to UI components
export function ProtocolStatistics() {
  return (
    <div className="px-4 md:px-0">
      {/* Main Statistics Grid */}
      <Suspense fallback={<MainSectionSkeleton />}>
        <MainStatisticsGrid />
      </Suspense>

      {/* Link to External Dashboard */}
      <div className="mb-8 px-4 text-center">
        <p className="text-[15px] text-gray-600 dark:text-gray-400">
          For more in-depth protocol DeFi information, visit the
          <a
            href={env.NEXT_PUBLIC_CRYPTO_DASHBOARD}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Verus Community Dashboard
          </a>
          .
        </p>
      </div>

      {/* Ecosystem Stats */}
      <EcosystemStatsSection />

      {/* Data Attribution */}
      <div className="mb-8 text-center">
        <p className="flex flex-wrap items-center justify-center gap-1 text-[14px] text-gray-500 dark:text-gray-400">
          Data provided by
          <a
            href={env.NEXT_PUBLIC_CRYPTO_DASHBOARD}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            cryptodashboard.faldt.net <ExternalLink className="h-3 w-3" />
          </a>
          <span className="mx-1">•</span>
          <a
            href="https://veruswisdom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 flex items-center gap-1 text-blue-600 hover:underline dark:text-blue-400"
          >
            veruswisdom.com <ExternalLink className="h-3 w-3" />
          </a>
          <span className="mx-1">•</span>
          <span className="mx-1">Verus API</span>
        </p>
      </div>
    </div>
  )
}
