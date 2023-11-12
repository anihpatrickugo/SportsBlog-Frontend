import type { Metadata } from "next"
import AboutUs from "@/components/main/AboutUs"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - About Us',
  description: 'Learn more About us.',
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
