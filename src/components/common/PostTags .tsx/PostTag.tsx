import React, {FC} from 'react'



const PostTag  = ({tag}: {tag: string}) => {
  return (
    <span className="rounded-full px-3 py-1 bg-grey-light text-[8px] border border-grey-strong hover:bg-green-primary hover:font-bold hover:text-grey-light">
                {tag}
    </span>
  )
}

export default PostTag 
