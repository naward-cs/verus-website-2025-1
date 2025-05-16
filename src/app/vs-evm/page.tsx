import type {Metadata} from 'next'

import {ComparisonTable} from '@/features/vs-evm/comparison-table'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'VM-based Blockchains vs Verus | Verus',
  description:
    "Compare the architectural approaches of traditional VM blockchains with Verus Protocol's built-in functionality.",
  keywords:
    'blockchain comparison, EVM vs Verus, VM blockchain, smart contract alternatives, blockchain architecture, Verus advantage',
  openGraph: {
    title: 'VM-based Blockchains vs Verus | Verus',
    description:
      "Compare the architectural approaches of traditional VM blockchains with Verus Protocol's built-in functionality.",
    url: '/vs-evm',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM-based Blockchains vs Verus | Verus',
    description:
      "Compare the architectural approaches of traditional VM blockchains with Verus Protocol's built-in functionality.",
  },
  alternates: {
    canonical: '/vs-evm',
  },
}

// Updated VS EVM Page with dark mode support and improved styling
export default function VsEvmPage() {
  return (
    <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                VM-based blockchains vs Verus.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Compare the architectural approaches of traditional VM
                blockchains with Verus Protocol's built-in functionality.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
