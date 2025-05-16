import { Code2, FileCode, Layers } from "lucide-react"

/*
* Updated:
* - Transformed to match PBaaS content styling with modern gradient backgrounds
* - Created more developer-focused title
* - Added radial gradients and improved background elements
* - Enhanced card designs with hover effects
* - Improved spacing and layout for better readability
*/
export function TechnicalSection() {
  return (
    <section className="mb-24 md:mb-32 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-10 h-80 w-80 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] -z-10"></div>
      
      {/* Developer-focused Title */}
      <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
        <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-6 max-w-[1000px] mx-auto">
          <span className="text-gray-600 dark:text-white">Developer-First APIs—</span>{""}
          <span className="relative">
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                Simple Integration
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-verus-blue/10 to-purple-500/10 rounded-lg blur-md" />
            </span>
          </span>
        </h2>
        <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Leverage blockchain storage with familiar APIs designed for rapid integration into any app architecture.
        </p>
      </div>

      <div className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-100/80 dark:border-blue-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
        
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 tracking-tight leading-relaxed">
                VDXF objects follow a standardized format that makes them easy to integrate into any application. Each object includes metadata about version, handling requirements, and content type.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 tracking-tight leading-relaxed">
                Applications can implement partial support for VDXF data types, using what they understand while safely ignoring the rest. This enables gradual adoption and compatibility across different systems.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Object Format */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Data Object Structure
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Version tracking for compatibility
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Special handling flags
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Data payload field
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Human-readable labels
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Types */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <FileCode className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Content Management
                  </h3>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <ul className="space-y-3">
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      MIME type specification
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Encryption metadata
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Custom type definitions
                    </li>
                    <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Schema validation rules
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* Implementation */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                    Developer Toolkit
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">RESTful API</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Simple API commands for storing and retrieving data. No need to handle complex blockchain interactions—the protocol manages everything automatically.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Query System</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Efficient querying through VDXF keys. Find and retrieve data across multiple chains with simple lookups based on type and namespace.
                    </p>
                  </div>

                  <div className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-100/60 dark:border-blue-900/20 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <h4 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white mb-4">Access Control</h4>
                    <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                      Built-in permission system based on VerusIDs and namespaces. Control who can create, modify, and access different types of data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}