import { VisionMissionSection } from "@/components/intro/vision-mission"
import { TokenomicsSection } from "@/components/intro/tokenomics-section"
import { ScalingSection } from "@/components/intro/scaling-section"
import { ConsensusSection } from "@/components/intro/consensus-section"
import { PrivacySection } from "@/components/intro/privacy-section"
import { SmartTransactionsSection } from "@/components/intro/smart-transactions-section"
import { Footer } from "@/components/footer"

export default function IntroPage() {
  return (
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
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <div className="text-center max-w-[1220px] mx-auto">
            <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
              The Protocol for Everyone
            </h1>
            <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[20px] leading-snug text-white/90 dark:text-white/80 font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight mx-auto">
              Verus is uniquely positioned to empower individuals, communities and developers around the world, sustainably.
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <VisionMissionSection />
        </div>

        <div className="flex justify-center w-full">
          <TokenomicsSection />
        </div>

        <div className="flex justify-center w-full">
          <ScalingSection />
        </div>

        <div className="flex justify-center w-full">
          <ConsensusSection />
        </div>

        <div className="flex justify-center w-full">
          <PrivacySection />
        </div>

        <div className="flex justify-center w-full">
          <SmartTransactionsSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}