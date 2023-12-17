import AuthorPost from './AuthorPost'
import blogPost1 from '@/app/assets/images/blogpost1.png'
import blogPost2 from '@/app/assets/images/blogpost2.png'
import blogPost3 from '@/app/assets/images/blogpost3.png'
import blogPost4 from '@/app/assets/images/blogpost4.png'

const AuthorPosts = () => {
  return (
    <section className='w-screen py-8'>
      <div className="containner max-w-5xl mx-auto p-8">
        <h1 className='font-bold text-2xl my-8'>Author Blog</h1>

        <div className="w-full flex flex-col md:flex-row justify-between items-center flex-wrap space-x-1">
              <AuthorPost 
                 id={1}
                 tags={[]}
                 category='Football'
                 banner={{url:blogPost1}}  
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author={{username: "Anih Patrick"}}
                 date="27 October 2023 "
                 />
              <AuthorPost 
                  id={2}
                  tags={[]}
                  category='Football'
                 banner={{url:blogPost2}} 
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author={{username: "Anih Patrick"}}
                 date="27 October 2023 "
                 />

              <AuthorPost 
                 id={3}
                 tags={[]}
                 category='Football'
                 banner={{url:blogPost3}}  
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author={{username: "Anih Patrick"}}
                 date="27 October 2023 "
                 />

              <AuthorPost 
                 id={4}
                 tags={[]}
                 category='Football'
                 banner={{url:blogPost4}}  
                 title="Titans Post Elite PFF Tackling in 2019 Tackling "
                 author={{username: "Anih Patrick"}}
                 date="27 October 2023 "
                 />
              
        </div>
    </div>
    </section>
  )
}

export default AuthorPosts
