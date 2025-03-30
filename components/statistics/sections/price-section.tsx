/*
* PriceSection Component
* - Displays current VRSC price
* - Shows market cap and circulating supply
* - Includes max supply information
*/

import { BarChart3 } from "lucide-react";

interface PriceSectionProps {
  price: string;
  marketCap: string;
  circulatingSupply: string;
  maxSupply: string;
}

export function PriceSection({ price, marketCap, circulatingSupply, maxSupply }: PriceSectionProps) {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
            <BarChart3 className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">Current Price</span>
        </div>
        
        <div>
          <span className="text-[60px] bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent tracking-tight leading-none">
            {price}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">Market Cap</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">{marketCap}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">Circulating Supply</div>
            <div>
              <div className="text-[18px] font-medium text-gray-900 dark:text-white">{circulatingSupply}</div>
              <div className="text-[14px] text-gray-500 dark:text-gray-400 mt-1">
                Max Supply: {maxSupply}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 