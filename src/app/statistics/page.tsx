// Ensures the page is rendered dynamically

import type {Metadata} from 'next'

import {ProtocolStatistics} from '@/features/statistics/components/protocol-statistics'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Protocol Statistics | Verus',
  description:
    'Real-time statistics for the Verus protocol including network metrics, market data, and ecosystem growth.',
  keywords:
    'Verus statistics, blockchain metrics, crypto statistics, Verus network data, VerusID statistics, PBaaS stats',
  openGraph: {
    title: 'Protocol Statistics | Verus',
    description:
      'Real-time statistics for the Verus protocol including network metrics, market data, and ecosystem growth.',
    url: '/statistics',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protocol Statistics | Verus',
    description:
      'Real-time statistics for the Verus protocol including network metrics, market data, and ecosystem growth.',
  },
  alternates: {
    canonical: '/statistics',
  },
}

export default function StatisticsPage() {
  return (
    <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Verus network statistics.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] tracking-tight text-gray-700 dark:text-gray-300 md:text-[20px]">
                Real-time metrics and statistics about the Verus network,
                ecosystem, and financial data.
              </p>
            </div>

            <ProtocolStatistics />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
