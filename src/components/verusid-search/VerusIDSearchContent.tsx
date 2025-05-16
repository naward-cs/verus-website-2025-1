'use client'

import {useEffect, useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'

import {Search} from 'lucide-react'

import FetchVerusId from '@/components/VerusIdProfile/FetchVerusId'
import FetchVerusProfile from '@/components/VerusIdProfile/FetchVerusProfile'
import {
  PublicProfileProps,
  VerusResult,
} from '@/components/VerusIdProfile/ProfileTypes'

import {ProfileDisplay} from './ProfileDisplay'
import {SearchForm} from './SearchForm'

export function VerusIDSearchPageContent() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [profileData, setProfileData] = useState<VerusResult | null>(null)
  const [debugInfo, setDebugInfo] = useState<string[]>([])
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  const addDebugInfo = (info: string) => {
    console.log(info) // Also log to console
    setDebugInfo((prev) => [...prev, info])
  }

  // Update URL to make it shareable
  const updateUrlWithSearch = (verusId: string) => {
    const url = new URL(window.location.href)
    url.searchParams.set('id', verusId)
    window.history.replaceState({}, '', url.toString())
  }

  const handleSearch = async (verusId: string) => {
    if (!verusId) return

    setIsLoading(true)
    setError(null)
    setProfileData(null)
    setDebugInfo([`Search started for: ${verusId}`])

    // Update URL for sharing
    updateUrlWithSearch(verusId)

    try {
      // Step 1: Fetch the VerusID from the blockchain
      addDebugInfo(`1. Fetching VerusID from blockchain...`)
      const verusIdResult = await FetchVerusId({id: verusId})

      if (verusIdResult.error) {
        addDebugInfo(
          `Error fetching VerusID: ${JSON.stringify(verusIdResult.error)}`
        )
        throw new Error(
          verusIdResult.error.message || 'Failed to fetch VerusID'
        )
      }

      if (!verusIdResult.result) {
        addDebugInfo(`No result returned for VerusID`)
        throw new Error('VerusID not found')
      }

      addDebugInfo(
        `2. VerusID found: ${verusIdResult.result.identity?.name || 'unnamed'}`
      )

      // Check for contentmap
      if (verusIdResult.result.identity?.contentmap) {
        addDebugInfo(
          `3. Contentmap found with ${Object.keys(verusIdResult.result.identity.contentmap).length} entries`
        )
        Object.entries(verusIdResult.result.identity.contentmap).forEach(
          ([key, value]) => {
            addDebugInfo(`   - Contentmap entry: ${key} => ${value}`)
          }
        )
      } else {
        addDebugInfo(`3. No contentmap found in identity`)
      }

      // Step 2: If there's contentmap data, fetch and process the profile
      let profileJSON: PublicProfileProps | undefined = undefined
      if (verusIdResult.result.identity?.contentmap) {
        addDebugInfo(`4. Attempting to fetch profile data from Arweave...`)
        try {
          const profileResult = await FetchVerusProfile(
            verusIdResult.result.identity
          )

          if (profileResult) {
            addDebugInfo(`5. Profile data successfully retrieved`)
            if (profileResult.public)
              addDebugInfo(`   - Public profile data found`)
            if (profileResult.services)
              addDebugInfo(
                `   - Services found: ${Object.keys(profileResult.services).length}`
              )
            if (profileResult.keys)
              addDebugInfo(
                `   - Keys found: ${Object.keys(profileResult.keys).length}`
              )
            if (profileResult.collections)
              addDebugInfo(
                `   - Collections found: ${Object.keys(profileResult.collections).length}`
              )

            profileJSON = profileResult
          } else {
            addDebugInfo(`5. No profile data returned from Arweave`)
          }
        } catch (profileError: any) {
          addDebugInfo(
            `Error fetching profile: ${profileError.message || profileError}`
          )
          console.error('Error fetching profile:', profileError)
        }
      } else {
        addDebugInfo(`4. Skipping profile fetch - no contentmap available`)
      }

      // Set the result data with or without profile
      addDebugInfo(
        `6. Setting profile data ${profileJSON ? 'with' : 'without'} Arweave profile information`
      )

      setProfileData({
        ...verusIdResult,
        profileJSON,
        id: verusId,
      })

      addDebugInfo(`7. Search completed successfully`)
    } catch (err: any) {
      const errorMsg =
        err.message || 'An error occurred while fetching the VerusID'
      setError(errorMsg)
      addDebugInfo(`ERROR: ${errorMsg}`)
      console.error('VerusID search error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // Check URL parameters on component mount
  useEffect(() => {
    const idParam = searchParams.get('id')
    if (idParam && !initialLoadComplete) {
      handleSearch(idParam)
    }
    setInitialLoadComplete(true)
  }, [searchParams])

  return (
    <div className="relative w-full overflow-hidden border border-blue-100/80 bg-white/80 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative">
        {/* Search header */}
        <div className="mb-6 flex items-center gap-2">
          <Search className="h-5 w-5 text-verus-blue dark:text-blue-400" />
          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
            VerusID Search
          </h3>
        </div>

        <SearchForm
          onSearch={handleSearch}
          isLoading={isLoading}
          initialValue={searchParams.get('id') || ''}
        />

        {/* Profile display */}
        <ProfileDisplay
          profileData={profileData}
          isLoading={isLoading}
          error={error}
        />

        {/* Debug Information Panel is hidden but code is preserved */}
        {/* Keep the debug functionality in the code but don't render it in the UI */}
      </div>
    </div>
  )
}
