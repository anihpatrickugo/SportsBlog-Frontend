import type { Metadata } from "next"
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import Terms from "@/components/main/TermsAndConditions"
import Banner from "@/components/main/Banner"
import TopStories from "@/components/main/TopStories"
import CallToAction from "@/components/main/CallToAction"

export const metadata: Metadata = {
  title: 'SportsBlog - Terms and Conditions',
  description: 'Here is our Terms and Conditions.',
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


const TermsAndConditionsPolicy = async() => {
  const { data } = await getClient().query({ query });

  return (
    <>
      <Terms/>
      <Banner/>
      <TopStories data={data.topStories}/>
      <CallToAction/> 
    </>
  )
}

export default TermsAndConditionsPolicy
