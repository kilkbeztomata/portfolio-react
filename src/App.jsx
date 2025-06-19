import React, { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";


export default function App(){
  return(
    <div className="box">
      <Router>
      <nav>
        <Link id='home' to="/">Головна:)</Link>
        <Link id='about' to="/about">Про мене:)</Link>
        <Link id='contact' to="/contact">Контакты:)</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
)
}