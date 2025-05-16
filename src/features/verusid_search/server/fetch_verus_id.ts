import 'server-only'

import {env} from '@/configs/env'

export type VerusIdentity = {
  contentmap?: Record<string, string>
  contentmultimap?: Record<string, unknown[]>
  flags: number
  identityaddress: string
  minimumsignatures: number
  name?: string
  parent: string
  primaryaddresses: string[]
  privateaddress: string
  recoveryauthority: string
  revocationauthority: string
  systemid: string
  timelock: number
  version: number
}

export type VerusID = {
  blockheight: number
  cansignfor: boolean
  canspendfor: boolean
  friendlyname?: string
  fullyqualifiedname?: string
  identity: VerusIdentity
  status: string
  txid: string
  vout: number
}

type Error = {code: number; message: string}

type Return = {result: VerusID | null; error: Error | null}

// this function is only to be used to verify if a verusId exists.
export async function fetchVerusId(verusId: string): Promise<Return> {
  let result
  try {
    result = await fetch(env.VERUS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'search',
        method: 'getidentity',
        params: [verusId],
      }),
    }).then((res) => res.json())
  } catch {
    return {
      result: null,
      error: {code: -5, message: 'Network Issue. Try again later.'},
    }
  }

  if (result?.result) {
    return {result: result.result, error: null}
  } else {
    return {result: null, error: result.error}
  }
}
