export function MobileDownloads() {
  return (
    <>
      <h2 className="text-[22px] md:text-[32px] text-black dark:text-white tracking-tight font-medium leading-[1.1] mb-8">
        Download Verus Mobile
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="#" className="h-[50px] w-[180px]">
          <img
            src="/img/apple-store.svg"
            alt="Download on the App Store"
            className="h-full w-full"
          />
        </a>
        <a href="#" className="h-[50px] w-[180px]">
          <img
            src="/img/google-play.png"
            alt="Get it on Google Play"
            className="h-full w-full object-contain"
          />
        </a>
      </div>
      <p className="text-[14px] md:text-[15px] text-black/60 dark:text-white/60 mt-8">
        Verus Mobile is open source. View the source code on{" "}
        <a 
          href="https://github.com/VerusCoin/Verus-Mobile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-verus-blue dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>.
      </p>
    </>
  )
}