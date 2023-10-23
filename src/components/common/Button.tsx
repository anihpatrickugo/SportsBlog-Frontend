import {FC} from 'react'
import { text } from 'stream/consumers'

interface ButtonProps {
    text : string,
    onClick? : ()=> void 
}

const Button:FC<ButtonProps> = ({text, onClick}):JSX.Element => {
  return (
    <button className='bg-green-primary md:bg-white text-xs text-white md:text-darkBlue-primary px-2 md:px-6 py-2 rounded-full font-bold hover:opacity-50 hover:underline' onClick={onClick}>
       {text}
    </button>
  )
}

export default Button
