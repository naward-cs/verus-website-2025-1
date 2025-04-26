/*
 * Protocol Statistics Component
 * - Server component serves as layout container
 * - Initial data fetched server-side for SEO and fast initial render (Price, Blockchain Info)
 * - Other components (EcosystemStatsSection) fetch their own live data for up-to-date statistics
 * - Displays Price and Blockchain sections side-by-side on desktop
 * - Removed Volume and Liquidity sections due to unreliable external API
 * - Added link to external dashboard for detailed DeFi stats
 * - Implements hybrid server/client rendering for optimal user experience
 */

import {
  Zap,
  Server,
  Bitcoin,
  BarChart3,
  DollarSign,
  Layers,
  Users,
  Landmark,
  Network,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Activity,
} from "lucide-react";

// Import smaller components
import { PriceSection } from "@/components/statistics/sections/price-section";
import { BlockchainSection } from "@/components/statistics/sections/blockchain-section";
import { EcosystemStatsSection } from "@/components/statistics/sections/ecosystem-stats-section";

// Fetch circulating supply (used for price section only)
async function fetchCirculatingSupply() {
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/supply`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour (single caching directive)
      }
    );

    if (!response.ok) {
      console.error(`Supply API returned status: ${response.status}`);
      throw new Error(`Failed to fetch supply: ${response.status}`);
    }

    const data = await response.json();

    // Check if we got a valid supply number
    if (typeof data.supply === "number" && data.supply > 0) {
      return data.supply;
    } else {
      console.error("Invalid supply data:", data);
      throw new Error("Invalid supply data");
    }
  } catch (error) {
    console.error("Error fetching supply:", error);
    // Fallback to a reasonable estimate if API fails
    return 75_000_000;
  }
}

// Fetch VRSC price from bridge API (used for price section only)
async function fetchVRSCPrice() {
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/bridge`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Get VRSC price in DAI
    if (data.prices && data.prices.VRSC !== null) {
      return data.prices.VRSC;
    } else {
      throw new Error("VRSC price not available");
    }
  } catch (error) {
    console.error("Error fetching VRSC price:", error);
    return null;
  }
}

// Fetch mining info (used for blockchain section only)
async function fetchMiningInfo() {
  try {
    const response = await fetch(
      `http://localhost:${process.env.PORT}/api/mining-info`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch mining info: ${response.status}`);
    }

    const data = await response.json();

    return {
      blockHeight: data.blocks || "N/A",
      hashRate: data.hashRate || "N/A",
      stakingAmount: data.stakingSupply || "N/A",
    };
  } catch (error) {
    console.error("Error fetching mining info:", error);
    return {
      blockHeight: "N/A",
      hashRate: "N/A",
      stakingAmount: "N/A",
    };
  }
}

// Calculate staking percentage
function calculateStakingPercentage(
  stakingAmount: string,
  circulatingSupply: number | null
): string {
  if (stakingAmount === "N/A" || !circulatingSupply) return "N/A";

  // Extract the numeric part from the staking amount string (e.g., "15,423,890 VRSC" -> 15423890)
  const stakingMatch = stakingAmount.match(/^([\d,]+)(\.\d+)? VRSC$/);
  if (!stakingMatch) return "N/A";

  const stakingVrscAmount = parseFloat(stakingMatch[1].replace(/,/g, ""));

  // Calculate percentage
  const percentage = (stakingVrscAmount / circulatingSupply) * 100;

  return percentage.toFixed(2) + "%";
}

// Main component that fetches data and passes it to UI components
export async function ProtocolStatistics() {
  // Fetch only the price data and blockchain data on server side
  // Other data like protocol stats will be fetched by client components
  const circulatingSupply = await fetchCirculatingSupply();
  const vrscPrice = await fetchVRSCPrice();
  const miningInfo = await fetchMiningInfo();
  // const [circulatingSupply, vrscPrice, miningInfo] = await Promise.all([
  //   fetchCirculatingSupply(),
  //   fetchVRSCPrice(),
  //   fetchMiningInfo(),
  // ]);

  // Calculate market cap - important for SEO
  let marketCap = "N/A";
  if (vrscPrice !== null && circulatingSupply !== null) {
    const marketCapValue = vrscPrice * circulatingSupply;
    marketCap = `$${marketCapValue.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}`;
  }

  // Format price - important for SEO
  const formattedPrice =
    vrscPrice !== null ? `$${vrscPrice.toFixed(2)}` : "N/A";

  // Calculate the percentage of VRSC being staked
  const stakingPercentage = calculateStakingPercentage(
    miningInfo.stakingAmount,
    circulatingSupply
  );

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

          {/* Blockchain Section */}
          <BlockchainSection
            blockHeight={miningInfo.blockHeight}
            hashRate={miningInfo.hashRate}
            stakingAmount={miningInfo.stakingAmount}
            stakingPercentage={stakingPercentage}
          />
        </div>
      </div>

      {/* Link to External Dashboard */}
      <div className="text-center mb-8 px-4">
        <p className="text-[15px] text-gray-600 dark:text-gray-400">
          For more in-depth protocol DeFi information, visit the
          <a
            href="https://cryptodashboard.faldt.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium mx-1"
          >
            Verus Community Dashboard
          </a>
          .
        </p>
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
  );
}
