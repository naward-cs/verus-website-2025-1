import { Footer } from "@/components/footer"

export default function ExchangesPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background image */}
      <img 
        src="/img/bg-small.webp"
        alt="Background"
        className="absolute h-full w-full object-cover fixed -translate-y-[300px] md:-translate-y-[50px]"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <div className="w-full md:rounded-lg border-x-0 md:border-2 border-y-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-8 md:p-16 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue font-medium mb-8 tracking-tight">
                How to Get VRSC
              </h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-[18px] md:text-[24px] font-medium mb-2">Exchanges</h2>
                  <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight">
                    VRSC is available on various exchanges. Here are some places where you can purchase VRSC:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li className="text-[14px] md:text-[16px] text-black/75">
                      <a 
                        href="https://global.bittrex.com/Market/Index?MarketName=BTC-VRSC" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-verus-blue hover:underline"
                      >
                        Bittrex Global
                      </a>
                    </li>
                    <li className="text-[14px] md:text-[16px] text-black/75">
                      <a 
                        href="https://tradeogre.com/exchange/BTC-VRSC" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-verus-blue hover:underline"
                      >
                        TradeOgre
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-[18px] md:text-[24px] font-medium mb-2">Mining</h2>
                  <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight">
                    You can earn VRSC by mining with your CPU. Verus uses the VerusHash algorithm, which is optimized for CPUs.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/mining" 
                      className="text-verus-blue hover:underline text-[14px] md:text-[16px] font-medium"
                    >
                      Learn more about mining Verus
                    </a>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-[18px] md:text-[24px] font-medium mb-2">Staking</h2>
                  <p className="text-[14px] md:text-[16px] text-black/75 tracking-tight">
                    If you already have VRSC, you can stake your coins to earn more. Staking is energy-efficient and helps secure the network.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/staking" 
                      className="text-verus-blue hover:underline text-[14px] md:text-[16px] font-medium"
                    >
                      Learn more about staking Verus
                    </a>
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