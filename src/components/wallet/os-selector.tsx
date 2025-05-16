'use client'

import {useEffect, useState} from 'react'

import {ChevronDown} from 'lucide-react'

type OS = 'Windows' | 'macOS' | 'Linux' | 'Linux ARM' | 'Unknown'

type AssetInfo = {
  url: string
  size: string
}

type AssetsType = {
  [key in Exclude<OS, 'Unknown'>]: AssetInfo
}

type ReleaseInfo = {
  version: string
  date: string
  assets: Partial<AssetsType>
  error?: string
}

type TestnetInfo = ReleaseInfo | null

type OsSelectorProps = {
  mainVersion?: string
  testnetInfo: TestnetInfo
  error: string | null
}

const getOSIcon = (os: OS, isDarkMode: boolean = false) => {
  // In dark mode, we invert the black icons
  const iconClass = isDarkMode ? 'h-6 w-6 dark:invert' : 'h-6 w-6'

  switch (os) {
    case 'Windows':
      return (
        <img src="/img/windows-black.svg" alt="Windows" className={iconClass} />
      )
    case 'macOS':
      return (
        <img src="/img/apple-black.svg" alt="macOS" className={iconClass} />
      )
    case 'Linux':
    case 'Linux ARM':
      return (
        <img src="/img/linux-black.svg" alt="Linux" className={iconClass} />
      )
    default:
      return <img src="/img/windows-black.svg" alt="OS" className={iconClass} />
  }
}

