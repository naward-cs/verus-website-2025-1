import type {Metadata} from 'next'

import {PapersContent} from '@/features/papers/content'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Published Papers & Literature',
  description:
    'Learn about the technical foundations and innovations behind the Verus Protocol.',
  keywords:
    'blockchain whitepaper, Verus technical documents, cryptocurrency research, blockchain technology papers, Verus documentation',
}

export default function PapersPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Verus published papers & literature.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Learn about the technical foundations and innovations behind the
                Verus Protocol.
              </p>
            </div>

            <PapersContent />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
