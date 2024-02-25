import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto pb-10 px-3 pt-5 sm:pt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
