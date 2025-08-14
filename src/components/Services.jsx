import React from 'react';
import ab1 from '../assets/About/design.jpg';
import ab2 from '../assets/About/web.jpg';
import ab3 from '../assets/About/consult.jpg';
import ab4 from '../assets/About/market.jpg';
import ab5 from '../assets/About/branding.jpg';
import ab6 from '../assets/About/edit.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s3 from '../assets/Serv/s3.jpg';
import s4 from '../assets/Serv/s4.jpg';
import s5 from '../assets/Serv/s5.jpg';
import s6 from '../assets/Serv/s6.jpg';
import s8 from '../assets/Serv/s8.jpg';
import s11 from '../assets/Serv/s11.jpg';
import s16 from '../assets/Serv/s16.jpg';

function Services() {
  const cardsData = [
    { 
      image: ab1, 
      title: 'Graphic Design', 
      content: 'Professional logo design, creative illustrations, magazine and book layouts, engaging social media graphics, informative infographics, and complete brand identity packages.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics']
    },
    { 
      image: ab2, 
      title: 'Web Development', 
      content: 'Modern, responsive website development with intuitive UI/UX design, mobile optimization, e-commerce solutions, and ongoing maintenance and support.',
      features: ['Responsive Design', 'E-commerce', 'UI/UX Design', 'Maintenance']
    },
    { 
      image: ab3, 
      title: 'Brand Consultation', 
      content: 'Strategic brand consultation services including market analysis, brand positioning, design trend insights, and customized solutions for your business growth.',
      features: ['Brand Strategy', 'Market Analysis', 'Trend Insights', 'Custom Solutions']
    },
    { 
      image: ab4, 
      title: 'Digital Marketing', 
      content: 'Comprehensive digital marketing solutions including social media graphics, campaign development, brand strategy consultation, and performance analytics.',
      features: ['Social Media', 'Campaign Design', 'Analytics', 'Strategy']
    },
    { 
      image: ab5, 
      title: 'Packaging Design', 
      content: 'Creative packaging design solutions, custom label graphics, material selection guidance, and sustainable packaging options for your products.',
      features: ['Custom Packaging', 'Label Design', 'Material Guidance', 'Sustainability']
    },
    { 
      image: ab6, 
      title: 'Photo Editing', 
      content: 'Professional photo editing services including retouching, background removal, photo manipulation, restoration, and product photography enhancement.',
      features: ['Retouching', 'Background Removal', 'Restoration', 'Product Photos']
    },
  ];

  const portfolioData = [
    { image: s3, category: 'Graphic Design' },
    { image: s4, category: 'Web Design' },
    { image: s5, category: 'Branding' },
    { image: s6, category: 'Marketing' },
    { image: s8, category: 'Packaging' },
    { image: s11, category: 'Photography' },
    { image: s16, category: 'Digital Art' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
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
      <section className="cover">
        <div className="container">
          <div className="text-center text-light" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-3">Our Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-light text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active text-light" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Complete Design Solutions</p>
            <h2>Transform Your Brand With Our Expertise</h2>
            <div className="under"></div>
            <p className="lead">
              Discover our comprehensive range of design services tailored to meet your every need 
              and elevate your brand to new heights.
            </p>
          </div>

          <div className="row g-4">
            {cardsData.map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="service-card card h-100">
                  <div className="card-img-wrapper">
                    <img src={card.image} className="card-img-top" alt={card.title} />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <h5 className="text-white mb-3">{card.title}</h5>
                        <a href="/contact" className="btn btn-danger btn-sm">
                          Get Quote <i className="fas fa-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title mb-3">{card.title}</h4>
                    <p className="card-text mb-4">{card.content}</p>
                    <div className="service-features">
                      <h6 className="mb-2">Key Features:</h6>
                      <ul className="feature-list">
                        {card.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check text-danger me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-primary section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="text-light mb-3">Our Portfolio Gallery</h2>
            <p className="text-light lead">
              Explore some of our finest work and see how we bring creative visions to life
            </p>
          </div>

          <div className="portfolio-slider" data-aos="fade-up">
            <Slider {...settings}>
              {portfolioData.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="portfolio-item">
                    <div className="portfolio-img-wrapper">
                      <img src={item.image} className="img-fluid" alt={`Portfolio ${index + 1}`} />
                      <div className="portfolio-overlay">
                        <div className="portfolio-content">
                          <span className="portfolio-category">{item.category}</span>
                          <div className="portfolio-actions">
                            <button className="btn btn-light btn-sm rounded-circle me-2">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="btn btn-danger btn-sm rounded-circle">
                              <i className="fas fa-heart"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="text-center mt-5">
            <a href="/contact" className="btn btn-danger btn-lg">
              Start Your Project <i className="fas fa-rocket ms-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Our Process</p>
            <h2>How We Work</h2>
            <div className="under"></div>
            <p className="lead">Our streamlined process ensures quality results every time</p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step text-center">
                <div className="step-number">01</div>
                <div className="step-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Consultation</h4>
                <p>We discuss your vision, goals, and requirements to understand your needs perfectly.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step text-center">
                <div className="step-number">02</div>
                <div className="step-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Concept</h4>
                <p>Our creative team develops initial concepts and presents them for your feedback.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="process-step text-center">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h4>Design</h4>
                <p>We refine the chosen concept and create the final design with attention to detail.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="process-step text-center">
                <div className="step-number">04</div>
                <div className="step-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Delivery</h4>
                <p>Final files are delivered in all required formats, ready for immediate use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .breadcrumb {
          background: none;
          padding: 0;
          margin: 0;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: "→";
          color: rgba(255, 255, 255, 0.7);
        }

        .service-card {
          transition: all 0.3s ease;
          border: none;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .card-img-wrapper {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .card-img-top {
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(231, 24, 0, 0.9), rgba(255, 69, 0, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .card-overlay {
          opacity: 1;
        }

        .service-card:hover .card-img-top {
          transform: scale(1.1);
        }

        .overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .service-card:hover .overlay-content {
          transform: translateY(0);
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li {
          padding: 5px 0;
          color: #666;
        }

        .portfolio-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
        }

        .portfolio-img-wrapper {
          position: relative;
          height: 300px;
          overflow: hidden;
          border-radius: 15px;
        }

        .portfolio-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(231, 24, 0, 0.7));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-item:hover img {
          transform: scale(1.1);
        }

        .portfolio-content {
          text-align: center;
          color: white;
        }

        .portfolio-category {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .process-step {
          position: relative;
          padding: 2rem 1rem;
        }

        .step-number {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: rgba(231, 24, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem auto 1rem;
          color: #E71800;
          font-size: 1.5rem;
        }

        .process-step h4 {
          margin-bottom: 1rem;
          color: #333;
        }

        .process-step p {
          color: #666;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .portfolio-slider .slick-slide {
            padding: 0 10px;
          }
          
          .process-step {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Services;