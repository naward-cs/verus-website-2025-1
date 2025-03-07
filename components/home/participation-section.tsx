

export function ParticipationSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] flex flex-col md:flex-row gap-4 mt-4 md:mt-4">
      {/* Mining Card */}
      <div className="w-full md:w-1/2 h-[280px] md:min-h-[400px] md:rounded-lg rounded-none border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-8 md:p-16 flex flex-col shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div>
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] max-w-[400px]">
            Mine Verus with mobile phone, CPU & ARM.
          </h2>
          <p className="md:text-[18px] text-[14px] text-black tracking-tight leading-[1.3] font-normal mt-4 opacity-75">
            Mine up to 22 ecosystem coins, simultaneously.
          </p>
        </div>
        <div className="mt-auto">
          <a 
            href="/mining" 
            className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit"
          >
            Start mining
          </a>
        </div>
      </div>

      {/* Staking Card */}
      <div className="w-full md:w-1/2 h-[280px] md:h-[400px] md:rounded-lg rounded-none border-2 border-[#E9EFFC] bg-gradient-to-b from-[#E9EFFC] to-white p-8 md:p-16 flex flex-col shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div>
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] max-w-[400px]">
            Run a node.<br />Start staking.<br />Get rewarded.
          </h2>
        </div>
        <div className="mt-auto">
          <a 
            href="/staking" 
            className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit"
          >
            Start staking
          </a>
        </div>
      </div>
    </div>
  )
}