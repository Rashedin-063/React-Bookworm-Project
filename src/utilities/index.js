// import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

// get items from LS
 const getReadBooks = () => {
  const storedReadBooks = localStorage.getItem('readBooks');
  return storedReadBooks ? JSON.parse(storedReadBooks) : []
};

const getWishList = () => {
  const storedWishList = localStorage.getItem('wishBooks');
  return storedWishList ? JSON.parse(storedWishList) : []
};

// save items to LS
const saveReadBook = (id) => {
  const bookIds = getReadBooks();
  const isExist = bookIds.find(bookId => bookId === id)
  if (isExist) {
   Swal.fire({
      title: 'Did you forget?',
      text: 'You already read this book',
      icon: 'question',
   });
    return;
  }

  bookIds.push(id);
  localStorage.setItem('readBooks', JSON.stringify(bookIds))

 Swal.fire({
   title: 'Well done!',
   text: 'You have read this book',
   icon: 'success',
 });
};

const saveWishlist = (id) => {
  const wishIds = getWishList();
  const isExist = wishIds.find(wishId => wishId === id)
  if (isExist) {
    Swal.fire({
      title: 'Did you forget?',
      text: 'You already read this book',
      icon: 'question',
    });
    return;
  }

  const bookIds = getReadBooks();
  const isExist2 = bookIds.find(bookId => bookId === id);
    if (isExist2) {
      Swal.fire({
        title: 'Did you forget?',
        text: 'You already read this book',
        icon: 'question',
      });
      return;
    }

  wishIds.push(id);
  localStorage.setItem('wishBooks', JSON.stringify(wishIds))

 Swal.fire({
   title: 'Very Good!',
   text: 'Your wish may come true',
   icon: 'success',
 });
};


export {getReadBooks, getWishList, saveReadBook, saveWishlist}

