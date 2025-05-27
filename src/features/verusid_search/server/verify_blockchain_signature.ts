'use server'

import type {VerificationRequest, VerificationResult} from '../lib/types'

import {verificationCheckCached} from './verification_check_cached'

export async function verifyBlockchainSignature(
  data: VerificationRequest
): Promise<VerificationResult> {
  if (data.type === 'blockchain') {
    if (!data.address || !data.qualifiedname) {
      console.log('Missing required blockchain data:', {
        address: data.address,
        qualifiedname: data.qualifiedname,
      })
      return {
        valid: 'error',
        overall: {
          valid: 'error',
          message: 'Missing blockchain verification data',
        },
        address: data.address,
      }
    }
  }

  console.log(
    `Sending verification request for ${data.type || 'unknown'} type:`,
    data
  )

  try {
    return await verificationCheckCached(data)
  } catch (error) {
    console.error('Error verifying signature:', error)
    // Only use fallback if there's an actual error
    return {
      valid: 'error',
      overall: {valid: 'error', message: 'Verification check failed'},
      address: data.address,
    }
  }
}
