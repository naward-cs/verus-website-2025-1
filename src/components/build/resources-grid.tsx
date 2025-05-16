'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'

import {ChevronDown, Download, MessageCircle} from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  link: string
}

interface CliAssets {
  version: string
  date: string
  assets: Record<string, {url: string; size: string}>
}

function useCliReleaseInfo() {
  const [cliInfo, setCliInfo] = useState<CliAssets | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVersion() {
      try {
        const response = await fetch(`/api/cli?_t=${Date.now()}`)
        if (!response.ok)
          throw new Error(`Failed to fetch CLI data: ${response.status}`)
        const data = await response.json()
        if (data.error) {
          setError(data.error)
        } else {
          setCliInfo(data)
        }
      } catch (error) {
        console.error('Error fetching CLI version:', error)
        setError(
          error instanceof Error
            ? error.message
            : 'Failed to fetch CLI information'
        )
      } finally {
        setIsLoading(false)
      }
    }
    fetchVersion()
  }, [])

  return {cliInfo, isLoading, error}
}

function detectOS() {
  const userAgent = window.navigator.userAgent.toLowerCase()
  if (userAgent.includes('win')) return 'Windows'
  if (userAgent.includes('mac')) return 'macOS'
  if (userAgent.includes('linux')) {
    if (userAgent.includes('arm') || userAgent.includes('aarch64'))
      return 'Linux ARM'
    return 'Linux'
  }
  return 'Windows' // Default to Windows if can't detect
}

const developerResources: ResourceCardProps[] = [
  {
    title: 'Registering VerusID',
    description: 'Learn how to create decentralized identities on Verus.',
    link: 'https://monkins1010.github.io/verusid/',
  },
  {
    title: 'Using VDXF Keys',
    description:
      'Understand how to work with VDXF keys in the Verus ecosystem.',
    link: 'https://monkins1010.github.io/verusvdxf/getting-started-copy/',
  },
  {
    title: 'Storing Data in VerusID',
    description: 'Explore how to store and manage data on a VerusID.',
    link: 'https://monkins1010.github.io/verusstorage/getting-started/',
  },
  {
    title: 'VerusID Login Client',
    description: 'Implement decentralized authentication using VerusID.',
    link: 'https://monkins1010.github.io/veruslogin/',
  },
  {
    title: 'Storing Files on Chain',
    description:
      'Learn how to store and manage files directly on Verus or PBaaS chains.',
    link: 'https://monkins1010.github.io/verusstorage/storing-files/',
  },
  {
    title: 'VerusID Login Template',
    description:
      'Get started quickly with this VerusID login integration template.',
    link: 'https://monkins1010.github.io/veruslogin/login-template/',
  },
  {
    title: 'Create Attestations',
    description: 'Build and manage attestations using VerusID.',
    link: 'https://monkins1010.github.io/attestations/getting-started/',
  },
  {
    title: 'Launch Currencies',
    description: 'Create currencies on the Verus network.',
    link: 'https://docs.verus.io/currencies/',
  },
  {
    title: 'Verus DeFi',
    description: 'Build decentralized financial applications on Verus.',
    link: 'https://docs.verus.io/sendcurrency/',
  },
  {
    title: 'DeFi API Commands',
    description: 'Explore the DeFi API commands for building transactions.',
    link: 'https://docs.verus.io/sendcurrency/sendcurrency-examples.html',
  },
]

function ResourceCard({title, description, link}: ResourceCardProps) {
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
          {title}
        </h3>
        <p className="mb-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
          {description}
        </p>
        <Link
          href={link}
          target="_blank"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function TestnetSection() {
  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
          Get Testnet Coins
        </h3>
        <p className="mb-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
          To start developing on Verus testnet, you'll need some VRSCTEST coins.
          Join the Discord community and ask in the #pbaas-development channel -
          community members will help you get started.
        </p>
        <Link
          href="https://www.verus.io/discord"
          target="_blank"
          className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Join Discord
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function CliSection() {
  const {cliInfo, isLoading, error} = useCliReleaseInfo()
  const [userOS, setUserOS] = useState('Windows')

  useEffect(() => {
    setUserOS(detectOS())
  }, [])

  if (isLoading) {
    return (
      <div className="relative animate-pulse overflow-hidden p-10 md:p-14">
        <div className="mb-4 h-8 w-48 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-20 w-full rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden p-10 md:p-14">
      <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
      <div className="relative z-10">
        <h3 className="mb-4 bg-gradient-to-br from-blue-600 to-indigo-500 bg-clip-text text-[24px] font-medium text-gray-800 text-transparent dark:from-blue-400 dark:to-indigo-300 dark:text-white md:text-[30px]">
          Download CLI Wallet
        </h3>
        <p className="mb-6 max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
          Get started with the Verus CLI wallet v{cliInfo?.version}. Download
          for your operating system.
        </p>

        <div className="space-y-2">
          {Object.entries(cliInfo?.assets || {}).map(([os, info]) => (
            <Link
              key={os}
              href={info.url}
              target="_blank"
              className={`flex items-center gap-2 rounded-lg border border-[#E9EFFC] p-3 transition-colors hover:bg-[#E9EFFC]/5 dark:border-gray-700 dark:hover:bg-white/5 ${!info.url || info.url === '#' ? 'pointer-events-none opacity-50' : ''}`}
            >
              <img
                src={`/img/${os.toLowerCase().includes('windows') ? 'windows' : os.toLowerCase().includes('mac') ? 'apple' : 'linux'}-black.svg`}
                alt={os}
                className="h-5 w-5 dark:invert"
              />
              <div className="flex flex-col">
                <span className="text-[14px] text-black/75 dark:text-white/75">
                  {os}
                </span>
                <span className="text-[12px] text-black/40 dark:text-white/40">
                  {info.size}
                </span>
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
    <div className="mb-16 w-full overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-black/30 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] md:mb-20">
      <div className="grid grid-cols-1 divide-y divide-gray-200/70 dark:divide-gray-700/30 md:grid-cols-2 md:divide-x md:divide-y-0">
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
