import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const App = () => {
  const [books,setBooks] = useState([]);
  
  const EditBookbyId = (id, newTitle) => {
       const updateBooks = books.map((book)=> {
          if(book.id === id){
            return book = {...book,title:newTitle}
          }

          return book;  
          });
      setBooks(updateBooks);    
  }

  const deleteBookById = (id) =>{
     const updatedBooks = books.filter((book) => {
       return book.id!==id;
     })
     setBooks(updatedBooks);
  }

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
      <BookList books ={books} onDelete={deleteBookById}  onEdit={EditBookbyId}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;