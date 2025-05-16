/*
 * Server-side API for fetching Verus protocol statistics
 * - Retrieves data from cryptodashboard.faldt.net using the HTML parser
 * - Updated to use specific IDs provided by the cryptodashboard creator (July 2024)
 * - Provides essential data only: 24h volume, total liquidity, and VRSC in pools
 * - Implements minimal caching to prevent overwhelming the source
 * - Returns raw data in standard format for UI consumption
 */

import {NextResponse} from 'next/server'

import {parse} from 'node-html-parser'

// Cache configuration - reduced to 60 seconds
const CACHE_TIME = 60 // 1 minute in seconds
let cachedData: {
  volume24h: string
  totalLiquidity: string
  vrscLiquidity: string
  timestamp: number
} | null = null

// Safely get element by exact CSS selector
const getElementBySelector = (root: any, selector: string): any => {
  try {
    // If this is an ID selector, use getElementById directly
    if (selector.startsWith('#')) {
      const id = selector.substring(1) // Remove the # character
      return root.getElementById(id)
    }

    const selectorParts = selector.split(' > ')
    let element = root.querySelector(selectorParts[0])

    if (!element) {
      console.log(
        `Could not find element with selector part: ${selectorParts[0]}`
      )
      return null
    }

    for (let i = 1; i < selectorParts.length; i++) {
      const part = selectorParts[i]

      if (part.startsWith('div:nth-child(')) {
        const match = part.match(/\((\d+)\)/)
        if (!match) return null

        const index = parseInt(match[1]) - 1
        const children = element.querySelectorAll('div')

        if (index < 0 || index >= children.length) {
          console.log(
            `Child index ${index + 1} is out of bounds. Total children: ${children.length}`
          )
          return null
        }

        element = children[index]
      } else {
        element = element.querySelector(part)

        if (!element) {
          console.log(`Could not find element with selector part: ${part}`)
          return null
        }
      }
    }

    return element
  } catch (error) {
    console.error('Error parsing selector:', selector, error)
    return null
  }
}

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now()
    if (cachedData && now - cachedData.timestamp < CACHE_TIME * 1000) {
      return NextResponse.json(
        {...cachedData, cached: true},
        {
          status: 200,
          headers: {
            'Cache-Control':
              'no-store, no-cache, must-revalidate, proxy-revalidate',
            Pragma: 'no-cache',
            Expires: '0',
            'Surrogate-Control': 'no-store',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    }

    // Fetch fresh data
    console.log('Fetching fresh data from cryptodashboard.faldt.net')
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    const root = parse(html)

    // Get 24h volume data using the #total-volume-24h selector
    console.log('Getting 24h volume...')
    let volume24h = 'N/A'
    const volume24hElement = getElementBySelector(root, '#total-volume-24h')

    if (volume24hElement) {
      let volumeText = volume24hElement.text?.trim() || 'N/A'
      // Remove any space between $ and numbers
      volumeText = volumeText.replace('$ ', '$')
      volume24h = volumeText
      console.log('Found 24h volume:', volume24h)
    } else {
      console.log('Could not find 24h volume using #total-volume-24h selector')
    }

    // Get total liquidity using the new #total-basket-reserve selector
    console.log('Getting total liquidity...')
    let totalLiquidity = 'N/A'
    const totalLiquidityElement = getElementBySelector(
      root,
      '#total-basket-reserve'
    )

    if (totalLiquidityElement) {
      let liquidityText = totalLiquidityElement.text?.trim() || 'N/A'
      // Remove any space between $ and numbers
      liquidityText = liquidityText.replace('$ ', '$')
      totalLiquidity = liquidityText
      console.log('Found total liquidity:', totalLiquidity)
    } else {
      console.log(
        'Could not find total liquidity using #total-basket-reserve selector'
      )
    }

    // Get VRSC in liquidity pools using the new #vrsc-in-baskets selector
    console.log('Getting VRSC in pools...')
    let vrscLiquidity = 'N/A'
    const vrscLiquidityElement = getElementBySelector(root, '#vrsc-in-baskets')

    if (vrscLiquidityElement) {
      let vrscText = vrscLiquidityElement.text?.trim() || 'N/A'
      vrscLiquidity = vrscText + ' VRSC'
      console.log('Found VRSC in pools:', vrscLiquidity)
    } else {
      console.log(
        'Could not find VRSC in pools using #vrsc-in-baskets selector'
      )
    }

    // Prepare data for response
    const data = {
      volume24h,
      totalLiquidity,
      vrscLiquidity,
      timestamp: now,
    }

    // Update cache
    cachedData = data

    return NextResponse.json(
      {...data, cached: false},
      {
        status: 200,
        headers: {
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
          'Surrogate-Control': 'no-store',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching protocol stats:', error)
    return NextResponse.json(
      {
        error: 'Failed to retrieve protocol statistics',
        volume24h: 'N/A',
        totalLiquidity: 'N/A',
        vrscLiquidity: 'N/A',
      },
      {status: 500}
    )
  }
}
