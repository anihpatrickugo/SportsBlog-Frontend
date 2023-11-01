import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PostProps } from '@/app/types/posts'




const TopSory:FC<PostProps> = ({image, title, author, date}) => {
  return (
    <div className="w-full md:w-5/12 mb-8 flex justify-start items-start gap-1 hover:md:w-6/12">
                 <div className="w-2/5 rounded-3xl">
                    <Image className='w-full' src={image} height={500} width={500} alt='blog post 1'/>
                 </div>
                 <div className="flex-1 flex flex-col justify-evenly">
                    <Link href="/post/1" className='font-bold text-xs md:text-sm hover:text-green-primary'>{title}</Link>
                     <Link href="/" className=' text-[10px] md:text-xs font-bold mt-6 hover:text-green-primary'>{author} <span className='font-normal text-grey-strong'>{date}</span></Link>
                 </div>
                 
              </div>
  )
}

export default TopSory
