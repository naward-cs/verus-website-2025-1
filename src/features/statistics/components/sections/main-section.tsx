import {getSupply} from '@/features/intro/server/get-supply'
import {getMiningInfo} from '@/features/statistics/server/get-mining-info'
import {getVRSCPrice} from '@/features/statistics/server/get-vrsc-price'

import {BlockchainSection} from './blockchain-section'
import {PriceSection} from './price-section'

// Define max supply
const maxSupply = 83540184

// Format max supply
const formattedMaxSupply = maxSupply.toLocaleString() + ' VRSC'

// Calculate staking percentage
function calculateStakingPercentage(
  stakingAmount: string,
  circulatingSupply: number | null
): string {
  if (stakingAmount === 'N/A' || !circulatingSupply) return 'N/A'

  // Extract the numeric part from the staking amount string (e.g., "15,423,890 VRSC" -> 15423890)
  const stakingMatch = stakingAmount.match(/^([\d,]+)(\.\d+)? VRSC$/)
  if (!stakingMatch) return 'N/A'

  const stakingVrscAmount = parseFloat(stakingMatch[1].replace(/,/g, ''))

  // Calculate percentage
  const percentage = (stakingVrscAmount / circulatingSupply) * 100

  return percentage.toFixed(2) + '%'
}

export async function MainStatisticsGrid() {
  // Fetch only the price data and blockchain data on server side
  // Other data like protocol stats will be fetched by client components

  const [{circulatingSupply}, vrscPrice, miningInfo] = await Promise.all([
    getSupply(),
    getVRSCPrice(),
    getMiningInfo(),
  ])

  // Calculate market cap - important for SEO
  let marketCap = 'N/A'
  if (vrscPrice !== null && circulatingSupply !== null) {
    const marketCapValue = vrscPrice * circulatingSupply
    marketCap = `$${marketCapValue.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })}`
  }

  // Format price - important for SEO
  const formattedPrice = vrscPrice !== null ? `$${vrscPrice.toFixed(2)}` : 'N/A'

  // Calculate the percentage of VRSC being staked
  const stakingPercentage = calculateStakingPercentage(
    miningInfo.stakingAmount,
    circulatingSupply
  )

  // Format circulating supply
  const formattedCirculatingSupply = circulatingSupply
    ? circulatingSupply.toLocaleString() + ' VRSC'
    : 'Loading...'

  return (
    <div className="mb-10 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)]">
      <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 md:divide-x md:divide-y-0">
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
  )
}
