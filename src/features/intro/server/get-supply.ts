'use server'

import {unstable_cache} from 'next/cache'

import {fetchSupply} from './fetch-supply'

export const getSupply = unstable_cache(
  async (): Promise<{
    circulatingSupply: number | null
    isEstimate: boolean
  }> => {
    try {
      // Add cache-busting timestamp
      const data = await fetchSupply()

      // Check if we got a valid supply number
      if (typeof data.supply === 'number' && data.supply > 0) {
        return {
          circulatingSupply: data.supply,
          isEstimate: data.isEstimate === true,
        }
      } else {
        console.error('Invalid supply data:', data)
        throw new Error('Invalid supply data')
      }
    } catch (error) {
      console.error('Error fetching supply:', error)
      // Fallback to a reasonable estimate if API fails
      return {circulatingSupply: 75_000_000, isEstimate: true}
    }
  },
  ['money_supply'],
  {revalidate: 43200, tags: ['money_supply']} // 12 hours
)
