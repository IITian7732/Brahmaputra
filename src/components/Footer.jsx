import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Map } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import brahmaLogo from '../assets/Brahma Logo.jpeg';
import brahmaMapPdf from '../assets/Brahmaputra_Hostel_Map.pdf';
import BrahmaMapModal from './BrahmaMapModal';
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
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <>
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
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Contact Info ── */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Office</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={16} className="contact-icon" />
                  <span>Brahmaputra Hostel, IIT Guwahati, Guwahati — 781039, Assam</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={16} className="contact-icon" />
                  <span>+91 361 258 2772 (Hostel Office)</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={16} className="contact-icon" />
                  <span>brahmaputra_off@iitg.ac.in</span>
                </div>
              </div>
            </div>

            {/* ── Col 4: Campus Map ── */}
            <div className="footer-col">
              <h4 className="footer-col-title">Campus &amp; Hostel Maps</h4>
              <p className="footer-col-desc">
                Find Brahmaputra Hostel on the IIT Guwahati campus map or explore our internal floor layout.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                <a
                  href="https://www.iitg.ac.in/iitg_campusmap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-pill"
                >
                  📍 Open Campus Map
                  <ExternalLink size={11} />
                </a>
                <button
                  onClick={() => setShowMapModal(true)}
                  className="maps-pill brahma-map-pill"
                  style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                  title="Open Brahmaputra Hostel Floor Map"
                >
                  <Map size={13} /> Brahmaputra Map
                </button>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="footer-bottom">
            <p>© 2026–27 Brahmaputra HMC, IIT Guwahati. All rights reserved.</p>
            <p>Made with <span style={{ color: 'var(--brand-orange)' }}>❤️</span> by Brahmaputra HMC</p>
          </div>
        </div>
      </footer>

      {/* ── Interactive Floor Map Modal ── */}
      {showMapModal && <BrahmaMapModal onClose={() => setShowMapModal(false)} />}
    </>
  );
};

export default Footer;
