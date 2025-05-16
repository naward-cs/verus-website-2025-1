'use server'

import {FetchMediaItemInfo} from './fetch-media-item-info'

export type OgMetaData = {
  url: string
  title: string
  source: string
  date: string
  description: string
  image: string
  error?: string
}

export async function getMediaItemOgCard(url: string) {
  try {
    const metadata = await FetchMediaItemInfo(url)
    console.log(metadata)
    if (!!metadata.error) {
      throw new Error('Failed to fetch metadata')
    }

    return metadata
  } catch (error) {
    console.error('Error fetching metadata for URL:', url, error)
    // Return a fallback item with error state
    return error as OgMetaData
  }
}
