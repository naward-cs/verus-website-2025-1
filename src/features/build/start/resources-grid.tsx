import { Suspense } from 'react';



import {developerResources} from '@/data/resource-list'

import {CliSection} from './cli_section'
import {ResourceCard} from './resource_card'
import {TestnetSection} from './testnet_section'





export function ResourcesGrid() {
  return (
    <div className="mb-16 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:mb-20">
      <div className="grid grid-cols-1 divide-y divide-gray-200/70 dark:divide-gray-700/30 md:grid-cols-2 md:divide-x md:divide-y-0">
        <TestnetSection />
        <Suspense
          fallback={
            <div className="relative animate-pulse overflow-hidden p-10 md:p-14">
              <div className="mb-4 h-8 w-48 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          }
        >
          <CliSection />
        </Suspense>
        {developerResources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  )
}