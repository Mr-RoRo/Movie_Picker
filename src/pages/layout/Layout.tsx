import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <div className="container mx-auto pb-10 px-3 sm:pt-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
