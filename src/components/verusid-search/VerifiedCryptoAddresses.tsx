import React, {useEffect, useState} from 'react'

import {VerificationResult, verifySignature} from '@/lib/verificationService'

import {ProofCard} from './ProofCard'
import {VerificationBadge, VerificationStatus} from './VerificationBadge'

interface KeyData {
  address?: string
  qualifiedname?: string
  [key: string]: any
}

interface VerifiedCryptoAddressesProps {
  keys: Record<string, KeyData>
  userId: string
  showAll?: boolean
  onClickMore?: () => void
}

// Define UI-specific verification result
interface UIVerificationResult {
  valid: 'true' | 'false' | 'error' | 'loading' | 'unknown'
  key1?: {
    valid: 'true' | 'false' | 'error'
    message?: string
  }
  key2?: {
    valid: 'true' | 'false' | 'error'
    message?: string
  }
  overall?: {
    valid: 'true' | 'false' | 'error'
    message?: string
  }
  address?: string
  proofLink?: string
}

// Add SVG icons for crypto
const VerusIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 text-blue-600"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10" />
    <path fill="white" d="M8 8l8 8M8 16l8-8" stroke="white" strokeWidth="2" />
  </svg>
)

// Function to format address for display (truncate in the middle)
const formatAddress = (address: string, maxLength = 15) => {
  if (!address || address.length <= maxLength) return address
  const start = address.substring(0, Math.floor(maxLength / 2))
  const end = address.substring(address.length - Math.floor(maxLength / 2))
  return `${start}...${end}`
}

