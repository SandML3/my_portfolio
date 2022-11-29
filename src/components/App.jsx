import { Route, Routes } from "react-router-dom";

import { motion, useCycle } from "framer-motion";

import Home from "./views/Home";

import "../styles/App.scss";
import Header from "./views/Header";

function App() {
  const [isOpen, toggleOppen] = useCycle(false, true);

  return (
    <div className="App">
      <motion.nav animate={isOpen ? "open" : "closed"}>
        <Header toggle={() => toggleOppen()} />
      </motion.nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
