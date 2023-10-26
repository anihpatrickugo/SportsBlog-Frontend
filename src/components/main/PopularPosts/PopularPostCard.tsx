import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Categories from './Categories'

interface PopularPostProps {
    image: string | StaticImageData,
    title: string,
    details: string,
    author: string,
    date: string
}

const PopularPostCard: FC<PopularPostProps> = ({image, title, details, author, date}):JSX.Element => {
  return (
    <div className="w-4/5 md:w-2/5 flex flex-col items-start justify-evenly mt-8">
            <Image className='w-full rounded-2xl' src={image} height={500} width={500} alt='Blog post'/>
            <h2 className="font-bold text-sm md:text-md mt-4">{title}</h2>
            <p className="text-xs text-grey-strong my-2">{details}</p>

            {/* post tags categories */}
            <Categories/>

            <div className='text-xs font-bold'>By {author}  .  <span className='font-normal text-grey-strong'>{date}</span></div>
          </div>
  )
}

export default PopularPostCard

