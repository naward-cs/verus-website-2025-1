import 'server-only'

import type {VerusIdentity} from './fetch_verus_id'

import CollectionsJSON from '@/data/vdxfid/collectionsJSON'
import IdentityJSON from '@/data/vdxfid/identityJSON'

import {queryArweaveAddress} from '../lib/arweave/query_arweave_address'
import {queryArweaveTransaction} from '../lib/arweave/query_arweave_txid'
import {CreateProfile} from '../lib/create_verus_profile'
import {reverseHex} from '../lib/utils'

export async function fetchVerusProfile(identity?: VerusIdentity) {
  console.log('FetchVerusProfile: Starting with content:', identity)

  // Validate inputs
  if (!identity) {
    console.log('FetchVerusProfile: No content provided')
    return undefined
  }

  if (!CollectionsJSON.arweave.hash160result) {
    console.error(
      'FetchVerusProfile: Collections JSON arweave hash160result not found'
    )
    console.log('CollectionsJSON:')
    return undefined
  }

  if (!IdentityJSON.public.vdxfid) {
    console.error('FetchVerusProfile: Identity JSON public vdxfid not found')
    console.log('IdentityJSON:', IdentityJSON)
    return undefined
  }
  // Check specifically for arweave collection in contentmap
  const arweaveVdxfid = CollectionsJSON.arweave.hash160result
  console.log('FetchVerusProfile: Looking for arweave vdxfid:', arweaveVdxfid)
  console.log(
    'FetchVerusProfile: Reversed arweave vdxfid:',
    reverseHex(arweaveVdxfid)
  )

  // Try both direct and reversed hex values from the contentmap
  const contentmapValue =
    identity.contentmap?.[arweaveVdxfid] ||
    identity.contentmap?.[reverseHex(arweaveVdxfid)]

  if (!contentmapValue) {
    console.log(
      'FetchVerusProfile: No Arweave content map entry found in:',
      identity
    )
    return undefined
  }

  console.log('FetchVerusProfile: Found contentmap value:', contentmapValue)

  const arweaveTxId = await queryArweaveAddress(contentmapValue)
  if (!arweaveTxId) {
    console.log('FetchVerusProfile: No Arweave transaction ID found')
    return undefined
  }

  console.log('FetchVerusProfile: Arweave transaction ID found:', arweaveTxId)
  console.log('FetchVerusProfile: Fetching Arweave transaction data via API...')
  let arweaveJSON = await queryArweaveTransaction(arweaveTxId)

  if (!arweaveJSON) {
    console.log('FetchVerusProfile: No Arweave JSON data found')
    return undefined
  }

  console.log('FetchVerusProfile: Arweave transaction ID found:', arweaveJSON)

  // If it's a manifest, look for a path to the actual data
  if (arweaveJSON.manifest === 'arweave/paths') {
    console.log(
      'FetchVerusProfile: Detected manifest format, looking for data path'
    )

    // Get the data TX ID from the manifest
    const dataPath =
      arweaveJSON.paths?.['undefined']?.id ||
      (Object.values(arweaveJSON.paths || {}).length > 0
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (Object.values(arweaveJSON.paths || {})[0] as any)?.id
        : undefined)

    if (dataPath) {
      console.log('FetchVerusProfile: Found data path in manifest:', dataPath)

      // Fetch the actual data transaction using the API
      console.log(
        'FetchVerusProfile: Fetching data from path transaction via API...'
      )
      //defaults as parsed json
      arweaveJSON = await queryArweaveTransaction(dataPath)
    } else {
      console.log('FetchVerusProfile: No data path found in manifest')
      return undefined
    }
  }

  // Check if the public profile data exists
  let publicData = arweaveJSON[IdentityJSON.public.vdxfid]

  // If not found directly, try a nested structure
  if (!publicData && arweaveJSON.iEXZ3nd4K9fmGDSiQ8J6XLATzUUSKp1eAz) {
    console.log('FetchVerusProfile: Public data found in nested structure')
    publicData = arweaveJSON.iEXZ3nd4K9fmGDSiQ8J6XLATzUUSKp1eAz
  }

  if (!publicData) {
    console.log(
      `FetchVerusProfile: Public profile data not found at key: ${IdentityJSON.public.vdxfid}`
    )
    console.log('FetchVerusProfile: Available keys:', Object.keys(arweaveJSON))
    return undefined
  }

  console.log('FetchVerusProfile: Public profile data found, creating profile')
  console.log('public data', publicData)

  // Create structured profile data
  const profileJSON = CreateProfile(publicData)
  console.log('FetchVerusProfile: Profile creation complete')

  return profileJSON
}
