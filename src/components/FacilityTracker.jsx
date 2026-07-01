import React from 'react';
import {
  ShieldCheck, Building, Dumbbell, Trophy, Tv, BookOpen,
  Music, Coffee, Store, Map, ShoppingCart, Clock, ExternalLink
} from 'lucide-react';
import './FacilityTracker.css';

/*
  3 rows × 4 columns = 12 facilities
  Row 1 — GRAY  (Services): Hostel Office, Security Desk, Stationary Shop, Vending Machine
  Row 2 — GREEN (Sports & Leisure): GYM, Music Room, Sports Room, TV Room
  Row 3 — BLUE  (Academic & Food): Library, Canteen & Juice, Hostel Ground, Pantry
*/
const facilities = [
  /* ─── Row 1: Gray / Services ─── */
  { name: 'Hostel Office',    icon: <Building size={24}/>,    category: 'services', timing: '9:00 AM – 5:00 PM', desc: 'Administrative tasks, Warden offices, and hostel works.',               status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Security Desk',   icon: <ShieldCheck size={24}/>, category: 'services', timing: '24 × 7',             desc: 'Main entrance monitoring, visitor logs and gate passes.',              status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Stationary Shop', icon: <ShoppingCart size={24}/>,category: 'services', timing: '10:00 AM – 10:00 PM',desc: 'All daily and academic essentials available for students.',             status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Vending Machine',  icon: <Coffee size={24}/>,      category: 'services', timing: '24 × 7',             desc: 'Snacks and drinks available near the security desk.',                  status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },

  /* ─── Row 2: Green / Sports & Leisure ─── */
  { name: 'GYM',              icon: <Dumbbell size={24}/>,    category: 'sports',   timing: '6:00 AM – 10:00 PM', desc: 'Well-equipped gym for fitness enthusiasts and athletes.',               status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Music Room',       icon: <Music size={24}/>,       category: 'sports',   timing: '4:00 PM – 9:00 PM',  desc: 'Soundproof room with guitar, drums, speaker, and flute.',              status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Sports Room',      icon: <Trophy size={24}/>,      category: 'sports',   timing: '10:00 AM – 11:00 PM',desc: 'Carrom, Chess, Foosball, Billiards, Table Tennis.',                     status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'TV Room',          icon: <Tv size={24}/>,          category: 'sports',   timing: '6:00 PM – 11:00 PM', desc: 'Watch matches and movies with friends in the common room.',            status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },

  /* ─── Row 3: Blue / Academic & Food ─── */
  { name: 'Library',          icon: <BookOpen size={24}/>,    category: 'study',    timing: '8:00 AM – 11:00 PM', desc: 'Quiet study space with reference materials and books.',                 status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Canteen & Juice',  icon: <Store size={24}/>,       category: 'study',    timing: '9:00 AM – 10:00 PM', desc: 'Snacks, beverages, fresh juices, and late-night meals.',               status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Hostel Ground',    icon: <Map size={24}/>,         category: 'study',    timing: '24 × 7',             desc: 'Volleyball, Badminton, Football, and Cricket ground.',                 status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
  { name: 'Pantry',           icon: <Coffee size={24}/>,      category: 'study',    timing: '10:00 AM – 12:00 PM',desc: 'Microwave and induction cooktop for personal cooking.',                status: 'Working',  reportUrl: 'https://www.iitg.ac.in/ipm/complaint/' },
];

const categoryConfig = {
  services: { color: '#6B7280', bg: '#6B728015' },
  sports:   { color: '#22C55E', bg: '#22C55E15' },
  study:    { color: '#3B82F6', bg: '#3B82F615' },
};

const statusConfig = {
  'Working':           { bg: '#DCFCE7', color: '#166534', icon: '●', label: 'Working' },
  'Under Maintenance': { bg: '#FEF9C3', color: '#854D0E', icon: '⚠', label: 'Maintenance' },
  'Not Working':       { bg: '#FEE2E2', color: '#991B1B', icon: '✕', label: 'Not Working' },
};

const FacilityTracker = () => (
  <div className="section facility-tracker bg-light">
    <div className="container">
      <h2 className="section-title">Facilities &amp; Utilities</h2>
      <p className="fac-subtitle">Everything you need, right in your hostel — live status updated daily</p>

      {/* Status Legend */}
      <div className="status-legend">
        {Object.values(statusConfig).map(cfg => (
          <span key={cfg.label} className="legend-pill" style={{ background: cfg.bg, color: cfg.color }}>
            {cfg.icon} {cfg.label}
          </span>
        ))}
      </div>

      {/* Row labels */}
      <div className="fac-row-labels">
        <div className="fac-row-label" style={{ color: '#6B7280' }}>
          <span className="fac-row-dot" style={{ background: '#6B7280' }} /> Services
        </div>
        <div className="fac-row-label" style={{ color: '#16A34A' }}>
          <span className="fac-row-dot" style={{ background: '#22C55E' }} /> Sports &amp; Leisure
        </div>
        <div className="fac-row-label" style={{ color: '#1D4ED8' }}>
          <span className="fac-row-dot" style={{ background: '#3B82F6' }} /> Academic &amp; Food
        </div>
      </div>

      {/* 4×3 Grid */}
      <div className="facilities-grid">
        {facilities.map((fac, idx) => {
          const cat = categoryConfig[fac.category];
          const st  = statusConfig[fac.status] || statusConfig['Working'];
          return (
            <div
              key={idx}
              className="facility-card card"
              style={{ borderLeft: `4px solid ${cat.color}` }}
            >
              {/* Photo / Icon area */}
              <div className="fac-photo-area" style={{ background: cat.bg }}>
                <div className="fac-photo-inner" style={{ color: cat.color, opacity: 0.4 }}>
                  {fac.icon}
                </div>
                <span className="fac-status-badge" style={{ background: st.bg, color: st.color }}>
                  {st.icon} {st.label}
                </span>
              </div>

              {/* Body */}
              <div className="fac-body">
                <div className="fac-icon-wrap" style={{ background: cat.bg, color: cat.color }}>
                  {fac.icon}
                </div>
                <h4 className="fac-name">{fac.name}</h4>
                {fac.timing && fac.timing !== '–' && (
                  <div className="fac-timing">
                    <Clock size={11} />
                    <span>{fac.timing}</span>
                  </div>
                )}
                <p className="fac-desc">{fac.desc}</p>
                <a href={fac.reportUrl} target="_blank" rel="noopener noreferrer" className="fac-report-link">
                  Report Issue <ExternalLink size={11} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default FacilityTracker;
