import { Code2, FileCode, Layers } from "lucide-react"

export function TechnicalSection() {
  return (
    <div className="w-full md:rounded-lg border border-[#EFEFEF] p-8 md:p-24 bg-white/50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-8">
            Technical Integration
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              Integrate VerusPay and DeFi features into your applications with simple API commands. No need to handle complex blockchain interactions—the protocol manages everything automatically.
            </p>
            <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
              The VerusPay Invoice specification provides a standardized format for payment requests that works across all wallets and platforms in the Verus ecosystem.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Payment Integration */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Payment Integration</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Simple API for creating invoices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">QR code and deeplink generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Payment status monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* DeFi Integration */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <FileCode className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">DeFi Integration</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Currency conversion commands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Liquidity pool management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-verus-blue/50" />
                    <span className="text-[14px] text-black/75">Cross-chain transaction support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-16">
          <div className="space-y-8">
            {/* Implementation */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-lg bg-verus-blue/10 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-verus-blue" />
                </div>
                <h3 className="text-[18px] md:text-[22px] font-medium text-black">Implementation</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Invoice Format</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    The VerusPay Invoice specification defines a standardized format for payment requests that includes amount, currency, recipient, and optional metadata.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Mobile Integration</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Generate QR codes and deeplinks that work seamlessly with Verus Mobile and other compatible wallets. Enable scan-to-pay functionality for easy mobile payments.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent rounded-lg p-6">
                  <h4 className="text-[16px] font-medium text-black mb-4">Currency Handling</h4>
                  <p className="text-[14px] text-black/75 leading-relaxed">
                    Specify payment amounts in any currency and let the protocol handle conversions automatically. Support for native currencies, tokens, and bridged assets from Ethereum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}