'use client'

import {useState} from 'react'

import {Copy} from 'lucide-react'

export function ContributeCopyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('Verus Coin Foundation@')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-4 flex items-center">
      <div className="relative flex-grow">
        <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50 p-3 pl-4 dark:border-gray-700 dark:bg-gray-800">
          <span className="text-[16px] font-medium text-gray-800 dark:text-gray-200 md:text-[18px]">
            Verus Coin Foundation@
          </span>
          <button
            onClick={handleCopy}
            className="ml-2 rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {copied ? (
              <div className="text-sm font-medium text-green-600 dark:text-green-400">
                Copied!
              </div>
            ) : (
              <Copy className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
