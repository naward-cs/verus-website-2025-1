import type {Metadata} from 'next'

import {TimelineClient} from '@/features/milestones/timeline'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Verus Milestones',
  description:
    'Tracking the evolution of Verus from genesis to a comprehensive blockchain ecosystem.',
  keywords:
    'blockchain history, Verus timeline, cryptocurrency development, blockchain milestones, Verus evolution',
}

// Updated Milestones Page with dark mode support and improved styling
export default function MilestonesPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Major milestones over the years.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Tracking the evolution of Verus from genesis to a comprehensive
                blockchain ecosystem.
              </p>
            </div>

            <TimelineClient />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
