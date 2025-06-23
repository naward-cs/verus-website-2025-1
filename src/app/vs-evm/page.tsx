import type {Metadata} from 'next'

import {ComparisonTable} from '@/features/vs-evm/comparison-table'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'VM-based Blockchains vs Verus',
  description:
    "Compare the architectural approaches of traditional VM blockchains with Verus Protocol's built-in functionality.",
  keywords:
    'blockchain comparison, EVM vs Verus, VM blockchain, smart contract alternatives, blockchain architecture, Verus advantage',
}

// Updated VS EVM Page with dark mode support and improved styling
export default function VsEvmPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                VM-based blockchains vs Verus.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Compare the architectural approaches of traditional VM
                blockchains with Verus Protocol's built-in functionality.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
