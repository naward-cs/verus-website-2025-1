import type { Metadata } from 'next';



import { DigitalControlSection } from '@/features/verusid/digital-control-section';
import { FeaturesGrid } from '@/features/verusid/features-grid';
import { FutureSection } from '@/features/verusid/future-section';
import {RealWorldSection} from '@/features/verusid/real-world-section'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Own Your Digital Future with VerusID | Verus',
  description:
    'Your Identity, Your Control. Self-sovereign identity solutions built on the Verus Protocol.',
  keywords:
    'self-sovereign identity, digital identity, blockchain identity, decentralized identity, VerusID, identity control',
  openGraph: {
    title: 'Own Your Digital Future with VerusID | Verus',
    description:
      'Your Identity, Your Control. Self-sovereign identity solutions built on the Verus Protocol.',
    url: '/verusid',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Own Your Digital Future with VerusID | Verus',
    description:
      'Your Identity, Your Control. Self-sovereign identity solutions built on the Verus Protocol.',
  },
  alternates: {
    canonical: '/verusid',
  },
}

export default function VerusIDPage() {
  return (
    <BgWrapper>
      <div className="flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="mx-auto max-w-[1220px] text-center">
            <h1 className="mb-4 text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:mb-8 md:text-[60px]">
              <span className="text-white">Own Your Digital Future—</span>
              {''}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-300 to-verus-blue bg-clip-text text-transparent dark:from-blue-300 dark:to-verus-blue">
                    Your Identity, Your Control
                  </span>
                  <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500/10 via-verus-blue/20 to-blue-500/10 blur-md" />
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <FeaturesGrid />
        </div>

        <div className="flex w-full justify-center">
          <DigitalControlSection />
        </div>

        <div className="flex w-full justify-center">
          <RealWorldSection />
        </div>

        <div className="flex w-full justify-center">
          <FutureSection />
        </div>
      </div>
    </BgWrapper>
  )
}