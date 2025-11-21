
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Detector from "./pages/Detector";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-logo">🌿 AgriCropCare</div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/detector" className="nav-link" onClick={() => setIsOpen(false)}>Detector</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      </nav>

      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/detector" element={<Detector />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
