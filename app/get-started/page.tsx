import { GetStartedSections } from "@/components/get-started/sections"
import { Footer } from "@/components/footer"

export default function GetStartedPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background image */}
      <img 
        src="/img/hero-bg2-2.webp"
        alt="Background"
        className="absolute h-full w-full object-cover fixed -translate-y-[300px] md:-translate-y-[50px]"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            {/* Hero Section */}
            <div className="pt-[30px] md:pt-[70px] px-4 md:px-0">
              <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
                Getting Started with Verus
              </h1>
              <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
                Your guide to exploring the Verus ecosystem.
              </p>
            </div>
            
            {/* Main content */}
            <GetStartedSections />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 