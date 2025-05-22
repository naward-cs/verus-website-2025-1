'use server'

import {unstable_cache} from 'next/cache'

import {verificationCheck} from './verification_check'

export const verificationCheckCached = unstable_cache(
  async (data) => {
    return await verificationCheck(data)
  },
  ['verification_check'],
  {revalidate: 5 * 60 * 1000, tags: ['verusId']} // 12 * 60 * 60 *1000 = 12 hours
)
