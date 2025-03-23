import { Footer } from "@/components/footer"
import { BridgeContent } from "@/components/bridge/content"
import { ExternalLink } from "lucide-react"
import { IoLogoDiscord } from "react-icons/io5"

export default function EthereumBridgePage() {
  return (
    <main className="relative h-[calc(100vh-50px)] md:h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - one for light mode, one for dark mode */}
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
        <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
          Verus-Ethereum Bridge
        </h1>
        <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
          A bridge to the Ethereum network—non-custodial, based on cryptographic proofs & verified by miners and stakers.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8 mb-16 md:mb-32">
          <a 
            href="https://eth.verusbridge.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[40px] md:h-[50px] px-6 bg-white/90 backdrop-blur-xl rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-white transition-all duration-300 border border-white/60 hover:border-white/90 hover:shadow-lg hover:-translate-y-[1px]"
          >
            Go to the bridge website
            <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-y-[-1px]" />
          </a>
        </div>

        <div className="flex justify-center w-full">
          <BridgeContent />
        </div>

        <Footer />
      </div>
    </main>
  )
}