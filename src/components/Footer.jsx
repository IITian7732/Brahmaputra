import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import brahmaLogo from '../assets/Brahma Logo.jpeg';
import './Footer.css';

const quickLinks = [
  { label: 'Home',              href: '#home' },
  { label: 'About The Legacy', href: '#legacy' },
  { label: 'Facilities',       href: '#facilities' },
  { label: 'GC Championship',  href: '#gc' },
  { label: 'HMC Portal',       href: '#hmc' },
  { label: 'Alumni Directory', href: '#alumni' },
  { label: 'Guidelines',       href: '#guidelines' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* ── Col 1: Brand ── */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img
                src={brahmaLogo}
                alt="Brahmaputra Logo"
                width="44" height="44"
                style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)' }}
                loading="lazy"
              />
              <span className="footer-brand-name">Brahmaputra</span>
            </div>
            <p className="footer-tagline">
              The Legacy, The Brotherhood, The Excellence
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/brahmaputra_hostel_iitg" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="mailto:brahmaputra_off@iitg.ac.in" className="social-icon" aria-label="Email">
                <PiMicrosoftOutlookLogo size={18} />
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="footer-link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={15} className="footer-contact-icon" />
                <span>IIT Guwahati Campus, North Guwahati, Assam 781039</span>
              </li>
              <li>
                <Phone size={15} className="footer-contact-icon" />
                <span>+91 XXXXXXXXXX (Hostel Office)</span>
              </li>
              <li>
                <Mail size={15} className="footer-contact-icon" />
                <a href="mailto:brahmaputra_off@iitg.ac.in" className="footer-email-link">
                  brahmaputra_off@iitg.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Location ── */}
          <div className="footer-col">
            <h4 className="footer-col-title">Location</h4>
            <p className="footer-location-addr">
              Brahmaputra Hostel, IIT Guwahati,<br />
              Guwahati, Assam 781039
            </p>
            <a
              href="https://maps.google.com/?q=Brahmaputra+Hostel+IIT+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="maps-pill"
            >
              <MapPin size={13} /> Open in Maps
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <p>© 2026–27 Brahmaputra HMC, IIT Guwahati. All rights reserved.</p>
          <p>Made with <span style={{ color: 'var(--brand-orange)' }}>❤️</span> by Brahmaputra HMC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
