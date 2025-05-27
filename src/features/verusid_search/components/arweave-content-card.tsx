/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {useState} from 'react'

import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

export function ArweaveContentCard({
  content,
  contentData,
}: {
  content: any
  contentData: any
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (isExpanded)
    return (
      <>
        <div className="max-h-[65dvh] overflow-x-auto bg-white dark:bg-gray-800/80">
          {typeof contentData === 'object' ? (
            <pre className="text-xs text-gray-800 dark:text-gray-200">
              {JSON.stringify(contentData, null, 2)}
            </pre>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none border-0 dark:border-0">
              <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                {contentData}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="mt-2 w-full self-center border-t border-gray-200 py-1 text-sm text-blue-600 shadow-sm hover:text-blue-500 dark:border-gray-700/50 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Collapse
        </button>
      </>
    )
  // Default state - show content preview with expand button
  return (
    <>
      <div className="flex items-center justify-between bg-gray-50 p-4 dark:bg-gray-800/60">
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
          onClick={() => setIsExpanded(true)}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white shadow-sm hover:bg-blue-700"
        >
          Show Content
        </button>
      </div>
    </>
  )
}
