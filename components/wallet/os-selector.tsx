"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

type OS = "Windows" | "macOS" | "Linux" | "Linux ARM" | "Unknown"

const getOSIcon = (os: OS, variant: 'white' | 'black' = 'black') => {
  const iconSuffix = variant === 'white' ? '' : '-black'

  switch (os) {
    case "Windows":
      return <img src={`/img/windows${iconSuffix}.svg`} alt="Windows" className="h-6 w-6" />;
    case "macOS":
      return <img src={`/img/apple${iconSuffix}.svg`} alt="macOS" className="h-6 w-6" />;
    case "Linux":
    case "Linux ARM":
      return <img src={`/img/linux${iconSuffix}.svg`} alt="Linux" className="h-6 w-6" />;
    default:
      return <img src={`/img/windows${iconSuffix}.svg`} alt="OS" className="h-6 w-6" />;
  }
};

const fallbackAssets = {
  Windows: { 
    url: "https://github.com/VerusCoin/Verus-Desktop/releases/download/v1.2.8/Verus-Desktop-Windows-v1.2.8.zip", 
    size: "241 MB" 
  },
  macOS: { 
    url: "https://github.com/VerusCoin/Verus-Desktop/releases/download/v1.2.8/Verus-Desktop-MacOS-v1.2.8.tgz", 
    size: "219 MB" 
  },
  Linux: { 
    url: "https://github.com/VerusCoin/Verus-Desktop/releases/download/v1.2.8/Verus-Desktop-Linux-v1.2.8-x86_64.tgz", 
    size: "264 MB" 
  },
  'Linux ARM': { 
    url: "https://github.com/VerusCoin/Verus-Desktop/releases/download/v1.2.8/Verus-Desktop-Linux-v1.2.8-arm64.tgz", 
    size: "251 MB" 
  }
}

export function OsSelector() {
  const [currentOS, setCurrentOS] = useState<OS>("Unknown")
  const [assets, setAssets] = useState(fallbackAssets)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    async function fetchReleaseInfo() {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.assets) {
          setAssets(data.assets);
        }
      } catch (error) {
        console.error('Error fetching release info:', error);
        // Keep using fallback assets on error
      }
    }

    fetchReleaseInfo();
  }, []);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes("win")) {
      setCurrentOS("Windows")
    } else if (userAgent.includes("mac")) {
      setCurrentOS("macOS")
    } else if (userAgent.includes("linux")) {
      if (userAgent.includes("arm") || userAgent.includes("aarch64")) {
        setCurrentOS("Linux ARM")
      } else {
        setCurrentOS("Linux")
      }
    }
  }, [])

  return (
    <>
      {/* Main Download Button */}
      <a
        href={currentOS === "Unknown" ? "#" : assets[currentOS].url}
        className={`h-[50px] px-6 bg-[#3165D4] rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-between hover:bg-[#2855b9] transition-colors group ${currentOS === "Unknown" ? 'pointer-events-none cursor-default' : ''}`}
      >
        <span className="flex items-center gap-2">
          {getOSIcon(currentOS, 'white')}
          {`Download for ${currentOS}`}
        </span>
        <span className="text-white/60 group-hover:text-white/80 transition-colors">
          {currentOS === "Unknown" ? "120 MB" : assets[currentOS].size}
        </span>
      </a>

      {/* Other Downloads Dropdown */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full h-[50px] px-6 bg-white border-2 border-[#3165D4] rounded-lg text-[14px] md:text-[16px] font-medium text-[#3165D4] flex items-center justify-between hover:bg-blue-50 transition-colors"
        >
          <span>Other downloads</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {dropdownOpen && (
          <>
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
              {Object.entries(assets)
                .filter(([os]) => os !== currentOS)
                .map(([os, { url, size }]) => (
                  <a
                    key={os}
                    href={url}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-[14px] md:text-[16px] text-black">
                      {getOSIcon(os as OS, 'black')}
                      Download for {os}
                    </span>
                    <span className="text-black/60">{size}</span>
                  </a>
                ))}
            </div>
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setDropdownOpen(false)}
            />
          </>
        )}
      </div>
    </>
  )
}