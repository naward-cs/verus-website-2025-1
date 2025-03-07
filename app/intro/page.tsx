import { VisionMissionSection } from "@/components/intro/vision-mission"
import { TokenomicsSection } from "@/components/intro/tokenomics-section"
import { ScalingSection } from "@/components/intro/scaling-section"
import { ConsensusSection } from "@/components/intro/consensus-section"
import { PrivacySection } from "@/components/intro/privacy-section"
import { SmartTransactionsSection } from "@/components/intro/smart-transactions-section"
import { Footer } from "@/components/footer"

export default function IntroPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background wrapper with fixed height */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/img/hero-bg2-2.webp"
          alt="Hero background"
          className="w-full h-[1200px] md:h-[1000px] object-cover -translate-y-[250px] md:-translate-y-[50px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
            The Protocol for Everyone
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[20px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            Verus is uniquely positioned to empower individuals, communities and developers around the world, sustainably.
          </p>
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