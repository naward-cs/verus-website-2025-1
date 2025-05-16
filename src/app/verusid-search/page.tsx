import {Metadata} from 'next'

import {Footer} from '@/components/footer'
import {VerusIDSearchPageContent} from '@/components/verusid-search/VerusIDSearchContent'

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

export default function VerusIDSearchPage() {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]"
      />
      <img
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute hidden h-full w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]"
      />

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

            <VerusIDSearchPageContent />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
