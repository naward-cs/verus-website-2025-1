export function RealWorldSection() {
  return (
    <div className="relative -mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      <div className="w-full border border-gray-200 bg-white/90 p-8 pt-12 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-16 md:pb-32 md:pt-32">
        <div className="flex flex-col gap-16 md:flex-row md:gap-32">
          {/* Left Column */}
          <div className="order-2 flex w-full items-center md:order-1 md:w-1/2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 font-serif text-[120px] text-gray-200 dark:text-gray-800">
                "
              </div>
              <blockquote className="relative text-[18px] italic leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[26px]">
                "Your credentials, your choice of who sees them."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 rotate-180 font-serif text-[120px] text-gray-200 dark:text-gray-800">
                "
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="order-1 w-full border-gray-200 dark:border-gray-700 md:order-2 md:w-1/2 md:border-l md:pl-16">
            <h2 className="mb-8 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[40px]">
              Your Data, Your Rules
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                VerusID is a new type of digital identity that connects your
                online and offline information in one place. Instead of having
                your important documents and credentials scattered across
                different organizations, you can store them securely in your
                personal database.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Your VerusID can hold verified information from trusted sources
                like government agencies, schools, employers, and banks. This
                means your degrees, work history, and official documents are all
                accessible through one secure identity that you control.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                The key difference is that you decide who gets to see your
                information. Rather than organizations storing and sharing your
                data without your knowledge, you choose when and with whom to
                share your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
