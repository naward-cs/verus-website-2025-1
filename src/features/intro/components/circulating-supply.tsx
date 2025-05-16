import {getSupply} from '@/features/intro/server/get-supply'

import {SupplySkeleton} from './supply-skeleton'

const maxSupply = 83_540_184

export async function CirculatingSupplyDisplay() {
  const {circulatingSupply, isEstimate} = await getSupply()

  // Safety check - should never happen with our fallback
  if (circulatingSupply === null) {
    return <SupplySkeleton />
  }

  const percentage = (circulatingSupply / maxSupply) * 100
  const progressBarStyles = {
    filled: {width: `${percentage}%`},
    remaining: {width: `${100 - percentage}%`},
  }

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="mb-2 text-[14px] text-black/50 dark:text-white/50">
          Circulating supply{isEstimate ? ' (estimate)' : ''}:
        </h3>
        <div className="text-[22px] font-medium text-verus-blue dark:text-white md:text-[26px]">
          {circulatingSupply.toLocaleString()} VRSC
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="relative h-4 overflow-hidden rounded-full border border-verus-blue bg-[#E9EFFC] transition-all duration-300">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-verus-blue"
            style={progressBarStyles.filled}
          />
          <div
            className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full bg-[#F5F8FF]"
            style={progressBarStyles.remaining}
          />
        </div>
        <div className="flex items-center justify-end text-[12px] text-black/50 dark:text-white/70">
          <span>Max supply: {maxSupply.toLocaleString()} VRSC</span>
        </div>
      </div>
    </div>
  )
}
