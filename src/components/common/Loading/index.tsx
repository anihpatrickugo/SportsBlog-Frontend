
import { Puff } from 'react-loading-icons'


const LoadingComponent = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-grey-ultraLight'>
    <Puff height={500} stroke="green" strokeOpacity={.125} speed={.75}/>
  </div>
  )
}

export default LoadingComponent
