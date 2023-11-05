import type { Metadata } from 'next'
import DMCA from "@/components/main/DMCA"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
    title: 'SportsBlog - DMCA',
    description: 'If you require any more information or have any questions about our site',
  }


const Dmca = () => {
  return (
    <>
      <DMCA/>
      <Banner/>
      <TopStories/>
      <CallToAction/> 
    </>
  )
}

export default Dmca
