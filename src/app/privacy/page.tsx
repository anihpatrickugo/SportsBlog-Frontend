import type { Metadata } from "next"
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import PrivacyPolicy from "@/components/main/PrivacyPolicy"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - Privacy Policy',
  description: 'Here is our privacy policy.',
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



const Privacy = async() => {
  const { data } = await getClient().query({ query });

  return (
    <>
      <PrivacyPolicy/>
      <Banner/>
      <TopStories data={data.topStories}/>
      <CallToAction/> 
    </>
  )
}

export default Privacy
