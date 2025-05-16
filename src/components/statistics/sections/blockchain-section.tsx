/*
* BlockchainSection Component
* - Displays current block height
* - Shows network hash rate
* - Shows staking amount and percentage
* - Uses consistent styling with other sections
*/

import { Zap } from "lucide-react";

interface BlockchainSectionProps {
  blockHeight: string;
  hashRate: string;
  stakingAmount: string;
  stakingPercentage: string;
}

export function BlockchainSection({ blockHeight, hashRate, stakingAmount, stakingPercentage }: BlockchainSectionProps) {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
            <Zap className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Block Explorer</span>
        </div>
        
        <span className="text-[60px] bg-gradient-to-br from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500 bg-clip-text text-transparent tracking-tight leading-none">
          {blockHeight}
        </span>
        <div className="mt-2">
          <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
            Current Block Height
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">Network Hash Rate</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">{hashRate}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">Estimated Staking Amount</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">
              {stakingAmount}
              <div className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">
                {stakingPercentage} of Supply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 