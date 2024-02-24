import { FiHome } from "react-icons/fi";
import { LuBadgeCheck } from "react-icons/lu";
import { MdOutlineMovie } from "react-icons/md";
import { LiaTvSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import useViewport from "../../hooks/useViewport";

const menuItems = [
  { id: 1, label: "Home", icon: <FiHome className="text-2xl" />, link: "/" },
  {
    id: 2,
    label: "Movies",
    icon: <MdOutlineMovie className="text-2xl" />,
    link: "/movies",
  },
  {
    id: 3,
    label: "TVshows",
    icon: <LiaTvSolid className="text-2xl" />,
    link: "/tvshows",
  },
  {
    id: 4,
    label: "Celebrities",
    icon: <LuBadgeCheck className="text-2xl" />,
    link: "/celebrities",
  },
];
const NavBar = () => {
  const location = useLocation();
  const { width } = useViewport();
  return (
    <>
      {width > 640 && (
        <div className="navbar container mx-auto bg-base-100 px-3 fixed left-0 right-0">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Movie Picker</h1>
          </div>
          <div className="flex-none">
            <ul className="flex gap-10 items-center">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link
                    to={menuItem.link}
                    className={`${
                      location.pathname === menuItem.link &&
                      "active text-primary font-bold"
                    } transition-colors`}
                  >
                    {menuItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {width <= 640 && (
        <div className="btm-nav">
          {menuItems.map((menuItem) => (
            <Link
              to={menuItem.link}
              className={`${
                location.pathname === menuItem.link && "active text-primary"
              } transition-colors`}
            >
              <button key={menuItem.id}>{menuItem.icon}</button>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
