// Projects Page - Showcase of projects using Verus technology
import type {Metadata} from 'next'

import Link from 'next/link'

import {env} from '@/configs/env'
import {ProjectList} from '@/features/projects/project-list'
import {IoLogoDiscord} from 'react-icons/io5'

import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata: Metadata = {
  title: 'Projects Built with Verus | Verus',
  description:
    'Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.',
  keywords:
    'Verus projects, blockchain applications, cryptocurrency projects, Web3 applications, dApps, blockchain ecosystem',
  openGraph: {
    title: 'Projects Built with Verus | Verus',
    description:
      'Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.',
    url: '/projects',
    siteName: 'Verus',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Built with Verus | Verus',
    description:
      'Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Projects built with Verus.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Explore applications, wallets, dashboards, and other projects
                leveraging the Verus Protocol and its ecosystem.
              </p>
            </div>

            <ProjectList />

            {/* Project submission info section */}
            <div className="mt-16 px-4 md:px-0">
              <div className="border border-blue-100/80 bg-white/80 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-8">
                <h2 className="mb-3 text-[18px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Want your project listed here?
                </h2>
                <p className="mb-4 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
                  If you have built a project using Verus technology and would
                  like to have it listed on this page, please visit our Discord
                  community and reach out in the #marketing channel to discuss
                  your project with the community.
                </p>
                <Link
                  href={env.NEXT_PUBLIC_DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[40px] w-fit items-center justify-center gap-2 rounded-lg border border-blue-800/60 bg-blue-950/40 px-6 text-[14px] font-medium text-blue-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-700/80 hover:text-blue-200 hover:shadow-lg md:h-[50px] md:text-[16px]"
                >
                  Join Discord
                  <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
