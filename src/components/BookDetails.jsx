import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from './Button';
import { saveReadBook, saveWishlist } from '../utilities';


const BookDetails = () => {
  const books = useLoaderData();

  const { bookId } = useParams();

  const idInt = parseInt(bookId);

  const book = books.find((book) => book.id === idInt);

  const handleReadNow = (id) => {
    saveReadBook(id);
  };

  const handleWishlist = (id) => {
    saveWishlist(id);
  };

  const {
    id,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className='flex flex-col lg:flex-row lg:items-start gap-12 mt-8 lg:mt-16 mb-4 lg:mb-12 mx-2 lg:mx-0 font-work-sans'>
      {/* cover image */}
      <div className='w-90 h-96 md:h-[600px] md:w-[500px] mx-auto lg:min-w-[400px] lg:max-w-[800px] lg:h-[580px] p-8 bg-gray-200 rounded-lg shadow-xl'>
        <img
          className='rounded-3xl w-full h-full'
          src={image}
          alt={`The cover image of ${bookName}`}
        />
      </div>
      {/* book info */}
      <div className='mx-4 lg:mx-0 lg:h-[80vh] flex flex-col justify-center relative lg:static'>
        <h2 className='font-bold text-4xl mb-4 font-playfair'>{bookName}</h2>

        <div>
          Author:{' '}
          <span className='text-[#424242] text-xl font-medium mt-3'>
            {author}
          </span>
        </div>
        <div>
          <hr className='my-3' />
          Category:{' '}
          <span className='text-[#424242] text-xl font-medium'>
            {category}
          </span>{' '}
        </div>

        <hr className='my-3' />
        <div className='text-[#424242] leading-[24px]'>
          <span className='text-black font-bold'>Review : </span>
          {review}
        </div>
        <div className='space-x-4 mt-4'>
          <span className='font-bold leading-[24px]'>Tag:</span>
          {tags.map((tag) => (
            <span
              className='bg-[#99b2960c] px-2 py-1 text-primary rounded-lg'
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
        <hr className='my-4' />
        <div className='flex lg:gap-16 gap-4 leading-[38px]'>
          <div className='text-[#424242]'>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className='font-semibold'>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        {/* button */}
        <div className='space-x-2 md:space-x-4 mt-4 md:mt-7 flex justify-center lg:justify-start absolute lg:static top-24 right-0 md:top-8 md:right-5'>
          <Link onClick={() => handleReadNow(id)}>
            <Button label='Read Now' type='primary'></Button>
          </Link>
          <Link onClick={() => handleWishlist(id)}>
            <Button label='Wishlist' type='secondary'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
