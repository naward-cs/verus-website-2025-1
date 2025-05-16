import { NextResponse } from 'next/server';

// Cache configuration - reduced to 60 seconds
// This prevents overwhelming the source while still providing frequent updates
const CACHE_TIME = 60; // 1 minute in seconds
let cachedData: { 
  blocks: string;
  hashRate: string;
  stakingSupply: string;
  timestamp: number;
} | null = null;

// Format hash rate to TH/s (terahashes per second)
function formatHashRate(hashrate: number): string {
  const terahash = hashrate / 1_000_000_000_000;
  return `${terahash.toFixed(1)} TH/s`;
}

// Format number with commas
function formatNumber(num: number): string {
  return num.toLocaleString();
}

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cachedData && now - cachedData.timestamp < CACHE_TIME * 1000) {
      return NextResponse.json(
        { ...cachedData, cached: true },
        { status: 200 }
      );
    }

    // Fetch fresh data - fixed cache configuration
    const response = await fetch('https://api.verus.services', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "curltest",
        method: "getmininginfo",
        params: []
      }),
      cache: 'no-store' // Use only one caching directive
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    
    if (!json.result) {
      throw new Error('Invalid API response: missing result property');
    }

    const data = {
      blocks: formatNumber(json.result.blocks),
      hashRate: formatHashRate(json.result.networkhashps),
      stakingSupply: `${formatNumber(Math.round(json.result.stakingsupply))} VRSC`,
      timestamp: now
    };

    // Update cache
    cachedData = data;
    
    return NextResponse.json(
      { ...data, cached: false },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching mining info:', error);
    // Return cached data if available, otherwise default values
    if (cachedData) {
      return NextResponse.json(
        { 
          ...cachedData, 
          cached: true,
          error: 'Using cached data due to fetch error'
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to retrieve mining info', 
        blocks: "N/A", 
        hashRate: "N/A", 
        stakingSupply: "N/A" 
      },
      { status: 500 }
    );
  }
} 