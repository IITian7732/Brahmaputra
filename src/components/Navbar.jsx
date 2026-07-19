import React, { useState, useEffect } from 'react';
import { Menu, X, AlertTriangle } from 'lucide-react';
import brahmaLogo from '../assets/Brahma Logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active nav link via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'legacy', 'facilities', 'quick-links', 'hof', 'alumni', 'guidelines'];
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const navLinks = [
    { name: 'Home',             href: '#home',        id: 'home' },
    { name: 'About The Legacy', href: '#legacy',      id: 'legacy' },
    { name: 'Facilities',       href: '#facilities',  id: 'facilities' },
    { name: 'HMC & Alumni',     href: '#hof',         id: 'hof' },
    { name: 'Rules',            href: '#guidelines',  id: 'guidelines' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo" aria-label="Brahmaputra Hostel Home">
          <img
            src={brahmaLogo}
            alt="Brahmaputra Hostel Logo"
            width="40" height="40"
            style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            loading="eager"
          />
          <div className="logo-text-block">
            <span className="logo-name">Brahmaputra</span>
            <span className="logo-sub">Hostel · IIT Guwahati</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quick-links" className="btn btn-primary btn-complaint">
            <AlertTriangle size={15} />
            Quick Complaints
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Full-screen Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="mobile-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={28} />
        </button>

        <div className="mobile-logo">
          <img src={brahmaLogo} alt="Logo" width="48" height="48"
            style={{ borderRadius: '50%', objectFit: 'cover' }} />
          <span className="logo-name" style={{ fontSize: '20px', color: 'var(--brand-orange)' }}>
            Brahmaputra
          </span>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1.5rem' }}>
            <a
              href="#quick-links"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <AlertTriangle size={16} /> Quick Complaints
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
