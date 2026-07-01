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
import WashingMachineTracker from './components/WashingMachineTracker';
import { ChevronUp } from 'lucide-react';
import './App.css';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />

      <main id="main">
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

        <section id="wm-tracker">
          <WashingMachineTracker />
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

      <button
        onClick={scrollToTop}
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}

export default App;
