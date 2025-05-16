import React from 'react'

export type VerificationStatus = 'pass' | 'fail' | 'loading' | 'unknown'

interface VerificationBadgeProps {
  status: VerificationStatus
  showText?: boolean
  className?: string
}

export function VerificationBadge({
  status,
  showText = true,
  className = '',
}: VerificationBadgeProps) {
  let statusColor = ''
  let statusText = ''
  let icon = null

  switch (status) {
    case 'pass':
      statusColor =
        'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400'
      statusText = 'PASS'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      )
      break
    case 'fail':
      statusColor =
        'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
      statusText = 'FAIL'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      )
      break
    case 'loading':
      statusColor =
        'bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400'
      statusText = 'LOADING'
      icon = (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )
      break
    default:
      statusColor =
        'bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400'
      statusText = 'UNKNOWN'
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      )
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor} ${className}`}
    >
      <span className="mr-1">{icon}</span>
      {showText && <span>{statusText}</span>}
    </div>
  )
}
