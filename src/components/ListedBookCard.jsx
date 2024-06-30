import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { LuFileSpreadsheet } from 'react-icons/lu';
import Button from './Button';

const ListedBookCard = ({ book }) => {
  const {
    id,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    publisher,
    totalPages,
  } = book;

  return (
    <div className='rounded-xl bg-base-100 border-2 lg:p-[32px] py-4 flex items-center justify-between mx-2 lg:mx-0 font-work-sans shadow-lg'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
        {/* cover image */}
        <figure className='bg-gray-200 lg:w-56 w-3/4  rounded-md lg:px-14 lg:py-8'>
          <img src={image} className='lg:w-full rounded-xl' />
        </figure>
        {/* book info */}
        <div className='mx-2 px-2 lg:px-0'>
          <h2 className='font-semibold text-3xl font-playfair'>{bookName}</h2>
          <p className='text-[#424242] font-medium text-xl font- mt-3'>
            Author : {author}
          </p>
          {/* tags */}
          <div className='flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 mt-4'>
            <span className='flex items-center'>
              <span className='text-lg font-medium leading-[24px] mr-2'>
                Tag:
              </span>
              {tags.map((tag) => (
                <span
                  className='bg-[#99b2960c] px-2 py-1 text-primary rounded-lg'
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
            </span>
            <p className='flex items-center space-x-2'>
              <IoLocationOutline />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </p>
          </div>
          <div className='flex space-x-4 md:space-x-6 mt-4'>
            <p className='flex items-center space-x-2 max-w-60 md:max-w-4xl'>
              <GoPeople className='text-3xl md:text-xl' />
              <span>Publisher: {publisher}</span>
            </p>
            <p className='flex items-center space-x-2'>
              <LuFileSpreadsheet />
              <span>Page {totalPages}</span>
            </p>
          </div>
          <hr className='my-4' />
          <div className='flex gap-4 items-center '>
            <button className='lg:text-lg text-sm font-medium bg-[#e0eeff] text-[#328EFF] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200'>
              Category: {category}
            </button>
            <button className='lg:text-lg text-sm   font-medium bg-[#fff3e0] text-[#FFAC33] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200'>
              Rating: {rating}
            </button>
            <Link to={`/book/${id}`}>
              <Button label='View Details' type='primary'></Button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

ListedBookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBookCard;
