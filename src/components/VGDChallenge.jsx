import React from 'react';
import { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/VGDC/1.jpg';
import pic2 from '../assets/VGDC/2.jpg';
import pic3 from '../assets/VGDC/3.jpg';
import pic4 from '../assets/VGDC/4.jpg';
import pic5 from '../assets/VGDC/5.jpg';
import pic6 from '../assets/VGDC/6.jpg';
import pic7 from '../assets/VGDC/7.jpg';
import pic8 from '../assets/VGDC/8.jpg';
import pic9 from '../assets/VGDC/9.jpg';
import pic10 from '../assets/VGDC/10.jpg';
import pic11 from '../assets/VGDC/11.jpg';
import pic12 from '../assets/VGDC/12.jpg';
import pic13 from '../assets/VGDC/13.jpg';
import pic14 from '../assets/VGDC/14.jpg';
import pic15 from '../assets/VGDC/15.jpg';
import Win from '../assets/VGDC/winner.jpg';

function VGDChallenge() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading (replace with actual data fetching)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader type="vgdc" />;
  }

  const galleryData = [
    { image: pic1, title: 'Creative Design 1' },
    { image: pic2, title: 'Creative Design 2' },
    { image: pic3, title: 'Creative Design 3' },
    { image: pic4, title: 'Creative Design 4' },
    { image: pic5, title: 'Creative Design 5' },
    { image: pic6, title: 'Creative Design 6' },
    { image: pic7, title: 'Creative Design 7' },
    { image: pic8, title: 'Creative Design 8' },
    { image: pic9, title: 'Creative Design 9' },
    { image: pic10, title: 'Creative Design 10' },
    { image: pic11, title: 'Creative Design 11' },
    { image: pic12, title: 'Creative Design 12' },
    { image: pic13, title: 'Creative Design 13' },
    { image: pic14, title: 'Creative Design 14' },
    { image: pic15, title: 'Creative Design 15' },
  ];

  const updatedChallengeFeatures = [
    {
      icon: 'fas fa-trophy',
      title: 'Win Big Prizes',
      description: 'Over $5,000 in prizes including cash rewards, design software licenses, and professional mentorship opportunities.'
    },
    {
      icon: 'fas fa-users',
      title: 'Global Community',
      description: 'Connect with designers from over 50 countries and build lasting professional relationships.'
    },
    {
      icon: 'fas fa-star',
      title: 'Industry Recognition',
      description: 'Get your work featured on our platform and gain exposure to potential clients and employers.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Expert Feedback',
      description: 'Receive detailed feedback from industry professionals and improve your design skills.'
    }
  ];

  const challengeCategories = [
    {
      icon: 'fas fa-palette',
      title: 'Brand Identity',
      description: 'Create a complete brand identity for a fictional startup, including logo, color palette, and brand guidelines.',
      prize: '1st Prize: $2,000',
      requirements: ['Logo design', 'Brand guidelines', 'Business card design', 'Letterhead design']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'UI/UX Design',
      description: 'Design a mobile app interface that solves a real-world problem with innovative user experience.',
      prize: '1st Prize: $2,000',
      requirements: ['Wireframes', 'High-fidelity mockups', 'Prototype', 'User flow diagram']
    },
    {
      icon: 'fas fa-image',
      title: 'Digital Art',
      description: 'Create an original digital artwork that represents the theme "Future of Design".',
      prize: '1st Prize: $1,000',
      requirements: ['Original artwork', 'High resolution (300 DPI)', 'Artist statement', 'Process documentation']
    }
  ];

  const challengeTimeline = [
    {
      icon: 'fas fa-play',
      date: 'January 15, 2025',
      title: 'Registration Opens',
      description: 'Sign up and choose your category. Early bird participants get exclusive resources.'
    },
    {
      icon: 'fas fa-upload',
      date: 'March 31, 2025',
      title: 'Submission Deadline',
      description: 'All entries must be submitted by 11:59 PM EST. Late submissions will not be accepted.'
    },
    {
      icon: 'fas fa-eye',
      date: 'April 1-15, 2025',
      title: 'Judging Period',
      description: 'Our panel of expert judges will evaluate all submissions based on creativity, execution, and theme adherence.'
    },
    {
      icon: 'fas fa-trophy',
      date: 'April 20, 2025',
      title: 'Winners Announced',
      description: 'Winners will be announced live on our social media channels and contacted directly.'
    }
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
            <h1 className="display-4 fw-bold mb-3">VGD Challenge</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-light text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active text-light" aria-current="page">VGD Challenge</li>
              </ol>
            </nav>
            <p className="lead mt-3">Where creativity meets competition and dreams take flight</p>
          </div>
        </div>
      </section>

      {/* Challenge Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Season 2 Now Open!</p>
            <h2>Vechy Graphix Design Challenge 2025</h2>
            <div className="under"></div>
            <p className="lead">Join the most exciting design competition of the year</p>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="challenge-content">
                <div className="challenge-badge mb-4">
                  <span className="badge bg-success fs-6 px-3 py-2">
                    <i className="fas fa-calendar me-2"></i>
                    Registration Open Until March 31, 2025
                  </span>
                </div>
                <h2 className="mb-4">Season 2: "Future of Design"</h2>
                <p className="mb-4">
                  Welcome to Season 2 of the Vechy Graphix Design Challenge! This year's theme is 
                  "Future of Design" - we're looking for innovative designs that push boundaries and 
                  imagine what design will look like in the next decade.
                </p>
                <p className="mb-4">
                  Whether you're a seasoned professional or just starting your design journey, this 
                  challenge offers an incredible opportunity to showcase your creativity, learn from 
                  industry experts, and win amazing prizes worth over $5,000!
                </p>
                <div className="challenge-stats row g-3 mb-4">
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="text-danger mb-1">$5,000+</h3>
                      <small className="text-muted">Prize Pool</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="text-danger mb-1">3</h3>
                      <small className="text-muted">Categories</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item text-center">
                      <h3 className="text-danger mb-1">60</h3>
                      <small className="text-muted">Days Left</small>
                    </div>
                  </div>
                </div>
                <a href="/contact" className="btn btn-danger btn-lg">
                  Register Now <i className="fas fa-rocket ms-2"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="challenge-features">
                {updatedChallengeFeatures.map((feature, index) => (
                  <div key={index} className="feature-card d-flex align-items-start mb-4">
                    <div className="feature-icon me-4">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h4 className="mb-2">{feature.title}</h4>
                      <p className="mb-0 text-muted">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2>Challenge Categories</h2>
            <div className="under"></div>
            <p className="lead">Choose your category and showcase your skills</p>
          </div>

          <div className="row g-4">
            {challengeCategories.map((category, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="category-card card h-100">
                  <div className="card-body text-center">
                    <div className="category-icon mb-4">
                      <i className={category.icon}></i>
                    </div>
                    <h4 className="card-title mb-3">{category.title}</h4>
                    <p className="card-text mb-4">{category.description}</p>
                    <div className="prize-info">
                      <span className="badge bg-warning text-dark fs-6 mb-2">
                        <i className="fas fa-trophy me-1"></i>
                        {category.prize}
                      </span>
                      <div className="requirements">
                        <small className="text-muted">Requirements:</small>
                        <ul className="list-unstyled mt-2">
                          {category.requirements.map((req, idx) => (
                            <li key={idx} className="small text-muted">
                              <i className="fas fa-check text-success me-1"></i>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2>Challenge Timeline</h2>
            <div className="under"></div>
            <p className="lead">Important dates you need to know</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="timeline">
                {challengeTimeline.map((event, index) => (
                  <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="timeline-marker">
                      <i className={event.icon}></i>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-date">{event.date}</div>
                      <h5>{event.title}</h5>
                      <p className="mb-0">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-primary section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="text-light mb-3">Season 1 Highlights</h2>
            <p className="text-light lead">
              Amazing submissions from our previous season
            </p>
          </div>

          <div className="gallery-slider" data-aos="fade-up">
            <Slider {...settings}>
              {galleryData.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="gallery-item">
                    <div className="gallery-img-wrapper">
                      <img src={item.image} className="img-fluid" alt={item.title} />
                      <div className="gallery-overlay">
                        <div className="gallery-content">
                          <h5 className="text-white mb-3">{item.title}</h5>
                          <div className="gallery-actions">
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
        </div>
      </section>

      {/* Winner Spotlight */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="winner-content">
                <div className="winner-badge mb-4">
                  <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                    <i className="fas fa-crown me-2"></i>
                    Season 1 Winner
                  </span>
                </div>
                <h2 className="mb-4">Meet Our Champion</h2>
                <p className="mb-4">
                  "Participating in the VGD Challenge was an incredible experience that pushed my 
                  creative boundaries and connected me with an amazing community of designers. 
                  The feedback and recognition I received have been invaluable for my growth as a designer."
                </p>
                <div className="winner-details">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-user text-danger me-3"></i>
                    <span><strong>Winner:</strong> Creative Designer</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-calendar text-danger me-3"></i>
                    <span><strong>Season:</strong> 1 (2023)</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-trophy text-danger me-3"></i>
                    <span><strong>Category:</strong> Best Overall Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="winner-image-wrapper">
                <img src={Win} className="img-fluid rounded-lg shadow-lg" alt="Season 1 Winner" />
                <div className="winner-overlay">
                  <div className="winner-badge-overlay">
                    <i className="fas fa-crown"></i>
                    <span>Winner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="mb-4">Ready to Showcase Your Talent?</h2>
              <p className="lead mb-4">
                Join thousands of creative professionals in our next design challenge. 
                Whether you're a seasoned designer or just starting out, this is your 
                chance to shine and be recognized for your creativity.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-danger btn-lg me-3">
                  Participate Now <i className="fas fa-rocket ms-2"></i>
                </a>
                <a href="/services" className="btn btn-outline-danger btn-lg">
                  Learn More <i className="fas fa-info-circle ms-2"></i>
                </a>
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

        .challenge-badge .badge {
          border-radius: 25px;
        }

        .stat-item {
          padding: 1rem;
          background: rgba(231, 24, 0, 0.05);
          border-radius: 10px;
        }

        .stat-item h3 {
          font-weight: 700;
          font-size: 2rem;
        }

        .feature-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .gallery-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
        }

        .gallery-img-wrapper {
          position: relative;
          height: 300px;
          overflow: hidden;
          border-radius: 15px;
        }

        .gallery-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-overlay {
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

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-content {
          text-align: center;
        }

        .winner-image-wrapper {
          position: relative;
        }

        .winner-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .winner-badge-overlay {
          background: linear-gradient(135deg, #ffd700, #ffed4e);
          color: #333;
          padding: 10px 15px;
          border-radius: 25px;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
        }

        .winner-badge-overlay i {
          margin-right: 5px;
        }

        .winner-details {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #E71800;
        }

        .cta-buttons .btn {
          margin: 0.5rem;
        }

        @media (max-width: 768px) {
          .challenge-stats {

      .category-card {
        transition: all 0.3s ease;
        border: none;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      }

      .category-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      }

      .category-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #E71800, #ff4500);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        color: white;
        font-size: 1.5rem;
      }

      .requirements ul {
        max-height: 120px;
        overflow-y: auto;
      }

      .timeline {
        position: relative;
        padding-left: 2rem;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 30px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(135deg, #E71800, #ff4500);
      }

      .timeline-item {
        position: relative;
        margin-bottom: 3rem;
        padding-left: 4rem;
      }

      .timeline-marker {
        position: absolute;
        left: -2rem;
        top: 0;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #E71800, #ff4500);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(231, 24, 0, 0.3);
      }

      .timeline-content {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #E71800;
      }

      .timeline-date {
        color: #E71800;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
      }

      .timeline-content h5 {
        color: #333;
        margin-bottom: 0.5rem;
      }

      .timeline-content p {
        color: #666;
        margin: 0;
      }

      @media (max-width: 768px) {
        .timeline {
          padding-left: 1rem;
        }

        .timeline::before {
          left: 15px;
        }

        .timeline-item {
          padding-left: 3rem;
        }

        .timeline-marker {
          left: -1.5rem;
          width: 45px;
          height: 45px;
          font-size: 1rem;
        }
      }
            margin-top: 2rem;
          }

          .feature-card {
            margin-bottom: 1rem;
          }

          .cta-buttons .btn {
            display: block;
            width: 100%;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </>
  );
}

export default VGDChallenge;