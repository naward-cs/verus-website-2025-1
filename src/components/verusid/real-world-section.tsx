export function RealWorldSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 pt-12 md:p-16 md:pt-32 md:pb-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex items-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-[120px] font-serif text-gray-200 dark:text-gray-800">"</div>
              <blockquote className="text-[18px] md:text-[26px] text-verus-blue dark:text-blue-400 leading-snug tracking-tight italic relative">
              "Your credentials, your choice of who sees them."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 text-[120px] font-serif text-gray-200 dark:text-gray-800 rotate-180">"</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 order-1 md:order-2 md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <h2 className="text-[22px] md:text-[40px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-8">
              Your Data, Your Rules
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                VerusID is a new type of digital identity that connects your online and offline information in one place. Instead of having your important documents and credentials scattered across different organizations, you can store them securely in your personal database.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Your VerusID can hold verified information from trusted sources like government agencies, schools, employers, and banks. This means your degrees, work history, and official documents are all accessible through one secure identity that you control.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                The key difference is that you decide who gets to see your information. Rather than organizations storing and sharing your data without your knowledge, you choose when and with whom to share your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}