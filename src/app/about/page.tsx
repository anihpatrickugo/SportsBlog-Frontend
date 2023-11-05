import type { Metadata } from "next"
import AboutUs from "@/components/main/AboutUs"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - Abou Us',
  description: 'Learn more Abou us.',
}

const About = () => {
  return (
    <>
      <AboutUs/>
      <Banner/>
      <TopStories/>
      <CallToAction/>
    </>
  )
}

export default About
