import { Link } from 'react-router-dom';
import Book from '../assets/banner.png'

const Banner = ( ) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-40 py-4 lg:px-[90px] lg:py-[80px] lg:space-x-20 bg-[#8ca49f] rounded-3xl mx-2 lg:mx-0 h-[600px] font-playfair'>
      <div className='pb-8'>
        <h1 className='lg:text-6xl text-center lg:text-left text-4xl font-bold leading-tight lg:leading-normal lg:mt-8 lg:w-[450px]'>
          <span className='flex gap-2 lg:flex-col lg:gap-0'>
            <p>Books to</p>
            <p>freshen up your</p>
          </span>{' '}
          <p>Mind & Soul</p>
        </h1>
        <div className='flex justify-center lg:justify-start '>
          <Link to='/listed'>
            <button className='text-xl font-bold bg-[#0ba803] px-3 py-2 rounded-md text-white hover:bg-[#59C6D2] mt-6 lg:mt-12 md:mb-4 lg:mb-0'>
              View The List
            </button>
          </Link>
        </div>
      </div>
      <div className='w-[320px] lg:w-full'>
        <img src={Book} alt='' />
      </div>
    </div>
  );
};

export default Banner;
