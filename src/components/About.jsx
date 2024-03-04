import React from 'react';
import Us from '../assets/About/ab.jpg';
import ab1 from '../assets/About/design.jpg';
import ab2 from '../assets/About/web.jpg';
import ab3 from '../assets/About/consult.jpg';
import Icon1 from '../assets/About/Icon1.png';
import Icon2 from '../assets/About/Icon2.png';
import Icon3 from '../assets/About/Icon3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from './Form';

function About() {

  // Array of card data
  const cardsData = [
    { image: ab1, title: 'Graphic Design', content: 'Logo design, Illustrations, Layout designs (magazines, books), Digital graphics (social media posts,banners), Infographics, etc.' },
    { image: ab2, title: 'Web Development', content: 'Website design and development, UI/UX design, Responsive design for mobile compatibility, Website maintenance and updates, etc' },
    { image: ab3, title: 'Consultation', content: 'Brand strategy consultation, Expert advice on design trends and best practices, Customized solutions tailored to your specific needs' },
    // Add more card data objects as needed
  ];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // breakpoint for desktop
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // breakpoint for tablet/mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <>
      <div className="hero">
        <div className="container text-center text-light pt-5" data-aos='bounce-in'>
        <h1 className='mt-5 pt-5'>
        Your Creative Hub
        </h1>
        <p style={{fontSize:'24px', fontWeight:'300'}}> Where Ideas Take Shape, & Dreams Come To Life</p>
        </div>
      </div>

      <div className='container'>
      <div className='text-center' data-aos='fade-up'>
        <h2 className='pt-5'>Welcome To Vechy Graphix</h2>
        <div className="under mx-auto"></div>
        <p> Reliable And Affordable Epicenter For Quality And Excellent Designs</p>
      </div>

      <div className="container d-flex">
      <div className="row mt-5">
      <div className="col-md-6" data-aos="fade-up">
          <img src={Us} className="rounded mb-5" alt="About" />
          </div>
          </div>

        
        <div className="col-md-6" data-aos="fade-up">
          <p className='text-danger'>CREATIVE DESIGN COMPANY</p>
          <h2>Graphic Designs, Branding, Consultations, And More</h2>
          <p>Our vision is rooted in the belief that every brand has a story worth telling, and it's our mission to bring those stories to life with authenticity, passion, and unparalleled creativity. We envision a future where design transcends mere aesthetics, where it becomes a catalyst for meaningful connection and positive change. Through our dedication to excellence and our relentless pursuit of innovation, we aim to empower brands to make a lasting impact in the world, one pixel at a time.</p>
          <a href="/services" className="btn btn-danger">Discover more</a>
          </div>
        </div>
        </div>

        {/* services */}
      <div className="pt-5 text-center" data-aos="fade-up">
        <p className='text-danger'> EXPLORE OUR SOLUTIONS </p>
        <h2>Capturing Comprehensive Expertise</h2>
      </div>

      <div className="mt-5">
      <section className="row">
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-5">
             <div className="slider-item" style={{ marginRight: '1rem' }}>
             <div className="card">
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title ">{card.title}</h4>
                <p className="card-text">{card.content}</p> 
              </div>
            </div>
             </div>
          </div>
        ))}
        </Slider>
      </section>
    </div>
    <div className="text-center">
      <a href="/services" className="btn btn-danger">Discover more</a>
    </div>
    
    {/* banner */}
      <div className="bg-primary mt-5 mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2 className='text-light'>Crafting Your Dreams, Pixel by Pixel!</h2>
            <p className='text-light'>Vechy Graphix excels in creating brilliance.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/contact' className="btn btn-danger">Get A Quote</a> 
            </div>
          </div>
          
        </div>
      </div>
      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6">
            <h2>HOW UNIQUE ARE WE?</h2>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon1} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Timely Delivery</h4>
            <p>Ensuring projects are delivered on time and within budget with streamlined workflow.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon2} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Customized Solutions</h4>
            <p>Tailoring design solutions to meet unique client needs and objectives.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="flex-grow-1 me-2">
              <img src={Icon3} alt="" />
              </div>
              <div className="flex-grow-1 ms-2">
              <h4>Creative Expertise</h4>
            <p>Delivering innovative and visually appealing designs to enhance brand identity.</p>
              </div>
            </div>

           
          </div>
          <div className="col-md-6">
            <h2>GET A QUOTE</h2>

            <Form/>

          </div>
        </div>
      </div>

      
      </>
  )
}

export default About
