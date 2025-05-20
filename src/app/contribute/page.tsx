import type { Metadata } from 'next';



import {ContributionWays} from '@/features/contribute/ways'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Contribute to Verus | Verus',
  description:
    'Help shape the future of blockchain technology by contributing to Verus in various ways—from code and marketing to community support and financial backing.',
  keywords:
    'contribute blockchain, Verus contribution, open source contribution, blockchain development, community support',
  openGraph: {
    title: 'Contribute to Verus | Verus',
    description:
      'Help shape the future of blockchain technology by contributing to Verus in various ways—from code and marketing to community support and financial backing.',
    url: '/contribute',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contribute to Verus | Verus',
    description:
      'Help shape the future of blockchain technology by contributing to Verus in various ways—from code and marketing to community support and financial backing.',
  },
  alternates: {
    canonical: '/contribute',
  },
}

// Contribution Page showing ways to get involved with Verus
export default function ContributePage() {
  return (
    <BgWrapper size="small">
      <div className="mx-auto flex max-w-[1220px] flex-grow flex-col py-8 md:px-8 md:py-16">
        <div className="mb-8 px-4 md:mb-16 md:px-0">
          <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
            Contribute to the Verus ecosystem.
          </h1>
          <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
            Help shape the future of blockchain technology by contributing to
            Verus in various ways—from code and marketing to community support
            and financial backing.
          </p>
        </div>

        <ContributionWays />
      </div>
    </BgWrapper>
  )
}