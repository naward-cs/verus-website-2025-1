import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function WebContent({type, content}: {type: string; content: any}) {
  // Skip if no content is provided
  if (!content) return null
  // Handle web content based on content type
  switch (type) {
    case 'text':
      // Handle HTML content
      if (
        content.text?.toString().includes('iframe') ||
        (content.text?.toString()[0] === '<' && content.html !== false)
      ) {
        return (
          <div
            className="mb-4 overflow-hidden rounded-lg border border-gray-100 bg-white p-3 shadow-sm *:aspect-video *:h-auto *:w-full dark:border-gray-700/50 dark:bg-gray-800/80"
            dangerouslySetInnerHTML={{__html: content.text.toString()}}
          />
        )
      } else {
        // Regular text
        return (
          <div className="mb-4 rounded-lg border border-gray-100 bg-white p-3 text-gray-700 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80 dark:text-gray-300">
            {content.text?.toString()}
          </div>
        )
      }

    case 'pre':
      // Preformatted text
      return (
        <pre className="mb-4 overflow-x-auto rounded-lg border border-gray-100 bg-gray-100 p-4 text-sm text-gray-800 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-200">
          {content.text?.toString()}
        </pre>
      )

    case 'image':
      // Image content
      return (
        <div className="mb-4 rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80">
          <Image
            src={content.url?.toString()}
            alt={content.alt?.toString() || 'Image'}
            width={500}
            height={500}
            className="max-w-full rounded-lg"
          />
          {content.caption && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {content.caption}
            </p>
          )}
        </div>
      )

    case 'url':
      // URL/Link content
      if (content.url?.toString().includes('http')) {
        return (
          <div className="mb-4 rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80">
            <a
              href={content.url.toString()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {content.name?.toString() || content.url.toString()}
            </a>
            {content.description && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {content.description}
              </p>
            )}
          </div>
        )
      } else {
        return (
          <div className="mb-4 rounded-lg border border-gray-100 bg-white p-3 text-gray-500 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80 dark:text-gray-400">
            Invalid URL: {content.name?.toString() || 'Unknown link'}
          </div>
        )
      }

    default:
      // Handle unknown content types
      return (
        <div className="mb-4 rounded-lg border border-gray-100 bg-white p-3 text-gray-500 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/80 dark:text-gray-400">
          Unsupported content type: {content.type}
          {content.name && <span> - {content.name}</span>}
        </div>
      )
  }
}
