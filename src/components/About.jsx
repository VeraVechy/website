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
  const cardsData = [
    { 
      image: ab1, 
      title: 'Graphic Design', 
      content: 'Logo design, illustrations, layout designs for magazines and books, digital graphics for social media, and stunning infographics that tell your story.' 
    },
    { 
      image: ab2, 
      title: 'Web Development', 
      content: 'Modern website design and development, intuitive UI/UX design, responsive design for all devices, and ongoing maintenance and updates.' 
    },
    { 
      image: ab3, 
      title: 'Brand Consultation', 
      content: 'Strategic brand consultation, expert advice on design trends and best practices, and customized solutions tailored to your unique business needs.' 
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center text-light">
          <div data-aos="fade-up">
            <h1>Your Creative Hub</h1>
            <p>Where Ideas Take Shape & Dreams Come To Life</p>
            <a href="/contact" className="btn btn-danger btn-lg mt-4">
              Start Your Project <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Welcome to Vechy Graphix</p>
            <h2>Reliable & Affordable Epicenter For Quality Designs</h2>
            <div className="under"></div>
            <p className="lead">Transforming your vision into stunning visual experiences</p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="image-wrapper">
                <img src={Us} className="img-fluid rounded-lg shadow-lg" alt="About Vechy Graphix" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="content-wrapper">
                <p className="text-danger text-uppercase fw-bold mb-3">Creative Design Company</p>
                <h2 className="mb-4">Graphic Designs, Branding, Consultations & More</h2>
                <p className="mb-4">
                  Our vision is rooted in the belief that every brand has a story worth telling, and it's our 
                  mission to bring those stories to life with authenticity, passion, and unparalleled creativity.
                </p>
                <p className="mb-4">
                  We envision a future where design transcends mere aesthetics, where it becomes a catalyst 
                  for meaningful connection and positive change. Through our dedication to excellence and our 
                  relentless pursuit of innovation, we aim to empower brands to make a lasting impact in the world.
                </p>
                <a href="/services" className="btn btn-danger">
                  Discover More <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Explore Our Solutions</p>
            <h2>Comprehensive Creative Expertise</h2>
            <div className="under"></div>
            <p className="lead">Discover our range of professional design services</p>
          </div>

          <div className="services-slider" data-aos="fade-up">
            <Slider {...settings}>
              {cardsData.map((card, index) => (
                <div key={index} className="px-3">
                  <div className="card h-100">
                    <div className="card-img-wrapper">
                      <img src={card.image} className="card-img-top" alt={card.title} />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h4 className="card-title">{card.title}</h4>
                      <p className="card-text flex-grow-1">{card.content}</p>
                      <a href="/services" className="btn btn-outline-danger btn-sm mt-auto">
                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-5">
            <a href="/services" className="btn btn-danger btn-lg">
              View All Services <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary section-padding-sm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <h2 className="text-light mb-3">Crafting Your Dreams, Pixel by Pixel!</h2>
              <p className="text-light mb-0 lead">
                Ready to transform your brand? Let's create something amazing together.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end text-center mt-4 mt-lg-0" data-aos="fade-left">
              <a href="/contact" className="btn btn-danger btn-lg">
                Get Started Today <i className="fas fa-rocket ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="mb-4">Why Choose Vechy Graphix?</h2>
              
              <div className="feature-item d-flex mb-4">
                <div className="feature-icon me-4">
                  <img src={Icon1} alt="Timely Delivery" className="img-fluid" />
                </div>
                <div className="feature-content">
                  <h4 className="mb-2">Timely Delivery</h4>
                  <p className="mb-0">
                    We ensure all projects are delivered on time and within budget through our 
                    streamlined workflow and dedicated project management.
                  </p>
                </div>
              </div>

              <div className="feature-item d-flex mb-4">
                <div className="feature-icon me-4">
                  <img src={Icon2} alt="Customized Solutions" className="img-fluid" />
                </div>
                <div className="feature-content">
                  <h4 className="mb-2">Customized Solutions</h4>
                  <p className="mb-0">
                    Every project is unique. We tailor our design solutions to meet your specific 
                    needs, objectives, and brand personality.
                  </p>
                </div>
              </div>

              <div className="feature-item d-flex">
                <div className="feature-icon me-4">
                  <img src={Icon3} alt="Creative Expertise" className="img-fluid" />
                </div>
                <div className="feature-content">
                  <h4 className="mb-2">Creative Expertise</h4>
                  <p className="mb-0">
                    Our team delivers innovative and visually stunning designs that enhance your 
                    brand identity and captivate your audience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="contact-form-wrapper bg-light p-4 p-lg-5 rounded-lg">
                <h2 className="mb-4">Get A Free Quote</h2>
                <p className="mb-4">Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.</p>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .image-wrapper {
          position: relative;
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          border-radius: 15px;
          z-index: -1;
          opacity: 0.1;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(231, 24, 0, 0.1);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .feature-icon img {
          max-width: 30px;
          height: auto;
        }

        .card-img-wrapper {
          overflow: hidden;
          border-radius: 15px 15px 0 0;
        }

        .services-slider .slick-slide {
          padding: 0 15px;
        }

        .contact-form-wrapper {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .feature-item {
            text-align: center;
            flex-direction: column;
          }

          .feature-icon {
            margin: 0 auto 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default About;