import 'server-only'

import {env} from '@/configs/env'

export async function verifyMessage(
  verusId: string,
  signature: string,
  message: string
) {
  // Call Verus API to verify the message
  // console.log({verusId, signature, message})

  const response = await fetch(env.VERUS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'verify-message',
      method: 'verifymessage',
      params: [verusId, signature, message],
    }),
    next: {revalidate: 3600}, // Cache for 1 hour (single caching directive)
  })
  // Check if the API request was successful
  if (!response.ok) {
    console.error(`Verus API returned status: ${response.status}`)
    // throw new Error(`Failed to verify hash: ${response.statusText}`)
  }
  // Parse and return the verification result
  const data = await response.json()

  if (data.error) {
    throw new Error(data.error.message || 'Unknown error from Verus API')
  }
  return data.result === true
}
