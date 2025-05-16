'use client'

import {useEffect, useState} from 'react'

import {useVerifyCryptoAddress} from '@/features/verusid_search/hooks/crypto-addresses'
import {formatAddress} from '@/features/verusid_search/lib/utils'

import {cn} from '@/lib/utils'

import {getIcon} from './icons'
import {ProofCard} from './proof-card'
import {VerificationBadge} from './verification-badge'

export interface KeyData {
  address?: string
  qualifiedname?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface VerifiedCryptoAddressesProps {
  keys: Record<string, KeyData>
  userId: string
}
export function VerifiedCryptoAddresses({
  keys,
  userId,
}: VerifiedCryptoAddressesProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const {setKeys, setUserId} = useVerifyCryptoAddress()
  useEffect(() => {
    setKeys(keys)
    setUserId(userId)
  }, [keys, setKeys, setUserId, userId])

  if (selected) {
    return (
      <div>
        <ProofCard selected={selected} />
        <button
          onClick={() => setSelected(null)}
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
    )
  }
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(keys).map(([key, cryptoInfo], i) => {
        return (
          <CryptoSelectButton
            key={`${i}-${key}-selected_button`}
            cryptoKey={key}
            cryptoInfo={cryptoInfo}
            userId={userId}
            onSelect={() => setSelected(key)}
          />
        )
      })}
    </div>
  )
}

interface CryptoButtonProps {
  cryptoKey: string
  cryptoInfo: KeyData
  userId: string
  onSelect: () => void
}
function CryptoSelectButton({
  cryptoKey,
  cryptoInfo,
  onSelect,
}: CryptoButtonProps) {
  const {valid} = useVerifyCryptoAddress()

  const isLoading = valid(cryptoKey) === 'loading'

  console.log(isLoading)

  if (!cryptoInfo.address) return null
  const icon = getIcon(cryptoKey) //TODO: get more
  return (
    <button
      onClick={onSelect}
      className={cn(
        'inline-flex cursor-wait items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
        !isLoading && 'cursor-pointer'
      )}
    >
      {icon}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {cryptoKey}
        </span>
        <span className="text-gray-900 dark:text-gray-200">
          {formatAddress(cryptoInfo.address || '')}
        </span>
      </div>
      <VerificationBadge
        status={valid(cryptoKey)}
        showText={false}
        className="ml-1"
      />
    </button>
  )
}
