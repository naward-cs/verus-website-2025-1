import { Shield, Leaf, Scale, History, Globe, BarChart3, Zap, Check } from "lucide-react"
import Link from "next/link"

export function GreenContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-8 md:mt-32 relative">
      {/* Introduction Section */}
      <section className="mb-24 relative">
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[28px] md:text-[55px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-8 max-w-[1000px] mx-auto">
              <span className="text-gray-600 dark:text-white">Environmentally Conscious </span>{""}
              <span className="relative">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-green-600 to-green-500 dark:to-green-400 bg-clip-text text-transparent">
                    Blockchain Technology
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-green-500/10 via-green-500/10 to-green-500/10 rounded-lg blur-md" />
                </span>
              </span>
            </h2>
            <p className="text-center text-[16px] md:text-[20px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
              Verus combines the security of proof-of-work with the energy efficiency of proof-of-stake in a hybrid approach that prioritizes sustainability without compromising on decentralization or security.
            </p>
          </div>
        </div>
      </section>
      
      {/* The Verus Green Advantage Section */}
      <section className="mb-24 relative">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-green-50/90 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-100/80 dark:border-green-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-[24px] md:text-[32px] font-medium text-gray-900 dark:text-white">
                  The Verus Green Advantage
                </h3>
              </div>
              
              <p className="text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-4xl">
                As the world grows increasingly concerned about the environmental impact of blockchain technology, Verus stands apart with its approach that drastically reduces energy consumption while maintaining the highest standards of security and decentralization.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Proof of Work Is Essential Section */}
      <section className="mb-24 relative">
        <h2 className="text-[28px] md:text-[45px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-10">
          <span className="text-gray-600 dark:text-white">Why proof-of-work is </span>{""}
          <span className="bg-gradient-to-r from-green-600 to-green-500 dark:to-green-400 bg-clip-text text-transparent">
            Essential
          </span>
        </h2>
        
        <p className="text-center text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
          While Verus is committed to environmental sustainability, the protocol also recognizes the critical importance of maintaining a proof-of-work component in the consensus mechanism.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12">
          {/* Decentralized Security */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-100/80 dark:border-green-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Decentralized Security
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Proof-of-work (PoW) provides a level of security that is difficult to match with other consensus mechanisms. By requiring computational work to validate transactions, PoW ensures that no single entity can control the network without investing substantial resources, making attacks prohibitively expensive.
              </p>
            </div>
          </div>
          
          {/* Fair Distribution */}
          <div className="flex-1 bg-gradient-to-br from-green-50/70 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-green-100/80 dark:border-green-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Fair Distribution
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                Unlike many cryptocurrency projects that launch with pre-mines or ICOs, PoW allows for a fair distribution of tokens over time to those who contribute computational resources to secure the network. This creates a more equitable foundation for the cryptocurrency ecosystem.
              </p>
            </div>
          </div>
          
          {/* Proven Reliability */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-100/80 dark:border-green-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <History className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Proven Reliability
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                PoW has stood the test of time as the most battle-tested consensus mechanism in the cryptocurrency space. First implemented by Bitcoin, it has demonstrated its resilience against various types of attacks over more than a decade of continuous operation.
              </p>
            </div>
          </div>
          
          {/* Real-World Cost Anchoring */}
          <div className="flex-1 bg-gradient-to-br from-green-50/70 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-green-100/80 dark:border-green-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-green-100/80 dark:border-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Real-World Cost Anchoring
                </h3>
              </div>
              
              <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed">
                By tying blockchain validation to real-world resources (computation and energy), PoW creates an economic bridge between digital assets and physical reality. This provides a fundamental value anchor that purely virtual consensus mechanisms cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="mb-24 relative">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-green-50/90 to-white dark:from-green-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-100/80 dark:border-green-900/30 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 dark:bg-green-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="text-green-600 dark:text-green-400 text-5xl font-serif mb-4">"</div>
              <p className="text-[18px] md:text-[24px] text-gray-700 dark:text-gray-200 leading-relaxed mb-6 max-w-4xl italic font-light">
                Verus Proof of Power combines the best of both worlds—the proven security of proof-of-work with the energy efficiency of proof-of-stake—creating a hybrid system that is both environmentally conscious and reliably secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Best of Both Worlds Section */}
      <section className="mb-24 relative">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-[28px] md:text-[45px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-6 md:mb-10">
            <span className="text-gray-600 dark:text-white">The Best of </span>{""}
            <span className="bg-gradient-to-r from-green-600 to-green-500 dark:to-green-400 bg-clip-text text-transparent">
              Both Worlds
            </span>
          </h2>
          
          <p className="text-center text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            By combining proof-of-work with proof-of-stake in a hybrid approach, Verus achieves robust security while significantly reducing environmental impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Enhanced Security",
                description: "Through dual validation methods",
                detail: ""
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: "Reduced Energy Usage",
                description: "Compared to pure PoW systems",
                detail: ""
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "51% Attack Resistance",
                description: "Via innovative Proof of Power consensus",
                detail: ""
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/80 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-green-100/60 dark:border-green-900/20 p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-[15px] text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="pl-[52px]">
                  <p className="text-[14px] text-gray-600 dark:text-gray-300">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>
          
     
        </div>
      </section>

      
    </div>
  )
} 