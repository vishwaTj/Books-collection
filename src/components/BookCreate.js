import React from 'react';
import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';


const BookCreate = ({onCreate}) => {
  const [title,setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }
  return (
    <div className='book-create'>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className='input' value={title} type="text" onChange={handleChange}></input>
            <button className='button'>Create</button>
        </form>
    </div>
  )
}

export default BookCreate;