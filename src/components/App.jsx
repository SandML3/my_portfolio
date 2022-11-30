import { Route, Routes } from "react-router-dom";

import { motion, useCycle, AnimatePresence } from "framer-motion";

import Home from "./views/Home";
import Header from "./commons/Header";
import Menu from "./views/Menu";

import "../styles/App.scss";

function App() {
  const [isOpen, toggleOppen] = useCycle(false, true);

  return (
    <div className="App">
      <motion.nav animate={isOpen ? "open" : "closed"}>
        <Header toggle={() => toggleOppen()} />
        <AnimatePresence> {isOpen && <Menu />}</AnimatePresence>
      </motion.nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
