import React, { useState } from 'react';
import { Mail, Phone, ChevronDown, Heart } from 'lucide-react';
import imgBPanda from '../assets/Biranchi Panda.png';
import imgAshwini from '../assets/Dr. Ashwini Sawant.png';
import imgSparsh from '../assets/Sparsh Johari.png';
import imgDivyanshu from '../assets/Divyanshu Yadav.png';
import imgPriyanshu from '../assets/Priyanshu Bharadwaj.png';
import imgPruthvi from '../assets/Pruthvi haleholi.png';
import imgRaj from '../assets/Raj Singh.png';
import imgSameer from '../assets/Sameer Tilkar.png';
import imgShikhar from '../assets/Shikhar Jindal.png';
import imgAbhishekSharm from '../assets/Abhishek Sharm.png';
import imgHarshawardhan from '../assets/Harshawardhan.png';
import imgAdityaJain from '../assets/Aditya Jain.png';
import imgAbhishekGind from '../assets/Abhishek Gind.png';
import imgParasKatiyar from '../assets/paras katiyar.png';
import imgAbhijeet from '../assets/Abhijeet.png';
import imgYashJaiswal from '../assets/Yash Jaiswal.jpeg';
import imgChinmay from '../assets/Chinmay.png';
import imgYasharth from '../assets/Yasharth Singh.png';
import imgAnany from '../assets/Anany Sihare.png';
import imgAryan from '../assets/Aryan Singh.png';
import imgAdi from '../assets/Adi Jain.png';
import imgAnupam from '../assets/Anupam Ajay Pratap Singh.png';
import imgAyush from '../assets/Ayush Sahu.png';
import imgAbhinav from '../assets/Abhinav Gundumalla.png';
import imgAshutosh from '../assets/Ashutosh Singh.png';
import imgHarsh from '../assets/Harsh Shukla.png';
import imgNonOne from '../assets/Non One.jpeg';
import imgSidharthTripathi from '../assets/Siddharth Tripathi.png';
import './HallOfFame.css';

/* ── Portfolio Badge Config ── */
const portfolioBadge = (role) => {
  const r = role.toLowerCase();
  if (r.includes('general sec') || r.includes('gen. sec') || r.includes('general secretary'))
    return { bg: '#E87722', color: '#fff', label: role };
  if (r.includes('sports'))
    return { bg: '#DBEAFE', color: '#1E40AF', label: role };
  if (r.includes('mess') || r.includes('food') || r.includes('canteen'))
    return { bg: '#FEF3C7', color: '#92400E', label: role };
  if (r.includes('maintenance'))
    return { bg: '#FEE2E2', color: '#991B1B', label: role };
  if (r.includes('cultural'))
    return { bg: '#EDE9FE', color: '#5B21B6', label: role };
  if (r.includes('technical') || r.includes('media'))
    return { bg: '#DCFCE7', color: '#166534', label: role };
  // default: secretary / welfare / literary / service
  return { bg: '#F3F4F6', color: '#374151', label: role };
};

const wardens = [
  { name: 'B. Panda Sir', role: 'Chief Warden', email: 'warden.brahmaputra@iitg.ac.in', phone: '+91 96330 37489', image: imgBPanda },
  { name: 'Ashwini Sir', role: 'Associate Warden', email: 'warden.brahmaputra@iitg.ac.in', phone: '+91 93379 95167', image: imgAshwini },
  { name: 'Sparsh Sir', role: 'Associate Warden', email: 'warden.brahmaputra@iitg.ac.in', phone: '+91 78270 60976', image: imgSparsh },
];

const currentHMC = [
  { role: 'General Secretary',   name: 'Paras Katiyaar',     email: 'gs.brahmaputra@iitg.ac.in', phone: '+91 6387 843 598', image: imgParasKatiyar },
  { role: 'Associate Gen. Sec.', name: 'Sidharth Tripathi',  email: 's.tripathi@iitg.ac.in',     phone: '+91 96854 90845', image: imgSidharthTripathi },
  { role: 'Sports Secretary',    name: 'Divyanshu Singh',    email: 'divyanshu.kumar@iitg.ac.in',phone: '+91 95366 82179', image: imgDivyanshu },
  { role: 'Service Secretary',   name: 'Shikhar Jindal',     email: 'ss.brahmaputra@iitg.ac.in', phone: '+91 98298 63827', image: imgShikhar },
  { role: 'Technical Secretary', name: 'Pruthvi Haleholi',   email: 'h.pruthvi@iitg.ac.in',      phone: '+91 96865 14772', image: imgPruthvi },
  { role: 'Welfare Secretary',   name: 'Priyanshu Bharadwaj',email: 'p.bhardwaj@iitg.ac.in',     phone: '+91 91420 29326', image: imgPriyanshu },
  { role: 'Maintenance Sec.',    name: 'Sameer Tikar',       email: 'ms.brahmaputra@iitg.ac.in', phone: '+91 82248 59160', image: imgSameer },
  { role: 'Literary Secretary',  name: 'Raj Singh',          email: 'rajks6055@iitg.ac.in',      phone: '+91 70073 24283', image: imgRaj },
  { role: 'Cultural Secretary',  name: 'To be updated',      email: '—', phone: '—', image: imgNonOne },
  { role: 'Media Head',          name: 'To be updated',      email: '—', phone: '—', image: imgNonOne },
];

