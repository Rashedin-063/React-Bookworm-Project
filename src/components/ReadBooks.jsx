import { useContext } from "react";
import {BookContext } from '../pages/ListedBooks.jsx'
import ListedBookCard from "./ListedBookCard.jsx";

const ReadBooks = () => {
  const books = useContext(BookContext)
  
  return (
   <div className='mt-8 space-y-6'>
      {books.map((book) => <ListedBookCard
        key={book.id}
        book={book}
      ></ListedBookCard>
     )}
   </div>
 )
};

export default ReadBooks;
