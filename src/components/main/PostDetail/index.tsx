import Detail from './Detail'
import Comments from './Comments'



const index = () => {
  return (
    <section className='w-screen bg-white'>
      <div className="containner max-w-5xl mx-auto flex flex-col justify-between items-center gap-4 p-4">

        {/* blog post detail */}
        <Detail/>

       {/* comments form and list*/}
       <Comments/>
        
      </div>
    </section>
  )
}

export default index
