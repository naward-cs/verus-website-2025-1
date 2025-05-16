import { Download } from "lucide-react"

// Updated component with dark mode support and improved styling
export function VisionMissionSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] flex flex-col md:flex-row mt-8 md:mt-24 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[80px] -z-10"></div>
      
      {/* Content container with shared styling */}
      <div className="w-full flex flex-col md:flex-row backdrop-blur-sm border border-blue-100/80 dark:border-blue-900/30 rounded-none md:rounded-[20px] overflow-hidden relative z-0">
        {/* Vision Box */}
        <div className="w-full md:w-1/2 p-8 md:p-16 bg-white/70 dark:bg-gray-900/50 relative group hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-blue-400/5 dark:bg-blue-400/10 blur-xl"></div>
          <div className="relative">
            <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white tracking-tight font-medium leading-[1.1] md:mb-6 mb-4">
              Vision
            </h2>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8] font-normal">
              A world where digital infrastructure favors truth, privacy, and community power—enabling individuals to participate directly in a fair digital economy while keeping sovereign control over personal funds, data and identity.
            </p>
            <a 
              href="https://docs.verus.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center mt-8 md:mt-8 gap-2 text-[14px] md:text-[15px] text-verus-blue dark:text-blue-400 hover:underline transition-all duration-300"
            >
              <Download className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Download: Vision Paper</span>
            </a>
          </div>
        </div>

        {/* Divider - Vertical on desktop, Horizontal on mobile */}
        <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-blue-100/80 dark:bg-blue-900/30 md:self-stretch" />

        {/* Mission Box */}
        <div className="w-full md:w-1/2 p-8 md:p-16 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 relative group hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
          <div className="relative">
            <h2 className="text-[18px] md:text-[22px] text-gray-900 dark:text-white tracking-tight font-medium leading-[1.1] md:mb-6 mb-4">
              Mission
            </h2>
            <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 leading-[1.8] tracking-tight font-normal mb-8">
             To build open, secure, public blockchain infrastructure with consensus-level verification of core primitives, including sovereign identity, currencies, fair DeFi, and data, all with verifiable privacy-preserving technology and fair participation—a network where truth and cooperation emerge from use.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}