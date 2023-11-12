import {GrLocation, GrPhone, GrMailOption} from 'react-icons/gr'


const ContactCard = () => {
    
  return (
    <div  className="w-full md:w-6/12 flex flex-col justify-center items-center my-2 p-4 space-y-8 bg-white shadow-lg rounded-md  shadow-grey-strong">
             <h3 className="font-bold text-xl text-green-primary">Contact Information</h3>

             <div className="flex flex-col gap-4">

                <div className="flex gap-4">
                    <div>
                      <GrLocation size={30}/>
                    </div>

                    <a href="https://www.google.com/maps/search/23+onungenoma,+aminyi,+isigwe,+ugbawka,+Nkanu+East+L.G.A,+Enugu+State,+Nigeria./@6.2713014,7.6164533,18.99z?entry=ttu" className="font-bold text-lg text-grey-stronger hover:text-green-primary">23 onungenoma, Aminyi, Isigwe, Ugbawka, Nkanu East L.G.A, Enugu State, Nigeria.</a>
                </div>

                <div className="flex gap-4">
                    <div>
                      <GrPhone size={30}/>
                    </div>

                    <a href="tel:+234 905 920 9717" className="font-bold text-lg text-grey-stronger hover:text-green-primary">+234 905 920 9717</a>
                </div>

                <div className="flex gap-4">
                    <div>
                      <GrMailOption size={30}/>
                    </div>

                    <a href="mailto:support@mysportsblog.com" className="font-bold text-lg text-grey-stronger hover:text-green-primary">support@mysportsblog.com</a>
                </div>

             </div>
     </div>
  )
}

export default ContactCard
