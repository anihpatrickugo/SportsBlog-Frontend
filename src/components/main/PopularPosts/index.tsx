"use client"
import React from 'react'
import Link from 'next/link'
import PopularPostCard from './PopularPostCard'
import {BsSearch} from 'react-icons/bs'
import blogpost1 from "../../../app/assets/images/blogpost1.png"
import blogpost2 from "../../../app/assets/images/blogpost2.png"
import blogpost3 from "../../../app/assets/images/blogpost3.png"
import blogpost4 from "../../../app/assets/images/blogpost4.png"


const PopularPosts = () => {
  return (
    <section className=' w-screen pt-72 md:pt-0 pb-12 relative'>

        {/* top */}
        <div className="w-full bg-grey-light flex flex-col justify-center items-center px-8">
            <h1 className="font-bold text-md md:text-5xl w-3/4 md:w-1/2 text-center mt-10">The fates of great athletes</h1>

            <p className='text-grey-strong  md:w-1/2 text-center text-xs my-4'>Chemistry has always been the Clippers’ issue. For starters, all their players have had some kind of injury this year, preventing the team from getting into a good rhythm and used to playing...</p>

            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center mx-8 my-8 w-full md:w-9/12">
                <div className="w-full md:w-8/12 flex gap-4 font-semibold overflow-x-scroll flex-nowrap">
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>ALL</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>SOCCER</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>BASKETBALL</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>TENNIS</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>RUGBY</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>FOOTBALL</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>RACING</Link>
                    <Link href="" className='hover:font-extrabold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-green-primary whitespace-nowrap'>HOCKEY</Link>
                </div>

                                  
                <div className="w-full md:w-3/12 flex justify-end items-center p-1  mx-auto mb-8 md:mb-0">
                  <input className='bg-grey-ultraLight w-11/12 p-2 border border-r-0 rounded-r-none border-grey-strong rounded-lg' type="text" id="search" name="search" value="" placeholder='Search'  onChange={()=>{}} />
                  
                  <div className=" bg-grey-ultraLight p-1 border border-l-0 rounded-l-none border-grey-strong rounded-lg hover:bg-green-primary">
                    <BsSearch size={32}  color="grey" />
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
