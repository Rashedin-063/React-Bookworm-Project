import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineStarHalf } from 'react-icons/md';
import { BiSolidCategory } from 'react-icons/bi';

const Book = ({ book }) => {
  const { id, image, tags, bookName, author, category, rating } = book;
 return (
   <Link
     to={`/book/${id}`}
     className='transition duration-150 ease-in hover:scale-[1.02] border-2 hover:border-[#078100] mx-auto p-2 pt-4 flex flex-col justify-center items-center rounded-lg shadow-lg w-96 md:w-[300px] gap-4'
   >
     <figure className='px-10 py-5 banner-bg rounded'>
       <img src={image} className='w-[130px] h-[120px] rounded-xl' />
     </figure>
     <div className='px-1 py-1 items-left text-left'>
       <p className='space-x-4 mt-2 text-center'>
         {tags.map((tag) => (
           <span
             className='bg-[#99b2960c] px-2 py-1 text-primary rounded-lg'
             key={tag}
           >
             #{tag}
           </span>
         ))}
       </p>
       <h2 className='mt-2 text-2xl font-bold max-w-xs text-center'>
         {bookName}
       </h2>
       <p className='mt-1 font-medium text-center'>Author : {author}</p>
       <hr className='border-dashed my-2' />
       <div className='flex items-center justify-between px-5'>
         <div className='flex items-center gap-1'>
           <BiSolidCategory />
           <p>{category}</p>
         </div>

         <div className='flex items-center gap-1'>
           <MdOutlineStarHalf />
           <p>{rating}</p>
         </div>
       </div>
     </div>
   </Link>
 );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;