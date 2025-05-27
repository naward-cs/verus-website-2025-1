import {Suspense} from 'react'

import {env} from '@/configs/env'
import {FaMedium} from 'react-icons/fa'

import MediumArticlesLoading from './medium-articles-loading'
import MediumFeed from './medium-feed'

export function MediumArticlesSection() {
  return (
    <section className="w-full pt-16 md:pt-20">
      <div className="mx-auto max-w-[1220px] px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-gray-900 dark:text-white md:text-3xl">
            Latest Articles
          </h2>
          <p className="mx-auto max-w-2xl tracking-tight text-gray-600 dark:text-gray-400">
            Stay up to date with the latest news and developments from the Verus
            community.
          </p>
          <a
            href={env.NEXT_PUBLIC_VERUS_MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-verus-blue hover:underline dark:text-blue-400"
          >
            <FaMedium className="h-4 w-4" />
            Follow Verus on Medium
          </a>
        </div>
        <Suspense fallback={<MediumArticlesLoading />}>
          <MediumFeed />
        </Suspense>
      </div>
    </section>
  )
}
