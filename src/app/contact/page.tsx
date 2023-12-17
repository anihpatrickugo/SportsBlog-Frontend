import type { Metadata } from 'next'
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import Contact from '@/components/main/ContactUs'
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
    title: 'SportsBlog - Contact us',
    description: 'Got a Question? Reach out to us then.',
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
  
  

const ContactUs = async() => {

  const { data } = await getClient().query({ query });

  return (
    <>
      <Contact/>
      <Banner/>
      <TopStories data={data.topStories}/>
      <CallToAction/> 
    </>
  )
}

export default ContactUs
