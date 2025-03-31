/*
* Server-side API for fetching Verus protocol statistics
* - Retrieves data from cryptodashboard.faldt.net using the HTML parser
* - Implements strict data validation and sanitization
* - Implements minimal caching to prevent overwhelming the source
* - Returns structured JSON response with volume and liquidity data
*/

import { NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

// Cache configuration - reduced to 60 seconds
// This prevents overwhelming the source while still providing frequent updates
const CACHE_TIME = 60; // 1 minute in seconds
let cachedData: {
  volume24h: string;
  volume7d: string;
  volume30d: string;
  totalLiquidity: string;
  vrscLiquidity: string;
  timestamp: number;
} | null = null;

// Response size limit - 1MB
const MAX_RESPONSE_SIZE = 1 * 1024 * 1024;

// Strict validation functions
const validateCurrencyValue = (value: string): boolean => {
  // Accept only properly formatted currency values: $X,XXX.XX
  const currencyPattern = /^\$[\d,]+(\.\d+)?$/;
  return currencyPattern.test(value);
};

const validateVrscValue = (value: string): boolean => {
  // Accept only properly formatted VRSC values: X,XXX.XX VRSC
  const vrscPattern = /^[\d,]+(\.\d+)?\s*VRSC$/i;
  return vrscPattern.test(value);
};

// Safely extract text from an element with validation
const extractCurrencyValue = (element: any): string => {
  if (!element) return "N/A";
  
  const text = element.text?.trim() || "";
  return validateCurrencyValue(text) ? text : "N/A";
};

const extractVrscValue = (element: any): string => {
  if (!element) return "N/A";
  
  const text = element.text?.trim() || "";
  return validateVrscValue(text) ? text : "N/A";
};

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
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      cache: 'no-store' // Use only one caching directive
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Verify content type (optional check)
    const contentType = response.headers.get('content-type');
    if (contentType && !contentType.includes('text/html')) {
      throw new Error('Unexpected content type from external source');
    }

    // Apply size limit to response
    const html = await response.text();
    if (html.length > MAX_RESPONSE_SIZE) {
      throw new Error('Response exceeds size limit');
    }

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
          const text = basketDivs[i].text?.trim() || "";
          if (validateCurrencyValue(text)) {
            volumeElement = basketDivs[i];
            break;
          }
        }
      }
    }
    
    volume24h = extractCurrencyValue(volumeElement);

    // Get 7d volume data
    let volume7d = "N/A";
    let volume7dElement = root.querySelector('#verus-basket-volume-7d > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volume7dElement) {
      // Alternative approach for 7d volume
      const basket7dSection = root.querySelector('#verus-basket-volume-7d');
      
      if (basket7dSection) {
        const basket7dDivs = basket7dSection.querySelectorAll('div');
        
        for (let i = 0; i < basket7dDivs.length; i++) {
          const text = basket7dDivs[i].text?.trim() || "";
          if (validateCurrencyValue(text)) {
            volume7dElement = basket7dDivs[i];
            break;
          }
        }
      }
    }
    
    volume7d = extractCurrencyValue(volume7dElement);

    // Get 30d volume data
    let volume30d = "N/A";
    let volume30dElement = root.querySelector('#verus-basket-volume-30d > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volume30dElement) {
      // Alternative approach for 30d volume
      const basket30dSection = root.querySelector('#verus-basket-volume-30d');
      
      if (basket30dSection) {
        const basket30dDivs = basket30dSection.querySelectorAll('div');
        
        for (let i = 0; i < basket30dDivs.length; i++) {
          const text = basket30dDivs[i].text?.trim() || "";
          if (validateCurrencyValue(text)) {
            volume30dElement = basket30dDivs[i];
            break;
          }
        }
      }
    }
    
    volume30d = extractCurrencyValue(volume30dElement);

    // Get protocol liquidity data using the provided selector
    let totalLiquidity = "N/A";
    let liquidityElement = root.querySelector('#verus-basket-reserves > div > div:nth-child(16) > div:nth-child(2)');
    
    if (!liquidityElement) {
      // Alternative approach for liquidity
      const reservesSection = root.querySelector('#verus-basket-reserves');
      
      if (reservesSection) {
        const reservesDivs = reservesSection.querySelectorAll('div');
        
        for (let i = 0; i < reservesDivs.length; i++) {
          const text = reservesDivs[i].text?.trim() || "";
          if (validateCurrencyValue(text)) {
            liquidityElement = reservesDivs[i];
            break;
          }
        }
      }
    }
    
    totalLiquidity = extractCurrencyValue(liquidityElement);

    // Get VRSC in liquidity pools
    let vrscLiquidity = "N/A";
    let vrscLiquidityElement = root.querySelector('#prices-card-verus > div > div:nth-child(17) > div:nth-child(2)');
    
    if (!vrscLiquidityElement) {
      // Alternative approach for VRSC liquidity
      const pricesSection = root.querySelector('#prices-card-verus');
      
      if (pricesSection) {
        const pricesDivs = pricesSection.querySelectorAll('div');
        
        for (let i = 0; i < pricesDivs.length; i++) {
          const text = pricesDivs[i].text?.trim() || "";
          // Basic pattern check before more detailed validation
          if (text.includes("VRSC")) {
            // Apply strict validation
            if (validateVrscValue(text)) {
              vrscLiquidityElement = pricesDivs[i];
              break;
            }
          }
        }
      }
    }
    
    vrscLiquidity = extractVrscValue(vrscLiquidityElement);

    // Ensure there's no space between $ and numbers (additional sanitization)
    const cleanDollarAmount = (amount: string): string => {
      if (amount === "N/A") return amount;
      if (amount.startsWith('$ ')) {
        amount = amount.replace('$ ', '$');
      }
      // Final validation check
      return validateCurrencyValue(amount) ? amount : "N/A";
    };

    // Clean dollar amounts
    volume24h = cleanDollarAmount(volume24h);
    volume7d = cleanDollarAmount(volume7d);
    volume30d = cleanDollarAmount(volume30d);
    totalLiquidity = cleanDollarAmount(totalLiquidity);

    // Ensure VRSC value is properly formatted
    const cleanVrscAmount = (amount: string): string => {
      if (amount === "N/A") return amount;
      // Make sure it has the proper format: Add " VRSC" if it's just a number
      if (/^[\d,]+(\.\d+)?$/.test(amount) && !amount.includes('VRSC')) {
        amount = amount + " VRSC";
      }
      // Final validation check
      return validateVrscValue(amount) ? amount : "N/A";
    };
    
    vrscLiquidity = cleanVrscAmount(vrscLiquidity);

    // Prepare sanitized data for caching and response
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