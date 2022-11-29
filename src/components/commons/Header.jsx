import { motion } from "framer-motion";
//import { Link } from "react-router-dom";

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
            closed: { x: [0, 100, 0], y: [0, -100, 0], d: "M 4 8 L 8 4" },
            open: {
              x: [0, 100, 0],
              y: [0, -100, 0],
              d: "M 4 4 L 13 13",
            },
          }}
          transition={{ duration: 0.75 }}
        />
        <Path
          d="M 4 15 L 15 4"
          variants={{
            closed: { x: [100, 0], y: [-100, 0], d: "M 4 15 L 15 4" },
            open: {
              opacity: 0.9,
              x: [100, 0],
              y: [-100, 0],
              d: "M 4 13 L 13 4",
            },
          }}
          transition={{ duration: 0.5 }}
        />
        <Path
          d="M 11.5 15 L 15 11.5"
          variants={{
            closed: { x: [100, 0], y: [-100, 0] },
            open: {
              x: [100, 0],
              y: [-100, 0],
              d: "M 9 18 L 9 18",
              opacity: 0.6,
            },
          }}
          transition={{ duration: 1.25 }}
        />
      </svg>
    </header>
  );
};
export default Header;
