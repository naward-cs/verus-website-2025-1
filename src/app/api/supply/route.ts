import { NextResponse } from 'next/server';

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = 43200; // 12 hours

// Cached/fallback supply value (accurate as of development time)
const FALLBACK_SUPPLY = 75_000_000;

export async function GET() {
  try {
    console.log('Fetching Verus supply data...');
    
    const response = await fetch('https://explorer.verus.io/ext/getmoneysupply', {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour (single caching directive)
    });

    if (!response.ok) {
      console.error(`Supply API returned status: ${response.status}`);
      throw new Error(`Failed to fetch supply: ${response.status}`);
    }

    const supplyText = await response.text();
    console.log('Raw supply data:', supplyText);
    
    // Validate that we got a number
    const supplyValue = parseFloat(supplyText);
    if (isNaN(supplyValue) || supplyValue <= 0) {
      console.error('Invalid supply value received:', supplyText);
      throw new Error('Invalid supply data received');
    }
    
    const supply = Math.round(supplyValue);
    console.log('Processed supply:', supply);
    
    return NextResponse.json({ 
      supply,
      source: 'api',
      timestamp: Date.now()
    }, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error fetching supply:', error);
    
    // Return a fallback value with clear indication it's an estimate
    return NextResponse.json({ 
      supply: FALLBACK_SUPPLY,
      source: 'fallback',
      isEstimate: true,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: Date.now()
    }, { 
      status: 200, // Still return 200 to avoid breaking the client
      headers: {
        'Cache-Control': 'public, max-age=1800', // Cache for 30 minutes
      }
    });
  }
}