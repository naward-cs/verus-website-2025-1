'use server'

import type {VerificationRequest, VerificationResult} from '../lib/types'

import ProofsJSON from '@/data/vdxfid/proofsJSON'

import {verificationCheckCached} from './verification_check_cached'

// Fallback controller VDXFID in case import fails
const CONTROLLER_VDXFID = 'i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw'

export async function verifyServiceProof(
  data: VerificationRequest
): Promise<VerificationResult> {
  // Extract the verification key with fallback
  const controllerVdxfid = ProofsJSON.controller.vdxfid || CONTROLLER_VDXFID
  const verifyKey = data[controllerVdxfid]
  if (!verifyKey || typeof verifyKey !== 'string') {
    console.log('No verification key found')
    return {
      valid: 'error',
      overall: {valid: 'error', message: 'No verification key found'},
    }
  }
  try {
    return await verificationCheckCached(data)
  } catch (error) {
    console.error('Error in service verification:', error)
    // Only use fallback if there's an actual error
    return {
      valid: 'error',
      overall: {valid: 'error', message: 'Service verification failed'},
    }
  }
}
