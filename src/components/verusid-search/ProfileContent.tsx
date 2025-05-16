'use client'

import {useState} from 'react'

import {ArweaveContent} from './ArweaveContent'
import {WebContent} from './WebContent'

interface ProfileContentProps {
  content: any[]
}

export function ProfileContent({content}: ProfileContentProps) {
  const [filter, setFilter] = useState<string | null>(null)

  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <div className="p-4 italic text-gray-500 dark:text-gray-400">
        No content items available
      </div>
    )
  }

  // Group content by type
  const contentByType: Record<string, any[]> = {}

  content.forEach((item) => {
    const type = item.qualifiedname?.split('.').slice(-2, -1)[0] || 'unknown'
    if (!contentByType[type]) {
      contentByType[type] = []
    }
    contentByType[type].push(item)
  })

  // Available content types
  const contentTypes = Object.keys(contentByType)

  return (
    <div>
      {/* Content type filters */}
      {contentTypes.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter(null)}
            className={`rounded px-3 py-1 text-sm ${
              filter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>

          {contentTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded px-3 py-1 text-sm capitalize ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {type} ({contentByType[type].length})
            </button>
          ))}
        </div>
      )}

      {/* Content items */}
      <div className="space-y-4">
        {content
          .filter((item) => {
            if (filter === null) return true
            const type =
              item.qualifiedname?.split('.').slice(-2, -1)[0] || 'unknown'
            return type === filter
          })
          .map((item, index) => {
            // Determine content type
            const qualifiedName = item.qualifiedname || ''
            const segments = qualifiedName.split('.')

            // Extract content source and type from qualified name
            const source =
              segments.length > 2 ? segments[segments.length - 2] : 'unknown'
            const type =
              segments.length > 1 ? segments[segments.length - 1] : 'unknown'

            // Create a key for this content item
            const contentKey = `${source}-${type}-${index}`

            // Route to the appropriate content handler
            if (source === 'arweave') {
              return (
                <ArweaveContent key={contentKey} content={{...item, type}} />
              )
            } else if (source === 'web') {
              return <WebContent key={contentKey} content={{...item, type}} />
            } else {
              // Default content display for unknown types
              return (
                <div
                  key={contentKey}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/70"
                >
                  <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                    Unknown Content Type: {qualifiedName}
                  </h4>
                  <pre className="overflow-x-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800/90 dark:text-gray-200">
                    {JSON.stringify(item, null, 2)}
                  </pre>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}
