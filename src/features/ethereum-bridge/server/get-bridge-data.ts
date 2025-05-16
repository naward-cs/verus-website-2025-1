'use server'

import {fetchBridgePrices} from "./fetch-bridge-prices"
import {fetchCoinpaprikaPrices} from "./fetch-conpaprika-prices"




// When API fails, return undefined values instead of fallback data
const ERROR_RESPONSE = {
  supply: undefined,
  prices: {
    VRSC: undefined,
    'DAI.vETH': undefined,
    'MKR.vETH': undefined,
    vETH: undefined,
  },
  reserveCurrencies: {
    VRSC: undefined,
    'DAI.vETH': undefined,
    'MKR.vETH': undefined,
    vETH: undefined,
  },
  priceComparisons: {
    VRSC: undefined,
    'DAI.vETH': undefined,
    'MKR.vETH': undefined,
    vETH: undefined,
  },
  bridgeVethPrice: undefined,
  totalValue: undefined,
  timestamp: Date.now(),
  source: 'error',
}

export type BridgeDataReturn = ReturnType<typeof getBridgeData>

export const getBridgeData = async () => {
  try {
    console.log('Fetching Verus Bridge data...')

    const [verusResponse, coinpaprikaPrices] = await Promise.all([
  fetchBridgePrices(),
      fetchCoinpaprikaPrices(),
    ])
    //lets check for errors
    if (!!verusResponse.error || coinpaprikaPrices['DAI.vETH'] === 0) {
      throw new Error('Network response was not ok')
    }
    // Calculate price comparisons (percentage difference from Coinpaprika)
    const priceComparisons = {
      VRSC: 0.0,
      'DAI.vETH': 0.0,
      'MKR.vETH': 0.0,
      vETH: 0.0,
    }
    for (const currency in verusResponse.prices) {
      if (currency === 'DAI.vETH') {
        priceComparisons[currency] = 0.0 // DAI is always the same
      } else if (
        coinpaprikaPrices[currency as keyof typeof coinpaprikaPrices] &&
        coinpaprikaPrices[currency as keyof typeof coinpaprikaPrices] > 0
      ) {
        // Calculate percentage difference: (bridge_price - coinpaprika_price) / coinpaprika_price * 100
        const priceDiff =
          ((verusResponse.prices[
            currency
          ] -
            coinpaprikaPrices[currency as keyof typeof coinpaprikaPrices]) /
            coinpaprikaPrices[currency as keyof typeof coinpaprikaPrices]) *
          100
        priceComparisons[currency as keyof typeof coinpaprikaPrices] =
          parseFloat(priceDiff.toFixed(2))
      } else {
        priceComparisons[currency as keyof typeof coinpaprikaPrices] = 0.0
      }
    }
    return {
      ...verusResponse,
      priceComparisons,
    }
  } catch (error) {
    console.error('Error fetching bridge data:', error)
    return {
      ...ERROR_RESPONSE,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: Date.now(),
    }
  }
}
