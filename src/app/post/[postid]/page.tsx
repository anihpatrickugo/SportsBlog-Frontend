import type { Metadata } from 'next'
import PostDetail from '@/components/main/PostDetail'
import TopStories from '@/components/main/TopStories'
import CallToAction from '@/components/main/CallToAction'

export const metadata: Metadata = {
  title: 'Blog Detail',
  description: 'This is the blog detail page.',
}

const PostDetails = () => {
  return (
    <>
      <PostDetail/>
      <TopStories/>
      <CallToAction/>
    </>
  )
}

export default PostDetails



