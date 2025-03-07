"use client"

import { useEffect, useState } from "react"
import { OsSelector } from "./os-selector"

function useReleaseInfo() {
  const [version, setVersion] = useState("v1.2.8");
  const [releaseDate, setReleaseDate] = useState("");
  const [testnetInfo, setTestnetInfo] = useState<{
    version: string;
    date: string;
    assets: Record<string, { url: string; size: string; }>;
  } | null>(null);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.version) {
          setVersion(`v${data.version}`);
          setReleaseDate(data.date);
          setTestnetInfo(data.testnet);
        }
      } catch (error) {
        console.error('Error fetching version:', error);
      }
    }

    fetchVersion();
  }, []);

  return { version, releaseDate, testnetInfo };
}

export function DownloadSection() {
  const { version, releaseDate, testnetInfo } = useReleaseInfo();

  return (
    <>
      <h2 className="text-[22px] md:text-[32px] text-black tracking-tight font-medium leading-[1.1] mb-4">
        Download Verus Desktop
      </h2>
      <div className="flex items-center gap-8 text-[14px] md:text-[16px] text-black/60 mb-8">
        <span>Version: <span className="font-medium text-black">{version}</span></span>
        {releaseDate && <span>Date: <span className="font-medium text-black">{releaseDate}</span></span>}
      </div>

      <div className="space-y-4 relative">
        <OsSelector />
      </div>

      <div className="mt-8">
        <p className="text-[14px] md:text-[15px] text-black/60">
          Open-source:{" "}
          <a href="https://github.com/VerusCoin/Verus-Desktop" target="_blank" rel="noopener noreferrer" className="text-verus-blue hover:underline">
            Go to GitHub
          </a>
        </p>
        <div className="mt-8 pt-8 border-t border-[#E9EFFC]">
          <h3 className="text-[16px] md:text-[18px] font-medium text-black mb-4 flex items-center gap-2">
            🧪 Verus Desktop Testnet {testnetInfo?.version && <span className="text-[14px] text-black/60">({testnetInfo.version})</span>}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <a 
              href={testnetInfo?.assets?.Windows?.url} 
              className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
            >
              <img src="/img/windows-black.svg" alt="Windows" className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75">Windows</span>
                <span className="text-[12px] text-black/40">{testnetInfo?.assets?.Windows?.size}</span>
              </div>
            </a>
            <a 
              href={testnetInfo?.assets?.macOS?.url}
              className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
            >
              <img src="/img/apple-black.svg" alt="macOS" className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75">macOS</span>
                <span className="text-[12px] text-black/40">{testnetInfo?.assets?.macOS?.size}</span>
              </div>
            </a>
            <a 
              href={testnetInfo?.assets?.Linux?.url}
              className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
            >
              <img src="/img/linux-black.svg" alt="Linux" className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75">Linux</span>
                <span className="text-[12px] text-black/40">{testnetInfo?.assets?.Linux?.size}</span>
              </div>
            </a>
            <a 
              href={testnetInfo?.assets?.['Linux ARM']?.url}
              className="flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] hover:bg-[#E9EFFC]/5 transition-colors"
            >
              <img src="/img/linux-black.svg" alt="Linux ARM" className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75">Linux ARM</span>
                <span className="text-[12px] text-black/40">{testnetInfo?.assets?.['Linux ARM']?.size}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}