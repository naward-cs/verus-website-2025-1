import type {Metadata} from 'next'

import {VerificationForm} from '@/features/verify/components/verification-form'
import {getVerification} from '@/features/verify/server/get-verification'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Verify Signatures | Verus',
  description:
    'Verify signatures for files, messages, and hashes. Confirm the authenticity of digital signatures using VerusIDs to ensure data integrity and origin verification.',
  keywords:
    'verify signature, digital signature, blockchain verification, message verification, file verification, hash verification, cryptographic proof, VerusID signature',
  openGraph: {
    title: 'Verify Signatures | Verus',
    description:
      'Verify signatures for files, messages, and hashes. Confirm the authenticity of digital signatures using VerusIDs to ensure data integrity and origin verification.',
    url: '/verify',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Signatures | Verus',
    description:
      'Verify signatures for files, messages, and hashes. Confirm the authenticity of digital signatures using VerusIDs to ensure data integrity and origin verification.',
  },
  alternates: {
    canonical: '/verify',
  },
}
type SearchParams = Promise<{[key: string]: string | undefined}>
// Verify Signatures Page
export default async function VerifyPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams

  const updatedFormInfo = await getVerification(params)

  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Verify signatures for files, messages, and hashes.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Confirm the authenticity of digital signatures using VerusIDs to
                ensure data integrity and origin verification.
              </p>
            </div>

            <VerificationForm formInfo={updatedFormInfo} />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}