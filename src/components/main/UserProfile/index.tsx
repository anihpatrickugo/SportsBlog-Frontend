import Link from "next/link";
import Image from "next/image"
import { BsGem } from "react-icons/bs";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import profile from "@/app/assets/images/download.jpeg"

const UserProfile = () => {
  return (
    <section className='w-screen bg-grey-light p-4'>
      <div className="relative -bottom-24 bg-grey-ultraLight max-w-5xl mx-auto rounded-md flex flex-col items-center justify-center py-16 px-4">

         <div className="absolute -top-5 w-24">
            <Image className="w-full border-4 border-grey-ultraLight rounded-3xl -skew-x-12 object-cover" src={profile} alt="profile picture" height={500} width={400}/>
         </div>
         
        <div className="flex justify-between items-center gap-2">
            <BsGem size={12} color="#53AA51"/>
            <p className='text-grey-strong text-xs font-bold uppercase'>Premium Blogger</p>
        </div>

        <h1 className="font-bold text-3xl md:text-4xl text-grey-stronger">Derrick Henry</h1>

        <h5 className="text-grey-strong text-center text-xs md:text-md max-w-2xl">
        Derrick Henry Benbow is a theologian, essayist and creative who situates her work at the intersections of beauty, faith, feminism and culture.
        </h5>

         <div className="flex justify-between items-center gap-4 my-4">
            <Link href="/">
               <BsFacebook  size={30} color="#7E7F81"/>
            </Link>

            <Link href="/">
               <BsInstagram  size={30} color="#7E7F81"/>
            </Link>

            <Link href="/">
               <AiFillTwitterCircle  size={30} color="#7E7F81"/>
            </Link>
         </div>
        
      </div>
    </section>
  )
}

export default UserProfile
