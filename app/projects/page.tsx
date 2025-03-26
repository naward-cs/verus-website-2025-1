// Projects Page - Showcase of projects using Verus technology
import { Footer } from "@/components/footer"
import { ProjectList } from "@/components/projects/project-list"
import Link from "next/link"
import { IoLogoDiscord } from "react-icons/io5"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects Built with Verus | Verus",
  description: "Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.",
  keywords: "Verus projects, blockchain applications, cryptocurrency projects, Web3 applications, dApps, blockchain ecosystem",
  openGraph: {
    title: "Projects Built with Verus | Verus",
    description: "Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.",
    url: "https://verus.io/projects",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Built with Verus | Verus",
    description: "Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.",
  },
  alternates: {
    canonical: "https://verus.io/projects",
  },
}

export default function ProjectsPage() {
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
                Projects built with Verus.
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                Explore applications, wallets, dashboards, and other projects leveraging the Verus Protocol and its ecosystem.
              </p>
            </div>
            
            <ProjectList />
            
            {/* Project submission info section */}
            <div className="mt-16 px-4 md:px-0">
              <div className="md:rounded-lg border border-blue-100/80 dark:border-blue-900/30 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)]">
                <h2 className="text-[18px] md:text-[24px] font-medium text-gray-900 dark:text-white mb-3">
                  Want your project listed here?
                </h2>
                <p className="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-300 mb-4">
                  If you have built a project using Verus technology and would like to have it listed on this page, 
                  please visit our Discord community and reach out in the #marketing channel to discuss your project with the community.
                </p>
                <Link 
                  href="https://www.verus.io/discord" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-[40px] md:h-[50px] px-6 bg-blue-950/40 backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium text-blue-300 flex items-center justify-center gap-2 hover:text-blue-200 transition-all duration-300 border border-blue-800/60 hover:border-blue-700/80 hover:shadow-lg hover:-translate-y-[1px] w-fit"
                >
                  Join Discord
                  <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-[1px] transition-transform duration-300" />
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