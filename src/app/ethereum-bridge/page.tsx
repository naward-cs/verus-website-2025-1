import type { Metadata } from 'next';



import { env } from '@/configs/env';
import { BridgeContent } from '@/features/ethereum-bridge/components/content';
import {ExternalLink} from 'lucide-react'

import {BgWrapper} from '@/components/bg-wrapper'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Verus-Ethereum Bridge | Verus',
  description:
    'A bridge to the Ethereum network—non-custodial, based on cryptographic proofs & verified by miners and stakers.',
  keywords:
    'blockchain bridge, ethereum bridge, cross-chain, non-custodial, Verus bridge, crypto bridge, decentralized bridge',
  openGraph: {
    title: 'Verus-Ethereum Bridge | Verus',
    description:
      'A bridge to the Ethereum network—non-custodial, based on cryptographic proofs & verified by miners and stakers.',
    url: '/ethereum-bridge',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verus-Ethereum Bridge | Verus',
    description:
      'A bridge to the Ethereum network—non-custodial, based on cryptographic proofs & verified by miners and stakers.',
  },
  alternates: {
    canonical: '/ethereum-bridge',
  },
}

export default function EthereumBridgePage() {
  return (
    <BgWrapper>
      <div className="flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
        <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
          Verus-Ethereum Bridge
        </h1>
        <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white opacity-90 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
          A bridge to the Ethereum network—non-custodial, based on cryptographic
          proofs & verified by miners and stakers.
        </p>

        <div className="mb-16 mt-8 flex flex-col gap-4 md:mb-32 md:flex-row">
          <a
            href={env.NEXT_PUBLIC_VERUS_BRIDGE}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[40px] items-center justify-center rounded-lg border border-white/60 bg-white/90 px-6 text-[14px] font-medium text-black backdrop-blur-xl transition-all duration-300 hover:-translate-y-[1px] hover:border-white/90 hover:bg-white hover:shadow-lg md:h-[50px] md:text-[16px]"
          >
            Go to the bridge website
            <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-[-1px]" />
          </a>
        </div>

        <div className="flex w-full justify-center">
          <BridgeContent />
        </div>
      </div>
    </BgWrapper>
  )
}