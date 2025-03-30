/*
* Server component for displaying Verus Protocol Statistics
* - Uses consistent blue gradients to match site aesthetic
* - Features large, impactful metrics with gradient text
* - Fetches real-time data from multiple sources
* - Split into smaller, more maintainable components
* - Implements server-side data fetching with proper error handling
*/

import { Zap, Server, Bitcoin, BarChart3, DollarSign, Droplet, Coins, Layers, Users, Landmark, Network, ArrowUpDown, ChevronUp, ChevronDown, ExternalLink, Activity } from "lucide-react"


// Import smaller components
import { PriceSection } from "@/components/statistics/sections/price-section"
import { VolumeSection } from "@/components/statistics/sections/volume-section"
import { BlockchainSection } from "@/components/statistics/sections/blockchain-section"
import { LiquiditySection } from "@/components/statistics/sections/liquidity-section"
import { EcosystemStatsSection } from "@/components/statistics/sections/ecosystem-stats-section"

// Fetch protocol data from our API endpoint
async function fetchProtocolData() {
  try {
    // Server component can fetch directly from API
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/protocol-stats`, {
      cache: 'no-store',
      next: { revalidate: 300 } // Cache for 5 minutes on the server
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      volume24h: data.volume24h || "N/A",
      volume7d: data.volume7d || "N/A", 
      volume30d: data.volume30d || "N/A",
      totalLiquidity: data.totalLiquidity || "N/A",
      vrscLiquidity: data.vrscLiquidity || "N/A"
    };
  } catch (error) {
    console.error("Error fetching protocol data:", error);
    return {
      volume24h: "N/A",
      volume7d: "N/A",
      volume30d: "N/A",
      totalLiquidity: "N/A",
      vrscLiquidity: "N/A"
    };
  }
}

// Fetch circulating supply
async function fetchCirculatingSupply() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/supply`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      console.error(`Supply API returned status: ${response.status}`);
      throw new Error(`Failed to fetch supply: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check if we got a valid supply number
    if (typeof data.supply === 'number' && data.supply > 0) {
      return data.supply;
    } else {
      console.error('Invalid supply data:', data);
      throw new Error('Invalid supply data');
    }
  } catch (error) {
    console.error('Error fetching supply:', error);
    // Fallback to a reasonable estimate if API fails
    return 75_000_000;
  }
}

// Fetch VRSC price from bridge API
async function fetchVRSCPrice() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/bridge`, {
      cache: 'no-store',
      next: { revalidate: 300 } // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    // Get VRSC price in DAI
    if (data.prices && data.prices.VRSC !== null) {
      return data.prices.VRSC;
    } else {
      throw new Error('VRSC price not available');
    }
  } catch (error) {
    console.error('Error fetching VRSC price:', error);
    return null;
  }
}

// Fetch mining info
async function fetchMiningInfo() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/mining-info`, {
      cache: 'no-store',
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mining info: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      blockHeight: data.blocks || "N/A",
      hashRate: data.hashRate || "N/A",
      stakingAmount: data.stakingSupply || "N/A"
    };
  } catch (error) {
    console.error("Error fetching mining info:", error);
    return {
      blockHeight: "N/A",
      hashRate: "N/A",
      stakingAmount: "N/A"
    };
  }
}

// Calculate the percentage of VRSC in liquidity pools
function calculateVrscLiquidityPercentage(vrscLiquidity: string, circulatingSupply: number | null): string {
  if (vrscLiquidity === "N/A" || !circulatingSupply) return "N/A";
  
  let vrscLiquidityAmount: number | null = null;
  
  // Try to match the format with "VRSC" suffix first
  const vrscLiquidityMatch = vrscLiquidity.match(/^([\d,]+)(\.\d+)? VRSC$/);
  if (vrscLiquidityMatch) {
    vrscLiquidityAmount = parseFloat(vrscLiquidityMatch[1].replace(/,/g, ''));
  } else {
    // If no match with VRSC suffix, try to parse the number directly
    // Remove any commas and try to convert to number
    const cleanedValue = vrscLiquidity.replace(/,/g, '');
    if (!isNaN(parseFloat(cleanedValue))) {
      vrscLiquidityAmount = parseFloat(cleanedValue);
    }
  }
  
  // If we couldn't parse a valid number, return N/A
  if (vrscLiquidityAmount === null || isNaN(vrscLiquidityAmount)) {
    console.error('Failed to parse VRSC liquidity amount:', vrscLiquidity);
    return "N/A";
  }
  
  // Calculate percentage
  const percentage = (vrscLiquidityAmount / circulatingSupply) * 100;
  
  return percentage.toFixed(2) + "%";
}

// Calculate staking percentage
function calculateStakingPercentage(stakingAmount: string, circulatingSupply: number | null): string {
  if (stakingAmount === "N/A" || !circulatingSupply) return "N/A";
  
  // Extract the numeric part from the staking amount string (e.g., "15,423,890 VRSC" -> 15423890)
  const stakingMatch = stakingAmount.match(/^([\d,]+)(\.\d+)? VRSC$/);
  if (!stakingMatch) return "N/A";
  
  const stakingVrscAmount = parseFloat(stakingMatch[1].replace(/,/g, ''));
  
  // Calculate percentage
  const percentage = (stakingVrscAmount / circulatingSupply) * 100;
  
  return percentage.toFixed(2) + "%";
}

// Main component that fetches data and passes it to UI components
export async function ProtocolStatistics() {
  // Fetch all data in parallel
  const [protocolData, circulatingSupply, vrscPrice, miningInfo] = await Promise.all([
    fetchProtocolData(),
    fetchCirculatingSupply(),
    fetchVRSCPrice(),
    fetchMiningInfo()
  ]);
  
  // Calculate market cap
  let marketCap = "N/A";
  if (vrscPrice !== null && circulatingSupply !== null) {
    const marketCapValue = vrscPrice * circulatingSupply;
    marketCap = `$${marketCapValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  }

  // Format price
  const formattedPrice = vrscPrice !== null 
    ? `$${vrscPrice.toFixed(2)}` 
    : "N/A";
    
  // Calculate the percentage of VRSC in liquidity pools
  const vrscLiquidityPercent = calculateVrscLiquidityPercentage(protocolData.vrscLiquidity, circulatingSupply);
  
  // Calculate the percentage of VRSC being staked
  const stakingPercentage = calculateStakingPercentage(miningInfo.stakingAmount, circulatingSupply);

  // Format circulating supply
  const formattedCirculatingSupply = circulatingSupply 
    ? circulatingSupply.toLocaleString() + " VRSC"
    : "Loading...";

  // Define max supply
  const maxSupply = 83540184;
  
  // Format max supply
  const formattedMaxSupply = maxSupply.toLocaleString() + " VRSC";

  return (
    <div className="px-4 md:px-0">
      {/* Main Statistics Grid */}
      <div className="w-full rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800 mb-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
          {/* Price Section */}
          <PriceSection 
            price={formattedPrice}
            marketCap={marketCap}
            circulatingSupply={formattedCirculatingSupply}
            maxSupply={formattedMaxSupply}
          />
          
          {/* Volume Section */}
          <VolumeSection 
            volume24h={protocolData.volume24h}
            volume7d={protocolData.volume7d}
            volume30d={protocolData.volume30d}
          />
          
          {/* Blockchain Section */}
          <BlockchainSection 
            blockHeight={miningInfo.blockHeight}
            hashRate={miningInfo.hashRate}
            stakingAmount={miningInfo.stakingAmount}
            stakingPercentage={stakingPercentage}
          />
          
          {/* Liquidity Section */}
          <LiquiditySection 
            totalLiquidity={protocolData.totalLiquidity}
            vrscLiquidity={protocolData.vrscLiquidity}
            vrscLiquidityPercent={vrscLiquidityPercent}
          />
        </div>
      </div>
      
      {/* Ecosystem Stats */}
      <EcosystemStatsSection />
      
      {/* Data Attribution */}
      <div className="text-center mb-8">
        <p className="text-[14px] text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 flex-wrap">
          Data provided by 
          <a 
            href="https://cryptodashboard.faldt.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mx-1"
          >
            cryptodashboard.faldt.net <ExternalLink className="h-3 w-3" />
          </a>
          <span className="mx-1">•</span>
          <a 
            href="https://veruswisdom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mx-1"
          >
            veruswisdom.com <ExternalLink className="h-3 w-3" />
          </a>
          <span className="mx-1">•</span>
          <span className="mx-1">Verus API</span>
        </p>
      </div>
    </div>
  )
} 