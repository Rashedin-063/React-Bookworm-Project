import { Link, useLoaderData, useParams } from "react-router-dom";
import Button from "./Button";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams(); 
  const idInt = parseInt(bookId);
  console.log(idInt, typeof idInt)
  
  const book = books.find(book => book.id === idInt);
  
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
    <div className='flex flex-col lg:flex-row lg:items-start gap-12 mt-4 mb-4 lg:mb-12 mx-2 lg:mx-0'>
      <div className='h-[500px] lg:w-[800px] lg:h-[580px] p-16 bg-gray-200 rounded-lg shadow-xl'>
        <img
          className='rounded-3xl w-full h-full'
          src={image}
          alt={`The cover image of ${bookName}`}
        />
      </div>
      <div className='mx-4 lg:mx-0 lg:h-[80vh] flex flex-col justify-center relative lg:static'>
        <h2 className='font-bold text-4xl mb-2'>{bookName}</h2>

        <p>
          Author:{' '}
          <span className='text-[#424242] text-xl font-medium mt-3'>
            {author}
          </span>
        </p>
        <p>
          <hr className='my-3' />
          Category:{' '}
          <span className='text-[#424242] text-xl font-medium'>
            {category}
          </span>{' '}
        </p>

        <hr className='my-3' />
        <p className='text-[#424242] leading-[24px]'>
          <span className='text-black font-bold'>Review : </span>
          {review}
        </p>
        <p className='space-x-4 mt-4'>
          <span className='font-bold leading-[26px]'>Tag:</span>
          {tags.map((tag) => (
            <span
              className='bg-[#99b2960c] px-2 py-1 text-primary rounded-lg'
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </p>
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
        <div className='space-x-4 mt-7 flex justify-center lg:justify-start absolute lg:static top-6 right-6'>
          <Link>
            <Button label='Read Now' type='primary'></Button>
          </Link>
          <Link>
            <Button label='Wishlist' type='secondary'></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;