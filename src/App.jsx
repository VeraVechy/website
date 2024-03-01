import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services';
import VGDChallenge from './components/VGDChallenge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
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
