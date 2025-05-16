export function DigitalControlSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-4 md:mt-4 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute -top-10 right-20 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-[80px] -z-10"></div>

      <div className="w-full md:rounded-lg border border-gray-200 dark:border-gray-800 p-8 pt-12 md:p-16 md:pt-32 md:pb-32 bg-white/90 dark:bg-gray-900/90 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[22px] md:text-[40px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-8">
              Your Personal Digital Database
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                Today, your personal data is spread across many different websites and services. Each platform stores your preferences, history, and settings on their servers. VerusID offers a different approach by giving you a personal database that you control.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                At its core, VerusID is a digital identity that belongs to you. It works like an address where you can store your data, settings, and digital assets. Everything stays with you instead of being stored on company servers.
              </p>
              <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                When you use services or websites, you decide what information to share. Instead of companies collecting and storing your data automatically, you can choose exactly what they can access and for how long. This puts you in control of your personal information.
              </p>
               <p className="text-[14px] md:text-[15px] text-gray-700 dark:text-gray-300 tracking-tight leading-[1.8]">
                The system works through a user-friendly address that's both your identity and your data storage. You can use it to manage your information while keeping your privacy. And since you control the data directly, you don't have to trust companies to protect it.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 flex items-center md:border-l border-gray-200 dark:border-gray-700 md:pl-16">
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-[120px] font-serif text-gray-200 dark:text-gray-800">"</div>
              <blockquote className="text-[18px] md:text-[26px] text-verus-blue dark:text-blue-400 leading-snug tracking-tight italic relative">
              "Your data stays with you instead of being stored on company servers."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 text-[120px] font-serif text-gray-200 dark:text-gray-800 rotate-180">"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}