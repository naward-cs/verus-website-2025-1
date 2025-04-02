"use client"

import { ReactNode } from 'react'

interface WebContentProps {
  content: any
}

export function WebContent({ content }: WebContentProps) {
  // Skip if no content is provided
  if (!content) return null

  // Handle web content based on content type
  switch (content.type) {
    case 'text':
      // Handle HTML content
      if (content.text?.toString().includes('iframe') || 
          (content.text?.toString()[0] === '<' && content.html !== false)) {
        return (
          <div 
            className="w-full mb-4 overflow-hidden rounded-lg bg-white dark:bg-gray-800/80 p-3 border border-gray-100 dark:border-gray-700/50 shadow-sm"
            dangerouslySetInnerHTML={{ __html: content.text.toString() }}
          />
        )
      } else {
        // Regular text
        return (
          <div className="text-gray-700 dark:text-gray-300 mb-4 p-3 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">{content.text?.toString()}</div>
        )
      }

    case 'pre':
      // Preformatted text
      return (
        <pre className="bg-gray-100 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 p-4 rounded-lg mb-4 overflow-x-auto text-sm border border-gray-100 dark:border-gray-700/50 shadow-sm">
          {content.text?.toString()}
        </pre>
      )
      
    case 'image':
      // Image content
      return (
        <div className="mb-4 bg-white dark:bg-gray-800/80 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">
          <img 
            src={content.url?.toString()} 
            alt={content.alt?.toString() || 'Image'} 
            className="rounded-lg max-w-full"
          />
          {content.caption && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{content.caption}</p>
          )}
        </div>
      )
      
    case 'url':
      // URL/Link content
      if (content.url?.toString().includes('http')) {
        return (
          <div className="mb-4 bg-white dark:bg-gray-800/80 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">
            <a 
              href={content.url.toString()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {content.name?.toString() || content.url.toString()}
            </a>
            {content.description && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{content.description}</p>
            )}
          </div>
        )
      } else {
        return (
          <div className="text-gray-500 dark:text-gray-400 mb-4 bg-white dark:bg-gray-800/80 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">
            Invalid URL: {content.name?.toString() || "Unknown link"}
          </div>
        )
      }
      
    default:
      // Handle unknown content types
      return (
        <div className="text-gray-500 dark:text-gray-400 mb-4 bg-white dark:bg-gray-800/80 p-3 rounded-lg border border-gray-100 dark:border-gray-700/50 shadow-sm">
          Unsupported content type: {content.type}
          {content.name && <span> - {content.name}</span>}
        </div>
      )
  }
} 