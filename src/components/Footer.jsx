import React from 'react';
import { useState } from 'react';
import Logo from '../assets/flogo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container section-padding">
        <div className="row g-4">
          {/* Logo and Description */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="bg-white p-3 rounded-lg d-inline-block mb-4">
                <img src={Logo} alt="Vechy Graphix Logo" style={{ height: '60px' }} />
              </div>
              <p className="mb-4">
                Your creative hub where ideas take shape and dreams come to life. 
                We specialize in graphic design, web development, and brand consultations.
              </p>
              <div className="social-links">
                <a href="#" className="social-link me-3" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link me-3" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link me-3" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title mb-4">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/vgdc">VGD Challenge</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-4">Our Services</h5>
            <ul className="footer-links">
              <li><a href="/services">Graphic Design</a></li>
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Brand Consultation</a></li>
              <li><a href="/services">Digital Marketing</a></li>
              <li><a href="/services">Photo Editing</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title mb-4">Stay Updated</h5>
            <p className="mb-4">Subscribe to our newsletter for design tips and exclusive offers.</p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Vechy Graphix. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-links-inline">
                <a href="#" className="me-3">Privacy Policy</a>
                <a href="#" className="me-3">Terms of Service</a>
                <a href="/contact">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-brand p {
          color: #adb5bd;
          line-height: 1.6;
        }

        .footer-title {
          color: #fff;
          font-weight: 600;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #adb5bd;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #E71800;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          color: #adb5bd;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #E71800;
          color: #fff;
          transform: translateY(-2px);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          color: #adb5bd;
        }

        .footer-links-inline a {
          color: #adb5bd;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links-inline a:hover {
          color: #E71800;
        }

        @media (max-width: 768px) {
          .footer-bottom .col-md-6:last-child {
            text-align: center !important;
            margin-top: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

// Newsletter Form Component
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/vechygraphix@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          _captcha: 'false',
          _template: 'table',
          _subject: 'Newsletter Subscription - Vechy Graphix',
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="newsletter-success">
        <div className="success-message">
          <i className="fas fa-check-circle text-success me-2"></i>
          <span>Successfully subscribed!</span>
        </div>
        <button 
          className="btn btn-sm btn-outline-light mt-2"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another Email
        </button>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control" 
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
                <button 
                  className="btn btn-danger" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </div>
            </form>
  );
};

export default Footer;
  );
};

export default Footer;