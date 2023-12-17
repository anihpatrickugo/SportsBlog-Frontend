import { Suspense } from 'react'
import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LoadingComponent from '@/components/common/Loading'
import { PostProps } from '@/app/types/posts'




const TopSory:FC<PostProps> = ({id, banner, title, author, date}) => {
   const createdDate = new Date(date).toLocaleDateString('en-GB')
  return (
         <Suspense fallback={<LoadingComponent/>}>

             <div className="w-full md:w-5/12 mb-8 flex justify-start items-start gap-1 hover:md:w-6/12">
                 <div className="w-2/5 rounded-3xl">
                    <Image className='w-full' src={banner.url} height={500} width={500} alt='blog post 1'/>
                 </div>
                 <div className="flex-1 flex flex-col justify-evenly">
                    <Link href={`/post/${id}`} className='font-bold text-xs md:text-sm hover:text-green-primary'>{title}</Link>
                     <Link href="/" className=' text-[10px] md:text-xs font-bold mt-6 hover:text-green-primary'>{author.username} <span className='font-normal text-grey-strong'>{createdDate}</span></Link>
                 </div>
                 
              </div>
         </Suspense>
  )
}

export default TopSory
