import type {VerificationStatus} from '../components/verification-badge'
import type {VerificationResult} from './types'

export const getVerificationStatus = (
  result?: VerificationResult
): VerificationStatus => {
  if (!result) return 'unknown'
  if (result.valid === 'true' || result.overall?.valid === 'true') return 'pass'
  if (result.valid === 'false' || result.overall?.valid === 'false')
    return 'fail'
  return 'unknown'
}
