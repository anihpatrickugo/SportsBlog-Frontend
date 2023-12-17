import type { Metadata } from 'next'

import { getClient } from '@/apollo/client';

import { gql } from "@apollo/client";

;

import Hero from "@/components/main/Hero"
import PopularPosts from '@/components/main/PopularPosts'
import Banner from '@/components/main/Banner'
import TopStories from '@/components/main/TopStories'
import CallToAction from '@/components/main/CallToAction'
import Subscribe from '@/components/main/Subscribe'

export const metadata: Metadata = {
  title: 'Welcome to SportsBlog',
  description: 'Get upto date details and latest post about various sporting activities and news around the world.',
}

export const revalidate = 5;


const query = gql`query {
  allCategories {
    id
    name
  }

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

  popularPosts {
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

export default async function Home() {
  const { data } = await getClient().query({ query });

  return ( 
      <>
         <Hero />
         <PopularPosts data={data.popularPosts} categories={data.allCategories}/>
         <Banner/>
         <TopStories data={data.topStories}/>
         <CallToAction/>
         <Subscribe/>
      </>
  )
}


