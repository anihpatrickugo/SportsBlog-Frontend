import {FC} from 'react'
import Link from 'next/link'

interface NavLinkProps {
  name: string,
  url: string
}

const Button:FC<NavLinkProps> = ({name, url}):JSX.Element => {
  return (
    <Link className='text-white hover:underline hover:underline-offset-4' href={url} >{name}</Link>
  )
}

export default Button
