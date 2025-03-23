import { Footer } from "@/components/footer"
import { DonationAddresses } from "@/components/donate/addresses"

// Donation Page for supporting Verus development
export default function DonatePage() {
  return (
    <main className="relative h-screen w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img 
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] dark:hidden"
      />
      <img 
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] hidden dark:block"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <div className="px-4 md:px-0 mb-8 md:mb-16">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue dark:text-blue-400 font-medium tracking-tight">
                Support the Verus ecosystem with donations.
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                As a no-ICO, no premine, and no dev-fee project, Verus relies on community donations to fund development and marketing efforts. Your contributions help maintain and advance the technology.
              </p>
            </div>
            
            <DonationAddresses />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 