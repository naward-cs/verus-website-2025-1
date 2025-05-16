// Community Page - Hub for VerusCoin community resources and social platforms
import {Metadata} from 'next'

import {ImageMarquee} from '@/components/community/image-marquee'
import {CommunityLinks} from '@/components/community/links'
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
      {/* Background images - separate for light and dark mode */}
      <img
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]"
      />
      <img
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute hidden h-full w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]"
      />

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
