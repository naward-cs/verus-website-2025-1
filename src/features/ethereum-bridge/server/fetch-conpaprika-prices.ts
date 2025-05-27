import 'server-only'

import {env} from '@/configs/env'

enum coinpaprikaMap {
  VRSC = 'vrsc-verus-coin',
  'MKR.vETH' = 'mkr-maker',
  vETH = 'eth-ethereum',
}

export async function fetchCoinpaprikaPrices() {
  const prices = {
    VRSC: 0,
    'MKR.vETH': 0,
    vETH: 0,
    'DAI.vETH': 0,
  }

  try {
    // Fetch all tickers in a single request
    const response = await fetch(env.COINPAPRIKA_URL, {
      cache: 'no-store', // Ensure we always get fresh data
    })
    const data = await response.json()

    // Extract prices for our tokens
    for (const ticker of data) {
      if (ticker.id === coinpaprikaMap['VRSC']) {
        prices['VRSC'] = ticker.quotes.USD.price
      } else if (ticker.id === coinpaprikaMap['MKR.vETH']) {
        prices['MKR.vETH'] = ticker.quotes.USD.price
      } else if (ticker.id === coinpaprikaMap['vETH']) {
        prices['vETH'] = ticker.quotes.USD.price
      }
    }

    // Add default value for DAI (always 1 USD)
    prices['DAI.vETH'] = 1.0

    return prices
  } catch (error) {
    console.error('Error fetching Coinpaprika prices:', error)
    // Return zeros instead of fallback prices
    return prices
  }
}
