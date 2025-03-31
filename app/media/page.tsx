// Media Page - Provides press kit, media coverage, and brand assets
import { Footer } from "@/components/footer"
import { MediaTabs } from "@/components/media/tabs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Media & Press Resources | Verus",
  description: "Everything you need to tell the Verus story accurately–press kits, media mentions, and brand assets.",
  keywords: "Verus press kit, blockchain media, cryptocurrency press, brand assets, media coverage, Verus media",
  openGraph: {
    title: "Media & Press Resources | Verus",
    description: "Everything you need to tell the Verus story accurately–press kits, media mentions, and brand assets.",
    url: "/media",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media & Press Resources | Verus",
    description: "Everything you need to tell the Verus story accurately–press kits, media mentions, and brand assets.",
  },
  alternates: {
    canonical: "/media",
  },
}

export default function MediaPage() {
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
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <div className="px-4 md:px-0 mb-8 md:mb-16">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue dark:text-blue-400 font-medium tracking-tight">
                Media & press resources.
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                Everything you need to tell the Verus story accurately–press kits, media mentions, and brand assets. 
                Inquiries to: <a href="mailto:press@veruscoin.io" className="text-white font-medium hover:underline">press@veruscoin.io</a>
              </p>
            </div>
            
            <MediaTabs />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 