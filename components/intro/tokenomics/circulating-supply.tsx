"use client"

import { useState, useEffect } from "react"

function SupplySkeleton() {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="text-[14px] text-black/50 dark:text-white/70 mb-2">Circulating supply:</h3>
        <div className="h-[34px] md:h-[38px] w-[200px] bg-gray-200 animate-pulse rounded" />
      </div>

      {/* Progress Bar Skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 animate-pulse rounded-full" />
        <div className="flex justify-end">
          <div className="h-[18px] w-[200px] bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}

interface CirculatingSupplyDisplayProps {
  maxSupply: number
}

export function CirculatingSupplyDisplay({ maxSupply }: CirculatingSupplyDisplayProps) {
  const [circulatingSupply, setCirculatingSupply] = useState<number | null>(null)

  useEffect(() => {
    async function fetchSupply() {
      try {
        const response = await fetch('/api/supply')
        if (!response.ok) throw new Error('Failed to fetch supply')
        const data = await response.json()
        if (data.supply) {
          setCirculatingSupply(data.supply)
        } else {
          throw new Error('Invalid supply data')
        }
      } catch (error) {
        console.error('Error fetching supply:', error)
        // Fallback to a reasonable estimate if API fails
        setCirculatingSupply(75_000_000)
      }
    }

    fetchSupply()
  }, [])

  if (circulatingSupply === null) {
    return <SupplySkeleton />
  }

  const percentage = (circulatingSupply / maxSupply) * 100
  const progressBarStyles = {
    filled: { width: `${percentage}%` },
    remaining: { width: `${100 - percentage}%` }
  }

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h3 className="text-[14px] text-black/50 dark:text-white/50 mb-2">Circulating supply:</h3>
        <div className="text-[22px] md:text-[26px] font-medium dark:text-white text-verus-blue">
          {circulatingSupply.toLocaleString()} VRSC
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="relative h-4 bg-[#E9EFFC] rounded-full overflow-hidden border border-verus-blue transition-all duration-300">
          <div 
            className="absolute top-0 left-0 h-full bg-verus-blue rounded-full"
            style={progressBarStyles.filled}
          />
          <div 
            className="absolute top-0 right-0 h-full bg-[#F5F8FF] rounded-l-none rounded-r-full"
            style={progressBarStyles.remaining}
          />
        </div>
        <div className="flex justify-end items-center text-[12px] dark:text-white/70 text-black/50">
          <span>Max supply: {maxSupply.toLocaleString()} VRSC</span>
        </div>
      </div>
    </div>
  )
}