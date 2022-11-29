import { motion } from "framer-motion";

import "../../styles/components/Menu.scss";

const Menu = () => {
  return (
    <motion.main
      className="menu"
      whileTap={{}}
      initial="hidden"
      variants={{
        open: {
          y: [-200, 40, 0],
          transition: {
            type: "spring",
            staggerChildren: 0.1,
            delayChildren: 0.8,
            duration: 1,
          },
        },
        closed: {
          y: [-10, 0],
        },
      }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <nav className="menu__wrapper">
        <ul className="menu__options">
          <li className="menu__options__item">About me</li>
          <li className="menu__options__item">Education</li>
          <li className="menu__options__item">Projects</li>
          <li className="menu__options__item">Contact</li>
        </ul>
      </nav>
    </motion.main>
  );
};
export default Menu;
