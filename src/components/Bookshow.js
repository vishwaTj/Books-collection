import React,{useState, useContext} from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

const Bookshow = ({book}) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById }  = useContext(BooksContext);

  const handleDeleteClick = ()=>{
    deleteBookById(book.id);
  }

  const handleEditClick = () =>{
     setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>
  if(showEdit){
    content =<BookEdit book={book} handleSubmit={handleSubmit}/>;
  }

  // onEdit={onEdit} EditStatus={setShowEdit}

  return (
    <div className='book-show'>
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/300/200`} // setting a random value to assign it to random id
      />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Bookshow;