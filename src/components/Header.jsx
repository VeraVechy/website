import React from 'react'
import Logo from '../assets/flogo.png'

function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand ml-3" href="/"><img src={Logo} alt="Logo" srcSet=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/vgdc">VGD Challenge </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>
      </ul>

      <a href="/contact" className="btn btn-danger text-light">Get A Quote</a>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
