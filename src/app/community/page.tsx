// Community Page - Hub for VerusCoin community resources and social platforms
import type {Metadata} from 'next'

import {ImageMarquee} from '@/features/community/image-marquee'
import {CommunityLinks} from '@/features/community/links'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Community Hub',
  description:
    'Join the worldwide Verus community across various platforms. Connect, collaborate, and contribute to the future of blockchain technology.',
  keywords:
    'Verus community, blockchain community, discord, social media, collaboration, contribute',
}

export default function CommunityPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            {/* Community Links Section */}
            <CommunityLinks />
          </div>

          {/* Scrolling Image Gallery - Full width */}
          <ImageMarquee />
        </div>
      </div>
    </BgWrapper>
  )
}
