import {Metadata} from 'next'

import {Footer} from '@/components/footer'
import {WalletComparison} from '@/components/wallet/comparison'
import {WalletDownloads} from '@/components/wallet/downloads'

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
    <main className="relative mt-[50px] min-h-[calc(100vh-50px)] w-screen md:mt-[70px] md:min-h-[calc(100vh-70px)]">
      {/* Background images with dark mode support */}
      <img
        src="/img/hero-bg2-2.webp"
        alt="Hero background - light"
        className="absolute h-[1200px] w-full -translate-y-[250px] object-cover dark:hidden md:h-[1000px] md:-translate-y-[50px]"
      />
      <img
        src="/img/bg-darkmode.webp"
        alt="Hero background - dark"
        className="absolute hidden h-[1200px] w-full -translate-y-[250px] object-cover dark:block md:h-[1000px] md:-translate-y-[50px]"
      />

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

        <Footer />
      </div>
    </main>
  )
}
