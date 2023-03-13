import React, { useState } from 'react'
import BookCreate from './components/BookCreate';

const App = () => {
  const [books,setBooks] = useState([]);
  
  const createBook = (title) => {
    //BAD CODE!
    // books.push({id:123, title:title});

    // this creates a new array so components get's rerendered in react
    const updateBooks = [
        ...books,
        {id:123,title:title}
    ]
    setBooks(updateBooks);
  }
  return (
    <div>
        <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;