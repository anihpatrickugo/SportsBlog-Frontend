import Detail from './Detail'
import Comments from './Comments'
import { PostProps } from '@/app/types/posts'



const index = ({post}: {post: PostProps}) => {
 
  return (
    <section className='w-screen bg-white'>
      <div className="containner max-w-5xl mx-auto flex flex-col justify-between items-center gap-4 p-4">

        {/* blog post detail */}
        <Detail post={post} />

       {/* comments form and list*/}
       {/* <Comments comments={data.comments}/> */}
        
      </div>
    </section>
  )
}

export default index
