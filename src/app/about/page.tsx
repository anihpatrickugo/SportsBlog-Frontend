import type { Metadata } from "next"
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import AboutUs from "@/components/main/AboutUs"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - About Us',
  description: 'Learn more About us.',
}


export const revalidate = 5;

const query = gql`query {

  topStories {
    id
    tags
    title
    author{
      username
    }
    category {
      name
    }
    content
    tags
    date
    banner {
      url
    }
    comments {
      id
      message
      date
    }
  }
}`




const About = async() => {
   
  const { data } = await getClient().query({ query });

  return (
    <>
      <AboutUs/>
      <Banner/>
      <TopStories data={data.topStories}/>
      <CallToAction/>
    </>
  )
}

export default About
