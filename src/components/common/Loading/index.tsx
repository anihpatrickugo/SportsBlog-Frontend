import { FC } from "react"

interface Props {
    message: string
}

const LoadingComponent:FC<Props> = ({message}) => {
  return (
    <div className='flex justify-center items-center'>
      <h1 className='font-bold'>{message}</h1>
    </div>
  )
}

export default LoadingComponent
