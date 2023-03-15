import React from 'react';
import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './Bookshow';

const BookList = ({books, onDelete, onEdit}) => {
  const {count, incrementCount} = useContext(BooksContext);

  const renderedBooks = books.map((book) =>{
    return <BookShow onDelete={onDelete} key={book.id}  book={book} onEdit={onEdit} />;
  })
  return (
    <div className='book-list'>
      {count}
       <button onClick={incrementCount} >click </button>
      {renderedBooks}
    </div>
  )
}

export default BookList;