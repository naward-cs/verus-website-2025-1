import type {Metadata} from 'next'

import {DonationAddresses} from '@/features/donate/addresses'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Support Verus with Donations | Verus',
  description:
    'As a no-ICO, no premine, and no dev-fee project, Verus relies on community donations to fund development and marketing efforts. Your contributions help maintain and advance the technology.',
  keywords:
    'donate crypto, Verus donation, blockchain funding, community support, cryptocurrency donation',
  openGraph: {
    title: 'Support Verus with Donations | Verus',
    description:
      'As a no-ICO, no premine, and no dev-fee project, Verus relies on community donations to fund development and marketing efforts. Your contributions help maintain and advance the technology.',
    url: '/donate',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support Verus with Donations | Verus',
    description:
      'As a no-ICO, no premine, and no dev-fee project, Verus relies on community donations to fund development and marketing efforts. Your contributions help maintain and advance the technology.',
  },
  alternates: {
    canonical: '/donate',
  },
}

// Donation Page for supporting Verus development
export default function DonatePage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Support the Verus ecosystem with donations.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                As a no-ICO, no premine, and no dev-fee project, Verus relies on
                community donations to fund development and marketing efforts.
                Your contributions help maintain and advance the technology.
              </p>
            </div>

            <DonationAddresses />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
