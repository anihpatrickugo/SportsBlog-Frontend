import Image from 'next/image'
import searchIcon from '../../../app/assets/icons/Search-Icon.svg'
import Button from '../../common/Button'

const HeaderRightButtons = () => {
  return (
    <div className='w-1/3 md:w-1/5 flex justify-end items-center'>
        <button className='hidden md:flex w-2/12'>
          <Image className='w-1/2' src={searchIcon} alt='logo' width={500} height={500}/>
        </button>

         {/* sign in */}
        <Button href='/auth/login' text='SIGN IN'/>
                 
    </div>
  )
}

export default HeaderRightButtons
