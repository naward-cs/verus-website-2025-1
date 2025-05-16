export function MobileDownloads() {
  return (
    <>
      <h2 className="mb-8 text-[22px] font-medium leading-[1.1] tracking-tight text-black dark:text-white md:text-[32px]">
        Download Verus Mobile
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
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
      <p className="mt-8 text-[14px] text-black/60 dark:text-white/60 md:text-[15px]">
        Verus Mobile is open source. View the source code on{' '}
        <a
          href="https://github.com/VerusCoin/Verus-Mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-verus-blue hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        .
      </p>
    </>
  )
}
