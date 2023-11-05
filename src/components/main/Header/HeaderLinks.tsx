import Link from 'next/link'

const HeaderLinks = () => {
  return (
          <nav className="hidden md:flex flex-1 justify-between items-center ">
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/' >HOME</Link>
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/about' >ABOUT US</Link>
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/contact' >CONTACT US</Link>
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/privacy' >PRIVACY POLICY</Link>
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/dmca' >DMCA</Link>
              <Link className='text-white text-sm hover:underline hover:underline-offset-4 hover:text-green-primary py-2' href='/terms' >TERMS & CONDITIONS</Link>
           </nav>
  )
}

export default HeaderLinks
