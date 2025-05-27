'use server'

import {unstable_cache} from 'next/cache'

import {fetchMediumArticles} from './fetch-articles'

export const getMediumArticles = unstable_cache(
  async () => {
    return await fetchMediumArticles()
  },
  ['medium_articles'],
  {revalidate: 24 * 60 * 60 * 1000, tags: ['medium']}
)
