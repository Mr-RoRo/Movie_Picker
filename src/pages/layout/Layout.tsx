import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-3 pt-5 sm:pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
