import {FC} from 'react'
import Link from 'next/link'

interface ButtonProps {
    text : string,
    href: string,
    onClick? : ()=> void 
}

const Button:FC<ButtonProps> = ({text, href, onClick}):JSX.Element => {
  return (
    <Link href={href} className='bg-green-primary md:bg-white text-xs text-white md:text-darkBlue-primary px-2 md:px-6 py-2 rounded-full font-bold hover:opacity-50 hover:underline' onClick={onClick}>
       {text}
    </Link>
  )
}

export default Button
