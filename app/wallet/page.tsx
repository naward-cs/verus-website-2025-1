import { WalletDownloads } from "@/components/wallet/downloads"
import { WalletComparison } from "@/components/wallet/comparison"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Verus Wallet | Verus",
  description: "Your ultimate crypto wallet and self-sovereign identity solution.",
  keywords: "crypto wallet, blockchain wallet, self-sovereign identity, Verus wallet, identity wallet, digital wallet",
  openGraph: {
    title: "The Verus Wallet | Verus",
    description: "Your ultimate crypto wallet and self-sovereign identity solution.",
    url: "https://verus.io/wallet",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Verus Wallet | Verus",
    description: "Your ultimate crypto wallet and self-sovereign identity solution.",
  },
  alternates: {
    canonical: "https://verus.io/wallet",
  },
}

export default function WalletPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background images with dark mode support */}
      <img 
        src="/img/hero-bg2-2.webp"
        alt="Hero background - light"
        className="absolute w-full h-[1200px] md:h-[1000px] object-cover -translate-y-[250px] md:-translate-y-[50px] dark:hidden"
      />
      <img 
        src="/img/bg-darkmode.webp"
        alt="Hero background - dark"
        className="absolute w-full h-[1200px] md:h-[1000px] object-cover -translate-y-[250px] md:-translate-y-[50px] hidden dark:block"
      />

      <div className="relative z-10 flex flex-col items-center md:px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
            The Verus Wallet
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white/90 dark:text-white/80 font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight mx-auto">
            Your ultimate crypto wallet and self-sovereign identity solution.
          </p>
        </div>

        <WalletDownloads />
        <WalletComparison />

        <Footer />
      </div>
    </main>
  )
}