import {BodyBgSmallImages} from '@/components/background-images'
import {Footer} from '@/components/footer'

export const metadata = {
  title: 'Page Not Found | Verus',
  description: "The page you were looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <main className="relative mt-[50px] h-screen w-screen md:mt-[70px]">
      <BodyBgSmallImages />

      <div className="relative z-10 flex min-h-[calc(100vh-50px)] flex-col md:min-h-[calc(100vh-70px)]">
        <div className="flex flex-grow items-center justify-center py-8 md:py-16">
          <div className="mx-auto w-full max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 text-center md:px-0">
              <div className="mb-6 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-verus-blue/10 dark:bg-blue-900/30 md:h-32 md:w-32">
                  <span className="text-5xl font-bold text-verus-blue dark:text-blue-400 md:text-6xl">
                    404
                  </span>
                </div>
              </div>

              <h1 className="mb-4 text-2xl font-medium text-gray-900 dark:text-gray-100 md:text-4xl">
                Page Not Found
              </h1>

              <p className="mx-auto mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
