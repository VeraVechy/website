import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import VGDChallenge from './components/VGDChallenge';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h3 className="mt-3 text-danger">Vechy Graphix</h3>
          <p className="text-muted">Loading your creative experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App fade-in">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/vgdc" element={<VGDChallenge />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>

      <style jsx>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fff, #f8f9fa);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loading-content {
          text-align: center;
          animation: fadeInUp 0.8s ease-out;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #E71800;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;