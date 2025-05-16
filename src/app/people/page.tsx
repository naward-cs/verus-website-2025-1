// People Page - Meet the Verus team and community
import {Metadata} from 'next'

import {Footer} from '@/components/footer'
import {PeopleSections} from '@/components/people/sections'

export const metadata: Metadata = {
  title: 'Meet the People Behind Verus | Verus',
  description:
    'Meet the developers, contributors, and community members building the Verus ecosystem.',
  keywords:
    'Verus contributors, blockchain developers, cryptocurrency community, blockchain contributors, open source contributors',
  openGraph: {
    title: 'Meet the People Behind Verus | Verus',
    description:
      'Meet the developers, contributors, and community members building the Verus ecosystem.',
    url: '/people',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the People Behind Verus | Verus',
    description:
      'Meet the developers, contributors, and community members building the Verus ecosystem.',
  },
  alternates: {
    canonical: '/people',
  },
}

export default function PeoplePage() {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]"
      />
      <img
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute hidden h-full w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]"
      />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Meet the people building the Verus ecosystem.
              </h1>
            </div>

            <PeopleSections />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
