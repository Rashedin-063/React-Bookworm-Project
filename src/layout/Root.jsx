import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <div className='relative max-w-7xl space-y-4 lg:space-y-8 lg:px-8 md:px-6 sm:px-4 mx-auto pl-3'>
        <div className='h-16'>
          <Nav></Nav>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer/>
    </>
  );
};

export default Root;