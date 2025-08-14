import React from 'react';
import Form from './Form';

function Contact() {
  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      content: '+234 9153220564',
      link: 'tel:09153220564'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      content: '+234 9153220564',
      link: 'https://wa.me/+2349153220564'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'vechygraphix@gmail.com',
      link: 'mailto:vechygraphix@gmail.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Nigeria',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', link: '#', name: 'Twitter' },
    { icon: 'fab fa-instagram', link: '#', name: 'Instagram' },
    { icon: 'fab fa-facebook', link: '#', name: 'Facebook' },
    { icon: 'fab fa-linkedin', link: '#', name: 'LinkedIn' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="cover">
        <div className="container">
          <div className="text-center text-light" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-light text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active text-light" aria-current="page">Contact</li>
              </ol>
            </nav>
            <p className="lead mt-3">Ready to bring your vision to life? Let's start the conversation.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-info-wrapper">
                <h2 className="mb-4">Get In Touch</h2>
                <p className="lead mb-4">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                {/* Contact Methods */}
                <div className="contact-methods mb-5">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-method d-flex align-items-center mb-4">
                      <div className="contact-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h5 className="mb-1">{info.title}</h5>
                        <a href={info.link} className="contact-link">
                          {info.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="business-hours mb-5">
                  <h4 className="mb-3">Business Hours</h4>
                  <div className="hours-list">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Monday - Friday</span>
                      <span className="text-danger fw-bold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Saturday</span>
                      <span className="text-danger fw-bold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Sunday</span>
                      <span className="text-muted">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-section">
                  <h4 className="mb-3">Follow Us</h4>
                  <p className="mb-3">Stay connected with us on social media for updates and inspiration.</p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.link} 
                        className="social-link me-3"
                        aria-label={social.name}
                      >
                        <i className={social.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form-wrapper">
                <div className="form-header mb-4">
                  <h2 className="mb-3">Send Us A Message</h2>
                  <p className="text-muted">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    All fields marked with * are required.
                  </p>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <div className="under"></div>
            <p className="lead">Quick answers to common questions about our services</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion" data-aos="fade-up">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How long does a typical project take?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Project timelines vary depending on complexity and scope. Simple logo designs typically take 3-5 business days, 
                      while comprehensive branding projects may take 2-3 weeks. We'll provide a detailed timeline during our initial consultation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What's included in your design packages?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Our packages include initial concepts, revisions, final files in multiple formats (AI, EPS, PNG, JPG), 
                      and a style guide. Web development projects include responsive design, basic SEO optimization, and 3 months of support.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you offer revisions?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes! We include up to 3 rounds of revisions in all our packages. Additional revisions can be requested 
                      for a small fee. We want to ensure you're completely satisfied with the final result.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What are your payment terms?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We require 50% upfront to begin work, with the remaining 50% due upon project completion. 
                      We accept bank transfers, and other secure payment methods. Payment plans are available for larger projects.
                    </div>
                  </div>
                </div>
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

        .contact-info-wrapper {
          height: 100%;
        }

        .contact-method {
          padding: 1rem 0;
          border-bottom: 1px solid #eee;
        }

        .contact-method:last-child {
          border-bottom: none;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(231, 24, 0, 0.1), rgba(255, 69, 0, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .contact-icon i {
          font-size: 1.2rem;
          color: #E71800;
        }

        .contact-details h5 {
          color: #333;
          font-weight: 600;
        }

        .contact-link {
          color: #666;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #E71800;
        }

        .business-hours {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #E71800;
        }

        .hours-list {
          font-size: 0.95rem;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          color: white;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(231, 24, 0, 0.4);
          color: white;
        }

        .contact-form-wrapper {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .form-header {
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }

        .accordion-item {
          border: none;
          margin-bottom: 1rem;
          border-radius: 10px !important;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .accordion-button {
          background: white;
          border: none;
          font-weight: 600;
          color: #333;
          padding: 1.25rem 1.5rem;
        }

        .accordion-button:not(.collapsed) {
          background: linear-gradient(135deg, #E71800, #ff4500);
          color: white;
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
          border: none;
        }

        .accordion-body {
          padding: 1.5rem;
          background: #f8f9fa;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-form-wrapper {
            padding: 1.5rem;
          }

          .contact-method {
            flex-direction: column;
            text-align: center;
          }

          .contact-icon {
            margin: 0 auto 1rem;
          }

          .social-links {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;