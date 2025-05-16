import 'server-only'

import {env} from '@/configs/env'

export async function verifyHash(
  verusId: string,
  signature: string,
  hash: string
) {
  // Call Verus API to verify the hash
  const response = await fetch(env.VERUS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'verify-hash',
      method: 'verifyhash',
      params: [verusId, signature, hash],
    }),
  })
  // Check if the API request was successful
  if (!response.ok) {
    console.error(`Verus API returned status: ${response.status}`)
    throw new Error(`Failed to verify hash: ${response.statusText}`)
  }
  // Parse and return the verification result
  const data = await response.json()
  if (data.error) {
    throw new Error(data.error.message || 'Unknown error from Verus API')
  }
  return data.result === true
}
