import {Metadata} from 'next'

import {Footer} from '@/components/footer'
import {MigrateContent} from '@/components/migrate/content'

export const metadata: Metadata = {
  title: 'Migrate to Verus | Verus',
  description:
    'Bring your token and community to a better, more secure ecosystem while maintaining full Ethereum compatibility.',
  keywords:
    'blockchain migration, token migration, crypto migration, ethereum compatibility, secure token migration, Verus migration',
  openGraph: {
    title: 'Migrate to Verus | Verus',
    description:
      'Bring your token and community to a better, more secure ecosystem while maintaining full Ethereum compatibility.',
    url: '/migrate',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrate to Verus | Verus',
    description:
      'Bring your token and community to a better, more secure ecosystem while maintaining full Ethereum compatibility.',
  },
  alternates: {
    canonical: '/migrate',
  },
}

export default function MigratePage() {
  return (
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

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="mx-auto max-w-[1220px] text-center">
            <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
              Migrate to Verus
            </h1>
            <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white/90 dark:text-white/80 md:max-w-[900px] md:pt-[20px] md:text-[32px]">
              Bring your token and community to a better, more secure ecosystem
              while maintaining full Ethereum compatibility.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <MigrateContent />
        </div>

        <Footer />
      </div>
    </main>
  )
}
