import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <>
    <div className="cover">
        <div className="text-center pt-3 text-light">
            <h2 className="pt-5">Contact Us</h2>
            <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact Us</p>
        </div>
    </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold">
              {" "}
              Got questions? Contact us via phone, or email.
            </p>
            <div className="">
              <div className="mb-3">
                <a href="tel:09153220564" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 9153220564
                </a>
              </div>
              <div className="mt-3">
                <a href="https://wa.me/+2349153220564" className='text-decoration-none text-dark'>
                  <span className="me-3">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 9153220564
                </a>
              </div>
              <div className="mt-3">
                <a href="mailto:vechygraphix@gmail.com" className='text-decoration-none text-dark'>
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  vechygraphix@gmail.com
                </a>
              </div>
              <h5 className='mt-5'> You can also reach us via our <br />official social media accounts.</h5>

            </div>

          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up">
            <h2>GET IN TOUCH</h2>
          <Form/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact