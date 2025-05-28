import type {Metadata} from 'next'

import {MiningSteps} from '@/features/mining/steps'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Start Mining VRSC | Verus',
  description:
    'Contribute to network security while earning rewards with your computer or mining hardware.',
  keywords:
    'crypto mining, mobile mining, VRSC mining, Verus coin mining, blockchain mining, cryptocurrency rewards, CPU mining',
  openGraph: {
    title: 'Start Mining VRSC | Verus',
    description:
      'Contribute to network security while earning rewards with your computer or mining hardware.',
    url: '/mining',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Mining VRSC | Verus',
    description:
      'Contribute to network security while earning rewards with your computer or mining hardware.',
  },
  alternates: {
    canonical: '/mining',
  },
}

// Updated Mining Page with dark mode support and improved styling
export default function MiningPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Start mining VRSC and other ecosystem coins.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Contribute to network security while earning rewards with your
                computer or mining hardware.
              </p>
            </div>

            <MiningSteps />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
