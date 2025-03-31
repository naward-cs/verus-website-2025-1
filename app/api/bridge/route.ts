import { NextResponse } from 'next/server';

// Configure for dynamic data on each request
export const dynamic = 'force-dynamic';
// Remove static revalidation since we want fresh data every time

// Interface for currency data from API
interface ReserveCurrency {
  currencyid: string;
  reserves: number;
  priceinreserve: number;
  weight: number;
}

// Interface for Bridge data returned by API
interface BridgeApiResponse {
  supply: number | null;
  prices: {
    [key: string]: number | null;
  };
  reserves: {
    [key: string]: number | null;
  };
  priceComparisons: {
    [key: string]: number | null;
  };
  totalValue: number | null;
  bridgeVethPrice: number | null;
  timestamp: number;
  source: string;
  error?: string;
}

// Currency mapping
const currencyMap: Record<string, string> = {
  "i5w5MuNik5NtLcYmNzcvaoixooEebB6MGV": "VRSC",
  "iGBs4DWztRNvNEJBt4mqHszLxfKTNHTkhM": "DAI.vETH",
  "iCkKJuJScy4Z6NSDK7Mt42ZAB2NEnAE1o4": "MKR.vETH",
  "i9nwxtKuVYX4MSbeULLiK2ttVi6rUEhh4X": "vETH"
};

// Coinpaprika ID mapping
const coinpaprikaMap: Record<string, string> = {
  "VRSC": "vrsc-verus-coin",
  "MKR.vETH": "mkr-maker",
  "vETH": "eth-ethereum"
};

// When API fails, return null values instead of fallback data
const ERROR_RESPONSE: BridgeApiResponse = {
  supply: null,
  prices: {
    "VRSC": null,
    "DAI.vETH": null,
    "MKR.vETH": null,
    "vETH": null
  },
  reserves: {
    "VRSC": null,
    "DAI.vETH": null,
    "MKR.vETH": null,
    "vETH": null
  },
  priceComparisons: {
    "VRSC": null,
    "DAI.vETH": null,
    "MKR.vETH": null,
    "vETH": null
  },
  bridgeVethPrice: null,
  totalValue: null,
  timestamp: Date.now(),
  source: 'error'
};

async function fetchCoinpaprikaPrices() {
  const prices: Record<string, number> = {
    "VRSC": 0,
    "MKR.vETH": 0,
    "vETH": 0
  };

  try {
    // Fetch all tickers in a single request
    const response = await fetch('https://api.coinpaprika.com/v1/tickers', {
      cache: 'no-store' // Ensure we always get fresh data
    });
    const data = await response.json();
    
    // Extract prices for our tokens
    for (const ticker of data) {
      if (ticker.id === coinpaprikaMap["VRSC"]) {
        prices["VRSC"] = ticker.quotes.USD.price;
      } else if (ticker.id === coinpaprikaMap["MKR.vETH"]) {
        prices["MKR.vETH"] = ticker.quotes.USD.price;
      } else if (ticker.id === coinpaprikaMap["vETH"]) {
        prices["vETH"] = ticker.quotes.USD.price;
      }
    }

    // Add default value for DAI (always 1 USD)
    prices["DAI.vETH"] = 1.0;
    
    return prices;
  } catch (error) {
    console.error("Error fetching Coinpaprika prices:", error);
    // Return zeros instead of fallback prices
    return {
      "VRSC": 0,
      "DAI.vETH": 0,
      "MKR.vETH": 0,
      "vETH": 0
    };
  }
}

export async function GET() {
  try {
    console.log('Fetching Verus Bridge data...');
    
    // Fetch data from Verus API and Coinpaprika in parallel
    const [verusResponse, coinpaprikaPrices] = await Promise.all([
      fetch('https://api.verus.services', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "fetch",
          method: "getcurrency",
          params: ["bridge.veth"]
        }),
        cache: 'no-store' // Ensure we always get fresh data
      }),
      fetchCoinpaprikaPrices()
    ]);

    if (!verusResponse.ok) {
      console.error(`Bridge API returned status: ${verusResponse.status}`);
      throw new Error(`Failed to fetch bridge data: ${verusResponse.status}`);
    }

    const data = await verusResponse.json();
    
    if (!data.result || !data.result.bestcurrencystate) {
      throw new Error('Invalid API response structure');
    }

    const bridgeState = data.result.bestcurrencystate;
    
    // Extract supply
    const supply = bridgeState.supply || 0;
    
    // Extract reserve currencies
    const reserves: Record<string, number> = {};
    const prices: Record<string, number> = {};
    let daiReserves = 0;
    
    // First pass to get all reserves and identify DAI reserves
    bridgeState.reservecurrencies.forEach((currency: ReserveCurrency) => {
      const currencyName = currencyMap[currency.currencyid];
      if (currencyName) {
        reserves[currencyName] = currency.reserves;
        if (currencyName === "DAI.vETH") {
          daiReserves = currency.reserves;
        }
      }
    });
    
    // Calculate prices based on DAI reserves
    for (const currencyName in reserves) {
      if (currencyName === "DAI.vETH") {
        prices[currencyName] = 1.0; // DAI price in DAI is always 1
      } else {
        // Price = Reserves of DAI / Reserves of currency
        prices[currencyName] = daiReserves / reserves[currencyName];
      }
    }
    
    // Calculate Bridge.vETH price: (DAI reserves × number of currencies) / Supply of Bridge.vETH
    const numCurrencies = Object.keys(reserves).length;
    const bridgeVethPrice = (daiReserves * numCurrencies) / supply;
    
    // Calculate total value of liquidity: Bridge.vETH supply × Bridge.vETH price in DAI
    const totalValue = supply * bridgeVethPrice;
    
    // Calculate price comparisons (percentage difference from Coinpaprika)
    const priceComparisons: Record<string, number> = {};
    for (const currency in prices) {
      if (currency === "DAI.vETH") {
        priceComparisons[currency] = 0.0; // DAI is always the same
      } else if (coinpaprikaPrices[currency] && coinpaprikaPrices[currency] > 0) {
        // Calculate percentage difference: (bridge_price - coinpaprika_price) / coinpaprika_price * 100
        const priceDiff = ((prices[currency] - coinpaprikaPrices[currency]) / coinpaprikaPrices[currency]) * 100;
        priceComparisons[currency] = parseFloat(priceDiff.toFixed(2));
      } else {
        priceComparisons[currency] = 0.0;
      }
    }
    
    const responseData: BridgeApiResponse = {
      supply,
      prices,
      reserves,
      priceComparisons,
      bridgeVethPrice,
      totalValue,
      timestamp: Date.now(),
      source: 'api'
    };
    
    // Return without Cache-Control header
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching bridge data:', error);
    
    // Return null values without Cache-Control header
    return NextResponse.json({ 
      ...ERROR_RESPONSE,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: Date.now()
    }, { 
      status: 200 // Still return 200 to avoid breaking the client
    });
  }
} 