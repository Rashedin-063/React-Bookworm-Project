import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div className="max-w-7xl space-y-16 lg:px-8 md:px-6 sm:px-4 mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;