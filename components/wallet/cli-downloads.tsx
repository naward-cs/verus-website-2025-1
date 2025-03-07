"use client"

import { useState, useEffect } from "react"

function useCliReleaseInfo() {
  const [version, setVersion] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [assets, setAssets] = useState<Record<string, { url: string; size: string; }>>({});

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch('/api/cli');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.version) {
          setVersion(`v${data.version}`);
          setReleaseDate(data.date);
          setAssets(data.assets);
        }
      } catch (error) {
        console.error('Error fetching CLI version:', error);
      }
    }

    fetchVersion();
  }, []);

  return { version, releaseDate, assets };
}

export function CliDownloads() {
  const { version, releaseDate, assets } = useCliReleaseInfo();

  return (
    <div className="pt-8 md:pt-16 md:mt-0">
      <h2 className="text-[22px] md:text-[32px] text-black tracking-tight font-medium leading-[1.1] mb-4">
        Command-Line Interface (CLI) for advanced users
      </h2>
      <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-black/60 mb-8">
        <span>Version: <span className="font-medium text-black">{version}</span></span>
        {releaseDate && <span>Date: <span className="font-medium text-black">{releaseDate}</span></span>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <a 
          href={assets?.Windows?.url} 
          className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
        >
          <img src="/img/windows-black.svg" alt="Windows" className="h-5 w-5" />
          <div className="flex flex-col">
            <span className="text-[14px] text-black/75">Windows</span>
            <span className="text-[12px] text-black/40">{assets?.Windows?.size}</span>
          </div>
        </a>
        <a 
          href={assets?.macOS?.url}
          className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
        >
          <img src="/img/apple-black.svg" alt="macOS" className="h-5 w-5" />
          <div className="flex flex-col">
            <span className="text-[14px] text-black/75">macOS</span>
            <span className="text-[12px] text-black/40">{assets?.macOS?.size}</span>
          </div>
        </a>
        <a 
          href={assets?.Linux?.url}
          className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
        >
          <img src="/img/linux-black.svg" alt="Linux" className="h-5 w-5" />
          <div className="flex flex-col">
            <span className="text-[14px] text-black/75">Linux</span>
            <span className="text-[12px] text-black/40">{assets?.Linux?.size}</span>
          </div>
        </a>
        <a 
          href={assets?.['Linux ARM']?.url}
          className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
        >
          <img src="/img/linux-black.svg" alt="Linux ARM" className="h-5 w-5" />
          <div className="flex flex-col">
            <span className="text-[14px] text-black/75">Linux ARM</span>
            <span className="text-[12px] text-black/40">{assets?.['Linux ARM']?.size}</span>
          </div>
        </a>
      </div>
      <p className="text-[14px] md:text-[15px] text-black/60 mt-8">
        Open-source:{" "}
        <a 
          href="https://github.com/VerusCoin/VerusCoin" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-verus-blue hover:underline"
        >
          Go to GitHub
        </a>
      </p>
    </div>
  )
}