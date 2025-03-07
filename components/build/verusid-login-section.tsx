import { ExternalLink } from "lucide-react"

export function VerusIDLoginSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg bg-[#3165D4] p-8 pt-16 pb-16 md:p-8 md:pl-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pl-4 md:pl-0">
          <img 
            src="/img/verusid-logo-white.svg" 
            alt="VerusID Logo" 
            className="h-6 w-auto mb-8 md:mb-8 "
          />
          <h2 className="text-[22px] md:text-[40px] text-white tracking-tight font-medium leading-[1.1] mb-4">
            Introduce password-free login to your users.
          </h2>
          <p className="text-[14px] md:text-[15px] text-white/90 tracking-tight leading-[1.8] mb-8">
            Let your users login with their VerusID. No more passwords, no more data breaches, no more forgotten credentials. Just scan a QR code and you're in.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="https://monkins1010.github.io/veruslogin/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-black flex items-center justify-center hover:bg-gray-100 transition-colors gap-2"
            >
              Integrate VerusID
              <ExternalLink className="h-4 w-4" />
            </a>
            <button 
              onClick={() => document.getElementById('what-is-verusid')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-[40px] md:h-[50px] px-6 border-2 border-white rounded-lg text-[14px] md:text-[16px] font-medium text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              What is VerusID?
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:translate-x-[60px] md:translate-y-[100px]">
          <img 
            src="/img/login-verusid.png"
            alt="VerusID Login"
            className="w-[300px] md:w-[500px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}