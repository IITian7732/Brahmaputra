import React, { useState } from 'react';
import { AlertTriangle, Sparkles, AlertCircle, Wifi, MessageSquare, ExternalLink, X } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import './QuickLinks.css';

const complaintForms = [
  {
    title: 'IPM Complaint Portal',
    desc: 'Report furniture, plumbing, electrical, carpentry issues',
    icon: <AlertTriangle size={20} />,
    link: 'https://www.iitg.ac.in/ipm/complaint/',
    color: '#DC2626',
    requiresModal: true,
  },
  {
    title: 'Room Cleaning Service',
    desc: 'Request room cleaning and housekeeping service. Timing: 10 AM to 5 PM',
    icon: <Sparkles size={20} />,
    link: 'https://forms.gle/CFo3R29hqZwK3nMj7',
    color: '#2563EB',
    unavailable: true,
  },
  {
    title: 'Appliance Complaint',
    desc: 'Washing machines, water coolers, vending machine, pantry issues',
    icon: <AlertCircle size={20} />,
    link: 'https://forms.gle/xgCExftZyc2RvevL8',
    color: '#EA580C',
  },
  {
    title: 'LAN / Network Complaint',
    desc: 'Report internet, LAN, or network connectivity issues',
    icon: <Wifi size={20} />,
    link: 'https://www.iitg.ac.in/cb/',
    color: '#7C3AED',
  },
  {
    title: 'General Complaints & Suggestions',
    desc: 'Report general complaints or suggestions for the hostel other than above options',
    icon: <MessageSquare size={20} />,
    link: 'https://forms.gle/bMJ83nc4gFgawNkc9',
    color: '#0D9488',
  },
];

const connectLinks = [
  {
    title: 'Brahmaputra WhatsApp Group',
    desc: 'Official announcements and hostel updates',
    icon: <FaWhatsapp size={20} />,
    link: '#',
    iconBg: '#DCFCE7',
    iconColor: '#16A34A',
    unavailable: true,
  },
  {
    title: '@brahmaputra_iitg',
    desc: 'Hostel life, events, and memories',
    icon: <FaInstagram size={20} />,
    link: 'https://www.instagram.com/brahmaputra_hostel_iitg',
    iconBg: '#FCE7F3',
    iconColor: '#BE185D',
  },
  {
    title: 'Brahmaputra Official Email',
    desc: 'For formal communication and queries',
    icon: <PiMicrosoftOutlookLogo size={20} />,
    link: 'mailto:brahmaputra_off@iitg.ac.in',
    iconBg: '#DBEAFE',
    iconColor: '#1D4ED8',
    unavailable: true,
  },
];

const ComplaintRow = ({ item, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="action-row"
      style={{ borderLeftColor: item.color }}
      onClick={handleClick}
    >
      <div className="action-icon-plain" style={{ color: item.color }}>
        {item.icon}
      </div>
      <div className="action-text">
        <div className="action-title">{item.title}</div>
        <div className="action-desc">{item.desc}</div>
      </div>
      <ExternalLink size={14} className="action-arrow" />
    </a>
  );
};

const ConnectRow = ({ item, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="action-row connect-row"
      onClick={handleClick}
    >
      <div
        className="action-icon-square"
        style={{ background: item.iconBg, color: item.iconColor }}
      >
        {item.icon}
      </div>
      <div className="action-text">
        <div className="action-title">{item.title}</div>
        <div className="action-desc">{item.desc}</div>
      </div>
      <ExternalLink size={14} className="action-arrow" />
    </a>
  );
};

const QuickLinks = () => {
  const [modalData, setModalData] = useState(null);

  const handleLinkClick = (item) => {
    if (item.requiresModal) {
      setModalData({ type: 'ipm', item });
    } else if (item.unavailable) {
      setModalData({ type: 'unavailable', item });
    }
  };

  const closeModal = () => setModalData(null);

  const handleAction = () => {
    if (modalData && modalData.item) {
      window.open(modalData.item.link, '_blank', 'noopener,noreferrer');
      closeModal();
    }
  };

  return (
    <div className="section quick-links bg-light" id="quick-links">
      <div className="container">
        <h2 className="section-title">Quick Links &amp; Grievances</h2>
        <p className="ql-subtitle">Fast access to everything you need — forms, socials, and official channels</p>

        <div className="ql-grid">
          {/* Left: Complaint Forms */}
          <div className="ql-col">
            <h3 className="ql-col-title">Complaint Forms</h3>
            <div className="ql-list">
              {complaintForms.map((item, i) => (
                <ComplaintRow 
                  key={i} 
                  item={item} 
                  onClick={(item.requiresModal || item.unavailable) ? () => handleLinkClick(item) : undefined} 
                />
              ))}
            </div>
          </div>

          {/* Right: Connect With Us */}
          <div className="ql-col">
            <h3 className="ql-col-title">Connect With Us</h3>
            <div className="ql-list">
              {connectLinks.map((item, i) => (
                <ConnectRow 
                  key={i} 
                  item={item} 
                  onClick={(item.requiresModal || item.unavailable) ? () => handleLinkClick(item) : undefined} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalData && modalData.type === 'ipm' && (
        <div className="ipm-modal-overlay" onClick={closeModal}>
          <div className="ipm-modal" onClick={e => e.stopPropagation()}>
            <div className="ipm-modal-header">
              <h3 className="ipm-modal-title">Important</h3>
              <button className="ipm-modal-close" onClick={closeModal}><X size={20} /></button>
            </div>
            <p className="ipm-modal-text">
              To proceed, your account must be registered in the Complaint System. If you haven't registered yet, register yourself first!
            </p>
            <div className="ipm-modal-actions">
              <button className="ipm-modal-btn" onClick={handleAction}>Register</button>
              <button className="ipm-modal-btn" onClick={handleAction}>Proceed</button>
            </div>
          </div>
        </div>
      )}

      {modalData && modalData.type === 'unavailable' && (
        <div className="ipm-modal-overlay" onClick={closeModal}>
          <div className="ipm-modal" onClick={e => e.stopPropagation()}>
            <div className="ipm-modal-header">
              <h3 className="ipm-modal-title">Feature Unavailable</h3>
              <button className="ipm-modal-close" onClick={closeModal}><X size={20} /></button>
            </div>
            <p className="ipm-modal-text">
              This feature is unavailable currently.
            </p>
            <div className="ipm-modal-actions">
              <button className="ipm-modal-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLinks;

