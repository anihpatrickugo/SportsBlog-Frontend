"use client"
import { useState } from "react"
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"

const SignUpForm = () => {
    const [vissiblePassword, setVisiblePassword] = useState(false)
  return (
    <form action="" className="w-full md:w-8/12 lg:6/12 flex flex-col items-center my-8 space-y-8">
            {/* email address */}
            <div className="w-full">
                  <h5 className='self-start text-grey-strong font-bold'>Email</h5>
                  <div className="w-full p-1  border border-grey-strong rounded-lg mx-auto">
                    <input className='w-full p-4' type="email" id="email" name="email" value="" placeholder='hello@example.com' onChange={()=>{}} />
                 </div>
            </div>
            

            {/* Password */}
            <div className="w-full">
               <h5 className='self-start text-grey-strong font-bold'>Password</h5>
               <div className="w-full p-1 flex items-center border border-grey-strong rounded-lg mx-auto">
                  <input className='w-11/12 p-4' type={vissiblePassword ? "text": "password"} id="Password" name="password" value="" placeholder='Your Password'  onChange={()=>{}} />
                  
                  <div onClick={()=>setVisiblePassword(!vissiblePassword)}>
                    { vissiblePassword ? (
                        <AiOutlineEyeInvisible size={40}  className="" />

                    ): (
                        <AiOutlineEye size={40}  className="" />
                    )}
                  </div>
               </div>
            </div>

            <button className="bg-green-primary hover:bg-green-950 w-full py-4 text-lg text-white rounded-full">Sign Up</button>
            
        </form>
  )
}

export default SignUpForm
