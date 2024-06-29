import { Link } from 'react-router-dom';
import Book from '../assets/banner.png'
import Button from './Button';

const Banner = ( ) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:pl-28 xl:pl-48 banner-bg rounded-3xl mx-2 lg:mx-0 h-[600px] font-playfair'>
      <div className='pb-10'>
        <h1 className='lg:text-6xl text-center lg:text-left text-4xl font-bold leading-tight lg:leading-[1.30] lg:mt-8 lg:w-[450px]'>
          <span className='flex md:gap-2 flex-col md:flex-row lg:flex-col lg:gap-0'>
            <p>Books to</p>
            <p>freshen up your</p>
          </span>{' '}
          <p>Mind & Soul</p>
        </h1>
        <div className='flex justify-center lg:justify-start mt-4 lg:mt-10'>
          <Link to='/listed'>
           <Button type='primary' label='View The List'></Button>
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
