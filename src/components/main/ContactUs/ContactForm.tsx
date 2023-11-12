"use client"


const ContactForm = () => {
    
  return (
    <form action="" className="w-full md:w-6/12 flex flex-col items-center my-2 space-y-8">
             {/* Firstname */}
             <div className="w-full">
                  <h5 className='self-start text-grey-strong font-bold'>FirstName</h5>
                  <div className="w-full p-1  mx-auto">
                    <input className='w-full p-2 border border-grey-strong rounded-lg' type="text" id="firstname" name="firstname" value="" placeholder='Your FirstName' onChange={()=>{}} />
                 </div>
            </div>

             {/* Lastname */}
             <div className="w-full">
                  <h5 className='self-start text-grey-strong font-bold'>LastName</h5>
                  <div className="w-full p-1  mx-auto">
                    <input className='w-full p-2 border border-grey-strong rounded-lg' type="text" id="lastname" name="lastname" value="" placeholder='Your LasttName' onChange={()=>{}} />
                 </div>
            </div>

             {/* email address */}
             <div className="w-full">
                  <h5 className='self-start text-grey-strong font-bold'>Email</h5>
                  <div className="w-full p-1  mx-auto">
                    <input className='w-full p-2 border border-grey-strong rounded-lg' type="email" id="email" name="email" value="" placeholder='hello@example.com' onChange={()=>{}} />
                 </div>
            </div>
            
             {/* Message */}
             <div className="w-full">
                  <h5 className='self-start text-grey-strong font-bold'>Message</h5>
                  <div className="w-full p-1  mx-auto">
                    <textarea className='w-full p-2 border border-grey-strong rounded-lg' id="message" name="message" value="" placeholder='Enter your message here...' onChange={()=>{}} rows={4} cols={50}>
                        
                    </textarea>
                 </div>
            </div>
            

            

            <button className="bg-green-primary hover:bg-green-950 w-full py-4 text-lg text-white rounded-full">Send Now</button>
            
        </form>
  )
}

export default ContactForm
