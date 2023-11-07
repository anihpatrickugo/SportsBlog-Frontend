

import type {Dispatch, SetStateAction, FC} from 'react'
import Link from "next/link"
import { GrClose } from 'react-icons/gr';

interface Props {
  setMobileToggled: Dispatch<SetStateAction<boolean>>
}

const MobileHeaderLinks:FC<Props> = ({setMobileToggled}) => {

  
  

  return (
    <div  className='flex justify-center items-center md:hidden w-screen h-screen absolute z-50 top-0 right-0 left-0 bottom-0 overflow-hidden bg-grey-light animate-[pulse_1s_ease-out_1]'>
         <div onClick={()=> setMobileToggled(false)} className="absolute top-20 right-20">
           <GrClose size={30}/>
         </div>
         
         <nav onClick={()=> setMobileToggled(false)} className="flex flex-col justify-between items-center text-green-primary text-lg font-bold gap-6 border border-green-primary rounded-md p-6">
              <Link className=' hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/' >HOME</Link>
              <Link className='hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/about' >ABOUT US</Link>
              <Link className='hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/contact' >CONTACT US</Link>
              <Link className='hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/privacy' >PRIVACY POLICY</Link>
              <Link className='hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/dmca' >DMCA</Link>
              <Link className='hover:underline hover:underline-offset-4 hover:text-green-primary py-2 animate-[bounce_0.1s_ease-out_2]' href='/terms' >TERMS & CONDITIONS</Link>
          </nav>
      
    </div>
  )
}

export default MobileHeaderLinks
