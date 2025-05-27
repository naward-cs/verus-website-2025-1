import type {VerificationStatus} from '../components/verification-badge'
import type {VerificationResult} from './types'

// Get signature verification statuses
export const getSignatureStatuses = (result?: VerificationResult) => {
  if (!result) return undefined

  const signatures: {
    sig1Status?: VerificationStatus
    sig2Status?: VerificationStatus
  } = {}

  if (result.key1) {
    signatures.sig1Status =
      result.key1.valid === 'true'
        ? 'pass'
        : result.key1.valid === 'false'
          ? 'fail'
          : 'unknown'
  }

  if (result.key2) {
    signatures.sig2Status =
      result.key2.valid === 'true'
        ? 'pass'
        : result.key2.valid === 'false'
          ? 'fail'
          : 'unknown'
  }

  return Object.keys(signatures).length > 0 ? signatures : undefined
}
