import React from 'react'

const CommentForm = () => {
  return (
    <form action="" className="w-full border-b-4 border-b-grey-light pb-4">
            <textarea id="comment" name="comment" rows={4} cols={60} className='w-full border-2 border-grey-light rounded-md p-4 '>
                       Write a comment...
            </textarea>
            <button className="px-8 py-2 text-grey-strong border-2 border-grey-light rounded-full my-4 hover:bg-green-primary hover:text-white">submit</button>
            <br/>
    </form>
  )
}

export default CommentForm
