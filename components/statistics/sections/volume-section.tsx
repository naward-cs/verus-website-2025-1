"use client";

/*
* VolumeSection Component
* - Self-contained client component that handles its own data fetching
* - Displays 24h protocol volume data
* - Uses skeleton loaders during data loading
* - Automatically refreshes data every 2 minutes
* - Uses consistent styling with other sections
*/

import { Activity } from "lucide-react";
import { useEffect, useState } from 'react';

export function VolumeSection() {
  const [volume24h, setVolume24h] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        console.log("Volume data fetched:", data);
        
        // Update with new data or keep current value if data is missing
        setVolume24h(data.volume24h && data.volume24h !== "N/A" ? data.volume24h : "N/A");
      } catch (err) {
        console.error("Failed to fetch volume data:", err);
        setVolume24h("N/A");
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
            <Activity className="h-3 w-3" />
          </div>
          <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">On-Chain DeFi Volume</span>
        </div>
        
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-[60px] bg-gray-200 dark:bg-gray-700 rounded w-44 mb-2"></div>
            <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-28 mt-2"></div>
          </div>
        ) : (
          <>
            <span className="text-[60px] bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent tracking-tight leading-none">
              {volume24h}
            </span>
            <div className="mt-2">
              <span className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium">
                24H Volume
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 