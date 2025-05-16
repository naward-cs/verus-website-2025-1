import { Eye, Lock, Shield } from "lucide-react"
import { FaMedium } from "react-icons/fa"

// Updated component with dark mode support
export function PrivacySection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 md:p-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-[22px] md:text-[40px] text-verus-blue dark:text-white tracking-tight font-medium leading-[1.1] mb-6">
              Privacy is a human right. Verus takes this seriously.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Privacy is necessary to truly empower individuals and communities. That is why Verus utilizes privacy technology called zk-SNARKs. It is the industry-leading standard for privacy enabling technology. The technology is embedded in the protocol layer of the network and can not be seen as an afterthought.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Users can easily choose between transparent and private transactions on the Verus blockchain, and all PBaaS-chains.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                This isn't just about hiding transactions - it's about giving users control over their financial and digital identity. Every individual should have the power to choose when to be public and when to be private.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="w-full md:w-1/3 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="space-y-8">
              {/* User Control */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">User Control</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Switch seamlessly between transparent and private transactions. Every PBaaS chain inherits these privacy capabilities, ensuring consistent control across the network.
                  </p>
                </div>
              </div>

              {/* Protocol-Level Privacy */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Protocol-Level Privacy</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Privacy isn't an add-on feature. zk-SNARK technology is embedded at the protocol level, ensuring the highest standard of privacy protection across all operations.
                  </p>
                </div>
              </div>

              {/* Beyond Transactions */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] md:text-[18px] font-medium text-gray-900 dark:text-white">Beyond Transactions</h3>
                </div>
                <div className="bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent rounded-lg p-4">
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    Privacy extends to identity, data, and more. Protect what matters while still participating fully in the digital economy.
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