import {Eye, Lock, Shield} from 'lucide-react'

// Updated component with dark mode support
export function PrivacySection() {
  return (
    <div className="-mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      <div className="w-full border border-gray-200 bg-white/90 p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-32">
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Info Text */}
          <div className="w-full md:w-2/3">
            <h2 className="mb-6 text-[22px] font-medium leading-[1.1] tracking-tight text-verus-blue dark:text-white md:text-[40px]">
              Privacy is a human right. Verus takes this seriously.
            </h2>
            <div className="space-y-4">
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Privacy is necessary to truly empower individuals and
                communities. That is why Verus utilizes privacy technology
                called zk-SNARKs. It is the industry-leading standard for
                privacy enabling technology. The technology is embedded in the
                protocol layer of the network and can not be seen as an
                afterthought.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Users can easily choose between transparent and private
                transactions on the Verus blockchain, and all PBaaS-chains.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                This isn't just about hiding transactions - it's about giving
                users control over their financial and digital identity. Every
                individual should have the power to choose when to be public and
                when to be private.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/3 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* User Control */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Eye className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    User Control
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Switch seamlessly between transparent and private
                    transactions. Every PBaaS chain inherits these privacy
                    capabilities, ensuring consistent control across the
                    network.
                  </p>
                </div>
              </div>

              {/* Protocol-Level Privacy */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Lock className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Protocol-Level Privacy
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Privacy isn't an add-on feature. zk-SNARK technology is
                    embedded at the protocol level, ensuring the highest
                    standard of privacy protection across all operations.
                  </p>
                </div>
              </div>

              {/* Beyond Transactions */}
              <div className="group">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30">
                    <Shield className="h-5 w-5 text-verus-blue dark:text-blue-400" />
                  </div>
                  <h3 className="text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                    Beyond Transactions
                  </h3>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent p-4 dark:from-blue-900/20 dark:via-blue-900/10 dark:to-transparent">
                  <p className="text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    Privacy extends to identity, data, and more. Protect what
                    matters while still participating fully in the digital
                    economy.
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
