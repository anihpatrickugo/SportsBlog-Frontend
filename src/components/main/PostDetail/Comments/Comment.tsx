import Image from 'next/image'
import commentUser from '../../../../app/assets/images/comment.png'

const Comment = () => {
  return (
 <div className="w-full flex justify-between gap-2 my-4 border-b-4 border-b-grey-light">
    {/* image photo */}
    <div className="w-2/12 rounded-full">
        <Image className='w-4/5' alt="comment user" src={commentUser} height={500} width={500}/>
    </div>
 
    {/* comment */}
    <div className="w-10/12 flex flex-col">
       <h2 className="font-bold text-grey-stronger">Diana Campos</h2>
       <p className="text-grey-light text-sm">Te aliquam noluisse epicuri detracto indoctum, et fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio erroribus eam, ei mea modus volumus abhorreant.</p>

        {/* date and reply */}
       <div className="w-full flex justify-between items-center my-6">
           <span className='text-[10px] md:text-xs  text-grey-stronger'>18 august 2019   4:32 am</span>
           <span className="font-bold text-sm hover:text-green-primary hover:cursor-pointer" >Reply</span>
       </div>
    </div>
    
 </div>
  )
}

export default Comment
