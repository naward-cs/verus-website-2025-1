import type {Metadata} from 'next'

import {MigrateContent} from '@/features/migrate/content'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Migrate to Verus',
  description:
    'Bring your token and community to a better, more secure ecosystem while maintaining full Ethereum compatibility.',
  keywords:
    'blockchain migration, token migration, crypto migration, ethereum compatibility, secure token migration, Verus migration',
}

export default function MigratePage() {
  return (
    <BgWrapper>
      <div className="flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="mx-auto max-w-[1220px] text-center">
            <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
              Migrate to Verus
            </h1>
            <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white/90 dark:text-white/80 md:max-w-[900px] md:pt-[20px] md:text-[32px]">
              Bring your token and community to a better, more secure ecosystem
              while maintaining full Ethereum compatibility.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <MigrateContent />
        </div>
      </div>
    </BgWrapper>
  )
}