export function VerifiedCryptoAddresses({
  keys,
  userId,
  showAll = false,
  onClickMore,
}: VerifiedCryptoAddressesProps) {
  const [verificationResults, setVerificationResults] = useState<
    Record<string, UIVerificationResult>
  >({})
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  )
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  useEffect(() => {
    // Initialize verification status and loading states
    const initialResults: Record<string, UIVerificationResult> = {}
    const initialLoadingState: Record<string, boolean> = {}

    Object.keys(keys).forEach((keyName) => {
      initialResults[keyName] = {valid: 'loading'}
      initialLoadingState[keyName] = true
    })

    setVerificationResults(initialResults)
    setLoadingStates(initialLoadingState)

    // Verify each key
    Object.entries(keys).forEach(async ([keyName, keyData]) => {
      try {
        // Skip verification if no address
        if (!keyData.address) {
          setVerificationResults((prev) => ({
            ...prev,
            [keyName]: {valid: 'unknown'},
          }))
          setLoadingStates((prev) => ({
            ...prev,
            [keyName]: false,
          }))
          return
        }

        // Prepare verification data for blockchain
        const verificationData = {
          user: userId,
          type: 'blockchain', // This is critical - explicitly set type to blockchain
          address: keyData.address,
          qualifiedname: keyData.qualifiedname, // Ensure this is passed through
          ...keyData,
        }

        console.log(`Verifying ${keyName} address:`, verificationData)

        // Verify the key
        const result = await verifySignature(verificationData)
        console.log(`Verification result for ${keyName}:`, result)

        setVerificationResults((prev) => ({
          ...prev,
          [keyName]: {
            ...result,
            valid: result.valid,
          },
        }))
      } catch (error) {
        console.error(`Error verifying ${keyName}:`, error)
        setVerificationResults((prev) => ({
          ...prev,
          [keyName]: {valid: 'error'},
        }))
      } finally {
        setLoadingStates((prev) => ({
          ...prev,
          [keyName]: false,
        }))
      }
    })
  }, [keys, userId])

  // Convert verification result to badge status
  const getVerificationStatus = (
    result?: UIVerificationResult
  ): VerificationStatus => {
    if (!result) return 'unknown'
    if (result.valid === 'loading') return 'loading'
    if (result.valid === 'true' || result.overall?.valid === 'true')
      return 'pass'
    if (result.valid === 'false' || result.overall?.valid === 'false')
      return 'fail'
    return 'unknown'
  }

  // Get signature verification statuses
  const getSignatureStatuses = (result?: UIVerificationResult) => {
    if (!result) return undefined

    const signatures: {
      sig1Status?: VerificationStatus
      sig2Status?: VerificationStatus
    } = {}

    if (result.key1) {
      signatures.sig1Status =
        result.key1.valid === 'true'
          ? 'pass'
          : result.key1.valid === 'false'
            ? 'fail'
            : 'unknown'
    }

    if (result.key2) {
      signatures.sig2Status =
        result.key2.valid === 'true'
          ? 'pass'
          : result.key2.valid === 'false'
            ? 'fail'
            : 'unknown'
    }

    return Object.keys(signatures).length > 0 ? signatures : undefined
  }

  // Get explorer link based on the key type
  const getExplorerLink = (keyType: string, address?: string) => {
    if (!address) return undefined

    if (
      keyType.toLowerCase().includes('verus') ||
      keyType.toLowerCase().includes('vrsc')
    ) {
      return `https://explorer.verus.io/address/${address}`
    }

    if (keyType.toLowerCase().includes('btc')) {
      return `https://www.blockchain.com/btc/address/${address}`
    }

    if (keyType.toLowerCase().includes('eth')) {
      return `https://etherscan.io/address/${address}`
    }

    return undefined
  }

  // For compact display mode (showing just the first few keys)
  const displayKeys = showAll
    ? Object.keys(keys)
    : Object.keys(keys).slice(0, 3)

  return (
    <div>
      {selectedKey ? (
        <div className="mb-4">
          <ProofCard
            title={selectedKey}
            status={getVerificationStatus(verificationResults[selectedKey])}
            address={keys[selectedKey].address}
            signatures={getSignatureStatuses(verificationResults[selectedKey])}
            proofLink={getExplorerLink(selectedKey, keys[selectedKey].address)}
            proofLinkText="View Address on Verus Explorer"
          >
            {verificationResults[selectedKey]?.overall?.valid === 'false' && (
              <div className="mb-3 text-sm text-red-600 dark:text-red-400">
                Warning: Verification failed. The controller of this Verus
                profile may not control this address.
              </div>
            )}
          </ProofCard>
          <button
            onClick={() => setSelectedKey(null)}
            className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
            Back to all addresses
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {displayKeys.map((keyName) => {
            // Only show if it has an address
            if (!keys[keyName].address) return null

            const verificationStatus = getVerificationStatus(
              verificationResults[keyName]
            )
            const isKeyLoading = loadingStates[keyName]

            return (
              <div
                key={keyName}
                onClick={() => setSelectedKey(keyName)}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                title={keys[keyName].address}
              >
                {keyName.toLowerCase().includes('verus') ||
                keyName.toLowerCase().includes('vrsc') ? (
                  <VerusIcon />
                ) : keyName.toLowerCase().includes('btc') ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-orange-500"
                    fill="currentColor"
                  >
                    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z" />
                  </svg>
                ) : keyName.toLowerCase().includes('eth') ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-gray-500"
                    fill="currentColor"
                  >
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 21a3 3 0 01-3-3h2a1 1 0 001 1h8a1 1 0 001-1h2a3 3 0 01-3 3H7zm5-12a2 2 0 100-4 2 2 0 000 4zm0-7a4 4 0 013.874 3H20v2h-4.126A4 4 0 018 6a4 4 0 014-4zm-8 7h2a6.003 6.003 0 016-6h4v2h-4a4.002 4.002 0 00-3.874 3H16v2h-4.126A4 4 0 018 10a4 4 0 00-4 4v1a1 1 0 001 1h10a1 1 0 001-1v-1h2v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a6 6 0 016-6z" />
                  </svg>
                )}

                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {keyName}
                  </span>
                  <span className="text-gray-900 dark:text-gray-200">
                    {formatAddress(keys[keyName].address || '')}
                  </span>
                </div>

                <VerificationBadge
                  status={isKeyLoading ? 'loading' : verificationStatus}
                  showText={false}
                  className="ml-1"
                />
              </div>
            )
          })}

          {!showAll && Object.keys(keys).length > 3 && (
            <button
              onClick={onClickMore}
              className="inline-flex cursor-pointer items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <span>+{Object.keys(keys).length - 3} more</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
