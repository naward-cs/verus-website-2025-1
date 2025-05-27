import 'server-only'

import {parse} from 'node-html-parser'

import {getMetaContent, getPublishedDate} from '../utils'

export async function FetchMediaItemInfo(url: string) {
  const metadata = {
    url: url,
    title: `Article from ${new URL(url).hostname.replace('www.', '')}`,
    source: new URL(url).hostname.replace('www.', '').split('.')[0],
    date: 'Publication date unavailable',
    description: 'Article description could not be loaded.',
    image: '',
    error: undefined,
  }
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; VerusMediaBot/1.0; +https://verus.io)',
      },
      next: {revalidate: 3600}, // Cache for 1 hour (single caching directive)
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`)
    }

    const html = await response.text()
    const root = parse(html)

    // Extract Open Graph metadata
    metadata.title =
      getMetaContent(root, 'og:title') ||
      getMetaContent(root, 'twitter:title') ||
      root.querySelector('title')?.text ||
      ''

    metadata.description =
      getMetaContent(root, 'og:description') ||
      getMetaContent(root, 'twitter:description') ||
      getMetaContent(root, 'description') ||
      ''
    metadata.image =
      getMetaContent(root, 'og:image') ||
      getMetaContent(root, 'twitter:image') ||
      ''

    metadata.source =
      getMetaContent(root, 'og:site_name') ||
      new URL(url).hostname.replace('www.', '').split('.')[0]

    // Extract date - try various methods
    metadata.date =
      getMetaContent(root, 'article:published_time') ||
      getMetaContent(root, 'og:article:published_time') ||
      getPublishedDate(html) ||
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

    // const tmetadata = {
    //   title:
    //     getMetaContent(root, 'og:title') ||
    //     getMetaContent(root, 'twitter:title') ||
    //     root.querySelector('title')?.text ||
    //     '',

    //   description:
    //     getMetaContent(root, 'og:description') ||
    //     getMetaContent(root, 'twitter:description') ||
    //     getMetaContent(root, 'description') ||
    //     '',

    //   image:
    //     getMetaContent(root, 'og:image') ||
    //     getMetaContent(root, 'twitter:image') ||
    //     '',

    //   source:
    //     getMetaContent(root, 'og:site_name') ||
    //     new URL(url).hostname.replace('www.', '').split('.')[0],

    //   url: url,

    //   // Extract date - try various methods
    //   date:
    //     getMetaContent(root, 'article:published_time') ||
    //     getMetaContent(root, 'og:article:published_time') ||
    //     getPublishedDate(html) ||
    //     new Date().toLocaleDateString('en-US', {
    //       year: 'numeric',
    //       month: 'long',
    //       day: 'numeric',
    //     }),
    // }

    return metadata
  } catch (error) {
    console.error('Error fetching metadata:', error)
    return {...metadata, error: 'Failed to parse metadata'}
  }
}
