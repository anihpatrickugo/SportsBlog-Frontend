import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
    <div className="w-full flex flex-wrap items-center gap-1 my-2">
              <Category id={1} name='Playoffs'/>
              <Category id={2} name='NBA Season'/>
              <Category id={3} name='Boston Celtics'/>
        </div>
  )
}

export default Categories
