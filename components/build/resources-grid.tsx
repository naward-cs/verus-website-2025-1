"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { MessageCircle, Download, ChevronDown } from "lucide-react"

interface ResourceCardProps {
  title: string
  description: string
  link: string
}

interface CliAssets {
  version: string
  date: string
  assets: Record<string, { url: string; size: string }>
}

function useCliReleaseInfo() {
  const [cliInfo, setCliInfo] = useState<CliAssets | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch(`/api/cli?_t=${Date.now()}`);
        if (!response.ok) throw new Error(`Failed to fetch CLI data: ${response.status}`);
        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setCliInfo(data);
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

  return { cliInfo, isLoading, error };
}

function detectOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('win')) return 'Windows';
  if (userAgent.includes('mac')) return 'macOS';
  if (userAgent.includes('linux')) {
    if (userAgent.includes('arm') || userAgent.includes('aarch64')) return 'Linux ARM';
    return 'Linux';
  }
  return 'Windows'; // Default to Windows if can't detect
}

const developerResources: ResourceCardProps[] = [
  {
    title: "Registering VerusID",
    description: "Learn how to create and manage your decentralized identity on Verus.",
    link: "https://monkins1010.github.io/verusid/"
  },
  {
    title: "Using VDXF Keys",
    description: "Understand how to work with VDXF keys in the Verus ecosystem.",
    link: "https://monkins1010.github.io/verusvdxf/getting-started-copy/"
  },
  {
    title: "Storing Data in VerusID",
    description: "Explore how to store and manage data within VerusID.",
    link: "https://monkins1010.github.io/verusstorage/getting-started/"
  },
  {
    title: "VerusID Login Client",
    description: "Implement decentralized authentication using VerusID.",
    link: "https://monkins1010.github.io/veruslogin/"
  },
  {
    title: "Storing Files on Chain",
    description: "Learn how to store and manage files directly on Verus or PBaaS chains.",
    link: "https://monkins1010.github.io/verusstorage/storing-files/"
  },
  {
    title: "VerusID Login Template",
    description: "Get started quickly with this VerusID login integration template.",
    link: "https://monkins1010.github.io/veruslogin/login-template/"
  },
  {
    title: "Create Attestations",
    description: "Build and manage attestations using VerusID.",
    link: "https://monkins1010.github.io/attestations/getting-started/"
  },
  {
    title: "Launch Currencies",
    description: "Create currencies on the Verus network.",
    link: "https://docs.verus.io/currencies/"
  },
  {
    title: "Verus DeFi",
    description: "Build decentralized financial applications on Verus.",
    link: "https://docs.verus.io/sendcurrency/"
  },
  {
    title: "DeFi API Commands",
    description: "Explore the DeFi API commands for building transactions.",
    link: "https://docs.verus.io/sendcurrency/sendcurrency-examples.html"
  }
]

function ResourceCard({ title, description, link }: ResourceCardProps) {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <h3 className="text-[24px] md:text-[30px] font-medium text-gray-800 dark:text-white mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[500px] mb-6">
          {description}
        </p>
        <Link 
          href={link}
          target="_blank"
          className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function TestnetSection() {
  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <h3 className="text-[24px] md:text-[30px] font-medium text-gray-800 dark:text-white mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
          Get Testnet Coins
        </h3>
        <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[500px] mb-6">
          To start developing on Verus testnet, you'll need some VRSCTEST coins. Join the Discord community and ask in the #pbaas-development channel - community members will help you get started.
        </p>
        <Link 
          href="https://www.verus.io/discord"
          target="_blank"
          className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Join Discord
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function CliSection() {
  const { cliInfo, isLoading, error } = useCliReleaseInfo();
  const [userOS, setUserOS] = useState('Windows');

  useEffect(() => {
    setUserOS(detectOS());
  }, []);

  if (isLoading) {
    return (
      <div className="p-10 md:p-14 relative overflow-hidden animate-pulse">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-20 w-full bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    );
  }

  return (
    <div className="p-10 md:p-14 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[60px] transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="relative z-10">
        <h3 className="text-[24px] md:text-[30px] font-medium text-gray-800 dark:text-white mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
          Download CLI Wallet
        </h3>
        <p className="text-[15px] md:text-[17px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-[500px] mb-6">
          Get started with the Verus CLI wallet v{cliInfo?.version}. Download for your operating system.
        </p>
        
        <div className="space-y-2">
          {Object.entries(cliInfo?.assets || {}).map(([os, info]) => (
            <Link 
              key={os}
              href={info.url}
              target="_blank"
              className={`flex items-center gap-2 p-3 rounded-lg border border-[#E9EFFC] dark:border-gray-700 hover:bg-[#E9EFFC]/5 dark:hover:bg-white/5 transition-colors ${!info.url || info.url === '#' ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <img 
                src={`/img/${os.toLowerCase().includes('windows') ? 'windows' : os.toLowerCase().includes('mac') ? 'apple' : 'linux'}-black.svg`} 
                alt={os} 
                className="h-5 w-5 dark:invert" 
              />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75 dark:text-white/75">{os}</span>
                <span className="text-[12px] text-black/40 dark:text-white/40">{info.size}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ResourcesGrid() {
  return (
    <div className="w-full rounded-lg shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800 mb-16 md:mb-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200/70 dark:divide-gray-700/30">
        <TestnetSection />
        <CliSection />
        {developerResources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  )
} 