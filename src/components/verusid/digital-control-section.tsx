export function DigitalControlSection() {
  return (
    <div className="relative -mx-4 mt-4 w-screen md:mx-0 md:mt-4 md:max-w-[1220px]">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute -top-10 right-20 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>
      <div className="absolute bottom-10 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[80px] dark:bg-blue-500/5"></div>

      <div className="w-full border border-gray-200 bg-white/90 p-8 pt-12 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:rounded-lg md:p-16 md:pb-32 md:pt-32">
        <div className="flex flex-col gap-16 md:flex-row md:gap-32">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-8 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[40px]">
              Your Personal Digital Database
            </h2>
            <div className="space-y-6">
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                Today, your personal data is spread across many different
                websites and services. Each platform stores your preferences,
                history, and settings on their servers. VerusID offers a
                different approach by giving you a personal database that you
                control.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                At its core, VerusID is a digital identity that belongs to you.
                It works like an address where you can store your data,
                settings, and digital assets. Everything stays with you instead
                of being stored on company servers.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                When you use services or websites, you decide what information
                to share. Instead of companies collecting and storing your data
                automatically, you can choose exactly what they can access and
                for how long. This puts you in control of your personal
                information.
              </p>
              <p className="text-[14px] leading-[1.8] tracking-tight text-gray-700 dark:text-gray-300 md:text-[15px]">
                The system works through a user-friendly address that's both
                your identity and your data storage. You can use it to manage
                your information while keeping your privacy. And since you
                control the data directly, you don't have to trust companies to
                protect it.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full items-center border-gray-200 dark:border-gray-700 md:w-1/2 md:border-l md:pl-16">
            <div className="relative">
              <div className="absolute -left-6 -top-6 font-serif text-[120px] text-gray-200 dark:text-gray-800">
                "
              </div>
              <blockquote className="relative text-[18px] italic leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[26px]">
                "Your data stays with you instead of being stored on company
                servers."
              </blockquote>
              <div className="absolute -bottom-16 -right-6 rotate-180 font-serif text-[120px] text-gray-200 dark:text-gray-800">
                "
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
