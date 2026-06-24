import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroDashboard from './components/HeroDashboard';
import HistoryLegacy from './components/HistoryLegacy';
import FacilityTracker from './components/FacilityTracker';
import QuickLinks from './components/QuickLinks';
import HallOfFame from './components/HallOfFame';
import AlumniDirectory from './components/AlumniDirectory';
import Guidelines from './components/Guidelines';
import { ChevronUp } from 'lucide-react';
import './App.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <section id="home">
          <HeroDashboard />
        </section>
        
        <section id="legacy">
          <HistoryLegacy />
        </section>
        
        <section id="facilities">
          <FacilityTracker />
        </section>
        
        <section id="quick-links">
          <QuickLinks />
        </section>
        
        <section id="hof">
          <HallOfFame />
        </section>
        
        <section id="alumni">
          <AlumniDirectory />
        </section>

        <section id="guidelines">
          <Guidelines />
        </section>
      </main>

      <Footer />

      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--primary)',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
