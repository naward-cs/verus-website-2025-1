import { FaqContent } from "@/components/faq/content"
import { Footer } from "@/components/footer"

export default function FaqPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      <img 
        src="/img/bg-small.webp"
        alt="Background"
        className="absolute h-full w-full object-cover fixed -translate-y-[300px] md:-translate-y-[50px]"
      />
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue font-medium mb-8 md:mb-16 tracking-tight px-4 md:px-0">
              Frequently asked questions.
            </h1>
            
            <FaqContent />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}