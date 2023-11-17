import type { Metadata } from 'next'
import UserProfile from '@/components/main/UserProfile'
import CallToAction from "@/components/main/CallToAction"
import AuthorPosts from '@/components/main/AuthorPosts/TopStories'


export const metadata: Metadata = {
    title: 'SportsBlog- Profile',
    description: 'Derrick Henry ',
  }


const page = () => {
  return (
    <>
     <UserProfile/>
     <AuthorPosts/>
     <CallToAction/> 
    </>
  )
}

export default page
