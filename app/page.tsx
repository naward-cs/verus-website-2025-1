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
              className="h-[40px] md:h-[50px] px-6 bg-white/90 backdrop-blur-sm rounded-none md:rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-white transition-colors border border-white/60"
            >
              Build with Verus
            </a>
            <a 
              href="https://discord.gg/veruscoin" 
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] md:h-[50px] px-6 bg-blue-950/40 backdrop-blur-sm rounded-none md:rounded-lg text-[14px] md:text-[16px] font-medium text-blue-300 flex items-center justify-center gap-2 hover:text-blue-200 transition-colors border border-blue-800/40"
            >
              Join the worldwide community
              <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
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