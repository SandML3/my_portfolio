import { motion } from "framer-motion";

import "../../styles/components/Header.scss";

const Header = ({ toggle }) => {
  const Path = (props) => (
    <motion.path
      fill="trasparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 13%)"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <header className="header">
      <svg
        onClick={toggle}
        width="40"
        height="40"
        viewBox="0 0 20 20"
        className="header__menu-icon"
      >
        <Path
          d="M 4 8 L 8 4"
          variants={{
            closed: { opacity: 1 },
            open: { x: 100, y: -100 },
          }}
          transition={{ duration: 1.3 }}
        />
        <Path
          d="M 4 15 L 15 4"
          variants={{
            closed: { opacity: 1 },
            open: { x: 100, y: -100 },
          }}
          transition={{ duration: 0.5 }}
        />
        <Path
          d="M 11.5 15 L 15 11.5"
          variants={{
            closed: { opacity: 1 },
            open: { x: 100, y: -100 },
          }}
          transition={{ duration: 2 }}
        />
      </svg>
    </header>
    // <header className="header">
    //   <div className="header__icon__container">
    //     <div className="header__icon">
    //       <motion.div
    //         className="header__icon__bar--top icon__bar"
    //         initial={{ rotate: "40deg" }}
    //         whileTap={variants.closed}
    //         transition={{ duration: 1 }}
    //       />
    //       <motion.div className="header__icon__bar--middle icon__bar" />
    //       <motion.div className="header__icon__bar--bottom icon__bar" />
    //     </div>
    //   </div>
    // </header>
  );
};
export default Header;
