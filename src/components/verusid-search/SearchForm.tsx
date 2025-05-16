'use client'

import {FormEvent, useEffect, useState} from 'react'

import {Search} from 'lucide-react'

interface SearchFormProps {
  onSearch: (id: string) => void
  isLoading: boolean
  initialValue?: string
}

export function SearchForm({
  onSearch,
  isLoading,
  initialValue = '',
}: SearchFormProps) {
  const [verusId, setVerusId] = useState(initialValue)

  // Update local state when initialValue changes
  useEffect(() => {
    if (initialValue && initialValue !== verusId) {
      setVerusId(initialValue)
    }
  }, [initialValue])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (verusId.trim()) {
      // Add @ if not already present
      const formattedId = verusId.includes('@') ? verusId : `${verusId}@`
      onSearch(formattedId)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="space-y-2">
        <label
          htmlFor="verusId"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          VerusID
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <input
              type="text"
              id="verusId"
              placeholder="Enter a VerusID"
              className="w-full rounded-lg border border-blue-200/70 p-3 shadow-sm backdrop-blur-sm focus:border-verus-blue focus:ring-verus-blue dark:border-blue-800/30 dark:bg-gray-800/50 dark:text-white"
              value={verusId}
              onChange={(e) => setVerusId(e.target.value)}
              disabled={isLoading}
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Enter a VerusID name with or without the @ symbol
            </p>
          </div>
          <div className="flex items-start sm:items-center">
            <button
              type="submit"
              disabled={isLoading || !verusId.trim()}
              className="h-[46px] w-full rounded-lg bg-verus-blue px-6 py-2 font-medium text-white shadow transition-all transition-colors duration-300 hover:-translate-y-[1px] hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:shadow-blue-950/40 sm:w-auto"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
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
                  Searching...
                </span>
              ) : (
                <span className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
