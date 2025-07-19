import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Containers/Home/Index";
import About from "./Containers/About/Index";
import Skills from "./Containers/Skills/Index";
import Portfolio from "./Containers/Portfolio/Index";
import Contact from "./Containers/Contact/Index";
import Navbar from "./Components/NavBar/Index";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Main Navigation */}
      <Navbar />

      {/* Page Routing */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