export function OsSelector({mainVersion, testnetInfo, error}: OsSelectorProps) {
  const [currentOS, setCurrentOS] = useState<OS>('Unknown')
  const [assets, setAssets] = useState<Partial<AssetsType>>({})
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const [showTestnet, setShowTestnet] = useState(false)

  useEffect(() => {
    async function fetchReleaseInfo() {
      try {
        // Add cache-busting parameter to avoid stale data
        const response = await fetch(`/api/github?_t=${Date.now()}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub data: ${response.status}`)
        }

        const data = await response.json()

        // Check if the API returned an error message
        if (data.error) {
          console.warn('GitHub API returned an error:', data.error)
          setApiError(data.error)
        }

        if (data.assets && Object.keys(data.assets).length > 0) {
          setAssets(data.assets as AssetsType)
        }
      } catch (error) {
        console.error('Error fetching release info:', error)
        setApiError(
          error instanceof Error
            ? error.message
            : 'Failed to fetch download information'
        )
      }
    }

    fetchReleaseInfo()
  }, [])

  useEffect(() => {
    if (error) {
      setApiError(error)
    }
  }, [error])

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    if (userAgent.includes('win')) {
      setCurrentOS('Windows')
    } else if (userAgent.includes('mac')) {
      setCurrentOS('macOS')
    } else if (userAgent.includes('linux')) {
      if (userAgent.includes('arm') || userAgent.includes('aarch64')) {
        setCurrentOS('Linux ARM')
      } else {
        setCurrentOS('Linux')
      }
    }
  }, [])

  // Get asset information safely
  const getAssetInfo = (
    os: OS,
    source: Partial<AssetsType> = assets
  ): AssetInfo | undefined => {
    if (os === 'Unknown') return undefined
    return source[os as keyof AssetsType]
  }

  // Get the appropriate asset based on current mode (mainnet/testnet)
  const getCurrentAsset = (): AssetInfo | undefined => {
    if (currentOS === 'Unknown') return undefined
    if (showTestnet && testnetInfo?.assets) {
      return testnetInfo.assets[currentOS as keyof AssetsType]
    }
    return assets[currentOS as keyof AssetsType]
  }

  const currentAsset = getCurrentAsset()
  const isGitHubError =
    apiError && (currentAsset?.size === 'GitHub API Error' || !currentAsset)

  return (
    <>
      {/* Main Download Button */}
      <a
        href={
          currentOS === 'Unknown' || isGitHubError
            ? '#'
            : currentAsset?.url || '#'
        }
        className={`group flex h-[40px] items-center justify-between rounded-none border border-blue-500 bg-blue-600 px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg dark:border-white/60 dark:bg-white/90 dark:text-black dark:hover:bg-white md:h-[50px] md:rounded-lg md:text-[16px] ${currentOS === 'Unknown' || !currentAsset?.url || isGitHubError ? 'pointer-events-none cursor-default opacity-75' : ''}`}
      >
        <span className="flex items-center gap-2">
          {/* Use white icons in light mode and black icons in dark mode */}
          <img
            src={`/img/${currentOS === 'macOS' ? 'apple' : currentOS === 'Linux' || currentOS === 'Linux ARM' ? 'linux' : 'windows'}.svg`}
            alt={currentOS}
            className="h-6 w-6 dark:hidden"
          />
          <img
            src={`/img/${currentOS === 'macOS' ? 'apple' : currentOS === 'Linux' || currentOS === 'Linux ARM' ? 'linux' : 'windows'}-black.svg`}
            alt={currentOS}
            className="hidden h-6 w-6 dark:block"
          />
          {`Download for ${currentOS}`}
          {showTestnet && testnetInfo && (
            <span className="ml-1 rounded-sm bg-amber-500 px-1.5 py-0.5 text-xs text-black">
              TESTNET
            </span>
          )}
        </span>
        <span className="text-white/80 dark:text-black/80">
          {isGitHubError ? 'Unavailable' : currentAsset?.size || 'Loading...'}
        </span>
      </a>

      {/* Error Message */}
      {isGitHubError && (
        <div className="mt-2 text-sm text-red-500 dark:text-red-400">
          GitHub API Error: Please visit the{' '}
          <a
            href="https://github.com/VerusCoin/Verus-Desktop/releases"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Releases page
          </a>{' '}
          for downloads.
        </div>
      )}

      {/* Other Downloads Dropdown */}
      <div className="relative mt-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="group flex h-[40px] w-full items-center justify-between rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
        >
          <span>Other downloads{showTestnet ? ' (Testnet)' : ''}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Testnet Toggle - Replaced with segmented control */}
        {testnetInfo && !isGitHubError && (
          <div className="mt-3 flex items-center">
            <div className="mr-3 text-sm font-medium text-black dark:text-white">
              Version:
            </div>
            <div className="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
              <button
                onClick={() => setShowTestnet(false)}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  !showTestnet
                    ? 'bg-blue-600 text-white dark:bg-blue-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Mainnet
              </button>
              <button
                onClick={() => setShowTestnet(true)}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  showTestnet
                    ? 'bg-amber-500 text-black'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                Testnet
              </button>
            </div>
          </div>
        )}

        {dropdownOpen && (
          <>
            <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              {isGitHubError ? (
                <div className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  GitHub API Error. Please visit the{' '}
                  <a
                    href="https://github.com/VerusCoin/Verus-Desktop/releases"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Releases page
                  </a>
                  .
                </div>
              ) : Object.entries(
                  showTestnet && testnetInfo ? testnetInfo.assets : assets
                ).length === 0 ? (
                <div className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                  {showTestnet && testnetInfo
                    ? 'No testnet downloads available.'
                    : 'Loading download options...'}
                </div>
              ) : (
                <>
                  <div className="border-b border-gray-200 px-6 py-2 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {showTestnet ? 'Testnet' : 'Mainnet'} Version
                    </span>
                  </div>

                  {/* Display available OS options */}
                  {Object.entries(
                    showTestnet && testnetInfo ? testnetInfo.assets : assets
                  )
                    .filter(([os]) => {
                      const assetObj =
                        showTestnet && testnetInfo ? testnetInfo.assets : assets
                      return (
                        os !== currentOS &&
                        assetObj[os as keyof AssetsType]?.url &&
                        assetObj[os as keyof AssetsType]?.url !== '#'
                      )
                    })
                    .map(([os, {url, size}]) => (
                      <a
                        key={os}
                        href={url}
                        className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <span className="flex items-center gap-2 text-[14px] text-black dark:text-white md:text-[16px]">
                          {getOSIcon(os as OS, true)}
                          Download for {os}
                          {showTestnet && (
                            <span className="ml-1 rounded-sm bg-amber-500 px-1.5 py-0.5 text-xs text-black">
                              TESTNET
                            </span>
                          )}
                        </span>
                        <span className="text-black/60 dark:text-white/60">
                          {size}
                        </span>
                      </a>
                    ))}
                </>
              )}
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