const pastHMC = [
  {
    year: '2025-2026',
    members: [
      { role: 'General Secretary',   name: 'Abhishek Sharma',   image: imgAbhishekSharm },
      { role: 'Associate Gen. Sec.', name: 'Harshavardhan',     image: imgHarshawardhan },
      { role: 'Technical Secretary', name: 'Aditya Jain',       image: imgAdityaJain },
      { role: 'Sports Secretary',    name: 'Abhishek Gond',     image: imgAbhishekGind },
      { role: 'Welfare Secretary',   name: 'Paras Katiyar',     image: imgParasKatiyar },
      { role: 'Service Secretary',   name: 'Abhijeet Kumar',    image: imgAbhijeet },
      { role: 'Maintenance Sec.',    name: 'Yash Jaiswal',      image: imgYashJaiswal },
      { role: 'Literary Secretary',  name: 'Chinmay Torvi',     image: imgChinmay },
      { role: 'Media Head',          name: 'Pruthvi S H',       image: imgPruthvi },
    ],
  },
  {
    year: '2024-2025',
    members: [
      { role: 'General Secretary',   name: 'Yasharth Singh',    image: imgYasharth },
      { role: 'Associate Gen. Sec.', name: 'Anany Sihare',      image: imgAnany },
      { role: 'Sports Secretary',    name: 'Aryan Singh',       image: imgAryan },
      { role: 'Technical Secretary', name: 'Adi Jain',          image: imgAdi },
      { role: 'Service Secretary',   name: 'Anupam A P Singh',  image: imgAnupam },
      { role: 'Cultural Secretary',  name: 'Ayush Sahu',        image: imgAyush },
      { role: 'Welfare Secretary',   name: 'Abhinav Gundumalla',image: imgAbhinav },
      { role: 'Maintenance Sec.',    name: 'Abhishek Sharma',   image: imgAbhishekSharm },
      { role: 'Literary Secretary',  name: 'Ashutosh Singh',    image: imgAshutosh },
      { role: 'Media Head',          name: 'Harsh Shukla',      image: imgHarsh },
    ],
  },
];

const HallOfFame = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  return (
    <div className="section hall-of-fame bg-light" id="hmc">
      <div className="container">
        <h2 className="section-title">Hall of Fame &amp; HMC Portal</h2>
        <p className="hof-subtitle">Your hostel leadership — past and present</p>

        {/* ── Administration ── */}
        <div className="hof-block">
          <h3 className="hof-block-title">Administration</h3>
          <div className="admin-grid">
            {wardens.map((w, i) => (
              <div key={i} className="warden-card">
                <img
                  src={w.image}
                  alt={w.name}
                  className="warden-photo"
                  loading="lazy"
                  width="120" height="120"
                />
                <h4 className="warden-name">{w.name}</h4>
                <span className="warden-badge">{w.role}</span>
                <div className="warden-contacts">
                  <a href={`mailto:${w.email}`} className="warden-contact-link">
                    <Mail size={13} /> {w.email}
                  </a>
                  <a href={`tel:${w.phone}`} className="warden-contact-link muted">
                    <Phone size={13} /> {w.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Current HMC ── */}
        <div className="hof-block">
          <h3 className="hof-block-title">Current HMC (2026–2027)</h3>
          <p className="hof-block-sub">Your hostel management team — reach out for any queries</p>
          <div className="hmc-grid">
            {currentHMC.map((m, i) => {
              const badge = portfolioBadge(m.role);
              return (
                <div key={i} className="hmc-card">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="hmc-photo"
                    loading="lazy"
                    width="80" height="80"
                  />
                  <div className="hmc-name">{m.name}</div>
                  <span className="portfolio-badge" style={{ background: badge.bg, color: badge.color }}>
                    {m.role}
                  </span>
                  {m.email !== '—' && (
                    <div className="hmc-contacts">
                      <a href={`mailto:${m.email}`} className="hmc-contact-link">
                        <Mail size={12} /> {m.email}
                      </a>
                      <a href={`tel:${m.phone}`} className="hmc-contact-link muted">
                        <Phone size={12} /> {m.phone}
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── X-HMC Tribute ── */}
        <div className="hof-block">
          <h3 className="hof-block-title xhmc-title">
            X-HMC Tribute <Heart size={18} style={{ color: '#E87722', marginLeft: 6 }} />
          </h3>
          <p className="hof-block-sub" style={{ fontStyle: 'italic' }}>
            Honoring those who served Brahmaputra with dedication
          </p>

          {pastHMC.map((item, idx) => {
            const isOpen = expandedYear === item.year;
            return (
              <div key={idx} className="xhmc-group">
                <button
                  className="xhmc-accordion-btn"
                  onClick={() => setExpandedYear(isOpen ? null : item.year)}
                  aria-expanded={isOpen}
                >
                  <span className="xhmc-year-label">
                    {item.year} Council
                    <span className="xhmc-count">({item.members.length} members)</span>
                  </span>
                  <ChevronDown
                    size={20}
                    className="xhmc-chevron"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {isOpen && (
                  <div className="hmc-grid xhmc-members">
                    {item.members.map((m, mIdx) => {
                      const badge = portfolioBadge(m.role);
                      const yearLabel = item.year.split('-')[1] || item.year;
                      return (
                        <div key={mIdx} className="hmc-card xhmc-card">
                          <div className="xhmc-served-badge">Served: {yearLabel}</div>
                          <img
                            src={m.image}
                            alt={m.name}
                            className="hmc-photo xhmc-photo"
                            loading="lazy"
                            width="80" height="80"
                          />
                          <div className="hmc-name">{m.name}</div>
                          <span className="portfolio-badge" style={{ background: badge.bg, color: badge.color }}>
                            {m.role}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
