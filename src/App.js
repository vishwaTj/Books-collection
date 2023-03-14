import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
  const [books,setBooks] = useState([]);
  
  const fetchBooks = async () => {
     const response = await axios.get('http://localhost:3001/books');
     
     setBooks(response.data);
  }

  ///////////// NEVER DO THIS //////////////////// 
  //fetchBooks(); // --> this calls the func again which inturn
                // set state whenstate changes the entire dom gets called again causing an infinite loop
  
  const EditBookbyId = (id, newTitle) => {
       const updateBooks = books.map((book)=> {
          if(book.id === id){
            return book = {...book, title:newTitle}
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

  const createBook = async (title) => {
    //BAD CODE!
    // books.push({id:123, title:title});

    // this creates a new array so components get's rerendered in react
    // const updateBooks = [
    //     ...books,
    //     {
    //       id:Math.round(Math.random() * 999),
    //       title}
    // ]

    // adding a book by sending a request to api
    const response = await axios.post('http://localhost:3001/books', {
      title
    })
    
    const updateBooks = [
           ...books,
           response.data
          ];
    setBooks(updateBooks);
  }
  return (
    <div className='app'>
      <h1>Books collection</h1>
      <BookList books ={books} onDelete={deleteBookById}  onEdit={EditBookbyId}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App;