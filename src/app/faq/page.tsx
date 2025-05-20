import type {Metadata} from 'next'

import {FaqContent} from '@/features/faq/content'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Verus',
  description:
    'Find answers to common questions about Verus technology, protocol features, and how to get involved in the ecosystem.',
  keywords:
    'Verus FAQ, blockchain FAQ, cryptocurrency questions, Verus help, Verus information',
  openGraph: {
    title: 'Frequently Asked Questions | Verus',
    description:
      'Find answers to common questions about Verus technology, protocol features, and how to get involved in the ecosystem.',
    url: '/faq',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Verus',
    description:
      'Find answers to common questions about Verus technology, protocol features, and how to get involved in the ecosystem.',
  },
  alternates: {
    canonical: '/faq',
  },
}

export default function FaqPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <h1 className="mb-8 px-4 text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:mb-16 md:px-0 md:text-[40px]">
              Frequently asked questions.
            </h1>

            <FaqContent />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
