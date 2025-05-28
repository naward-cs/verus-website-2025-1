import type {HTMLElement} from 'node-html-parser'

// Helper function to extract meta content
export function getMetaContent(
  root: HTMLElement,
  property: string
): string | undefined {
  // Try Open Graph format
  const ogMeta = root.querySelector(`meta[property="${property}"]`)
  if (ogMeta) return ogMeta.getAttribute('content')

  // Try name attribute format
  const nameMeta = root.querySelector(`meta[name="${property}"]`)
  if (nameMeta) return nameMeta.getAttribute('content')

  return
}

// Helper function to try to extract published date from common patterns in HTML
export function getPublishedDate(html: string): string | undefined {
  // Common date patterns in article pages
  const datePatterns = [
    /datetime="([^"]+)"/i,
    /"datePublished":\s*"([^"]+)"/i,
    /"publishedDate":\s*"([^"]+)"/i,
    /"dateCreated":\s*"([^"]+)"/i,
  ]

  for (const pattern of datePatterns) {
    const match = html.match(pattern)
    if (match && match[1]) {
      try {
        const date = new Date(match[1])
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      } catch {
        // Continue if this format fails
      }
    }
  }

  return
}
