// People Page - Meet the Verus team and community
import type {Metadata} from 'next'

import {PeopleSections} from '@/features/people/sections'

import {BgWrapper} from '@/components/bg-wrapper'

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
    <BgWrapper size="small">
      <div className="flex flex-col">
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
      </div>
    </BgWrapper>
  )
}
