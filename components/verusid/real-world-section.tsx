

export function RealWorldSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] p-8 pt-12 md:pt-32 md:pb-32 bg-gradient-to-b from-[#E9EFFC] to-white shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-32">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex items-center order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-[120px] font-serif text-[#E9EFFC]">"</div>
              <blockquote className="text-[18px] md:text-[26px] text-gray-500 leading-snug tracking-tight italic relative">
              "Your credentials, your choice of who sees them."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 text-[120px] font-serif text-[#E9EFFC] rotate-180">"</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-[22px] md:text-[40px] text-black tracking-tight font-medium leading-[1.1] mb-8">
              Your Data, Your Rules
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                VerusID is a new type of digital identity that connects your online and offline information in one place. Instead of having your important documents and credentials scattered across different organizations, you can store them securely in your personal database.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Your VerusID can hold verified information from trusted sources like government agencies, schools, employers, and banks. This means your degrees, work history, and official documents are all accessible through one secure identity that you control.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                The key difference is that you decide who gets to see your information. Rather than organizations storing and sharing your data without your knowledge, you choose when and with whom to share your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}