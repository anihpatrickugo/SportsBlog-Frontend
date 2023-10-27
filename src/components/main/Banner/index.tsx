import Image from "next/image"
import Link from "next/link"
import bannerImage from "../../../app/assets/images/banner-image.png"
import clock from "../../../app/assets/icons/clock.svg"
import group from "../../../app/assets/icons/group.svg"
import premium from "../../../app/assets/icons/premium.svg"
import dollar from "../../../app/assets/icons/dollar.svg"

const Banner = () => {
  return (
    <section className='w-screen bg-grey-light'>
      <div className="max-w-5xl mx-auto p-4 flex flex-col-reverse md:flex-row justify-between items-center gap-2">
         <div className="w-full md:w-1/2">
            <Image className="w-full" src={bannerImage} alt="banner" height={500} width={500}/>
         </div> 
         <div className="w-full md:w-1/2 flex flex-col justify-evenly my-4 md:my-0">
            <h5 className="text-md text-grey-strong">BECOME A MEMBER</h5>
            <h1 className="font-extrabold text-2xl md:text-4xl mb-4">Join Our SportsBlog</h1>

             {/* banner points */}
            <div className="w-full">
                <div className="w-full flex justify-between items-center my-1">
                    <div className="w-1/12">
                      <Image className="w-3/5 mr-4" alt="icon" src={clock} height={500} width={500}/>
                    </div>
                    <h3 className="w-11/12 font-bold text-sm md:text-lg">Start a blog in seconds</h3>
                </div>
                <div className="w-full flex justify-between items-center my-1">
                    <div className="w-1/12">
                      <Image className="w-3/5 mr-4" alt="icon" src={group} height={500} width={500}/>
                    </div>
                    <h3 className="w-11/12 font-bold text-sm md:text-lg">Publish, promote and build your followers</h3>
                </div>
                <div className="w-full flex justify-between items-center my-1">
                    <div className="w-1/12">
                      <Image className="w-3/5 mr-4" alt="icon" src={premium} height={500} width={500}/>
                    </div>
                    <h3 className="w-11/12 font-bold text-sm md:text-lg">Free forever, Go Premium for even more</h3>
                </div>
                <div className="w-full flex justify-between items-center my-1">
                    <div className="w-1/12">
                      <Image className="w-3/5 mr-4" alt="icon" src={dollar} height={500} width={500}/>
                    </div>
                    <h3 className="w-11/12 font-bold text-sm md:text-lg">Make Money with your blog</h3>
                </div>
            </div>

              {/* action */}
              <div className="flex justify-start flex-wrap gap-4 my-8">
                      <Link href="/" className='bg-green-primary text-sm text-white px-6 md:px-8 py-2 md:py-4 rounded-full font-bold hover:opacity-50 hover:underline'>
                            Get Started
                      </Link>
                      <Link href="/" className='hover:bg-grey-strong text-sm md:text-md text-grey-strong hover:text-white px-6 md:px-8 py-2 md:py-4 rounded-full font-bold hover:opacity-50 hover:underline'>
                       See all features &gt;
                      </Link>
              </div>
         </div> 
      </div>
    </section>

  )
}

export default Banner
