
import {  Link, useRouteError } from 'react-router-dom';


const ErrorMessage = () => {
  const error = useRouteError();

  return (
    <div className='min-h-screen flex flex-col justify-center items-center space-y-8'>
      <h2 className='text-5xl'>Oops!!!</h2>
      <p className='text-xl'>Page {error.statusText || error.message}</p>
      <Link to='/'><button className='btn btn-success text-xl'>Home Page</button></Link>
    </div>
  );
};

export default ErrorMessage;
