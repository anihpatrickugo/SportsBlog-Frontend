import type { Metadata } from 'next'
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import DMCA from "@/components/main/DMCA"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
    title: 'SportsBlog - DMCA',
    description: 'If you require any more information or have any questions about our site',
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
  


const Dmca = async() => {
  const { data } = await getClient().query({ query });

  return (
    <>
      <DMCA/>
      <Banner/>
      <TopStories data={data.topStories}/>
      <CallToAction/> 
    </>
  )
}

export default Dmca
