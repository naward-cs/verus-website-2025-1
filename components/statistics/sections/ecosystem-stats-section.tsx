/*
* EcosystemStatsSection Component
* - Displays key ecosystem metrics in a grid layout
* - Shows registered VerusIDs count
* - Shows currencies launched on Verus
* - Shows PBaaS chains in the ecosystem
*/

import { Users, Coins, Network } from "lucide-react";

export function EcosystemStatsSection() {
  // Static ecosystem data
  const ecosystemData = {
    verusIds: "32k+",
    currencies: "59",
    pbaasChains: "4"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Registered VerusIDs */}
      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <span className="block text-[40px] bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent font-bold leading-tight">
            {ecosystemData.verusIds}
          </span>
          <div className="mt-2">
            <span className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
              Registered VerusIDs
            </span>
          </div>
        </div>
      </div>
      
      {/* Currencies Launched */}
      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Coins className="h-5 w-5" />
            </div>
          </div>
          <span className="block text-[40px] bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold leading-tight">
            {ecosystemData.currencies}
          </span>
          <div className="mt-2">
            <span className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
              Currencies Launched (on Verus)
            </span>
          </div>
        </div>
      </div>
      
      {/* PBaaS Chains */}
      <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-800 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Network className="h-5 w-5" />
            </div>
          </div>
          <span className="block text-[40px] bg-gradient-to-br from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500 bg-clip-text text-transparent font-bold leading-tight">
            {ecosystemData.pbaasChains}
          </span>
          <div className="mt-2">
            <span className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
              Chains in the Ecosystem
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 