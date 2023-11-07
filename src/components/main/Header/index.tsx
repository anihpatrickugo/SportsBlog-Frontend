import {FC} from 'react'
import type {Dispatch, SetStateAction} from 'react'
import Image from 'next/image'

import logo from '../../../app/assets/images/logo.png'
import hamburger from '../../../app/assets/icons/hamburger.svg'

import HeaderLinks from './HeaderLinks'
import HeaderRightButtons from './HeaderRightButtons'
import MobileHeaderLinks from './MobileHeaderLinks'


interface Props {
  mobileMenu: {
    mobileToggled: boolean, 
    setMobileToggled: Dispatch<SetStateAction<boolean>>
  }
}

const Header:FC<Props> = ({mobileMenu}) => {
     const {mobileToggled, setMobileToggled} = mobileMenu

  return (
    <header className=" md:static w-screen bg-darkBlue-primary p-4">
        <div className='max-w-6xl mx-auto flex justify-between items-center'>

          <div className='w-4/5 flex flex-row-reverse md:flex-row justify-between items-center '>
               {/* logo */}
              <div className="w-3/5 md:w-4/12">
                <Image className='w-8/12 md:w-1/2' src={logo} alt='logo' width={500} height={500}/>
               </div>

              {/* navlinks and login button */}
             <HeaderLinks/> 

             {/* mobile hamburger */}
             <div className="w-1/12 md:hidden" onClick={()=> setMobileToggled(true)}>
                <Image className='w-full' src={hamburger} alt='hamburger' width={500} height={500}/>
              </div>

            

          </div>
          
          {/* buttons*/}
          <HeaderRightButtons/>
            
        </div>

        {/* mobile menu  list*/}
        {mobileToggled && <MobileHeaderLinks setMobileToggled={setMobileToggled}/>}
        
      </header>
  )
}

export default Header
