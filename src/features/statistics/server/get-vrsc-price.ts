'use server'

import {fetchBridgePrices} from '@/features/ethereum-bridge/server/fetch-bridge-prices'

export async function getVRSCPrice() {
  try {
    const data = await fetchBridgePrices()

    // Get VRSC price in DAI
    if (data.prices) {
      return data.prices.VRSC
    } else {
      throw new Error('VRSC price not available')
    }
  } catch (error) {
    console.error('Error fetching VRSC price:', error)
    return null
  }
}
