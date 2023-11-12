import Image from "next/image"
import Link from "next/link"
import banner from "../../../app/assets/images/hero-banner.png"
import vectorHero from "../../../app/assets/icons/Vectorhero.svg"


const Hero = () => {
  return (
    <section className=" h-1/2 md:h-screen bg-darkBlue-primary relative">
     <Image className="hidden md:block w-screen object-cover absolute left-0 right-0 -top-10"  src={banner} alt="hero" width={2000} height={2000}/>

     <div className="bg-darkBlue-primary flex flex-col items-center absolute max-w-xl mx-auto py-10 top-0 right-0 left-0 z-10">
        <h1 className="text-white font-bold text-lg md:text-4xl text-center w-3/5 md:w-full my-4 md:my-8">Share or discover the best sport contents</h1>

        <Link href="/auth/signup" className="text-white text-xs md:text-sm font-bold bg-green-primary my-2 py-2 px-8 rounded-full">
        START A SPORTS BLOG
        </Link>

        <p className="text-white text-xs">It&apos;s Free. Learn More  &gt;</p>

        <Image className="w-3 md:w-5 mt-12"  src={vectorHero} alt="hero" width={2000} height={2000}/>

     </div>
  </section>
  )
}

export default Hero
