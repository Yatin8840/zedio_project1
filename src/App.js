import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";


import Home from "./Components/Home/Home";
import NewAbout from "./Components/About/NewAbout";
import Services from "./Components/Services/Services";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactUs from "./Components/Contact/ContactUs";



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Header />
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route path="/about" element={<NewAbout />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        {/* <Grid /> */}
      </Router>
      {/* <Login/> */}
    </div>
  );
}

export default App;
