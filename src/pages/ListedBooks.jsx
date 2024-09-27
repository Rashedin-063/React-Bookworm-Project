import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getReadBooks, getWishList } from '../utilities';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { createContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const BookContext = createContext('');
export const WishContext = createContext('');

const ListedBooks = () => {
  const books = useLoaderData();
  const [tabIndex, setTabIndex] = useState(0);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [ displayWishlist, setDisplayWishlist] = useState([])

  //get books from LS
  const readBookIds = getReadBooks();
  const wishlistBookIds = getWishList();

  // filter from the loader data
  const readBooks = books.filter((book) => readBookIds.includes(book.id));
  const wishlistBooks = books.filter((book) =>
    wishlistBookIds.includes(book.id)
  );
 
  useEffect(() => {
    setDisplayBooks(readBooks);
    setDisplayWishlist(wishlistBooks);
  },[])

  // handle filter
  const handleFilter = (filter) => {
    if (filter === 'rating') {
    const  ratingSortBooks = readBooks.sort((a, b) => {
        return b.rating - a.rating;
      }) 
      setDisplayBooks(ratingSortBooks)
    const  ratingSortWishlist = wishlistBooks.sort((a, b) => {
        return b.rating - a.rating;
      }) 
      setDisplayWishlist(ratingSortWishlist)
    
  }
     else if (filter === 'pages') {
    const  pagesSortBooks = readBooks.sort((a, b) => {
        return b.totalPages - a.totalPages;
      }) 
      setDisplayBooks(pagesSortBooks)
    const  pagesSortWishlist = wishlistBooks.sort((a, b) => {
        return b.totalPages - a.totalPages;
      }) 
      setDisplayWishlist(pagesSortWishlist)
    
  }
     else if (filter === 'year') {
    const  yearSortBooks = readBooks.sort((a, b) => {
        return b.yearOfPublishing - a.yearOfPublishing;
      }) 
      setDisplayBooks(yearSortBooks)
    const  yearSortWishlist = wishlistBooks.sort((a, b) => {
        return b.yearOfPublishing - a.yearOfPublishing;
      }) 
      setDisplayWishlist(yearSortWishlist)
    
  }
  
}
  

  return (
    <div className='mx-4 lg:mx-0'>
      <Helmet>
        <title>
          BookWorm | Books
        </title>
      </Helmet>
      <h2 className='text-[28px] font-bold text-center banner-bg rounded-xl py-6 mt-8 lg:mt-16 mx-2 lg:mx-0'>
        Read & Wishlist Books
      </h2>
      {/* filter */}
      <div className='flex justify-center lg:mt-8 mt-4 mx-2 lg:mx-0'>
        <details className='dropdown'>
          <summary className='m-1 text-lg font-semibold text-white btn primary-bg hover:bg-primary hover:text-black pr-6 pl-8 lg:-mt-4'>
            Sort By <RiArrowDropDownLine />
          </summary>
          <ul className='p-2 shadow menu dropdown-content z-[1] bg-slate-500 rounded-box  ml-24 font-semibold py-5 w-40 space-y-2'>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-200'
                }
                onClick={() => handleFilter('rating')}
              >
                Rating
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? 'bg-blue-500 hover:bg-blue-600' : ''
                }
                onClick={() => handleFilter('pages')}
              >
                Number of pages
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) =>
                  isActive ? 'bg-blue-500 hover:bg-blue-600' : ''
                }
                onClick={() => handleFilter('year')}
              >
                Publisher year
              </NavLink>
            </li>
          </ul>
        </details>
      </div>
      {/* tab */}
      <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap mt-6 lg:mt-[56px]'>
        <Link
          to={''}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 pl-4 pr-8 pt-4 pb-3 space-x-2 rounded-t-lg border-gray-600 text-green-600 relative ${
            tabIndex === 0 ? 'border border-b-0' : 'border-b'
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
          </svg>
          <span>Read Books</span>
          <span className='absolute h-7 w-7 rounded-full bg-gray-100 -right-0 top-0 text-blue-500 flex justify-center items-center border-2 border-green-600'>
            {readBooks.length}
          </span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 pl-4 pr-8 pt-5 pb-3 space-x-2 rounded-t-lg border-gray-600 text-green-600 relative  ${
            tabIndex === 1 ? 'border border-b-0' : 'border-b'
          }`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-4 h-4'
          >
            <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
            <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
          </svg>
          <span>Wishlist Books</span>
          <span className='absolute h-7 w-7 rounded-full bg-gray-100 right-0 top-0 text-blue-500 flex justify-center items-center border-2 border-green-600'>
            {wishlistBooks.length}
          </span>
        </Link>
      </div>
      <BookContext.Provider value={displayBooks}>
        <WishContext.Provider value={displayWishlist}>
          <Outlet></Outlet>
        </WishContext.Provider>
      </BookContext.Provider>
    </div>
  );
};

export default ListedBooks;
