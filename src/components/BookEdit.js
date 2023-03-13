import React, { useState } from 'react';

const BookEdit = ({book, onEdit, EditStatus}) => {
  const [title,setTitle] = useState(book.title);
  
  const handleChange = (event) => {
    setTitle(event.target.value);    
  }

  const handleSubmit = (event) => {
     event.preventDefault();
  
    console.log('New title',title);
    onEdit(book.id,title);

    EditStatus(false);
  }

  return (
    <form onSubmit={handleSubmit} className='input'>
      <label>Title</label>
      <input value={title} className='input' onChange={handleChange}/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  );
  
}

export default BookEdit;