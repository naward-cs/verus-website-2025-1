import { Footer } from "@/components/footer"
import { BridgeContent } from "@/components/bridge/content"

import { ExternalLink } from "lucide-react"

export default function EthereumBridgePage() {
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
            Verus-Ethereum Bridge
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[20px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            A bridge to the Ethereum network—non-custodial, based on cryptographic proofs & verified by miners and stakers.
          </p>
          <div className="flex justify-center mt-8 mb-16 md:mb-16">
            <a 
              href="https://bridge.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-gray-100 transition-colors gap-2"
            >
              Go to the bridge website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <BridgeContent />
        </div>

        <Footer />
      </div>
    </main>
  )
}