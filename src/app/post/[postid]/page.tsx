import type { Metadata } from 'next';
import { getClient } from '@/apollo/client';
import { gql } from "@apollo/client";
import PostDetail from '@/components/main/PostDetail'
import TopStories from '@/components/main/TopStories'
import CallToAction from '@/components/main/CallToAction'

export const metadata: Metadata = {
  title: 'Blog Detail',
  description: 'This is the blog detail page.',
}

export const revalidate = 5;



const PostDetails = async({ params }: { params: { postid: string } }) => {

  const postID = Number (params.postid)

  const query = gql`query {
    postById(id: ${postID}){
      id
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
  


  const { data } = await getClient().query({ query });
  

  return (
    <>
      <PostDetail post={data.postById} />
      <TopStories data={data.topStories}/>
      <CallToAction/>
    </>
  )
}

export default PostDetails



