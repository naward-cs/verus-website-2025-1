'use server';

import type { VerusIdentity } from './fetch_verus_id';



import { unstable_cache } from 'next/cache';



import { fetchVerusProfile } from './fetch_verus_profile';





export const getVerusProfile = unstable_cache(
  async (identity?: VerusIdentity) => {
    return await fetchVerusProfile(identity)
  },
  ['verus_profile_arweave'],
  {revalidate: 5 * 60 * 1000, tags: ['verusId']} // 12 * 60 * 60 *1000 = 12 hours
)