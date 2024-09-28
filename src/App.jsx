import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";
import Stats from "./components/Stats";
import Feed from "./components/Feed";

const App = () => {
  return (
    <Router>
      <div className="app">
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
