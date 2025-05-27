import 'server-only'

import {env} from '@/configs/env'

// Configure for dynamic data on each request
export const dynamic = 'force-dynamic'

// Interface for currency data from API
interface ReserveCurrency {
  currencyid: string
  reserves: number
  priceinreserve: number
  weight: number
}

//TODO: FIXME make currencyMap more of an enum
// Currency mapping
const currencyMap: Record<string, string> = {
  i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV: 'VRSC',
  iGBs4DWztRNvNEJBt4mqHszLxfKTNHTkhM: 'DAI.vETH',
  iCkKJuJScy4Z6NSDK7Mt42ZAB2NEnAE1o4: 'MKR.vETH',
  i9nwxtKuVYX4MSbeULLiK2ttVi6rUEhh4X: 'vETH',
} as const

export async function fetchBridgePrices() {
  try {
    // Fetch all tickers in a single request
    const response = await fetch(env.VERUS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'fetch',
        method: 'getcurrency',
        params: ['bridge.veth'],
      }),
      cache: 'no-store', // Ensure we always get fresh data
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch bridge data: ${response.status}`)
    }
    const data = await response.json()

    if (!data.result || !data.result.bestcurrencystate) {
      throw new Error('Invalid API response structure')
    }

    const bridgeState = data.result.bestcurrencystate

    // Extract supply
    const supply = (bridgeState.supply as number) || 0

    // Extract reserve currencies
    const reserveCurrencies: Record<string, number> = {}
    const prices: Record<string, number> = {}
    let daiReserves = 0

    // First pass to get all reserves and identify DAI reserves
    bridgeState.reservecurrencies.forEach((currency: ReserveCurrency) => {
      const currencyName = currencyMap[currency.currencyid]
      if (currencyName) {
        reserveCurrencies[currencyName] = currency.reserves
        if (currencyName === 'DAI.vETH') {
          daiReserves = currency.reserves
        }
      }
    })

    // Calculate prices based on DAI reserves
    for (const currencyName in reserveCurrencies) {
      if (currencyName === 'DAI.vETH') {
        prices[currencyName] = 1.0 // DAI price in DAI is always 1
      } else {
        // Price = Reserves of DAI / Reserves of currency
        prices[currencyName] = daiReserves / reserveCurrencies[currencyName]
      }
    }

    // Calculate Bridge.vETH price: (DAI reserves × number of currencies) / Supply of Bridge.vETH
    const numCurrencies = Object.keys(reserveCurrencies).length
    const bridgeVethPrice = (daiReserves * numCurrencies) / supply

    // Calculate total value of liquidity: Bridge.vETH supply × Bridge.vETH price in DAI
    const totalValue = supply * bridgeVethPrice

    return {
      supply,
      prices,
      reserveCurrencies,
      bridgeVethPrice,
      totalValue,
      timestamp: Date.now(),
      source: 'api',
    }
  } catch (error) {
    console.error('Error fetching bridge data:', error)
    return {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: Date.now(),
    }
  }
}
