import React, {useEffect,useContext } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

const App = () => {
  
  const {fetchBooks} = useContext(BooksContext);

  ///////////// NEVER DO THIS //////////////////// 
  //fetchBooks(); // --> this calls the func again which inturn
                // set state whenstate changes the entire dom gets called again causing an infinite loop
  

  useEffect(()=> {
    fetchBooks();
  },[])

  
  return (
    <div className='app'>
      <h1>Books collection</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App;