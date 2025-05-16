import { NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

// Cache configuration
const CACHE_TIME = 15 * 60; // 15 minutes in seconds
let cachedData: { volume: string; timestamp: number } | null = null;

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cachedData && now - cachedData.timestamp < CACHE_TIME * 1000) {
      return NextResponse.json(
        { volume: cachedData.volume, cached: true },
        { status: 200 }
      );
    }

    // Fetch fresh data
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      // Use cache: 'no-store' to always fetch fresh data from the source
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const root = parse(html);

    // First try the exact selector
    let volumeElement = root.querySelector('#verus-basket-volume-24h > div > div:nth-child(15) > div:nth-child(2)');

    if (!volumeElement) {
      // Alternative approach: Find the basket section and look for the value
      const basketSection = root.querySelector('#verus-basket-volume-24h');
      
      if (basketSection) {
        // Look for specific patterns that might contain the volume data
        const basketDivs = basketSection.querySelectorAll('div');
        
        for (let i = 0; i < basketDivs.length; i++) {
          const text = basketDivs[i].text.trim();
          // Look for dollar amounts
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volumeElement = basketDivs[i];
            break;
          }
        }
      }
    }

    if (volumeElement) {
      const volume = volumeElement.text.trim();
      
      // Update cache
      cachedData = {
        volume,
        timestamp: now,
      };
      
      return NextResponse.json({ volume, cached: false }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: 'Volume data not found on the page' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching Verus volume:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve volume data' },
      { status: 500 }
    );
  }
} 