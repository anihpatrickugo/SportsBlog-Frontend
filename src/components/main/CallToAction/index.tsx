import Image from "next/image"
import Link from "next/link"
import actionQuote from "../../../app/assets/icons/action-quote.svg"

const CallToAction = () => {
  return (
    <section className='w-screen bg-green-primary'>
      <div className="max-w-3xl mx-auto px-4 py-20  flex flex-col justify-between items-center gap-2">

        <Image className="w-16" src={actionQuote} alt="action" height={500} width={500}/>
         
         <h1 className="text-white font-bold text-md md:text-4xl text-center my-4"> We&apos;ve got something to say.
             <br/>And you may definitely want to hear it.</h1>

          <Link href="/" className='my-4 bg-white text-xs text-green-primary px-6 font-bold py-3 rounded-full hover:opacity-50 hover:underline'> JOIN OUR SPORTSBLOG</Link>
         
      </div>
    </section>

  )
}

export default CallToAction
