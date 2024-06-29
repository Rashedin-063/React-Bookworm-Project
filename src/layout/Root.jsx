import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div className='relative max-w-7xl space-y-4 lg:space-y-8 lg:px-8 md:px-6 sm:px-4 mx-auto'>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;