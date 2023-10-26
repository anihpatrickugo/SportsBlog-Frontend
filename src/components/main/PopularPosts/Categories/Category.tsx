import React, {FC} from 'react'

interface Props {
    id: number,
    name: string
}

const Category: FC<Props> = ({name}) => {
  return (
    <span className="rounded-full px-3 py-1 bg-grey-light text-[8px] border border-grey-strong">
                {name}
    </span>
  )
}

export default Category
