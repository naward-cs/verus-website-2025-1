// Build start page showcasing developer resources and documentation
import {Metadata} from 'next'

import {Info} from 'lucide-react'

import {ResourcesGrid} from '@/components/build/resources-grid'
import {TerminalExample} from '@/components/build/terminal-example'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'Build on Verus | Developer Documentation',
  description:
    'Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.',
  keywords:
    'Verus development, VerusID, VDXF, blockchain development, DeFi development, Verus documentation',
  openGraph: {
    title: 'Build on Verus | Developer Documentation',
    description:
      'Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.',
    url: '/build/start',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build on Verus | Developer Documentation',
    description:
      'Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.',
  },
  alternates: {
    canonical: '/build/start',
  },
}

export default function BuildStartPage() {
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
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Build on Verus
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Get started with the developer resources and documentation. As a
                community-driven project, the documentation is continuously
                evolving and improving through contributions from developers
                like you.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/80 p-4 dark:border-blue-900/50 dark:bg-blue-950/30">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                <p className="text-[14px] text-blue-700 dark:text-blue-300 md:text-[15px]">
                  The developer documentation is maintained by the community.
                  While the community strives for accuracy and completeness,
                  some sections may be works in progress as there aren't
                  centralized documentation teams or full-time writers.
                </p>
              </div>
            </div>

            <ResourcesGrid />
            <TerminalExample />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
