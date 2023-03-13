import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books,setBooks] = useState([]);
  
  const createBook = (title) => {
    //BAD CODE!
    // books.push({id:123, title:title});

    // this creates a new array so components get's rerendered in react
    const updateBooks = [
        ...books,
        {
          id:Math.round(Math.random() * 999),
          title}
    ]
    setBooks(updateBooks);
  }
  return (
    <div className='app'>
      <BookList books ={books} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;