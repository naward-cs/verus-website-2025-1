import 'server-only'

import {env} from '@/configs/env'
import Parser from 'rss-parser'

export async function fetchMediumArticles() {
  try {
    const parser = new Parser({
      timeout: 10000, // 10 second timeout
      customFields: {
        item: [
          ['content:encoded', 'content'],
          ['dc:creator', 'creator'],
        ],
      },
    })
    const feed = await parser.parseURL(env.MEDIUM_FEED_URL)

    // Process articles
    const articles = feed.items.map((item) => {
      // Extract thumbnail image from content
      let thumbnail = ''
      if (item.content) {
        const imgMatch = item.content.match(
          /<img[^>]+src=["']([^"']+)["'][^>]*>/i
        )
        if (imgMatch && imgMatch[1]) {
          thumbnail = imgMatch[1]
        }
      }

      // Extract description (first paragraph or partial content)
      let description = ''
      if (item.content) {
        const textMatch = item.content.replace(/<[^>]+>/g, ' ').trim()
        description =
          textMatch.substring(0, 200) + (textMatch.length > 200 ? '...' : '')
      }
      return {
        title: item.title!,
        link: item.link!,
        pubDate: item.pubDate!,
        creator: item.creator!,
        content: item.content!,
        thumbnail,
        description,
      }
    })

    return articles
  } catch (error) {
    console.error('Error in Medium getting rss-feed:', error)
    return []
  }
}
