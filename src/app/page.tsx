import type { Metadata } from 'next'

import Hero from "@/components/main/Hero"
import PopularPosts from '@/components/main/PopularPosts'
import Banner from '@/components/main/Banner'
import TopStories from '@/components/main/TopStories'
import CallToAction from '@/components/main/CallToAction'
import Subscribe from '@/components/main/Subscribe'

export const metadata: Metadata = {
  title: 'Welcome to SportsBlog',
  description: 'Get upto date details and latest post about various sporting activities and news around the world.',
}

export default function Home() {
  return ( 
      <>
         <Hero/>
         <PopularPosts/>
         <Banner/>
         <TopStories/>
         <CallToAction/>
         <Subscribe/>
      </>
  )
}
