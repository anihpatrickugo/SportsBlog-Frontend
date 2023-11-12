import ContactForm from "./ContactForm"
import ContactCard from "./ContactCard"

const Contact = () => {
    return (
      <section className="w-full p-4">
        <div className="max-w-4xl mx-auto flex flex-col justify-between items-start">
          <h1 className="text-3xl self-center font-bold text-grey-stronger my-4"> Contact Us </h1>

          <div className="flex flex-col justify-between my-4 text-center">
            <h3 className="font-bold text-xl text-grey-strong">Got A Question?</h3>
            <p className="text-grey-strong md:text-2xl my-1">
            We’re here to help and answer any question you might have. We look forward to hearing from you 🙂
          </p>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-12">
             <ContactCard/>
             <ContactForm/>
          </div>
          
        </div>
      </section>
    )
}

export default Contact