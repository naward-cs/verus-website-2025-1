'use client'

// Create a context to pass down protocol data
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

export interface ProtocolData {
  volume: string
  liquidity: string
}

interface ProtocolDataProviderProps {
  children: ReactNode
  onDataLoaded?: (data: ProtocolData, isLoading: boolean) => void
}

/**
 * Client component that handles data fetching for protocol statistics
 * Minimized client JS footprint by only handling data fetching logic
 */
export function ProtocolDataProvider({children}: ProtocolDataProviderProps) {
  const [protocolData, setProtocolData] = useState<ProtocolData>({
    volume: 'N/A',
    liquidity: 'N/A',
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchProtocolData() {
      try {
        setIsLoading(true)
        // Add timestamp to prevent caching
        const timestamp = Date.now()
        // Use a relative URL for client-side fetch
        const response = await fetch(`/api/protocol-stats?_=${timestamp}`, {
          cache: 'no-store',
          headers: {'Cache-Control': 'no-cache'},
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`)
        }

        const data = await response.json()
        console.log('Protocol data fetched from API:', data)

        setProtocolData({
          volume:
            data.volume24h && data.volume24h !== 'N/A' ? data.volume24h : 'N/A',
          liquidity:
            data.vrscLiquidity && data.vrscLiquidity !== 'N/A'
              ? data.vrscLiquidity
              : 'N/A',
        })
      } catch (error) {
        console.error('Error fetching protocol data:', error)
        setProtocolData({
          volume: 'N/A',
          liquidity: 'N/A',
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchProtocolData()

    // Refresh data every 2 minutes
    const interval = setInterval(fetchProtocolData, 120000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ProtocolDataContext.Provider value={{protocolData, isLoading}}>
      {children}
    </ProtocolDataContext.Provider>
  )
}

interface ProtocolDataContextType {
  protocolData: ProtocolData
  isLoading: boolean
}

const ProtocolDataContext = createContext<ProtocolDataContextType>({
  protocolData: {volume: 'N/A', liquidity: 'N/A'},
  isLoading: true,
})

// Hook to consume the protocol data context
export function useProtocolData() {
  return useContext(ProtocolDataContext)
}
