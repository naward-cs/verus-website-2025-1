import {Metadata} from 'next'

import {Footer} from '@/components/footer'
import {GetVrscSections} from '@/components/get-vrsc/sections'

export const metadata: Metadata = {
  title: 'Get VRSC | Verus',
  description:
    'Multiple ways to acquire VRSC: through Verus DeFi, exchanges, mining, or staking.',
  keywords:
    'get VRSC, buy VRSC, acquire cryptocurrency, Verus coin, crypto exchanges, mining VRSC, staking VRSC',
  openGraph: {
    title: 'Get VRSC | Verus',
    description:
      'Multiple ways to acquire VRSC: through Verus DeFi, exchanges, mining, or staking.',
    url: '/get-vrsc',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get VRSC | Verus',
    description:
      'Multiple ways to acquire VRSC: through Verus DeFi, exchanges, mining, or staking.',
  },
  alternates: {
    canonical: '/get-vrsc',
  },
}

export default function GetVrscPage() {
  return (
    <main className="relative mt-[50px] h-[calc(100vh-50px)] w-screen md:mt-[70px] md:h-[calc(100vh-70px)]">
      {/* Background images - separate for light and dark mode */}
      <img
        src="/img/bg-small.webp"
        alt="Background - light"
        className="fixed absolute h-full w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]"
      />
      <img
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="fixed absolute hidden h-full w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]"
      />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Get VRSC in various ways.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] tracking-tight text-gray-700 dark:text-gray-300 md:text-[20px]">
                Multiple ways to acquire VRSC: through Verus DeFi, exchanges,
                mining, or staking.
              </p>
            </div>

            <GetVrscSections />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
