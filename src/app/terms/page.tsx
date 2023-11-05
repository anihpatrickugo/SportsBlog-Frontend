import type { Metadata } from "next"
import Terms from "@/components/main/TermsAndConditions"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - Terms and Conditions',
  description: 'Here is our Terms and Conditions.',
}


const TermsAndConditionsPolicy = () => {
  return (
    <>
      <Terms/>
      <Banner/>
      <TopStories/>
      <CallToAction/> 
    </>
  )
}

export default TermsAndConditionsPolicy
