// Build start page showcasing developer resources and documentation
import { ResourcesGrid } from "@/components/build/resources-grid"
import { TerminalExample } from "@/components/build/terminal-example"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Build on Verus | Developer Documentation",
  description: "Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.",
  keywords: "Verus development, VerusID, VDXF, blockchain development, DeFi development, Verus documentation",
  openGraph: {
    title: "Build on Verus | Developer Documentation",
    description: "Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.",
    url: "/build/start",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build on Verus | Developer Documentation",
    description: "Get started with Verus developer resources and documentation. Learn about VerusID, VDXF, DeFi, and more.",
  },
  alternates: {
    canonical: "/build/start",
  },
}

export default function BuildStartPage() {
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
                Build on Verus
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                Get started with the developer resources and documentation. As a community-driven project, the documentation is continuously evolving and improving through contributions from developers like you.
              </p>
              
              <div className="mt-6 flex items-start gap-3 p-4 rounded-lg bg-blue-50/80 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
                <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-[14px] md:text-[15px] text-blue-700 dark:text-blue-300">
                  The developer documentation is maintained by the community. While the community strives for accuracy and completeness, some sections may be works in progress as there aren't centralized documentation teams or full-time writers.
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