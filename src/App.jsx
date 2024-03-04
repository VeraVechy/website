// import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services';
import VGDChallenge from './components/VGDChallenge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000,
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []); // Ensure this useEffect runs only once after component mount
  return (
    <>
     <Header/> 
     <Router>
      <Routes>
        <Route exact path = '/' element= {<About/>} />
        <Route exact path = '/services' element = {<Services/>} />
        <Route exact path = '/vgdc' element= {<VGDChallenge/>} />
        <Route exact path = '/contact' element= {<Contact/>} />
      </Routes>
     </Router>
     <Footer/> 
    </>
  )
}

export default App
