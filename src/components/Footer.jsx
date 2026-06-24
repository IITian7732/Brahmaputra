import React, { useState } from 'react';
import { Mail, Phone, MapPin, Home, MessageCircle, X } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import iitgMap from '../assets/IITG Campus Map.png';
import './Footer.css';

const Footer = () => {
  const [isMapEnlarged, setIsMapEnlarged] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">
              <span className="text-primary">Brahmaputra</span> Hostel
            </h3>
            <p className="footer-desc">
              The premier student residence of IIT Guwahati, fostering a legacy of excellence, brotherhood, and innovation.
            </p>
            <div className="social-links">
              <a href="#home" className="social-link"><Home size={20} /></a>
              <a href="https://www.instagram.com/brahmaputra_hostel_iitg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="social-link"><FaInstagram size={20} /></a>
              <a href="#" className="social-link"><FaWhatsapp size={20} /></a>
              <a href="#" className="social-link"><PiMicrosoftOutlookLogo size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About The Legacy</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#hmc">HMC & Alumni</a></li>
              <li><a href="#rules">Rules & Guidelines</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} className="text-primary" />
                <span>IIT Guwahati Campus, North Guwahati, Assam 781039</span>
              </li>
              <li>
                <Phone size={18} className="text-primary" />
                <span>+91 XXXXXXXXXX (Hostel Office)</span>
              </li>
              <li>
                <Mail size={18} className="text-primary" />
                <span>brahmaputra_off@iitg.ac.in</span>
              </li>
            </ul>
          </div>

          <div className="footer-col map-col">
            <h4 className="footer-title">Location</h4>
            <div className="map-container" onClick={() => setIsMapEnlarged(true)} style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
              <img src={iitgMap} alt="IITG Map" style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }} loading="lazy" width="800" height="450" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Brahmaputra Hostel, IIT Guwahati. All rights reserved.</p>
          <p>Designed with <span className="text-primary">♥</span> for Brahmaputrians.</p>
        </div>
      </div>

      {isMapEnlarged && (
        <div className="map-modal-overlay" onClick={() => setIsMapEnlarged(false)}>
          <div className="map-modal-content" onClick={e => e.stopPropagation()}>
            <button className="map-modal-close" onClick={() => setIsMapEnlarged(false)}>
              <X size={32} />
            </button>
            <img src={iitgMap} alt="IITG Map Enlarged" className="map-modal-image" loading="lazy" width="800" height="450" />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
