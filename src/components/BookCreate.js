import React from 'react';
import { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookCreate = ({onCreate}) => {
  const [title,setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

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