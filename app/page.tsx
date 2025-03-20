"use client"

import { IoLogoDiscord } from "react-icons/io5"
import { FeaturesGrid } from "@/components/home/features-grid"
import { CompareSection } from "@/components/home/compare-section"
import { ProtocolSection } from "@/components/home/protocol-section"
import { ParticipationSection } from "@/components/home/participation-section"
import { VerusIDSection } from "@/components/home/verusid-section"
import { BridgeSection } from "@/components/home/bridge-section"
import { GetStartedSection } from "@/components/home/get-started-section"
import { EndSection } from "@/components/home/end-section"
import { MediumArticlesSection } from "@/components/home/medium-articles-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <main className="relative h-[calc(100vh-50px)] md:h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
        <img 
          src="/img/hero-bg2-2.webp"
          className="absolute h-full w-full object-cover dark:hidden"
          alt="Hero background - light"
        />
        <img 
          src="/img/bg-darkmode.webp"
          className="absolute h-full w-full object-cover hidden dark:block"
          alt="Hero background - dark"
        />
        <div className="relative z-10 flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
          <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center tracking-tight">
            The Internet of Value
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            A fundamentally different and better protocol to build Web3,<br className="hidden md:block" /> and to empower individuals & communities.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8 mb-16 md:mb-32">
            <a 
              href="/build" 
              className="group h-[40px] md:h-[50px] px-6 bg-white/90 backdrop-blur-xl rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-white transition-all duration-300 border border-white/60 hover:border-white/90 hover:shadow-lg hover:-translate-y-[1px]"
            >
              Build with Verus
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="https://discord.gg/veruscoin" 
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-6 bg-blue-950/40 backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium text-blue-300 flex items-center justify-center gap-2 hover:text-blue-200 transition-all duration-300 border border-blue-800/60 hover:border-blue-700/80 hover:shadow-lg hover:-translate-y-[1px]"
            >
              Join the worldwide community
              <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-[1px] transition-transform duration-300" />
            </a>
          </div>

          <FeaturesGrid />
          <CompareSection />
          <ProtocolSection />
          <ParticipationSection />
          <VerusIDSection />
          <BridgeSection />
          <GetStartedSection />
          <EndSection />
          <MediumArticlesSection />
          <Footer />
        </div>
      </main>
      
    </>
  )
}