import { ExternalLink } from "lucide-react"

export function VerusIDLoginSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-950 dark:to-blue-900 p-8 pt-16 pb-16 md:p-8 md:pl-16 md:pr-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 shadow-[0_4px_40px_-12px_rgba(30,64,175,0.3)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-[-10%] w-[300px] h-[300px] bg-white/5 dark:bg-white/10 rounded-full blur-[60px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-[50px] z-0"></div>
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 pl-4 md:pl-0 relative z-10">
          <img 
            src="/img/verusid-logo-white.svg" 
            alt="VerusID Logo" 
            className="h-6 w-auto mb-8 md:mb-8"
          />
          <h2 className="text-[22px] md:text-[40px] text-white tracking-tight font-medium leading-[1.1] mb-4">
            Introduce password-free login to your users.
          </h2>
          <p className="text-[14px] md:text-[15px] text-white/90 dark:text-white/80 tracking-tight leading-[1.8] mb-8">
            Let your users login with their VerusID. No more passwords, no more data breaches, no more forgotten credentials. Just scan a QR code and you're in.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="https://monkins1010.github.io/veruslogin/"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-[40px] md:h-[50px] px-8 bg-white/90 dark:bg-white/95 backdrop-blur-sm border border-white/10 rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/20 dark:hover:shadow-blue-900/20 hover:-translate-y-[1px] w-fit"
            >
              Integrate VerusID
              <ExternalLink className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a 
              href="/build/verusid"
              className="group h-[40px] md:h-[50px] px-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-[1px] w-fit"
            >
              What is VerusID?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:relative z-10">
          <img 
            src="/img/login-verusid.png"
            alt="VerusID Login"
            className="w-[300px] md:w-[450px] h-auto md:translate-x-[20px] dark:opacity-90"
          />
        </div>
      </div>
    </div>
  )
}