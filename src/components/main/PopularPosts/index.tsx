import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PopularPostCard from './PopularPostCard'
import profileImage from "../../../app/assets/images/profile.png"
import blogpost1 from "../../../app/assets/images/blogpost1.png"
import blogpost2 from "../../../app/assets/images/blogpost2.png"
import blogpost3 from "../../../app/assets/images/blogpost3.png"
import blogpost4 from "../../../app/assets/images/blogpost4.png"


const PopularPosts = () => {
  return (
    <section className=' w-screen pt-72 md:pt-0 relative'>

        {/* top */}
        <div className="w-full bg-grey-light flex flex-col justify-center items-center px-8">
            <h1 className="font-bold text-md md:text-5xl w-3/4 md:w-1/2 text-center mt-10">The fates of great athletes</h1>

            <p className='text-grey-strong  md:w-1/2 text-center text-xs my-4'>Chemistry has always been the Clippers’ issue. For starters, all their players have had some kind of injury this year, preventing the team from getting into a good rhythm and used to playing...</p>

            <div className="hidden  md:flex justify-between items-center mx-8 my-8 w-full md:w-9/12">
                <div className="w-6/12 flex  justify-between items-center font-semibold">
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary'>ALL</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary'>PLAYOFFS</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary'>NBA SEASON</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary'>BOSTON CELTICS</Link>
                </div>

                <div className='w-1/2 flex justify-end items-center'>
                     <div className="w-1/12 hover:cursor-pointer">
                       <Image className='w-full' src={profileImage} width={400} height={500} alt="writer image"/>
                     </div>
                     <div className='mx-2 hover:cursor-pointer'>
                        <h6 className='text-xs'>BLOG AUTHOR</h6>
                        <h4 className='text-Sm font-bold'>Anih Patrick</h4>
                     </div>
                </div>
            </div>

        </div>
      
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row flex-wrap justify-cetnter md:justify-around items-center">
          
          <PopularPostCard 
               image={blogpost1} 
               title='What Happened To The Clippers?' 
               details='As more and more teams get eliminated from the NBA playoffs, the competition gets tougher and tougher...' 
               date='May 22, 2022' 
               author='Anih Patrick' />

          <PopularPostCard 
               image={blogpost2} 
               title='NBA Bets 9/25/20' 
               details='Chemistry has always been the Clippers’ issue. For starters, all their players have had some kind of injury this year, preventing the team from getting into a good rhythm and used to playing...' 
               date='May 22, 2022' 
               author='Anih Patrick' />
          <PopularPostCard 
               image={blogpost3} 
               title='What Happened To The Clippers?' 
               details='As more and more teams get eliminated from the NBA playoffs, the competition gets tougher and tougher...' 
               date='May 22, 2022' 
               author='Anih Patrick' />
          <PopularPostCard 
               image={blogpost4} 
               title='Toxic Players in The NBA' 
               details='Chemistry has always been the Clippers’ issue. For starters, all their players have had some kind of injury this year, preventing the team from getting into a good rhythm and used to playing...' 
               date='May 22, 2022' 
               author='Anih Patrick' />

          
        </div>
    </section>
  )
}

export default PopularPosts
