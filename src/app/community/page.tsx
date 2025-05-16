// Community Page - Hub for VerusCoin community resources and social platforms
import type {Metadata} from 'next'

import {ImageMarquee} from '@/features/community/image-marquee'
import {CommunityLinks} from '@/features/community/links'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'Community Hub | Verus',
  description:
    'Join the worldwide Verus community across various platforms. Connect, collaborate, and contribute to the future of blockchain technology.',
  keywords:
    'Verus community, blockchain community, discord, social media, collaboration, contribute',
  openGraph: {
    title: 'Community Hub | Verus',
    description:
      'Join the worldwide Verus community across various platforms. Connect, collaborate, and contribute to the future of blockchain technology.',
    url: '/community',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Hub | Verus',
    description:
      'Join the worldwide Verus community across various platforms. Connect, collaborate, and contribute to the future of blockchain technology.',
  },
  alternates: {
    canonical: '/community',
  },
}

export default function CommunityPage() {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            {/* Community Links Section */}
            <CommunityLinks />
          </div>

          {/* Scrolling Image Gallery - Full width */}
          <ImageMarquee />
        </div>

        <Footer />
      </div>
    </main>
  )
}
