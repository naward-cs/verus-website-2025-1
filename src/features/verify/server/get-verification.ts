'use server'

import type {VerifySchema} from '@/features/verify/schemas/verification-schema'

import {verifyHash} from '@/features/verify/server/verify-hash'
import {verifyMessage} from '@/features/verify/server/verify-message'

export type StatusError = {
  verusid?: string
  signature?: string
  message?: string
  hash?: string
}

export async function getVerification(formInfo: VerifySchema) {
  const {hash, message, verusid, signature} = formInfo
  const errorStatus: StatusError = {}
  if ((!!hash || !!message) && !!verusid && !!signature) {
    if (verusid.slice(-1) !== '@') {
      errorStatus.verusid = 'Please enter a valid VerusID'
      return {
        hash,
        message,
        verusid,
        signature,
        error: errorStatus,
        auto: true,
      }
    }
    try {
      let result
      if (!!hash && hash.length > 0)
        result = await verifyHash(verusid, signature, hash)
      if (!!message && message.length > 0)
        result = await verifyMessage(verusid, signature, message)

      if (!result) throw new Error('Result Invalid')
      return {hash, message, verusid, signature, auto: true}
    } catch {
      return {
        hash,
        message,
        verusid,
        signature,
        error: {
          _root: `Ensure that the VerusID, signature, and ${hash ? 'hash' : 'message'} are correct
            and try again.`,
        } as StatusError,
        auto: true,
      }
    }

    // //TODO handle result
    // return {hash, message, verusid, signature, auto: true}
  } else {
    return {auto: false}
  }
}
