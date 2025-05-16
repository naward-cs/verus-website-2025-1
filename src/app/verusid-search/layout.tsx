import type {ReactNode} from 'react'
import type {Metadata} from 'next'

import {Search} from 'lucide-react'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

type LayoutProps = {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'VerusID Search | Verus',
  description: 'Search and view detailed information on VerusIDs',
  keywords:
    'VerusID, blockchain identity, decentralized identity, profile search, blockchain profiles, Verus',
  openGraph: {
    title: 'VerusID Search | Verus',
    description: 'Search and view detailed information about VerusID profiles',
    url: '/verusid-search',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VerusID Search | Verus',
    description: 'Search and view detailed information on VerusIDs',
  },
  alternates: {
    canonical: '/verusid-search',
  },
}

export default function VerusIDLayout({children}: LayoutProps) {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                VerusID Search
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Search for VerusID information including decentralized profiles.
              </p>
            </div>
            <div className="relative w-full overflow-hidden border border-blue-100/80 bg-white/80 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
              <div className="relative">
                {/* Search header */}
                <div className="mb-6 flex items-center gap-2">
                  <Search className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
                    VerusID Search
                  </h3>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
