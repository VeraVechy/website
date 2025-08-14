import React, { useState, useEffect } from 'react';
import Logo from '../assets/flogo.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Vechy Graphix Logo" />
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vgdc">VGD Challenge</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
            <a href="/contact" className="btn btn-danger">Get A Quote</a>
          </div>
        </div>
      </nav>
      {/* Spacer for fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
}

export default Header;