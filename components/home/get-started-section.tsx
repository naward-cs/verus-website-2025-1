

import Image from "next/image"
import { IoLogoDiscord } from "react-icons/io5"

export function GetStartedSection() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-4 mt-4">
      {/* Wallet Section */}
      <div className="w-full h-[340px] md:h-[490px] bg-gradient-to-b from-[#E9EFFC] to-white rounded-none md:rounded-lg border-2 border-[#E9EFFC] p-8 md:p-16 flex flex-col relative overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
        <div>
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1] mb-4">
            Choose a wallet.
          </h2>
          <p className="text-[14px] md:text-[18px] text-black tracking-tight leading-snug font-normal opacity-75 max-w-[400px] mb-8">
            Manage your funds and connect with the Verus protocol and other connected networks.
          </p>
          <a 
            href="/wallets" 
            className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit"
          >
            Choose wallet
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end">
          <Image
            src="/img/wallets-small.png"
            alt="Verus Wallets"
            width={600}
            height={360}
            className="w-[70%] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Get VRSC Section */}
        <div className="w-full h-[190px] md:h-[237px] bg-gradient-to-b from-[#E9EFFC] to-white rounded-none md:rounded-lg border-2 border-[#E9EFFC] p-8 md:p-12 flex flex-col justify-between shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <h2 className="text-[22px] md:text-[40px] text-verus-blue tracking-tight font-medium leading-[1.1]">
            Get $VRSC here.
          </h2>
          <div>
            <a 
              href="/get-vrsc" 
              className="h-[40px] md:h-[50px] px-6 border-2 border-verus-blue rounded-lg text-[14px] md:text-[16px] font-medium text-verus-blue flex items-center justify-center hover:bg-blue-50 transition-colors w-fit"
            >
              How to get VRSC
            </a>
          </div>
        </div>

        {/* Discord Section */}
        <div className="w-full h-[190px] md:h-[237px] bg-[#5865F2] rounded-none md:rounded-lg p-8 md:p-12 flex flex-col justify-between shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)]">
          <h2 className="text-[22px] md:text-[40px] text-white tracking-tight font-medium leading-[1.1] flex items-center gap-4">
            <IoLogoDiscord className="h-12 w-12" />
            Join the Discord.
          </h2>
          <div className="flex items-center gap-4">
            <a 
              href="https://discord.gg/veruscoin"
              target="_blank"
              rel="noopener noreferrer" 
              className="h-[40px] md:h-[50px] px-6 bg-white rounded-lg text-[14px] md:text-[16px] font-medium text-[#5865F2] flex items-center justify-center hover:bg-gray-100 transition-colors w-fit"
            >
              Enter Discord server
            </a>
            <span className="text-[12px] md:text-[14px] text-white/90">
              10,575 joined before you!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}