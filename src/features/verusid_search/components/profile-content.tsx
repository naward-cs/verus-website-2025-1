/* eslint-disable @typescript-eslint/no-explicit-any */
import {Fragment, Suspense} from 'react'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {ArweaveContent} from './arweave-content'
import {WebContent} from './web-content'

export function ProfileContent({content}: {content?: Record<string, any>}) {
  console.log('profile', content)
  if (!content || !Array.isArray(content) || content.length === 0) {
    return (
      <div className="p-4 italic text-gray-500 dark:text-gray-400">
        No content items available
      </div>
    )
  }

  // Group content by type

  const contentByType: Record<string, Record<string, any>[]> = content.reduce(
    (group, item) => {
      const type = item.qualifiedname?.split('.').slice(-2, -1)[0] || 'unknown'

      return {...group, [type]: [...(group[type] || []), item]}
    },
    []
  )
  console.log('contentByType', contentByType)
  // Available content types
  const contentTypes = Object.keys(contentByType)

  return (
    <div>
      <Tabs
        defaultValue="all"
        className="p-4 italic text-gray-500 dark:text-gray-400"
      >
        <TabsList className="mb-4 flex flex-wrap justify-start gap-2">
          <TabsTrigger
            value="all"
            className="rounded bg-gray-100 px-3 py-1 text-gray-700 hover:bg-gray-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 data-[state=active]:dark:bg-blue-600 data-[state=active]:dark:text-white"
          >
            All ({content.length})
          </TabsTrigger>
          {contentTypes.map((type, i) => (
            <TabsTrigger
              key={`${i}-${type}-button`}
              value={type}
              className="rounded bg-gray-100 px-3 py-1 capitalize text-gray-700 hover:bg-gray-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 data-[state=active]:dark:bg-blue-600 data-[state=active]:dark:text-white"
            >
              {type} ({contentByType[type].length})
            </TabsTrigger>
          ))}
        </TabsList>
        {/* All Content */}
        <TabsContent value="all" className="mt-0 space-y-4">
          {content.map(ContentCard)}
        </TabsContent>
        {/* Content based on tab */}
        {contentTypes.map((tab, i) => (
          <TabsContent
            key={`${i}-${tab}-content`}
            value={tab}
            className="mt-0 space-y-4"
          >
            {contentByType[tab].map(ContentCard)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

//vdxfkey

const ContentCard = (item: Record<string, any>, index: number) => {
  // Determine content type
  const qualifiedName = item.qualifiedname || ''
  const segments = qualifiedName.split('.')

  // Extract content source and type from qualified name
  const source = segments.length > 2 ? segments[segments.length - 2] : 'unknown'
  const type = segments.length > 1 ? segments[segments.length - 1] : 'unknown'

  // Create a key for this content item
  const contentKey = `${source}-${type}-${index}-test-tab`
  // Route to the appropriate content handler
  if (source === 'arweave')
    return (
      <Fragment key={`${contentKey}`}>
        <Suspense
          fallback={
            <div className="mb-4 flex items-center justify-center py-6">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
              <span className="ml-3 text-gray-600 dark:text-gray-300">
                Fetching {type} content...
              </span>
            </div>
          }
        >
          <ArweaveContent content={item} />
        </Suspense>
      </Fragment>
    )
  if (source === 'web')
    return <WebContent key={`${contentKey}`} type={type} content={item} />
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
