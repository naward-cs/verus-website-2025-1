import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Page Not Found | Verus",
  description: "The page you were looking for doesn't exist."
}

export default function NotFound() {
  return (
    <main className="relative h-screen w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img 
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] dark:hidden"
      />
      <img 
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] hidden dark:block"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16 flex items-center justify-center">
          <div className="max-w-[1220px] w-full mx-auto md:px-8">
            <div className="px-4 md:px-0 mb-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-verus-blue dark:text-blue-400">404</span>
                </div>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-medium text-gray-900 dark:text-gray-100 mb-4">
                Page Not Found
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
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