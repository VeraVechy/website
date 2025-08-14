import React from 'react';

const SkeletonLoader = ({ type = 'about' }) => {
  const renderAboutSkeleton = () => (
    <>
      {/* Hero Section Skeleton */}
      <div className="skeleton-hero">
        <div className="container">
          <div className="text-center">
            <div className="skeleton-text skeleton-title mb-4"></div>
            <div className="skeleton-text skeleton-subtitle mb-4"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>

      {/* Welcome Section Skeleton */}
      <div className="skeleton-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="skeleton-text skeleton-small-title mb-2"></div>
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-underline mb-4"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="skeleton-image skeleton-large-image"></div>
            </div>
            <div className="col-lg-6">
              <div className="skeleton-text skeleton-small-title mb-3"></div>
              <div className="skeleton-text skeleton-title mb-4"></div>
              <div className="skeleton-text skeleton-paragraph mb-3"></div>
              <div className="skeleton-text skeleton-paragraph mb-3"></div>
              <div className="skeleton-text skeleton-paragraph mb-4"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="skeleton-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <div className="skeleton-text skeleton-small-title mb-2"></div>
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-underline mb-4"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>

          <div className="row g-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="col-lg-4">
                <div className="skeleton-card">
                  <div className="skeleton-image skeleton-card-image"></div>
                  <div className="skeleton-card-body">
                    <div className="skeleton-text skeleton-card-title mb-3"></div>
                    <div className="skeleton-text skeleton-paragraph mb-2"></div>
                    <div className="skeleton-text skeleton-paragraph mb-2"></div>
                    <div className="skeleton-text skeleton-paragraph mb-4"></div>
                    <div className="skeleton-button skeleton-small-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderServicesSkeleton = () => (
    <>
      {/* Hero Section */}
      <div className="skeleton-hero skeleton-cover">
        <div className="container">
          <div className="text-center">
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-text skeleton-breadcrumb"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="skeleton-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="skeleton-text skeleton-small-title mb-2"></div>
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-underline mb-4"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>

          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="col-lg-4 col-md-6">
                <div className="skeleton-card">
                  <div className="skeleton-image skeleton-card-image"></div>
                  <div className="skeleton-card-body">
                    <div className="skeleton-text skeleton-card-title mb-3"></div>
                    <div className="skeleton-text skeleton-paragraph mb-2"></div>
                    <div className="skeleton-text skeleton-paragraph mb-2"></div>
                    <div className="skeleton-text skeleton-paragraph mb-4"></div>
                    <div className="skeleton-features">
                      {[1, 2, 3, 4].map((feature) => (
                        <div key={feature} className="skeleton-text skeleton-feature mb-1"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderContactSkeleton = () => (
    <>
      {/* Hero Section */}
      <div className="skeleton-hero skeleton-cover">
        <div className="container">
          <div className="text-center">
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-text skeleton-breadcrumb mb-3"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="skeleton-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="skeleton-text skeleton-title mb-4"></div>
              <div className="skeleton-text skeleton-subtitle mb-4"></div>
              
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="d-flex align-items-center mb-4">
                  <div className="skeleton-icon me-4"></div>
                  <div className="flex-grow-1">
                    <div className="skeleton-text skeleton-small-title mb-1"></div>
                    <div className="skeleton-text skeleton-contact-info"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-7">
              <div className="skeleton-form">
                <div className="skeleton-text skeleton-title mb-3"></div>
                <div className="skeleton-text skeleton-subtitle mb-4"></div>
                
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="skeleton-input"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="skeleton-input"></div>
                  </div>
                </div>
                
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="skeleton-input"></div>
                  </div>
                  <div className="col-md-6">
                    <div className="skeleton-input"></div>
                  </div>
                </div>
                
                <div className="skeleton-textarea mb-4"></div>
                <div className="skeleton-button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderVGDCSkeleton = () => (
    <>
      {/* Hero Section */}
      <div className="skeleton-hero skeleton-cover">
        <div className="container">
          <div className="text-center">
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-text skeleton-breadcrumb mb-3"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="skeleton-section">
        <div className="container">
          <div className="text-center mb-5">
            <div className="skeleton-text skeleton-small-title mb-2"></div>
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-underline mb-4"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="skeleton-text skeleton-badge mb-4"></div>
              <div className="skeleton-text skeleton-title mb-4"></div>
              <div className="skeleton-text skeleton-paragraph mb-3"></div>
              <div className="skeleton-text skeleton-paragraph mb-4"></div>
              
              <div className="row g-3 mb-4">
                {[1, 2, 3].map((stat) => (
                  <div key={stat} className="col-4">
                    <div className="text-center">
                      <div className="skeleton-text skeleton-stat-number mb-1"></div>
                      <div className="skeleton-text skeleton-stat-label"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="skeleton-button"></div>
            </div>
            <div className="col-lg-6">
              {[1, 2, 3, 4].map((feature) => (
                <div key={feature} className="d-flex align-items-start mb-4">
                  <div className="skeleton-icon me-4"></div>
                  <div className="flex-grow-1">
                    <div className="skeleton-text skeleton-feature-title mb-2"></div>
                    <div className="skeleton-text skeleton-paragraph"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="skeleton-section bg-primary">
        <div className="container">
          <div className="text-center mb-5">
            <div className="skeleton-text skeleton-title mb-3"></div>
            <div className="skeleton-text skeleton-subtitle"></div>
          </div>
          
          <div className="row g-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="col-lg-3 col-md-6">
                <div className="skeleton-image skeleton-gallery-image"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'services':
        return renderServicesSkeleton();
      case 'contact':
        return renderContactSkeleton();
      case 'vgdc':
        return renderVGDCSkeleton();
      default:
        return renderAboutSkeleton();
    }
  };

  return (
    <div className="skeleton-wrapper">
      {renderSkeleton()}
    </div>
  );
};

export default SkeletonLoader;