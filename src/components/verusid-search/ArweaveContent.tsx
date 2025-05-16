'use client'

import {useState} from 'react'

import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

interface ArweaveContentProps {
  content: any
}

export function ArweaveContent({content}: ArweaveContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [contentData, setContentData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  // Fetch Arweave content if txid is available
  const fetchArweaveContent = async () => {
    if (!content.txid) {
      setError('No transaction ID provided')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Use our API instead of direct Arweave fetch
      const baseUrl = window.location.origin
      const response = await fetch(`${baseUrl}/api/arweaveData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'getTransactionData',
          txId: content.txid,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch content: ${response.statusText}`)
      }

      const apiResult = await response.json()
      const data = apiResult.data

      // Try parsing as JSON if possible
      try {
        const jsonData = JSON.parse(data)
        setContentData(jsonData)
      } catch {
        // If not JSON, treat as raw content
        setContentData(data)
      }

      setIsExpanded(true)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch content')
      console.error('Error fetching Arweave content:', err)
    } finally {
      setIsLoading(false)
    }
  }

  // Render error state
  if (error) {
    return (
      <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="text-sm text-red-600 dark:text-red-300">Error: {error}</p>
      </div>
    )
  }

  // Render loading state
  if (isLoading) {
    return (
      <div className="mb-4 flex items-center justify-center py-6">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">
          Loading content...
        </span>
      </div>
    )
  }

  // If content is expanded and loaded, display it
  if (isExpanded && contentData) {
    return (
      <div className="mb-6">
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80">
          {typeof contentData === 'object' ? (
            <pre className="text-xs text-gray-800 dark:text-gray-200">
              {JSON.stringify(contentData, null, 2)}
            </pre>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                {contentData}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-2 text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Collapse
        </button>
      </div>
    )
  }

  // Default state - show content preview with expand button
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/60">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">
            {content.title || 'Arweave Content'}
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {content.type || 'post'}
            </span>
          </h4>
          <p className="mt-1 break-all text-xs text-gray-500 dark:text-gray-400">
            Transaction ID: {content.txid}
          </p>
        </div>
        <button
          onClick={fetchArweaveContent}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white shadow-sm hover:bg-blue-700"
        >
          Load Content
        </button>
      </div>
    </div>
  )
}
