import React from 'react';

function Form() {
  return (
    <div className="contact-form">
      <form action="https://formsubmit.co/vechygraphix@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/contact" />
        
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                id="name"
                placeholder="Your Name"
                required 
              />
              <label htmlFor="name">
                <i className="fas fa-user me-2"></i>Your Name *
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                id="email"
                placeholder="Your Email"
                required 
              />
              <label htmlFor="email">
                <i className="fas fa-envelope me-2"></i>Your Email *
              </label>
            </div>
          </div>
        </div>

        <div className="row g-3 mt-1">
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="tel" 
                name="phone" 
                className="form-control" 
                id="phone"
                placeholder="Phone Number"
              />
              <label htmlFor="phone">
                <i className="fas fa-phone me-2"></i>Phone Number
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="text" 
                name="subject" 
                className="form-control" 
                id="subject"
                placeholder="Subject"
                required 
              />
              <label htmlFor="subject">
                <i className="fas fa-tag me-2"></i>Subject *
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="form-floating">
            <textarea 
              name="message" 
              className="form-control" 
              id="message"
              placeholder="Your Message"
              style={{ minHeight: '150px' }}
              required
            ></textarea>
            <label htmlFor="message">
              <i className="fas fa-comment me-2"></i>Your Message *
            </label>
          </div>
        </div>

        <div className="form-footer mt-4">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              <i className="fas fa-lock me-1"></i>
              Your information is secure and will never be shared.
            </small>
            <button type="submit" className="btn btn-danger btn-lg">
              <i className="fas fa-paper-plane me-2"></i>
              Send Message
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        .contact-form {
          max-width: 100%;
        }

        .form-floating {
          position: relative;
        }

        .form-floating > .form-control {
          height: calc(3.5rem + 2px);
          padding: 1rem 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .form-floating > .form-control:focus {
          border-color: #E71800;
          box-shadow: 0 0 0 0.2rem rgba(231, 24, 0, 0.15);
          background: #fff;
        }

        .form-floating > label {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          padding: 1rem 0.75rem;
          pointer-events: none;
          border: 1px solid transparent;
          transform-origin: 0 0;
          transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
          color: #6c757d;
          font-weight: 500;
        }

        .form-floating > .form-control:focus ~ label,
        .form-floating > .form-control:not(:placeholder-shown) ~ label {
          opacity: 0.65;
          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
          color: #E71800;
        }

        .form-floating > textarea.form-control {
          height: auto;
          min-height: 150px;
          resize: vertical;
        }

        .form-floating > textarea.form-control ~ label {
          height: auto;
          padding-top: 1rem;
        }

        .btn-danger {
          background: linear-gradient(135deg, #E71800, #ff4500);
          border: none;
          padding: 12px 30px;
          font-weight: 500;
          border-radius: 50px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(231, 24, 0, 0.3);
        }

        .btn-danger:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(231, 24, 0, 0.4);
          background: linear-gradient(135deg, #ff4500, #E71800);
        }

        .form-footer {
          border-top: 1px solid #eee;
          padding-top: 1rem;
        }

        @media (max-width: 768px) {
          .form-footer {
            flex-direction: column;
            gap: 1rem;
          }

          .form-footer .btn {
            width: 100%;
          }

          .form-footer small {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Form;