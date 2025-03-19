import { Footer } from "@/components/footer"
import { GreenFeaturesGrid } from "@/components/green/features-grid"
import { GreenContent } from "@/components/green/content"
import { IoLogoDiscord } from "react-icons/io5"

export default function GreenPage() {
  return (
    <main className="relative h-[calc(100vh-50px)] md:h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - one for light mode, one for dark mode */}
      <img 
        src="/img/bg-green.webp"
        className="absolute h-full w-full object-cover dark:hidden"
        alt="Hero background - light"
      />
      <img 
        src="/img/bg-darkmode-green.webp"
        className="absolute h-full w-full object-cover hidden dark:block"
        alt="Hero background - dark"
      />
      
      <div className="relative z-10 flex flex-col items-center px-4 pt-[30px] md:pt-[70px]">
        <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center tracking-tight">
          Environmentally Conscious
        </h1>
        <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
        Combining the security of proof-of-work with the energy efficiency of proof-of-stake—sustainable by design.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8 mb-16 md:mb-32">
          <a 
            href="/get-started"
            className="group h-[40px] md:h-[50px] px-6 bg-white/90 backdrop-blur-xl rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-white transition-all duration-300 border border-white/60 hover:border-white/90 hover:shadow-lg hover:-translate-y-[1px]"
          >
            Get started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a 
            href="https://verus.io/discord" 
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[40px] md:h-[50px] px-6 bg-green-950/40 backdrop-blur-sm rounded-lg text-[14px] md:text-[16px] font-medium text-green-300 flex items-center justify-center gap-2 hover:text-green-200 transition-all duration-300 border border-green-800/60 hover:border-green-700/80 hover:shadow-lg hover:-translate-y-[1px]"
          >
            Join the worldwide community
            <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-[1px] transition-transform duration-300" />
          </a>
        </div>

        <div className="flex justify-center w-full">
          <GreenFeaturesGrid />
        </div>
        
        <div className="flex justify-center w-full">
          <GreenContent />
        </div>

        <Footer />
      </div>
    </main>
  )
} 