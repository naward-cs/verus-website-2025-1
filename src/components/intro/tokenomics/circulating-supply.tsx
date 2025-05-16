'use client'

import {useEffect, useState} from 'react'

function SupplySkeleton() {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="mb-2 text-[14px] text-black/50 dark:text-white/70">
          Circulating supply:
        </h3>
        <div className="h-[34px] w-[200px] animate-pulse rounded bg-gray-200 md:h-[38px]" />
      </div>

      {/* Progress Bar Skeleton */}
      <div className="space-y-2">
        <div className="h-4 animate-pulse rounded-full bg-gray-200" />
        <div className="flex justify-end">
          <div className="h-[18px] w-[200px] animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

interface CirculatingSupplyDisplayProps {
  maxSupply: number
}

export function CirculatingSupplyDisplay({
  maxSupply,
}: CirculatingSupplyDisplayProps) {
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(
    null
  )
  const [isEstimate, setIsEstimate] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSupply() {
      try {
        // Add cache-busting timestamp
        const response = await fetch(`/api/supply?_t=${Date.now()}`)

        if (!response.ok) {
          console.error(`Supply API returned status: ${response.status}`)
          throw new Error(`Failed to fetch supply: ${response.status}`)
        }

        const data = await response.json()

        // Check if we got a valid supply number
        if (typeof data.supply === 'number' && data.supply > 0) {
          setCirculatingSupply(data.supply)
          setIsEstimate(data.isEstimate === true)
        } else {
          console.error('Invalid supply data:', data)
          throw new Error('Invalid supply data')
        }
      } catch (error) {
        console.error('Error fetching supply:', error)
        // Fallback to a reasonable estimate if API fails
        setCirculatingSupply(75_000_000)
        setIsEstimate(true)
      } finally {
        setLoading(false)
      }
    }

    fetchSupply()
  }, [])

  if (loading) {
    return <SupplySkeleton />
  }

  // Safety check - should never happen with our fallback
  if (circulatingSupply === null) {
    return <SupplySkeleton />
  }

  const percentage = (circulatingSupply / maxSupply) * 100
  const progressBarStyles = {
    filled: {width: `${percentage}%`},
    remaining: {width: `${100 - percentage}%`},
  }

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="mb-2 text-[14px] text-black/50 dark:text-white/50">
          Circulating supply{isEstimate ? ' (estimate)' : ''}:
        </h3>
        <div className="text-[22px] font-medium text-verus-blue dark:text-white md:text-[26px]">
          {circulatingSupply.toLocaleString()} VRSC
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="relative h-4 overflow-hidden rounded-full border border-verus-blue bg-[#E9EFFC] transition-all duration-300">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-verus-blue"
            style={progressBarStyles.filled}
          />
          <div
            className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full bg-[#F5F8FF]"
            style={progressBarStyles.remaining}
          />
        </div>
        <div className="flex items-center justify-end text-[12px] text-black/50 dark:text-white/70">
          <span>Max supply: {maxSupply.toLocaleString()} VRSC</span>
        </div>
      </div>
    </div>
  )
}
