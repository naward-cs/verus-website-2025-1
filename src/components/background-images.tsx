import Image from 'next/image'

export const BodyBgHeroImages = () => {
  return (
    <>
      {/* Background images - one for light mode, one for dark mode */}
      <Image
        src="/img/hero-bg2-2.webp"
        className="absolute h-full w-full object-cover dark:hidden"
        fill
        alt="Hero background - light"
        priority
      />
      <Image
        src="/img/bg-darkmode.webp"
        fill
        priority
        className="absolute hidden h-full w-full object-cover dark:block"
        alt="Hero background - dark"
      />
    </>
  )
}

export const BodyBgSmallImages = () => {
  return (
    <>
      {/* Background images - separate for light and dark mode */}
      <Image
        src="/img/bg-small.webp"
        alt="Background - light"
        fill
        className="absolute h-full w-full -translate-y-[300px] object-cover dark:hidden md:-translate-y-[50px]"
      />
      <Image
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        fill
        className="absolute hidden h-full w-full -translate-y-[300px] object-cover dark:block md:-translate-y-[50px]"
      />
    </>
  )
}
