import React, { useState } from 'react';

const BookEdit = ({book, handleSubmit}) => {
  const [title,setTitle] = useState(book.title);
  
  const handleChange = (event) => {
    setTitle(event.target.value);    
  }

  // const handleSubmit = (event) => {
  //    event.preventDefault();
  
  //   console.log('New title',title);

  //   onEdit(book.id,title);

  //   EditStatus(false);
  // }

  const handleEdit = (event)=> {
    event.preventDefault();

    handleSubmit(book.id, title);
  }

  return (
    <form onSubmit={handleEdit} className='input'>
      <label>Title</label>
      <input value={title} className='input' onChange={handleChange}/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  );
  
}

export default BookEdit;