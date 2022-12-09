import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../styles/components/Menu.scss";

const Menu = ({ toggleOppen }) => {
  return (
    <motion.main
      className="menu"
      exit={{
        y: -500,
        transition: { duration: 0.5 },
      }}
      animate={{
        y: [-200, 40, 0],
        transition: {
          type: "spring",
          staggerChildren: 0.1,
          delayChildren: 0.8,
        },
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <nav className="menu__wrapper">
        <ul className="menu__options">
          <li className="menu__options__item">
            <Link className="link" to="/" onClick={toggleOppen}>
              Home
            </Link>
          </li>
          <li className="menu__options__item">
            <Link className="link" to="/about" onClick={toggleOppen}>
              About me
            </Link>
          </li>
          <li className="menu__options__item">
            <Link className="link" to="/education" onClick={toggleOppen}>
              Education
            </Link>
          </li>
          <li className="menu__options__item">
            <Link className="link" to="/projects" onClick={toggleOppen}>
              Projects
            </Link>
          </li>
          <li className="menu__options__item">
            <Link className="link" to="/contact" onClick={toggleOppen}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.main>
  );
};
export default Menu;
