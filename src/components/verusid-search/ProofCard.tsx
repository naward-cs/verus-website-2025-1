import React, {useState} from 'react'

import {VerificationBadge, VerificationStatus} from './VerificationBadge'

interface ProofCardProps {
  title: string
  status: VerificationStatus
  address?: string
  signatures?: {
    sig1Status?: VerificationStatus
    sig2Status?: VerificationStatus
  }
  proofLink?: string
  proofLinkText?: string
  children?: React.ReactNode
}

export function ProofCard({
  title,
  status,
  address,
  signatures,
  proofLink,
  proofLinkText = 'View Proof',
  children,
}: ProofCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div
        className="flex cursor-pointer items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
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

          <div className="flex-1">
            <div className="font-medium">{title}</div>
            {address && (
              <div className="max-w-xs truncate text-xs text-gray-500 dark:text-gray-400">
                {address}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <VerificationBadge status={status} />
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
      </div>

      {expanded && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/30">
          {signatures && (
            <div className="mb-4 space-y-2">
              {signatures.sig1Status && (
                <div className="flex items-center">
                  <div className="flex w-full items-center gap-2">
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
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Signature 1:
                    </span>
                    <div className="ml-2">
                      {signatures.sig1Status === 'pass' ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-800/30 dark:text-green-400">
                          <svg
                            className="mr-1 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          PASS
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-800/30 dark:text-red-400">
                          <svg
                            className="mr-1 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          FAIL
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {signatures.sig2Status && (
                <div className="flex items-center">
                  <div className="flex w-full items-center gap-2">
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
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Signature 2:
                    </span>
                    <div className="ml-2">
                      {signatures.sig2Status === 'pass' ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-800/30 dark:text-green-400">
                          <svg
                            className="mr-1 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          PASS
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-800/30 dark:text-red-400">
                          <svg
                            className="mr-1 h-3.5 w-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          FAIL
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {children}

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
              {proofLinkText}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
