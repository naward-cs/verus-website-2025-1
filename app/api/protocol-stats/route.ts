/*
* Server-side API for fetching Verus protocol statistics
* - Retrieves data from cryptodashboard.faldt.net using the HTML parser
* - Scrapes protocol liquidity data using the specific selector
* - Implements proper caching to reduce load on the source
* - Returns structured JSON response with volume and liquidity data
*/

import { NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

// Cache configuration
const CACHE_TIME = 15 * 60; // 15 minutes in seconds
let cachedData: {
  volume24h: string;
  volume7d: string;
  volume30d: string;
  totalLiquidity: string;
  vrscLiquidity: string;
  timestamp: number;
} | null = null;

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

    // Fetch fresh data
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      cache: 'no-store',
      next: { revalidate: 0 }, // Don't cache in Next.js
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const root = parse(html);

    // Get 24h volume data
    let volume24h = "N/A";
    let volumeElement = root.querySelector('#verus-basket-volume-24h > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volumeElement) {
      // Alternative approach for volume
      const basketSection = root.querySelector('#verus-basket-volume-24h');
      
      if (basketSection) {
        const basketDivs = basketSection.querySelectorAll('div');
        
        for (let i = 0; i < basketDivs.length; i++) {
          const text = basketDivs[i].text.trim();
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volumeElement = basketDivs[i];
            break;
          }
        }
      }
    }
    
    if (volumeElement) {
      volume24h = volumeElement.text.trim();
    }

    // Get 7d volume data
    let volume7d = "N/A";
    let volume7dElement = root.querySelector('#verus-basket-volume-7d > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volume7dElement) {
      // Alternative approach for 7d volume
      const basket7dSection = root.querySelector('#verus-basket-volume-7d');
      
      if (basket7dSection) {
        const basket7dDivs = basket7dSection.querySelectorAll('div');
        
        for (let i = 0; i < basket7dDivs.length; i++) {
          const text = basket7dDivs[i].text.trim();
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volume7dElement = basket7dDivs[i];
            break;
          }
        }
      }
    }
    
    if (volume7dElement) {
      volume7d = volume7dElement.text.trim();
    }

    // Get 30d volume data
    let volume30d = "N/A";
    let volume30dElement = root.querySelector('#verus-basket-volume-30d > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volume30dElement) {
      // Alternative approach for 30d volume
      const basket30dSection = root.querySelector('#verus-basket-volume-30d');
      
      if (basket30dSection) {
        const basket30dDivs = basket30dSection.querySelectorAll('div');
        
        for (let i = 0; i < basket30dDivs.length; i++) {
          const text = basket30dDivs[i].text.trim();
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volume30dElement = basket30dDivs[i];
            break;
          }
        }
      }
    }
    
    if (volume30dElement) {
      volume30d = volume30dElement.text.trim();
    }

    // Get protocol liquidity data using the provided selector
    let totalLiquidity = "N/A";
    let liquidityElement = root.querySelector('#verus-basket-reserves > div > div:nth-child(16) > div:nth-child(2)');
    
    if (!liquidityElement) {
      // Alternative approach for liquidity
      const reservesSection = root.querySelector('#verus-basket-reserves');
      
      if (reservesSection) {
        const reservesDivs = reservesSection.querySelectorAll('div');
        
        for (let i = 0; i < reservesDivs.length; i++) {
          const text = reservesDivs[i].text.trim();
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            liquidityElement = reservesDivs[i];
            break;
          }
        }
      }
    }
    
    if (liquidityElement) {
      totalLiquidity = liquidityElement.text.trim();
    }

    // Get VRSC in liquidity pools
    let vrscLiquidity = "N/A";
    let vrscLiquidityElement = root.querySelector('#prices-card-verus > div > div:nth-child(17) > div:nth-child(2)');
    
    if (!vrscLiquidityElement) {
      // Alternative approach for VRSC liquidity
      const pricesSection = root.querySelector('#prices-card-verus');
      
      if (pricesSection) {
        const pricesDivs = pricesSection.querySelectorAll('div');
        
        for (let i = 0; i < pricesDivs.length; i++) {
          const text = pricesDivs[i].text.trim();
          if (text.includes("VRSC") && /^[\d,]+(\.\d+)? VRSC$/.test(text)) {
            vrscLiquidityElement = pricesDivs[i];
            break;
          }
        }
      }
    }
    
    if (vrscLiquidityElement) {
      vrscLiquidity = vrscLiquidityElement.text.trim();
      console.log('Original VRSC liquidity data:', vrscLiquidity);
      
      // Make sure it has the proper format: Add " VRSC" if it's just a number
      if (/^[\d,]+(\.\d+)?$/.test(vrscLiquidity) && !vrscLiquidity.includes('VRSC')) {
        vrscLiquidity = vrscLiquidity + " VRSC";
        console.log('Reformatted VRSC liquidity to:', vrscLiquidity);
      }
    } else {
      console.log('VRSC liquidity element not found');
    }

    // Ensure there's no space between $ and numbers
    const cleanDollarAmount = (amount: string): string => {
      if (amount.startsWith('$ ')) {
        return amount.replace('$ ', '$');
      }
      return amount;
    };

    // Clean dollar amounts
    volume24h = cleanDollarAmount(volume24h);
    volume7d = cleanDollarAmount(volume7d);
    volume30d = cleanDollarAmount(volume30d);
    totalLiquidity = cleanDollarAmount(totalLiquidity);

    // Prepare data for caching and response
    const data = {
      volume24h,
      volume7d,
      volume30d,
      totalLiquidity,
      vrscLiquidity,
      timestamp: now
    };

    // Update cache
    cachedData = data;
    
    return NextResponse.json(
      { ...data, cached: false },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching protocol stats:', error);
    return NextResponse.json(
      { 
        error: 'Failed to retrieve protocol statistics', 
        volume24h: "N/A", 
        volume7d: "N/A", 
        volume30d: "N/A",
        totalLiquidity: "N/A",
        vrscLiquidity: "N/A"
      },
      { status: 500 }
    );
  }
} 