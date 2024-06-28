import { Link } from 'react-router-dom';
import Book from '../assets/banner.png'

const Banner = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-4 lg:px-[90px] lg:py-[80px] space-x-9 lg:mt-8 mt-4 bg-[#d3d0d0] rounded-3xl mx-2 lg:mx-0'>
      <div>
        <h1 className='lg:text-[56px] text-center lg:text-left text-3xl font-bold lg:leading-[84px]'>
          Books to freshen up your bookshelf
        </h1>
        <div className='flex justify-center lg:justify-start '>
          <Link to='/listed'>
            <button className='text-xl lg:mt-12 mt-6 font-bold bg-[#0ba803] px-3 py-2 rounded-md text-white hover:bg-[#59C6D2]'>
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
