"use client"

import { useState, useEffect } from "react"

function useCliReleaseInfo() {
  const [version, setVersion] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [assets, setAssets] = useState<Record<string, { url: string; size: string; }>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVersion() {
      setIsLoading(true);
      try {
        // Add cache-busting parameter
        const response = await fetch(`/api/cli?_t=${Date.now()}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch CLI data: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if the API returned an error message
        if (data.error) {
          console.warn('CLI API returned an error:', data.error);
          setError(data.error);
        }
        
        setVersion(`v${data.version}`);
        setReleaseDate(data.date || '');
        
        if (data.assets && Object.keys(data.assets).length > 0) {
          setAssets(data.assets);
        }
      } catch (error) {
        console.error('Error fetching CLI version:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch CLI information');
      } finally {
        setIsLoading(false);
      }
    }

    fetchVersion();
  }, []);

  return { version, releaseDate, assets, isLoading, error };
}

export function CliDownloads() {
  const { version, releaseDate, assets, isLoading, error } = useCliReleaseInfo();
  const isGitHubError = error && Object.values(assets)[0]?.size === 'GitHub API Error';

  if (isLoading) {
    return (
      <div className="pt-8 md:pt-16 md:mt-0 animate-pulse">
        <h2 className="text-[22px] md:text-[32px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-4">
          Command-Line Interface (CLI) for advanced users
        </h2>
        <div className="h-6 w-[200px] bg-gray-200 dark:bg-gray-700 rounded mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-[66px] bg-gray-200 dark:bg-gray-700 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 md:pt-16 md:mt-0">
      <h2 className="text-[22px] md:text-[32px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-4">
        Command-Line Interface (CLI) for advanced users
      </h2>
      <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-black/60 dark:text-white/60 mb-8">
        <span>Version: <span className="font-medium text-black dark:text-white">{version}</span></span>
        {releaseDate && <span>Date: <span className="font-medium text-black dark:text-white">{releaseDate}</span></span>}
      </div>
      
      {isGitHubError ? (
        <div className="mb-4 p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/30 rounded-lg text-red-600 dark:text-red-400">
          <p className="mb-2">Unable to load CLI downloads from GitHub API.</p>
          <p>
            Please visit the <a href="https://github.com/VerusCoin/VerusCoin/releases" className="underline" target="_blank" rel="noopener noreferrer">
              GitHub Releases page
            </a> to download the CLI versions directly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <a 
            href={assets?.Windows?.url} 
            className={`flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] dark:border-gray-700 hover:bg-[#E9EFFC]/5 dark:hover:bg-white/5 transition-colors ${!assets?.Windows?.url || assets?.Windows?.url === '#' ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <img src="/img/windows-black.svg" alt="Windows" className="h-5 w-5 dark:invert" />
            <div className="flex flex-col">
              <span className="text-[14px] text-black/75 dark:text-white/75">Windows</span>
              <span className="text-[12px] text-black/40 dark:text-white/40">{assets?.Windows?.size || 'N/A'}</span>
            </div>
          </a>
          <a 
            href={assets?.macOS?.url}
            className={`flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] dark:border-gray-700 hover:bg-[#E9EFFC]/5 dark:hover:bg-white/5 transition-colors ${!assets?.macOS?.url || assets?.macOS?.url === '#' ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <img src="/img/apple-black.svg" alt="macOS" className="h-5 w-5 dark:invert" />
            <div className="flex flex-col">
              <span className="text-[14px] text-black/75 dark:text-white/75">macOS</span>
              <span className="text-[12px] text-black/40 dark:text-white/40">{assets?.macOS?.size || 'N/A'}</span>
            </div>
          </a>
          <a 
            href={assets?.Linux?.url}
            className={`flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] dark:border-gray-700 hover:bg-[#E9EFFC]/5 dark:hover:bg-white/5 transition-colors ${!assets?.Linux?.url || assets?.Linux?.url === '#' ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <img src="/img/linux-black.svg" alt="Linux" className="h-5 w-5 dark:invert" />
            <div className="flex flex-col">
              <span className="text-[14px] text-black/75 dark:text-white/75">Linux</span>
              <span className="text-[12px] text-black/40 dark:text-white/40">{assets?.Linux?.size || 'N/A'}</span>
            </div>
          </a>
          <a 
            href={assets?.['Linux ARM']?.url}
            className={`flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] dark:border-gray-700 hover:bg-[#E9EFFC]/5 dark:hover:bg-white/5 transition-colors ${!assets?.['Linux ARM']?.url || assets?.['Linux ARM']?.url === '#' ? 'opacity-50 pointer-events-none' : ''}`}
          >
            <img src="/img/linux-black.svg" alt="Linux ARM" className="h-5 w-5 dark:invert" />
            <div className="flex flex-col">
              <span className="text-[14px] text-black/75 dark:text-white/75">Linux ARM</span>
              <span className="text-[12px] text-black/40 dark:text-white/40">{assets?.['Linux ARM']?.size || 'N/A'}</span>
            </div>
          </a>
        </div>
      )}
      
      <p className="text-[14px] md:text-[15px] text-black/60 dark:text-white/60 mt-8">
        Verus is open source. View the source code on{" "}
        <a 
          href="https://github.com/VerusCoin/VerusCoin" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-verus-blue dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>.
      </p>
    </div>
  )
}