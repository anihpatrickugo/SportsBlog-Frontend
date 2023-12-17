import { Suspense } from 'react'
import {FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LoadingComponent from '@/components/common/Loading'
import { PostProps } from '@/app/types/posts'




const AuthorPost:FC<PostProps> = ({banner, title, author, date}) => {
  return (
         <Suspense fallback={<LoadingComponent/>}>

             <div className="w-full md:w-3/12 mb-8 flex flex-col justify-center gap-1 hover:-translate-x-4 bg-blue-40">
                 <div className="w-full rounded-3xl">
                    <Image className='w-full' src={banner.url} height={500} width={500} alt='blog post 1'/>
                 </div>
                 <div className="flex-1 flex flex-col justify-evenly">
                    <Link href="/post/1" className='font-bold text-xs md:text-sm hover:text-green-primary'>{title}</Link>
                     <Link href="/" className=' text-[10px] md:text-xs font-bold mt-6 hover:text-green-primary'>{author.username} <span className='font-normal text-grey-strong'>{date}</span></Link>
                 </div>
                 
              </div>
         </Suspense>
  )
}

export default AuthorPost
