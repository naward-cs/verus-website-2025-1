

export function DigitalControlSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4">
      <div className="w-full md:rounded-lg border-2 border-[#E9EFFC] p-8 pt-12 md:p-16 md:pt-32 md:pb-32 bg-gradient-to-b from-[#E9EFFC] to-white shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row gap-32">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] md:text-[40px] text-black tracking-tight font-medium leading-[1.1] mb-8">
              Your Personal Digital Database
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                Today, your personal data is spread across many different websites and services. Each platform stores your preferences, history, and settings on their servers. VerusID offers a different approach by giving you a personal database that you control.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                At its core, VerusID is a digital identity that belongs to you. It works like an address where you can store your data, settings, and digital assets. Everything stays with you instead of being stored on company servers.
              </p>
              <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                When you use services or websites, you decide what information to share. Instead of companies collecting and storing your data automatically, you can choose exactly what they can access and for how long. This puts you in control of your personal information.
              </p>
               <p className="text-[14px] md:text-[15px] text-black/75 tracking-tight leading-[1.8]">
                The system works through a user-friendly address that's both your identity and your data storage. You can use it to manage your information while keeping your privacy. And since you control the data directly, you don't have to trust companies to protect it.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-[120px] font-serif text-[#E9EFFC]">"</div>
              <blockquote className="text-[18px] md:text-[26px] text-gray-500 leading-snug tracking-tight italic relative">
              "Your data stays with you instead of being stored on company servers."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 text-[120px] font-serif text-[#E9EFFC] rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}