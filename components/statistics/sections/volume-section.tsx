/*
* VolumeSection Component
* - Displays 24h protocol volume data
* - Shows 7-day and 30-day volume metrics
* - Uses consistent styling with other sections
*/

import { Activity } from "lucide-react";

interface VolumeSectionProps {
  volume24h: string;
  volume7d: string;
  volume30d: string;
}

export function VolumeSection({ volume24h, volume7d, volume30d }: VolumeSectionProps) {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex justify-center items-center h-5 w-5 rounded-full bg-blue-500 text-white">
            <Activity className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">On-Chain DeFi Volume</span>
        </div>
        
        <span className="text-[60px] bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight leading-none">
          {volume24h}
        </span>
        <div className="mt-2">
          <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
            24H Volume
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">7D Volume</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">{volume7d}</div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-[15px] mb-1">30D Volume</div>
            <div className="text-[18px] font-medium text-gray-900 dark:text-white">{volume30d}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 