"use client"

import { useState } from "react"
import { Footer } from "@/components/footer"
import { IoLogoDiscord } from "react-icons/io5"
import { ExternalLink, ChevronDown } from "lucide-react"
import { FeaturesGrid } from "@/components/build/features-grid"
import { SolutionsGrid } from "@/components/build/solutions-grid"
import { VerusIDLoginSection } from "@/components/build/verusid-login-section"

function DocsDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-between hover:bg-gray-100 transition-colors gap-2 group w-full"
      >
        <span className="flex items-center gap-2">
          Start building
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {dropdownOpen && (
        <>
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
            <a
              href="https://docs.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[12px] md:text-[14px] text-black">docs.verus.io</span>
              <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://monkins1010.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[12px] md:text-[14px] text-black">monkins1010.github.io</span>
              <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setDropdownOpen(false)}
          />
        </>
      )}
    </div>
  )
}

export default function BuildPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background wrapper with fixed height */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/img/hero-bg2-2.webp"
          alt="Hero background"
          className="w-full h-[1200px] md:h-[1000px] object-cover -translate-y-[150px] md:-translate-y-[50px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
            The Protocol for Building dApps
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[16px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            Build dApps at any scale with the easy to use API. Focus on product while Verus supplies the open-source blockchain tools.
          </p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-[200px]">
                <DocsDropdown />
              </div>
              <a 
                href="https://discord.gg/veruscoin" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] md:h-[50px] px-6 border-2 border-white rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-center gap-2 hover:bg-black/10 transition-colors"
              >
                Get help from the community
                <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
          
          
        </div>
        

        <div className="flex justify-center w-full">
          <FeaturesGrid />
        </div>

        <div className="flex justify-center w-full">
          <SolutionsGrid />
        </div>

        <div className="flex justify-center w-full">
          <VerusIDLoginSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}