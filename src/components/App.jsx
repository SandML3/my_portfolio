import { Route, Routes } from "react-router-dom";

import { motion, useCycle, AnimatePresence } from "framer-motion";

import Home from "./views/Home";
import Header from "./commons/Header";
import Menu from "./commons/Menu";

import "../styles/App.scss";

function App() {
  const [isOpen, setIsOppen] = useCycle(false, true);

  const toggleOppen = () => setIsOppen(false);

  return (
    <div className="App">
      <motion.nav animate={isOpen ? "open" : "closed"}>
        <Header toggle={() => setIsOppen()} />
        <AnimatePresence>
          {" "}
          {isOpen && <Menu toggleOppen={toggleOppen} />}
        </AnimatePresence>
      </motion.nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/education" element={"Education"} />
        <Route path="/projects" element={"Projects"} />
        <Route path="/contact" element={"Contact"} />
      </Routes>
    </div>
  );
}

export default App;
