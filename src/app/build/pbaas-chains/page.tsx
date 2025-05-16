import type {Metadata} from 'next'

import {PBaaSContent} from '@/features/build/pbaas-chains/content'
import {FeaturesGrid} from '@/features/build/pbaas-chains/features-grid'
import {IoLogoDiscord} from 'react-icons/io5'

import {BodyBgHeroImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'Public Blockchains as a Service | Verus',
  description:
    'Create powerful, interoperable blockchains with all Verus features—secured by worldwide miners and stakers.',
  keywords:
    'PBaaS, blockchain as a service, interoperable blockchains, custom blockchain, chain creation, Verus, multichain',
  openGraph: {
    title: 'Public Blockchains as a Service | Verus',
    description:
      'Create powerful, interoperable blockchains with all Verus features—secured by worldwide miners and stakers.',
    url: '/build/pbaas-chains',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Blockchains as a Service | Verus',
    description:
      'Create powerful, interoperable blockchains with all Verus features—secured by worldwide miners and stakers.',
  },
  alternates: {
    canonical: '/build/pbaas-chains',
  },
}

export default function PBaaSChainPage() {
  return (
    <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
      <BodyBgHeroImages />

      <div className="relative z-10 flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
        <h1 className="text-center text-[32px] font-medium tracking-tight text-white md:text-[75px]">
          Public Blockchains as a Service
        </h1>
        <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
          Create powerful, interoperable blockchains with all Verus
          features—secured by worldwide miners and stakers.
        </p>

        <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
          <a
            href="/build/start"
            className="group flex h-[40px] items-center justify-center rounded-lg border border-white/60 bg-white/90 px-6 text-[14px] font-medium text-black backdrop-blur-xl transition-all duration-300 hover:-translate-y-[1px] hover:border-white/90 hover:bg-white hover:shadow-lg md:h-[50px] md:text-[16px]"
          >
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            Get help from the community
            <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
          </a>
        </div>

        <div className="flex w-full justify-center">
          <FeaturesGrid />
        </div>

        <div className="flex w-full justify-center">
          <PBaaSContent />
        </div>

        <Footer />
      </div>
    </main>
  )
}
