import Image from "next/image"
import subscribeImage from '@/app/assets/images/subscribe-background.png'

const Subscribe = () => {
  return (
    <section className='w-screen bg-grey-stronger'>
      <div className="max-w-3xl mx-auto px-4 py-20  flex flex-col justify-between items-center gap-2 relative">

        <Image className="w-screen" src={subscribeImage} alt="action" height={500} width={500}/>

         <div className="absolute w-64 flex justify-center items-center bottom-28 mx-auto h-10 ">
            <input className="h-full px-4  border-none rounded-full bg-grey-light text-grey-stronger outline-none"  type="text" placeholder="Your Email"/>
            <button className="h-full -ml-8 px-6  rounded-full text-white bg-grey-strong text-xs">SEND</button>
         </div>
     
      </div>
    </section>

  )
}

export default Subscribe