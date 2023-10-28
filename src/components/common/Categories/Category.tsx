import React, {FC} from 'react'

interface Props {
    id: number,
    name: string
}

const Category: FC<Props> = ({name}) => {
  return (
    <span className="rounded-full px-3 py-1 bg-grey-light text-[8px] border border-grey-strong hover:bg-green-primary hover:font-bold hover:text-grey-light">
                {name}
    </span>
  )
}

export default Category
