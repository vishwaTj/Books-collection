import React from 'react'

const Bookshow = ({book}) => {
  return (
    <div className='book-show'>
      {book.title}
    </div>
  )
}

export default Bookshow;