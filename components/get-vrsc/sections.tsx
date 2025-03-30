import Link from "next/link"
import { ArrowRight, ExternalLink, Wallet, ArrowLeftRight, Coins, Play, Shield, Download } from "lucide-react"
import { parse } from 'node-html-parser';

/*
* Updated:
* - Created component for Get VRSC page with three sections
* - Section 1: Getting VRSC through Verus DeFi with wallet links and YouTube tutorials
* - Section 2: Getting VRSC through exchanges with easily replaceable logos
* - Section 3: Getting VRSC through mining and staking with links to relevant pages
* - Added dark mode support and modern SaaS-style design
* - Used placeholder areas for exchange logos for easy replacement
* - Added dynamic protocol data fetched from cryptodashboard.faldt.net
*/

// Fetch the volume and liquidity pool data directly
async function fetchProtocolData() {
  try {
    // When running in a server component, we can fetch directly
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      // Ensure we're not using browser cache
      cache: 'no-store',
      // Cache for up to 15 minutes with Next.js
      next: { revalidate: 15 * 60 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    
    const html = await response.text();
    const root = parse(html);

    // Get 24h volume data
    let volumeElement = root.querySelector('#verus-basket-volume-24h > div > div:nth-child(15) > div:nth-child(2)');
    
    if (!volumeElement) {
      // Alternative approach for volume
      const basketSection = root.querySelector('#verus-basket-volume-24h');
      
      if (basketSection) {
        const basketDivs = basketSection.querySelectorAll('div');
        
        for (let i = 0; i < basketDivs.length; i++) {
          const text = basketDivs[i].text.trim();
          if (text.startsWith('$') && /^\$[\d,]+(\.\d+)?$/.test(text)) {
            volumeElement = basketDivs[i];
            break;
          }
        }
      }
    }

    // Get liquidity pool data
    let liquidityElement = root.querySelector('#prices-card-verus > div > div:nth-child(17) > div:nth-child(2)');
    
    if (!liquidityElement) {
      // Alternative approach for liquidity
      const pricesSection = root.querySelector('#prices-card-verus');
      
      if (pricesSection) {
        const pricesDivs = pricesSection.querySelectorAll('div');
        
        for (let i = 0; i < pricesDivs.length; i++) {
          const text = pricesDivs[i].text.trim();
          if (text.includes("VRSC") && /^[\d,]+(\.\d+)? VRSC$/.test(text)) {
            liquidityElement = pricesDivs[i];
            break;
          }
        }
      }
    }

    return {
      volume: volumeElement ? volumeElement.text.trim() : "N/A",
      liquidity: liquidityElement ? liquidityElement.text.trim() : "N/A"
    };
  } catch (error) {
    console.error("Error fetching protocol data:", error);
    return {
      volume: "N/A",
      liquidity: "N/A"
    };
  }
}

export async function GetVrscSections() {
  // Fetch the data
  const protocolData = await fetchProtocolData();
  
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Section 1: Getting VRSC through Verus DeFi */}
      <section className="w-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
        
        <div className="relative p-6 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <ArrowLeftRight className="h-6 w-6" />
            </div>
            <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
              Verus DeFi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The most efficient way to acquire VRSC is directly through Verus DeFi. Native protocol-level liquidity pools allow you to exchange various cryptocurrencies for VRSC with minimal fees (0.025-0.05%).
              </p>
              
              {/* Protocol Statistics Card */}
              <div className="bg-blue-600/10 dark:bg-blue-900/30 border border-blue-200/60 dark:border-blue-800/40 rounded-xl p-4 mb-8 backdrop-blur-sm">
                <div className="text-[12px] uppercase font-medium text-blue-600 dark:text-blue-400 tracking-wider mb-2">
                  Protocol Activity
                </div>
                
                <div className="flex flex-col gap-3">
                  {/* Volume */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                          {protocolData.volume}
                        </span>
                        <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300">
                          24H Protocol Volume
                        </span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-500/30 dark:to-blue-700/30 flex items-center justify-center">
                      <ArrowLeftRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  {/* Liquidity */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                          {protocolData.liquidity}
                        </span>
                        <span className="text-[14px] font-medium text-gray-600 dark:text-gray-300">
                          VRSC in Liquidity Pools
                        </span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 dark:from-green-500/30 dark:to-green-700/30 flex items-center justify-center">
                      <Coins className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-blue-200/30 dark:border-blue-800/30">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-[13px] text-gray-600 dark:text-gray-400">
                      Live on-chain conversions with minimal fees
                    </span>
                  </div>
                  <a 
                    href="https://cryptodashboard.faldt.net/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Source: cryptodashboard.faldt.net <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/wallet"
                  className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px]"
                >
                  
                  Download wallet
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30">
              <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-4">
                Video Tutorials
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://youtu.be/1g0K4WGuxwo?si=EsYz8IiNmZDjLlFz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/80 dark:bg-gray-800/60 border border-blue-100/60 dark:border-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                    <Play className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-gray-900 dark:text-white">How To Add & Remove a PBaaS Currency in Verus Mobile</p>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400">1:07 • Beginner friendly</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </a>
                
                <a 
                  href="https://youtu.be/gUsTZUKWm5s?si=7Yc_gDY_CGvhE5Zw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/80 dark:bg-gray-800/60 border border-blue-100/60 dark:border-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                    <Play className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-gray-900 dark:text-white">How to convert DAI.vETH to VRSC in Verus Mobile</p>
                    <p className="text-[13px] text-gray-500 dark:text-gray-400">2:10 • Step-by-step guide</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
              
              {/* Ethereum Bridge link */}
              <div className="mt-6 pt-5 border-t border-blue-100/60 dark:border-blue-900/20">
                <h4 className="text-[16px] font-medium text-gray-900 dark:text-white mb-3">
                  Bridge Documentation
                </h4>
                <a 
                  href="https://docs.verus.io/eth-bridge/ethereum-to-verus.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100/60 dark:border-blue-800/40 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-gray-900 dark:text-white">How to bridge from Ethereum to Verus</p>
                    <p className="text-[13px] text-gray-600 dark:text-gray-400">Complete step-by-step guide</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 2: Getting VRSC through exchanges */}
      <section className="w-full bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
        
        <div className="relative p-6 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Coins className="h-6 w-6" />
            </div>
            <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
              Exchanges
            </h2>
          </div>
          
          <p className="text-[15px] md:text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mb-8">
            VRSC is available on the following cryptocurrency exchanges. Please conduct your own due diligence before using any exchange service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* SafeTrade */}
            <a 
              href="https://safe.trade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 group"
            >
              <div className="h-20 w-48 flex items-center justify-center mb-3">
                <img 
                  src="/img/exchanges/safe-trade.png" 
                  alt="SafeTrade Exchange" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-[16px] font-medium text-white text-center mt-2">SafeTrade</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[13px] text-gray-400">Visit Exchange</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </a>
            
            {/* TradeOgre */}
            <a 
              href="https://tradeogre.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-1 group"
            >
              <div className="h-20 w-48 flex items-center justify-center mb-3">
                <img 
                  src="/img/exchanges/tradeogre.png" 
                  alt="TradeOgre Exchange" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-[16px] font-medium text-white text-center mt-2">TradeOgre</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[13px] text-gray-400">Visit Exchange</span>
                <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[14px] text-gray-600 dark:text-gray-400 italic">
              Disclaimer: Verus does not endorse or guarantee the security of any third-party exchange. Always do your own research and exercise caution when using exchange services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Section 3: Getting VRSC through mining and staking */}
      <section className="w-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-100/80 dark:border-blue-900/30 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
        
        <div className="relative p-6 md:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-[20px] md:text-[28px] font-medium text-gray-900 dark:text-white">
              Earn VRSC: Mining & Staking
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mining Card */}
            <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>
              
              <div className="relative">
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">Mining</h3>
                <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mine VRSC using CPU, mobile phones or ARM-devices. Verus is designed to be CPU-mineable, giving consumer hardware a fair chance at mining rewards compared to specialized hardware.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    CPU-optimized algorithm
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Easy-to-use mining software available
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Join mining pools to receive consistent rewards
                  </li>
                </ul>
                
                <Link 
                  href="/mining"
                  className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
                >
                  Start mining
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Staking Card */}
            <div className="bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]"></div>
              
              <div className="relative">
                <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-3">Staking</h3>
                <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Earn VRSC by staking your VRSC. Verus uses a hybrid PoW/PoS consensus system where stakers earn 50% of block rewards.
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    No minimum amount required to start staking
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Low energy consumption compared to mining
                  </li>
                  <li className="flex items-start gap-2 text-[14px] text-gray-700 dark:text-gray-300">
                    <div className="h-5 w-5 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Run your wallet 24/7 for optimal staking rewards
                  </li>
                </ul>
                
                <Link 
                  href="/staking"
                  className="group h-[40px] md:h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px] w-fit"
                >
                  Learn about staking
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
    </div>
  )
} 