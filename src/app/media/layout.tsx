
import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export default function MediaLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      <BodyBgSmallImages />
      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-16 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Media & press resources.
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                Everything you need to tell the Verus story accurately–press
                kits, media mentions, and brand assets. Inquiries to:{' '}
                <a
                  href="mailto:press@veruscoin.io"
                  className="font-medium text-white hover:underline"
                >
                  press@veruscoin.io
                </a>
              </p>
            </div>
            {children}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
