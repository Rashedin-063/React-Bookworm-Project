import { useEffect, useState } from "react";
import Button from "./Button";
import Book from "./Book";


const BooksSection = () => {

  const [books, setBooks] = useState([]);
  const [dataLength, setDataLength] = useState(8);

  const handleSeeMore = () => {
  setDataLength(21)
}

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('./bookData.json');
      const data = await res.json();
     setBooks(data)
      
    };
    fetchDetails()
  },[])

 return (
   <div className='lg:mb-20 lg:mt-24 mt-12 mb-4 space-y-8'>
     <h2 className='lg:mt-24 mt-6 text-3xl lg:text-4xl font-bold text-center mb-2 lg:mb-9'>
       Book List
     </h2>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-4 lg:gap-6 xl:gap-8 mx-auto lg:mx-0 '>
       {books.slice(0, dataLength).map((book) => (
         <Book key={book.id} book={book}></Book>
       ))}
     </div>
     <div className={dataLength === books.length ? 'hidden' : 'text-center'}>
       <a onClick={handleSeeMore}>
         <Button label='See More Books' type='primary'></Button>
       </a>
     </div>
   </div>
 );
};

export default BooksSection;