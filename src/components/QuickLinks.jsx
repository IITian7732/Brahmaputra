import React from 'react';
import { AlertTriangle, Sparkles, AlertCircle, Wifi, MessageCircle, Camera, ExternalLink } from 'lucide-react';
import { PiMicrosoftOutlookLogo } from 'react-icons/pi';
import './QuickLinks.css';

const QuickLinks = () => {
  const complaintForms = [
    {
      title: "IMP Complaint",
      desc: "Maintenance and infrastructure issues",
      icon: <AlertTriangle size={24} />,
      link: "https://www.iitg.ac.in/ipm/complaint/",
      color: "#DC2626"
    },
    {
      title: "Room Cleaning",
      desc: "Request room sweeping or mopping",
      icon: <Sparkles size={24} />,
      link: "#",
      color: "#2563EB"
    },
    {
      title: "Appliance Complaint",
      desc: "Washing machine or water cooler issues",
      icon: <AlertCircle size={24} />,
      link: "#",
      color: "#EA580C"
    },
    {
      title: "LAN Network Complaint",
      desc: "Internet, Wi-Fi, or LAN port issues",
      icon: <Wifi size={24} />,
      link: "https://www.iitg.ac.in/cb/",
      color: "#7C3AED"
    }
  ];

  const connectLinks = [
    {
      title: "WhatsApp Group",
      desc: "Join the official community",
      icon: <MessageCircle size={24} />,
      link: "#",
      color: "#16A34A"
    },
    {
      title: "Instagram",
      desc: "Follow us for updates and events",
      icon: <Camera size={24} />,
      link: "https://www.instagram.com/brahmaputra_hostel_iitg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "#DB2777"
    },
    {
      title: "Outlook Email",
      desc: "Official college communications",
      icon: <PiMicrosoftOutlookLogo size={24} />,
      link: "#",
      color: "#1D4ED8"
    }
  ];

  const ButtonRow = ({ item }) => (
    <a 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="action-button-row"
      style={{ borderLeftColor: item.color }}
    >
      <div className="action-icon" style={{ color: item.color }}>
        {item.icon}
      </div>
      <div className="action-content">
        <div className="action-title">{item.title}</div>
        <div className="action-desc">{item.desc}</div>
      </div>
      <div className="action-arrow">
        <ExternalLink size={20} />
      </div>
    </a>
  );

  return (
    <div className="section quick-links">
      <div className="container">
        <h2 className="section-title">Quick Links & Grievances</h2>
        
        <div className="ql-grid">
          {/* Left Column */}
          <div className="ql-column">
            <h3 className="ql-column-title">Complaint Forms</h3>
            <div className="ql-list">
              {complaintForms.map((item, idx) => (
                <ButtonRow key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="ql-column">
            <h3 className="ql-column-title">Connect With Us</h3>
            <div className="ql-list">
              {connectLinks.map((item, idx) => (
                <ButtonRow key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
