import Image from "next/image"
import subscribeImage from '@/app/assets/images/subscribe-background.png'

const Subscribe = () => {
  return (
    <section className='w-screen bg-grey-stronger'>
      <div className="max-w-4xl mx-auto px-4 py-20  flex  justify-center items-center relative">

        <Image className="w-screen absolute top-0 bottom-0 left-0 right-0" src={subscribeImage} alt="action" height={500} width={500}/>

         <div className="flex justify-center items-center h-10 ">
            <input className="h-full px-4  border-none rounded-full bg-grey-light text-grey-stronger outline-none"  type="text" placeholder="Your Email"/>
            <button className="h-full -ml-8 px-6 rounded-full text-white bg-grey-strong hover:bg-green-primary hover:opacity-50 text-xs">SEND</button>
         </div>
     
      </div>
    </section>

  )
}

export default Subscribe