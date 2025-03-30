/*
* LiquiditySection Component
* - Displays total protocol liquidity value
* - Shows VRSC in liquidity pools with percentage of supply
* - Uses consistent styling with other sections
*/

import { Droplet } from "lucide-react";

interface LiquiditySectionProps {
  totalLiquidity: string;
  vrscLiquidity: string;
  vrscLiquidityPercent: string;
}

export function LiquiditySection({ totalLiquidity, vrscLiquidity, vrscLiquidityPercent }: LiquiditySectionProps) {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
            <Droplet className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Protocol Liquidity</span>
        </div>
        
        <span className="text-[60px] bg-gradient-to-br from-blue-600 to-indigo-400 dark:from-blue-500 dark:to-indigo-300 bg-clip-text text-transparent tracking-tight leading-none">
          {totalLiquidity}
        </span>
        <div className="mt-2">
          <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
            Total Value in Liquidity Pools
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">VRSC in Pools</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              {vrscLiquidity}
              <div className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">
                {vrscLiquidityPercent} of Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 