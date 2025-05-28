'use server'

import {unstable_cache} from 'next/cache'

import {fetchMiningInfo} from './fetch-mining-info'

// Fetch mining info (used for blockchain section only)
export const getMiningInfo = unstable_cache(
  async () => {
    try {
      const data = await fetchMiningInfo()

      return {
        blockHeight: data.blocks || 'N/A',
        hashRate: data.hashRate || 'N/A',
        stakingAmount: data.stakingSupply || 'N/A',
      }
    } catch (error) {
      console.error('Error fetching mining info:', error)
      return {
        blockHeight: 'N/A',
        hashRate: 'N/A',
        stakingAmount: 'N/A',
      }
    }
  },
  ['mining-info'],
  {revalidate: 60 * 1000, tags: ['mining-info']}
)
