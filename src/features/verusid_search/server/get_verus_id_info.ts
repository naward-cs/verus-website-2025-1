'use server'

import {fetchVerusId} from './fetch_verus_id'

export async function getVerusIdInfo(verusId: string) {
  const response = await fetchVerusId(verusId)
  console.log(response)
  return true
}
