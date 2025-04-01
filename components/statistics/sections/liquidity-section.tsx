"use client";

/*
* LiquiditySection Component
* - Self-contained client component that handles its own data fetching
* - Displays total protocol liquidity value
* - Shows VRSC in liquidity pools with percentage of supply
* - Uses skeleton loaders during data loading
* - Automatically refreshes data every 2 minutes
* - Uses consistent styling with other sections
*/

import { Droplet } from "lucide-react";
import { useEffect, useState } from 'react';

export function LiquiditySection() {
  const [totalLiquidity, setTotalLiquidity] = useState<string | null>(null);
  const [vrscLiquidity, setVrscLiquidity] = useState<string | null>(null);
  const [vrscLiquidityPercent, setVrscLiquidityPercent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate VRSC in pools percentage
  const calculateVrscLiquidityPercentage = async (vrscLiquidityValue: string) => {
    try {
      // Fetch circulating supply
      const response = await fetch('/api/supply', { cache: 'no-store' });
      if (!response.ok) throw new Error('Failed to fetch supply');
      
      const data = await response.json();
      const circulatingSupply = data.supply;
      
      if (!circulatingSupply || vrscLiquidityValue === "N/A") {
        return "N/A";
      }
      
      // Extract VRSC amount
      const vrscMatch = vrscLiquidityValue.match(/^([\d,]+)(\.\d+)? VRSC$/);
      if (!vrscMatch) return "N/A";
      
      // Calculate percentage
      const vrscAmount = parseFloat(vrscMatch[1].replace(/,/g, ''));
      const percentage = (vrscAmount / circulatingSupply) * 100;
      
      return percentage.toFixed(2) + "%";
    } catch (error) {
      console.error('Error calculating VRSC percentage:', error);
      return "N/A";
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const timestamp = Date.now();
        const response = await fetch(`/api/protocol-stats?_=${timestamp}`, {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Liquidity data fetched:", data);
        
        // Update with new data or keep current value if data is missing
        const liquidityValue = data.totalLiquidity && data.totalLiquidity !== "N/A" 
          ? data.totalLiquidity 
          : "N/A";
        setTotalLiquidity(liquidityValue);
        
        // Update VRSC in pools
        const vrscLiquidityValue = data.vrscLiquidity && data.vrscLiquidity !== "N/A" 
          ? data.vrscLiquidity 
          : "N/A";
        setVrscLiquidity(vrscLiquidityValue);
        
        // Calculate percentage
        if (vrscLiquidityValue !== "N/A") {
          const percentage = await calculateVrscLiquidityPercentage(vrscLiquidityValue);
          setVrscLiquidityPercent(percentage);
        } else {
          setVrscLiquidityPercent("N/A");
        }
      } catch (err) {
        console.error("Failed to fetch liquidity data:", err);
        setTotalLiquidity("N/A");
        setVrscLiquidity("N/A");
        setVrscLiquidityPercent("N/A");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
    
    // Refresh data every 2 minutes
    const interval = setInterval(fetchData, 120000);
    return () => clearInterval(interval);
  }, []);

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
        
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-[60px] bg-gray-200 dark:bg-gray-700 rounded w-52 mb-2"></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-40 mt-2"></div>
            <div className="mt-8">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-1"></div>
              <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-20"></div>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
} 