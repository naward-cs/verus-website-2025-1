// Community Page - Hub for VerusCoin community resources and social platforms
import { Footer } from "@/components/footer"
import { CommunityLinks } from "@/components/community/links"
import { ImageMarquee } from "@/components/community/image-marquee"

export default function CommunityPage() {
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
            {/* Community Links Section */}
            <CommunityLinks />
          </div>
            
          {/* Scrolling Image Gallery - Full width */}
          <ImageMarquee />
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 