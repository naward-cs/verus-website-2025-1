'use server'

import {unstable_cache} from 'next/cache'

import {fetchProtocolInfo} from './fetch-protocol-info'

export const getProtocolInfo = unstable_cache(
  async () => {
    try {
      const data = await fetchProtocolInfo()

      console.log('Protocol data fetched from API:', data)
      return {
        volume: data.volume24h,
        liquidity: data.vrscLiquidity,
      }
    } catch (error) {
      console.error('Error fetching protocol data:', error)
      return {
        volume: 'N/A',
        liquidity: 'N/A',
      }
    }
  },
  ['protocol-data'],
  {revalidate: 12 * 60 * 1000, tags: ['protocol-data']}
)
