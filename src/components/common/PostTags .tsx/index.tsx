
import PostTag from './PostTag'

const PostTags  = async ({tags}: {tags:string[]}) => {

  return (

     <div className="w-full flex flex-wrap items-center gap-1 my-2">
      {tags.map( (tag : string, index: number) => <PostTag key={index}  tag={tag}/>)}
      </div>

  )
}

export default PostTags ;
