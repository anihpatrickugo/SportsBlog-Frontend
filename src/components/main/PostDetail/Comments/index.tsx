import CommentForm from './CommentForm'
import Comment from './Comment'

const Comments = () => {
  return (
    <div className="max-w-xl flex flex-col">
          <h1 className="text-2xl font-bold my-4">Comments</h1>

         {/* form */}
         <CommentForm/>
        

         {/* comments list*/}
         <div className="w-full py-4">
             <Comment/>
             <Comment/>
             <Comment/>
         </div>

       </div>
  )
}

export default Comments
