import {createContext,useState} from 'react';
import axios from 'axios';
const BooksContext = createContext();

function Provider({ children }) {

    const [books,setBooks] = useState([]);
  
  const fetchBooks = async () => {
     const response = await axios.get('http://localhost:3001/books');
     
     setBooks(response.data);
  };

  const EditBookbyId = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
     title:newTitle
    })


    console.log(response);

      const updateBooks = books.map((book)=> {
         if(book.id === id){
           return book = { ...book, ...response.data };
         }

         return book;  
         });

     setBooks(updateBooks);    
 }

 const deleteBookById = async (id) =>{
    await axios.delete(`http://localhost:3001/books/${id}`);
   
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

 const valueToShare = {
    books,
    deleteBookById,
    EditBookbyId,
    deleteBookById,
    createBook,
    fetchBooks
 }

    return( 
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );    
   
}

export { Provider };
export default BooksContext;
