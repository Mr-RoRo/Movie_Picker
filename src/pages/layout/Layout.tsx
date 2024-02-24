import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto pb-20 px-3 pt-5 sm:pt-20 sm:pb-0">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
