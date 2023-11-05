import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blogPost1 from '../../../app/assets/images/blogpost1.png'
import comment from '../../../app/assets/icons/comment.svg'
import twitter from '../../../app/assets/icons/twitter.svg'
import facebook from '../../../app/assets/icons/facebook.svg'
import bookmark from '../../../app/assets/icons/bookmark.svg'
import flag from '../../../app/assets/icons/flag.svg'

import Categories from '@/components/common/Categories'
import LoadingComponent from '@/components/common/Loading'


const Detail = () => {
  return (
       <Suspense fallback={<LoadingComponent message='Loading Post Detail...'/>}>
            <div className="w-full flex flex-col items-center">
            <h6 className="text-grey-light text-sm font-bold my-6">GAME REVIEWS</h6>
        <h1 className="max-w-2xl text-xl md:text-5xl font-bold text-grey-stronger text-center mb-12">
        The Biggest Losers of a (likely) Nixed NBA Season
        </h1>
        <div className="w-full mb-12">
            <Image className='w-full' alt="post detail" src={blogPost1} height={500} width={500}/>
        </div>

        {/* blog details */}
        <div className="max-w-xl flex flex-col items-center my-4">
        <h4 className="h2 text-md font-bold text-grey-stronger my-8">
           This series would be Easy Money for Bucks, as the only relevant player on the Magic would be, Nick Vucevic, but even him cant carry the magic, as Terrence Ross is still developing.
        </h4>

         <h2 className="text-2xl text-grey-stronger font-bold my-2 self-start">1 Bucks vs 8 Magic</h2>

         <p className=' text-lg'>This series will prob go past 5 games, as the Nets were the Team that snapped Raptors 15 game winnings streak in a game in         Brooklyn, but regardless the Raptors won the season series 3-1, but in every game you saw the Nets put up a good fight.
              Deep down, you look down the roster, and by the time playoff start, you will have a healthy Toronto Raptors, as this past season, Raptors lost so many man games to injury, as basically the starting lineup went through a series of injury as Siakam, Lowry, Vanfleet, Powell, Ibaka, Gasol all were injured at one point during the season, and still ended up as of today, as the second seed as 46-18 and a 15 game winning streak after losing Danny Green and Kawhi Leonard in Free Agency.</p>

        {/* comment */}

        <blockquote className='my-12 text-grey-strong text-lg flex items-center gap-8'>
        <Image className='w-3/12' alt="post detail" src={comment} height={500} width={500}/>
         <span>
            Nobody cares what software Facebook runs on. Users only care about what the product lets them do and how it makes them feel.
         </span> 
        </blockquote>

        <div className="w-3/5 md:w-full  mb-12">
            <Image className='w-full' alt="post detail" src={blogPost1} height={500} width={500}/>
        </div>

        <h2 className="text-2xl text-grey-stronger font-bold my-2 self-start">1 Bucks vs 8 Magic</h2>

        <p className=' text-lg'>This series will prob go past 5 games, as the Nets were the Team that snapped Raptors 15 game winnings streak in a game in Brooklyn, but regardless the Raptors won the season series 3-1, but in every game you saw the Nets put up a good fight.
         </p>

        
         <div className="w-3/5 md:w-full  mb-12">
            <Image className='w-full' alt="post detail" src={blogPost1} height={500} width={500}/>
        </div>

        <h2 className="text-2xl text-grey-stronger font-bold my-2 self-start">1 Bucks vs 8 Magic</h2>

        <p className=' text-lg mb-4'>This series will prob go past 5 games, as the Nets were the Team that snapped Raptors 15 game winnings streak in a game in Brooklyn, but regardless the Raptors won the season series 3-1, but in every game you saw the Nets put up a good fight.
            Deep down, you look down the roster, and by the time playoff start, you will have a healthy Toronto Raptors, as this past season, Raptors lost so many man games to injury, as basically the starting lineup went through a series of injury as Siakam, Lowry, Vanfleet, Powell, Ibaka, Gasol all were injured at one point during the season, and still ended up as of today, as the second seed as 46-18 and a 15 game winning streak after losing Danny Green and Kawhi Leonard in Free Agency.</p>

        

        {/* post categories tag  and social icons*/}
        <div className="w-full flex justify-between items-center">
           <Categories/>

           <div className="flex justify-between items-center gap-4">
              <Link href="/">
                 <Image className='w-6' alt="post detail" src={facebook} height={500} width={500}/>
              </Link>

              <Link href="/">
                 <Image className='w-6' alt="post detail" src={twitter} height={500} width={500}/>
              </Link>
              
              <div>
                <Image className='w-4' alt="post detail" src={bookmark} height={500} width={500}/>
              </div>

              <div>
                 <Image className='w-4' alt="post detail" src={flag} height={500} width={500}/>
              </div>
           </div>

        </div>

        </div> 
       </div>
       </Suspense>
  )
}

export default Detail
