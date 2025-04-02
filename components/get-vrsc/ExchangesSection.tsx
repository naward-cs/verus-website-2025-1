import { ExternalLink, Coins } from "lucide-react"

/*
* ExchangesSection - Server Component
* - Second section of the Get VRSC page showing exchange options
* - Displays available exchanges with their logos
* - Fully server-rendered with no client-side JavaScript
*/

export function ExchangesSection() {
  return (
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
  );
} 