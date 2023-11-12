import type { Metadata } from 'next'
import Contact from '@/components/main/ContactUs'
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
    title: 'SportsBlog - Contact us',
    description: 'Got a Question? Reach out to us then.',
  }


const ContactUs = () => {
  return (
    <>
      <Contact/>
      <Banner/>
      <TopStories/>
      <CallToAction/> 
    </>
  )
}

export default ContactUs
