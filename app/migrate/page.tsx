import { MigrateContent } from "@/components/migrate/content"
import { Footer } from "@/components/footer"

export default function MigratePage() {
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
              Migrate to Verus
            </h1>
            <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[20px] leading-snug text-white/90 dark:text-white/80 font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight mx-auto">
            Bring your token and community to a better, more secure ecosystem while maintaining full Ethereum compatibility.
            </p>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <MigrateContent />
        </div>

        <Footer />
      </div>
    </main>
  )
} 