import type { Metadata } from 'next';



import {WalletComparison, WalletDownloads} from '@/features/wallet/components'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'The Verus Wallet | Verus',
  description:
    'Your ultimate crypto wallet and self-sovereign identity solution.',
  keywords:
    'crypto wallet, blockchain wallet, self-sovereign identity, Verus wallet, identity wallet, digital wallet',
  openGraph: {
    title: 'The Verus Wallet | Verus',
    description:
      'Your ultimate crypto wallet and self-sovereign identity solution.',
    url: '/wallet',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Verus Wallet | Verus',
    description:
      'Your ultimate crypto wallet and self-sovereign identity solution.',
  },
  alternates: {
    canonical: '/wallet',
  },
}

export default function WalletPage() {
  return (
    <BgWrapper>
      <div className="relative z-10 flex flex-col items-center md:px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
            The Verus Wallet
          </h1>
          <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white/90 dark:text-white/80 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
            Your ultimate crypto wallet and self-sovereign identity solution.
          </p>
        </div>

        <WalletDownloads />
        <WalletComparison />
      </div>
    </BgWrapper>
  )
}