import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import {Suspense} from 'react'
import Link from 'next/link'
import PostTags from '@/components/common/PostTags .tsx'
import type { PostProps } from '@/app/types/posts'
import LoadingComponent from '@/components/common/Loading'



const PopularPostCard: FC<PostProps> = ({id, tags, banner, title, content, author, date}):JSX.Element => {

  const createdDate = new Date(date).toLocaleDateString('en-GB')
  return (
        <Suspense fallback={<LoadingComponent/>}>

          <div className="w-4/5 md:w-2/5 flex flex-col items-start justify-evenly mt-8 hover:md:w-5/12">
            <Image className='w-full rounded-2xl' src={banner.url} height={500} width={500} alt='Blog post'/>
            <Link href={`/post/${id}`} className="font-bold text-lg mt-4 hover:text-green-primary">{title}</Link>
            <p className="text-xs text-grey-strong my-2">{content}</p>

            {/* post tags categories */}
            <PostTags tags={tags} />
            <Link href={`/post/${id}`} className='text-xs font-bold hover:text-green-primary'>By {author.username}  .  <span className='font-normal text-grey-strong'>{createdDate}</span></Link>
          </div>

        </Suspense>
       
  )
}

export default PopularPostCard

