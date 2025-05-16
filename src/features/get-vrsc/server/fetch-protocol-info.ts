


import 'server-only'






import {env} from '@/configs/env'
import {parse} from 'node-html-parser'
import {getElementBySelector} from '../get-element-by-selector'





/*
 * Server-side fetching Verus protocol statistics
 * - Retrieves data from cryptodashboard.faldt.net using the HTML parser
 * - Updated to use specific IDs provided by the cryptodashboard creator (July 2024)
 * - Provides essential data only: 24h volume, total liquidity, and VRSC in pools
 * - Implements minimal caching to prevent overwhelming the source
 * - Returns raw data in standard format for UI consumption
 */


export async function fetchProtocolInfo(){
  const response = await fetch(env.NEXT_PUBLIC_CRYPTO_DASHBOARD, {
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
    let volumeText = volume24hElement.text.trim() || 'N/A'
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
    let liquidityText = totalLiquidityElement.text.trim() || 'N/A'
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
    const vrscText = vrscLiquidityElement.text.trim() || 'N/A'
    vrscLiquidity = vrscText + ' VRSC'
    console.log('Found VRSC in pools:', vrscLiquidity)
  } else {
    console.log('Could not find VRSC in pools using #vrsc-in-baskets selector')
  }

  return {
    volume24h,
    totalLiquidity,
    vrscLiquidity,
    timestamp: Date.now(),
  }
}