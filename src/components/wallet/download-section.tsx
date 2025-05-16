'use client'

import {useEffect, useState} from 'react'

import {OsSelector} from './os-selector'

function useReleaseInfo() {
  const [version, setVersion] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [testnetInfo, setTestnetInfo] = useState<{
    version: string
    date: string
    assets: Record<string, {url: string; size: string}>
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVersion() {
      setIsLoading(true)
      try {
        // Add cache-busting parameter
        const response = await fetch(`/api/github?_t=${Date.now()}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub data: ${response.status}`)
        }

        const data = await response.json()

        // Check if the API returned an error message
        if (data.error) {
          console.warn('GitHub API returned an error:', data.error)
          setError(data.error)
        }

        setVersion(data.version)
        setReleaseDate(data.date || '')

        if (data.testnet) {
          setTestnetInfo({
            version: data.testnet.version,
            date: data.testnet.date,
            assets: data.testnet.assets || {},
          })
        }
      } catch (error) {
        console.error('Error fetching version:', error)
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }

    fetchVersion()
  }, [])

  return {version, releaseDate, testnetInfo, isLoading, error}
}

export function DownloadSection() {
  const {version, releaseDate, testnetInfo, isLoading, error} = useReleaseInfo()

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[32px]">
          Download Verus Desktop
        </h2>
        <div className="mb-8 h-5 w-48 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-[50px] rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-[50px] rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    )
  }

  const gitHubError = error && error.includes('GitHub')

  return (
    <>
      <h2 className="mb-4 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[32px]">
        Download Verus Desktop
      </h2>
      <div className="mb-8 flex items-center gap-8 text-[14px] text-black/60 dark:text-white/60 md:text-[16px]">
        <span>
          Version:{' '}
          <span className="font-medium text-black dark:text-white">
            {gitHubError ? 'Unavailable' : `v${version}`}
          </span>
        </span>
        {releaseDate && (
          <span>
            Date:{' '}
            <span className="font-medium text-black dark:text-white">
              {releaseDate}
            </span>
          </span>
        )}
      </div>

      <div className="relative space-y-4">
        <OsSelector
          mainVersion={version}
          testnetInfo={testnetInfo}
          error={error}
        />
      </div>

      <div className="mt-8">
        <p className="mt-8 text-[14px] text-black/60 dark:text-white/60 md:text-[15px]">
          Verus Desktop is open source. View the source code on{' '}
          <a
            href="https://github.com/VerusCoin/Verus-Desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-verus-blue hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </>
  )
}
