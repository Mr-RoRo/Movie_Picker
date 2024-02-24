import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <FaGithub className="size-7" />
        </a>
        <a>
          <FaTelegramPlane className="size-7" />
        </a>
        <a>
          <AiFillInstagram className="size-7" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
