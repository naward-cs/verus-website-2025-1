import type {Metadata} from 'next'

import {
  ConsensusSection,
  PrivacySection,
  ScalingSection,
  SmartTransactionsSection,
  TokenomicsSection,
  VisionMissionSection,
} from '@/features/intro/components'

import {BodyBgHeroImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'The Protocol for Everyone | Verus',
  description:
    'Verus is uniquely positioned to empower individuals, communities and developers around the world, sustainably.',
  keywords:
    'blockchain protocol, Web3 technology, cryptocurrency, sustainable blockchain, scalable protocol, Verus introduction',
  openGraph: {
    title: 'The Protocol for Everyone | Verus',
    description:
      'Verus is uniquely positioned to empower individuals, communities and developers around the world, sustainably.',
    url: '/intro',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Protocol for Everyone | Verus',
    description:
      'Verus is uniquely positioned to empower individuals, communities and developers around the world, sustainably.',
  },
  alternates: {
    canonical: '/intro',
  },
}

export default function IntroPage() {
  return (
    <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
      <BodyBgHeroImages />

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="mx-auto max-w-[1220px] text-center">
            <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
              The Protocol for Everyone
            </h1>
            <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white/90 dark:text-white/80 md:max-w-[900px] md:pt-[20px] md:text-[32px]">
              Verus is uniquely positioned to empower individuals, communities
              and developers around the world, sustainably.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <VisionMissionSection />
        </div>

        <div className="flex w-full justify-center">
          <TokenomicsSection />
        </div>

        <div className="flex w-full justify-center">
          <ScalingSection />
        </div>

        <div className="flex w-full justify-center">
          <ConsensusSection />
        </div>

        <div className="flex w-full justify-center">
          <PrivacySection />
        </div>

        <div className="flex w-full justify-center">
          <SmartTransactionsSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}
