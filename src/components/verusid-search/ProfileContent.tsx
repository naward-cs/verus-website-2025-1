"use client"

import { useState } from 'react'
import { WebContent } from './WebContent'
import { ArweaveContent } from './ArweaveContent'

interface ProfileContentProps {
  content: any[]
}

export function ProfileContent({ content }: ProfileContentProps) {
  const [filter, setFilter] = useState<string | null>(null)

  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 italic p-4">
        No content items available
      </div>
    )
  }

  // Group content by type
  const contentByType: Record<string, any[]> = {}
  
  content.forEach(item => {
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
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 text-sm rounded ${
              filter === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          
          {contentTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 text-sm rounded capitalize ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
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
          .filter(item => {
            if (filter === null) return true
            const type = item.qualifiedname?.split('.').slice(-2, -1)[0] || 'unknown'
            return type === filter
          })
          .map((item, index) => {
            // Determine content type
            const qualifiedName = item.qualifiedname || ''
            const segments = qualifiedName.split('.')
            
            // Extract content source and type from qualified name
            const source = segments.length > 2 ? segments[segments.length - 2] : 'unknown'
            const type = segments.length > 1 ? segments[segments.length - 1] : 'unknown'
            
            // Create a key for this content item
            const contentKey = `${source}-${type}-${index}`
            
            // Route to the appropriate content handler
            if (source === 'arweave') {
              return <ArweaveContent key={contentKey} content={{ ...item, type }} />
            } else if (source === 'web') {
              return <WebContent key={contentKey} content={{ ...item, type }} />
            } else {
              // Default content display for unknown types
              return (
                <div key={contentKey} className="p-4 bg-gray-50 dark:bg-gray-800/70 rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Unknown Content Type: {qualifiedName}
                  </h4>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-800/90 p-2 rounded overflow-x-auto text-gray-800 dark:text-gray-200">
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