import TopSory from "./TopSory"
import blogPost1 from '../../../app/assets/images/blogpost1.png'
import blogPost2 from '../../../app/assets/images/blogpost2.png'
import blogPost3 from '../../../app/assets/images/blogpost3.png'
import blogPost4 from '../../../app/assets/images/blogpost4.png'
import { PostProps } from "@/app/types/posts"

const TopStories = ({data}: {data : PostProps[]}) => {
  
  return (
    <section className='w-screen'>
      <div className="containner max-w-5xl mx-auto p-8">
        <h1 className='font-bold text-2xl my-8'>Top Stories</h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-center flex-wrap">
              { data.map(post => (
                   <TopSory 
                   id={post.id}
                   tags={post.tags}
                   key={post.id}
                   banner={post.banner} 
                   title={post.title}
                   author={post.author}
                   date={post.date}
                   category={post.category}
                   />
              ))}
              
             
              
        </div>
    </div>
    </section>
  )
}

export default TopStories
