import type { Metadata } from 'next'
import Hero from "@/components/main/Hero"
import PopularPosts from '@/components/main/PopularPosts'

export const metadata: Metadata = {
  title: 'Welcome to SportsBlog',
  description: 'Get upto date details and latest post about various sporting activities and news around the world.',
}

export default function Home() {
  return ( 
      <>
         <Hero/>
         <PopularPosts/>
      </>
  )
}
