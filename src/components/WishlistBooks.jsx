import { useContext } from "react";
import { WishContext } from "../pages/ListedBooks";
import ListedBookCard from "./ListedBookCard";


const WishlistBooks = () => {
  const books = useContext(WishContext)

  return (
      <div className='mt-8 space-y-6'>
      {books.map((book) => <ListedBookCard
        key={book.id}
        book={book}
      ></ListedBookCard>
     )}
    </div>
  );
};

export default WishlistBooks;