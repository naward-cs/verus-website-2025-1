import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Verus",
  description: "Verus privacy policy - we don't track you, we mean it.",
  keywords: "Verus privacy policy, no tracking, no cookies, privacy focused, blockchain privacy",
  openGraph: {
    title: "Privacy Policy | Verus",
    description: "Verus privacy policy - we don't track you, we mean it.",
    url: "/privacy-policy",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Verus",
    description: "Verus privacy policy - we don't track you, we mean it.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
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
            <div className="px-4 md:px-0 mb-8 md:mb-12">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue dark:text-blue-400 font-medium tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                We don't track you. We mean it. We're big advocates for maximizing privacy and freedom.
              </p>
            </div>
            
            <div className="px-4 md:px-0 mb-16">
              <div className="bg-white/90 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="space-y-8">
                    <section>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">General</h2>
                      
                      <p className="text-gray-700 dark:text-gray-300">
                        This site doesn't set any cookies and uses no analytics or tracking tools. Feel free to check the source. The Verus Insight Explorer stores the coin symbol as well as the supplied client language in the browser, albeit not as a cookie.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Logs</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        Request information such as IP addresses and user agents may be stored in server log files for up to 14 days on encrypted volumes for maintenance and diagnostic purposes, and are not shared with third-parties.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Forms</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        Data submitted using forms, such as the Verus ID lookup or signature verification are only ever used to complete your request. The URL of the request is logged (refer to "Logs"); the response is not logged. Specifically, the API lookups will be proxied to an external API endpoint. Your IP address is not part of the proxied request.
                      </p>
                    </section>
                    
                    <section>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-4">Contact</h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions or concerns about this policy please contact us on our <a href="https://www.verus.io/discord" target="_blank" rel="noopener noreferrer" className="text-verus-blue dark:text-blue-400 hover:underline">official Discord server</a>.
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 