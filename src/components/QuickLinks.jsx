import React from 'react';
import { AlertTriangle, Sparkles, AlertCircle, Wifi, MessageSquare, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import './QuickLinks.css';

const complaintForms = [
  {
    title: 'IMP Complaint Portal',
    desc: 'Report furniture, plumbing, electrical, carpentry issues',
    icon: <AlertTriangle size={20} />,
    link: 'https://www.iitg.ac.in/ipm/complaint/',
    color: '#DC2626',
  },
  {
    title: 'Room Cleaning Service',
    desc: 'Request room cleaning and housekeeping service',
    icon: <Sparkles size={20} />,
    link: 'https://forms.gle/CFo3R29hqZwK3nMj7',
    color: '#2563EB',
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
  },
];

const ComplaintRow = ({ item }) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="action-row"
    style={{ borderLeftColor: item.color }}
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

const ConnectRow = ({ item }) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="action-row connect-row"
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

const QuickLinks = () => {
  return (
    <div className="section quick-links bg-light">
      <div className="container">
        <h2 className="section-title">Quick Links &amp; Grievances</h2>
        <p className="ql-subtitle">Fast access to everything you need — forms, socials, and official channels</p>

        <div className="ql-grid">
          {/* Left: Complaint Forms */}
          <div className="ql-col">
            <h3 className="ql-col-title">Complaint Forms</h3>
            <div className="ql-list">
              {complaintForms.map((item, i) => (
                <ComplaintRow key={i} item={item} />
              ))}
            </div>
          </div>

          {/* Right: Connect With Us */}
          <div className="ql-col">
            <h3 className="ql-col-title">Connect With Us</h3>
            <div className="ql-list">
              {connectLinks.map((item, i) => (
                <ConnectRow key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
