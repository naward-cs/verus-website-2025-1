'use server'

import {unstable_cache} from 'next/cache'

import {fetchVerusId} from './fetch_verus_id'

export const validateVerusId = unstable_cache(
  async (verusId: string) => {
    return await fetchVerusId(verusId)
  },
  ['verusId'],
  {revalidate: 15 * 60 * 1000, tags: ['verusId']} // 15 * 60 *1000 = 15 minutes
)
