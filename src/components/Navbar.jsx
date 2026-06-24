import React, { useState, useEffect } from 'react';
import { Menu, X, AlertTriangle } from 'lucide-react';
import brahmaLogo from '../assets/Brahma Logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About The Legacy', href: '#legacy' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'HMC & Alumni', href: '#hof' },
    { name: 'Rules', href: '#guidelines' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-area">
          <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={brahmaLogo} alt="Brahmaputra Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} loading="lazy" width="40" height="40" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="logo-text text-primary">Brahmaputra</span>
              <span className="logo-subtext">Hostel</span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#quick-links" className="btn btn-primary btn-complaint">
            <AlertTriangle size={18} />
            <span>Quick Complaints</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#quick-links" 
              className="btn btn-primary mobile-btn-complaint"
              onClick={() => setMobileMenuOpen(false)}
            >
              <AlertTriangle size={18} />
              <span>Quick Complaints</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
