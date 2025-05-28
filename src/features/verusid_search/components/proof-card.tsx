'use client'

import {useState} from 'react'

import {useVerifyCryptoAddress} from '@/features/verusid_search/hooks/crypto-addresses'
import {getExplorerLink} from '@/features/verusid_search/lib/explorer_links'
import {getSignatureStatuses} from '@/features/verusid_search/lib/signature_status'

import {VerificationBadge} from './verification-badge'

export function ProofCard({selected}: {selected: string}) {
  const [expanded, setExpanded] = useState(false)
  const {keys, valid, results} = useVerifyCryptoAddress()
  const title = selected
  const address = keys?.[selected].address
  const signatures = getSignatureStatuses(results?.[selected])
  const proofLink = getExplorerLink(selected, address)
  const overall = results?.[selected].overall?.valid
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex flex-col items-center justify-between gap-2 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 sm:flex-row"
      >
        <div className="flex w-full flex-row items-start gap-3">
          {/* Icon based on title */}
          <div className="w-6 text-center text-lg">
            {title.toLowerCase().includes('linkedin') && '🔵'}
            {title.toLowerCase().includes('reddit') && '🟠'}
            {title.toLowerCase().includes('twitter') && '𝕏'}
            {title.toLowerCase().includes('github') && '🐙'}
            {title.toLowerCase().includes('verus') && 'Ⓥ'}
            {title.toLowerCase().includes('btc') && '₿'}
            {title.toLowerCase().includes('eth') && 'Ξ'}
            {!title
              .toLowerCase()
              .match(/linkedin|reddit|twitter|github|verus|btc|eth/) && '🔗'}
          </div>
          <div className="min-w-0 text-left">
            <p className="font-medium">{title}</p>
            <p className="max-w-xs truncate text-xs text-gray-500 dark:text-gray-400">
              {address}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-center">
          <VerificationBadge status={valid(selected)} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-5 w-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/30">
          {signatures && (
            <div className="mb-4 space-y-2">
              {Object.values(signatures).map((sig, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.75-.75V15h1.5a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12.06a.75.75 0 01.906-.221 6.75 6.75 0 001.5-11.088A6.73 6.73 0 0015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Signature {i + 1}:
                  </p>
                  <VerificationBadge status={sig} />
                </div>
              ))}
            </div>
          )}
          {overall === 'false' && (
            <div className="mb-3 text-sm text-red-600 dark:text-red-400">
              Warning: Verification failed. The controller of this Verus profile
              may not control this address.
            </div>
          )}

          {proofLink && (
            <a
              href={proofLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clipRule="evenodd"
                />
              </svg>
              View Address on Verus Explorer
            </a>
          )}
        </div>
      )}
    </div>
  )
}
