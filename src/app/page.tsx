import {Metadata} from 'next'

import {IoLogoDiscord} from 'react-icons/io5'

import {Footer} from '@/components/footer'
import {BridgeSection} from '@/components/home/bridge-section'
import {CompareSection} from '@/components/home/compare-section'
import {EarlyAdoptionSection} from '@/components/home/early-adoption-section'
import {EndSection} from '@/components/home/end-section'
import {FeaturesGrid} from '@/components/home/features-grid'
import {GetStartedSection} from '@/components/home/get-started-section'
import {MediumArticlesSection} from '@/components/home/medium-articles-section'
import {ParticipationSection} from '@/components/home/participation-section'
import {ProtocolSection} from '@/components/home/protocol-section'
import {VerusIDSection} from '@/components/home/verusid-section'

export const metadata: Metadata = {
  title: 'The Internet of Value | Verus',
  description:
    'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
  keywords:
    'Verus, blockchain, Web3, cryptocurrency, decentralization, DeFi, identity, privacy, interoperability, scalability',
  openGraph: {
    title: 'The Internet of Value | Verus',
    description:
      'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
    url: '/',
    siteName: 'Verus',
    type: 'website',
    // opengraph-image.png and opengraph-image.alt.txt files are already in the app directory
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Internet of Value | Verus',
    description:
      'A fundamentally different and better protocol to build Web3, and to empower individuals & communities.',
    // twitter-image.png is already in the app directory
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
        <img
          src="/img/hero-bg2-2.webp"
          className="absolute h-full w-full object-cover dark:hidden"
          alt="Hero background - light"
        />
        <img
          src="/img/bg-darkmode.webp"
          className="absolute hidden h-full w-full object-cover dark:block"
          alt="Hero background - dark"
        />
        <div className="relative z-10 flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
          <h1 className="text-center text-[32px] font-medium tracking-tight text-white md:text-[75px]">
            The Internet of Value
          </h1>
          <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
            A fundamentally different and better protocol to build Web3,
            <br className="hidden md:block" /> and to empower individuals &
            communities.
          </p>
          <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
            <a
              href="/build"
              className="group flex h-[40px] items-center justify-center rounded-lg border border-white/60 bg-white/90 px-6 text-[14px] font-medium text-black backdrop-blur-xl transition-all duration-300 hover:-translate-y-[1px] hover:border-white/90 hover:bg-white hover:shadow-lg md:h-[50px] md:text-[16px]"
            >
              Build with Verus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href="https://www.verus.io/discord"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] items-center justify-center gap-2 rounded-lg border border-blue-800/60 bg-blue-950/40 px-6 text-[14px] font-medium text-blue-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-700/80 hover:text-blue-200 hover:shadow-lg md:h-[50px] md:text-[16px]"
            >
              Join the worldwide community
              <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
            </a>
          </div>

          <FeaturesGrid />
          <EarlyAdoptionSection />
          <CompareSection />
          <ProtocolSection />
          <ParticipationSection />
          <VerusIDSection />
          <BridgeSection />
          <GetStartedSection />
          <EndSection />
          <MediumArticlesSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
