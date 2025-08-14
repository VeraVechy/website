import React from 'react';
import { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

function Careers() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader type="careers" />;
  }

  // This data would come from your CMS/Backend
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Graphic Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$45,000 - $65,000',
      description: 'We are looking for a creative and experienced graphic designer to join our team. You will be responsible for creating visual concepts and designs for various projects.',
      applicationUrl: 'https://forms.gle/your-senior-designer-form', // Replace with your actual form URL
      postedDate: '2025-01-10',
      isActive: false
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$50,000 - $70,000',
      description: 'Join our development team to create stunning and responsive websites. You will work closely with designers to bring creative visions to life.',
      applicationUrl: 'https://forms.gle/your-frontend-dev-form', // Replace with your actual form URL
      postedDate: '2025-01-08',
      isActive: false
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      experience: '1-3 years',
      salary: '$25,000 - $35,000',
      description: 'Help us grow our digital presence and reach more clients through strategic marketing campaigns and social media management.',
      applicationUrl: 'https://forms.gle/your-marketing-specialist-form', // Replace with your actual form URL
      postedDate: '2025-01-05',
      isActive: false
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      experience: '2-4 years',
      salary: '$40,000 - $55,000',
      description: 'Create intuitive and engaging user experiences for web and mobile applications. Work with cross-functional teams to deliver exceptional design solutions.',
      applicationUrl: 'https://forms.gle/your-uiux-designer-form', // Replace with your actual form URL
      postedDate: '2025-01-12',
      isActive: false
    }
  ];

  const benefits = [
    {
      icon: 'fas fa-home',
      title: 'Remote Work',
      description: 'Work from anywhere in the world with flexible hours'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and skill development'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaborative Team',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Growth Opportunities',
      description: 'Advance your career with exciting projects and challenges'
    },
    {
      icon: 'fas fa-heart',
      title: 'Work-Life Balance',
      description: 'Maintain a healthy balance between work and personal life'
    },
    {
      icon: 'fas fa-dollar-sign',
      title: 'Competitive Salary',
      description: 'Fair compensation based on experience and performance'
    }
  ];

  // Filter active jobs only
  const activeJobs = jobOpenings.filter(job => job.isActive);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysAgo = (dateString) => {
    const today = new Date();
    const postDate = new Date(dateString);
    const diffTime = Math.abs(today - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return '1 week ago';
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="cover">
        <div className="container">
          <div className="text-center text-light" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-3">Join Our Team</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="/" className="text-light text-decoration-none">Home</a>
                </li>
                <li className="breadcrumb-item active text-light" aria-current="page">Careers</li>
              </ol>
            </nav>
            <p className="lead mt-3">Build your career with a team that values creativity and innovation</p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-danger text-uppercase fw-bold mb-2">Why Choose Vechy Graphix</p>
            <h2>Build Your Career With Us</h2>
            <div className="under"></div>
            <p className="lead">
              Join a dynamic team where creativity meets opportunity and your skills can flourish
            </p>
          </div>

          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="benefit-card text-center">
                  <div className="benefit-icon">
                    <i className={benefit.icon}></i>
                  </div>
                  <h4 className="mb-3">{benefit.title}</h4>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2>Current Openings</h2>
            <div className="under"></div>
            <p className="lead">
              {activeJobs.length} open position{activeJobs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {activeJobs.length === 0 ? (
            <div className="text-center" data-aos="fade-up">
              <div className="no-jobs-message">
                <i className="fas fa-briefcase mb-4" style={{ fontSize: '4rem', color: '#E71800' }}></i>
                <h3 className="mb-3">No Open Positions</h3>
                <p className="lead mb-4">
                  We don't have any open positions at the moment, but we're always looking for talented individuals. Please check back later for new opportunities.
                </p>
                <a href="/contact" className="btn btn-danger btn-lg">
                  Send Us Your Resume <i className="fas fa-paper-plane ms-2"></i>
                </a>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {activeJobs.map((job, index) => (
                <div key={job.id} className="col-12" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="job-card">
                    <div className="job-header">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h3 className="job-title mb-0">{job.title}</h3>
                            <span className="job-posted text-muted small">
                              Posted {getDaysAgo(job.postedDate)}
                            </span>
                          </div>
                          <div className="job-meta mb-3">
                            <span className="badge bg-primary me-2">
                              <i className="fas fa-building me-1"></i>
                              {job.department}
                            </span>
                            <span className="badge bg-success me-2">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              {job.location}
                            </span>
                            <span className="badge bg-warning text-dark me-2">
                              <i className="fas fa-clock me-1"></i>
                              {job.type}
                            </span>
                            <span className="badge bg-info me-2">
                              <i className="fas fa-user-tie me-1"></i>
                              {job.experience}
                            </span>
                            <span className="badge bg-secondary">
                              <i className="fas fa-dollar-sign me-1"></i>
                              {job.salary}
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
                          <a 
                            href={job.applicationUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-danger btn-lg"
                          >
                            Apply Now <i className="fas fa-external-link-alt ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="job-content">
                      <p className="job-description mb-4">{job.description}</p>
                      
                      <div className="job-details">
                        <div className="row g-3">
                          <div className="col-md-6">
                            <div className="detail-item">
                              <strong>Department:</strong> {job.department}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="detail-item">
                              <strong>Experience Required:</strong> {job.experience}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="detail-item">
                              <strong>Employment Type:</strong> {job.type}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="detail-item">
                              <strong>Salary Range:</strong> {job.salary}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="job-actions mt-4">
                        <a 
                          href={job.applicationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-danger me-3"
                        >
                          <i className="fas fa-paper-plane me-2"></i>
                          Apply for this Position
                        </a>
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: `${job.title} at Vechy Graphix`,
                                text: job.description,
                                url: window.location.href
                              });
                            } else {
                              navigator.clipboard.writeText(window.location.href);
                              alert('Job link copied to clipboard!');
                            }
                          }}
                        >
                          <i className="fas fa-share me-2"></i>
                          Share Job
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2>Application Process</h2>
            <div className="under"></div>
            <p className="lead">Simple steps to join our team</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="process-timeline">
                <div className="process-step" data-aos="fade-up" data-aos-delay="100">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Click "Apply Now" and fill out the external application form with your details and portfolio</p>
                  </div>
                </div>
                <div className="process-step" data-aos="fade-up" data-aos-delay="200">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Initial Review</h4>
                    <p>Our team will review your application and get back to you within 48 hours</p>
                  </div>
                </div>
                <div className="process-step" data-aos="fade-up" data-aos-delay="300">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Interview</h4>
                    <p>Virtual interview to discuss your experience and our expectations</p>
                  </div>
                </div>
                <div className="process-step" data-aos="fade-up" data-aos-delay="400">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Welcome Aboard</h4>
                    <p>Join our team and start your exciting journey with Vechy Graphix</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <h2 className="text-light mb-4">Ready to Start Your Journey?</h2>
              <p className="text-light lead mb-4">
                Don't see a position that fits? We're always looking for talented individuals. 
                Send us your resume and let's discuss how you can contribute to our team.
              </p>
              <a href="/contact" className="btn btn-danger btn-lg">
                Get In Touch <i className="fas fa-envelope ms-2"></i>
              </a>
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

        .benefit-card {
          padding: 2rem 1rem;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(231, 24, 0, 0.1), rgba(255, 69, 0, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #E71800;
          font-size: 1.5rem;
        }

        .job-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          border-left: 4px solid #E71800;
        }

        .job-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .job-title {
          color: #333;
          font-weight: 600;
        }

        .job-posted {
          font-style: italic;
        }

        .job-meta .badge {
          font-size: 0.8rem;
          padding: 0.5rem 0.75rem;
          margin-bottom: 0.5rem;
        }

        .job-description {
          color: #666;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .job-details {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          margin: 1.5rem 0;
        }

        .detail-item {
          padding: 0.5rem 0;
          color: #666;
        }

        .detail-item strong {
          color: #333;
        }

        .job-actions {
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
        }

        .no-jobs-message {
          padding: 4rem 2rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .process-timeline {
          position: relative;
        }

        .process-step {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .process-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 30px;
          top: 60px;
          width: 2px;
          height: 60px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          opacity: 0.3;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #E71800, #ff4500);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 2rem;
          flex-shrink: 0;
          box-shadow: 0 5px 15px rgba(231, 24, 0, 0.3);
        }

        .step-content h4 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .step-content p {
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .job-card {
            padding: 1.5rem;
          }

          .job-meta .badge {
            display: block;
            margin-bottom: 0.5rem;
            width: fit-content;
          }

          .job-actions {
            text-align: center;
          }

          .job-actions .btn {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            margin-right: 0;
            margin-bottom: 1rem;
          }

          .process-step:not(:last-child)::after {
            left: 50%;
            transform: translateX(-50%);
            top: 80px;
          }
        }
      `}</style>
    </>
  );
}

export default Careers;