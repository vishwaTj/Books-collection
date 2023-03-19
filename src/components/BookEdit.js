import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookEdit = ({book, handleSubmit}) => {
  const [title,setTitle] = useState(book.title);
  const { EditBookbyId }  = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);    
  }

  const handleEdit = (event)=> {
    event.preventDefault();
    
    // onSubmit();
    EditBookbyId(book.id, title);
    handleSubmit();
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