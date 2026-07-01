import React, { useState } from 'react';
import { Trophy, Medal, ChevronDown } from 'lucide-react';
import hostelImage from '../assets/hostel.jpg';
import './HistoryLegacy.css';

/* ── GC Data ── */
const trophyData = {
  '2024-25': [
    { sport: 'Cricket',       position: 1, medal: 'gold' },
    { sport: 'Football',      position: 1, medal: 'gold' },
    { sport: 'Badminton',     position: 2, medal: 'silver' },
    { sport: 'Basketball',    position: 2, medal: 'silver' },
    { sport: 'Table Tennis',  position: 3, medal: 'bronze' },
    { sport: 'Chess',         position: 3, medal: 'bronze' },
  ],
};

const standingsData = {
  '2024-25': [
    { rank: 1, hostel: 'Brahmaputra', points: 850 },
    { rank: 2, hostel: 'Kameng',      points: 820 },
    { rank: 3, hostel: 'Umiam',       points: 790 },
    { rank: 4, hostel: 'Barak',       points: 750 },
    { rank: 5, hostel: 'Manas',       points: 710 },
    { rank: 6, hostel: 'Lohit',       points: 680 },
    { rank: 7, hostel: 'Subansiri',   points: 650 },
  ],
};

const yearOptions = ['2024-25', '2023-24', '2022-23'];
const sportFilters = ['All', 'Cricket', 'Football', 'Badminton', 'Basketball', 'Table Tennis', 'Chess', 'Athletics', 'Volleyball'];
const milestones = [
  { year: '2011', desc: 'Brahmaputra Hostel established, first batch of residents' },
  { year: '2013', desc: 'First Inter-Hostel GC Championship victory' },
  { year: '2017', desc: 'Gym facility inaugurated, expanded sports equipment' },
  { year: '2021', desc: 'Music Room and new recreational areas added' },
  { year: '2024', desc: 'Juice Center & renovated common areas launched' },
];

const medaleColors = {
  gold:   { bg: '#FEF9C3', icon: '#F59E0B', label: '1st Place' },
  silver: { bg: '#F1F5F9', icon: '#64748B', label: '2nd Place' },
  bronze: { bg: '#FEF0E6', icon: '#C2410C', label: '3rd Place' },
};

const rankDisplay = (rank) => {
  if (rank === 1) return <span className="rank-badge rank-1">🥇</span>;
  if (rank === 2) return <span className="rank-badge rank-2">🥈</span>;
  if (rank === 3) return <span className="rank-badge rank-3">🥉</span>;
  return <span className="rank-badge">{rank}</span>;
};

const HistoryLegacy = () => {
  const [gcYear, setGcYear] = useState('2024-25');
  const [activeSport, setActiveSport] = useState('All');

  const trophies = trophyData[gcYear] || [];
  const standings = standingsData[gcYear] || [];
  const maxPoints = standings[0]?.points || 1;

  const filteredTrophies = activeSport === 'All'
    ? trophies
    : trophies.filter(t => t.sport === activeSport);

  return (
    <div className="history-legacy-wrapper">
      {/* ══ PART A — ABOUT THE LEGACY ══ */}
      <div className="legacy-section bg-light">
        <div className="container">
          <h2 className="section-title">About The Legacy</h2>
          <p className="section-subtitle">The Pride of IIT Guwahati</p>

          {/* Pull Quote */}
          <div className="pull-quote-wrap">
            <blockquote className="pull-quote">
              "A legacy forged over decades, embodying strength, resilience, and an unending pursuit of excellence."
            </blockquote>
            <p className="quote-author">— Brahmaputra Hostel, since 2011</p>
          </div>

          {/* Two-Column Grid */}
          <div className="legacy-grid">
            {/* Left: Text + Stats */}
            <div className="legacy-text-col">
              <p className="legacy-body">
                Brahmaputra Hostel is not just a residence — it is an emotion, a brotherhood, and a legacy forged over decades.
                Named after the mighty river that flows alongside the beautiful campus, Brahmaputra embodies strength,
                resilience, and an unending pursuit of excellence.
              </p>
              <p className="legacy-body">
                The hostel is the highest accommodating hostel in the history of IIT Guwahati. Constructed in a peaceful
                and vibrant environment, it imparts enthusiasm and endeavour in students who are always eager for innovation.
              </p>

              <div className="legacy-stats-row">
                {[
                  { num: '2011', lbl: 'Year Established' },
                  { num: '1200+', lbl: 'Total Capacity' },
                  { num: 'Boys', lbl: 'Hostel Type' },
                ].map(s => (
                  <div key={s.num} className="legacy-stat-box">
                    <span className="legacy-stat-num">{s.num}</span>
                    <span className="legacy-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo Collage */}
            <div className="legacy-photo-collage">
              <img
                src={hostelImage}
                alt="Brahmaputra Hostel exterior"
                className="collage-main"
                loading="lazy"
                width="400" height="300"
              />
              <div className="collage-side">
                <div className="collage-placeholder collage-top">
                  <Trophy size={28} style={{ color: 'var(--brand-orange)', opacity: 0.6 }} />
                  <span>GC Events</span>
                </div>
                <div className="collage-placeholder collage-bottom">
                  <Medal size={28} style={{ color: 'var(--brand-navy)', opacity: 0.6 }} />
                  <span>Hostel Life</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Timeline */}
          <div className="milestone-section">
            <h3 className="milestone-heading section-title" style={{ fontSize: '1.3rem', paddingTop: '20px' }}>OUR JOURNEY</h3>
            <div className="timeline-track">
              <div className="timeline-line" />
              {milestones.map((m, i) => (
                <div key={i} className="milestone-item">
                  <span className="milestone-year">{m.year}</span>
                  <div className="milestone-dot" />
                  <p className="milestone-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ PART B — GC CHAMPIONSHIP ══ */}
      <div className="gc-section" id="gc">
        <div className="container">
          <h2 className="section-title">Inter-Hostel GC Championship</h2>
          <p className="section-subtitle">Where Brahmaputra Shines — Our championship legacy</p>

          {/* GC Summary Stats */}
          <div className="gc-summary-stats">
            {[
              { num: '7', lbl: 'Championships Won' },
              { num: '1st', lbl: 'Current Standing 2024-25' },
              { num: 'Cricket', lbl: 'Strongest Sport' },
            ].map(s => (
              <div key={s.num} className="gc-stat-box">
                <span className="gc-stat-num">{s.num}</span>
                <span className="gc-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>

          {/* Year Selector */}
          <div className="year-selector">
            {yearOptions.map(yr => (
              <button
                key={yr}
                className={`year-btn ${gcYear === yr ? 'active' : ''}`}
                onClick={() => setGcYear(yr)}
              >
                {yr}
              </button>
            ))}
            <button className={`year-btn ${gcYear === 'all' ? 'active' : ''}`} onClick={() => setGcYear('all')}>
              All Time
            </button>
          </div>

          {/* Two-Column: Trophy + Standings */}
          <div className="gc-grid">
            {/* Trophy Cabinet */}
            <div className="trophy-cabinet card">
              <h4 className="cabinet-title">Brahmaputra Trophies — {gcYear}</h4>
              {filteredTrophies.length > 0 ? (
                <div className="trophy-grid">
                  {filteredTrophies.map((t, i) => {
                    const cfg = medaleColors[t.medal];
                    return (
                      <div key={i} className="trophy-card">
                        <div className="trophy-icon-wrap" style={{ background: cfg.bg }}>
                          <Trophy size={26} style={{ color: cfg.icon }} />
                        </div>
                        <div className="trophy-sport">{t.sport}</div>
                        <div className="trophy-pos" style={{ color: cfg.icon }}>{cfg.label}</div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="cabinet-empty">
                  <Trophy size={40} style={{ color: '#D1D5DB' }} />
                  <p>Data coming soon for {gcYear}</p>
                </div>
              )}
            </div>

            {/* Standings Table */}
            <div className="standings-card card">
              <h4 className="cabinet-title">Overall Standings {gcYear}</h4>
              <div className="standings-list">
                {standings.map((row, i) => {
                  const pct = Math.round((row.points / maxPoints) * 100);
                  const isBrahma = row.hostel === 'Brahmaputra';
                  return (
                    <div key={i} className={`standings-row ${isBrahma ? 'brahma-row' : ''}`}>
                      <div className="standings-rank">{rankDisplay(row.rank)}</div>
                      <div className="standings-hostel">{row.hostel}</div>
                      <div className="standings-points-col">
                        <span className="standings-pts">{row.points}</span>
                        <div className="standings-bar">
                          <div
                            className="standings-bar-fill"
                            style={{ width: `${pct}%`, background: isBrahma ? 'var(--brand-orange)' : '#CBD5E1' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                {standings.length === 0 && (
                  <div className="cabinet-empty">
                    <p>No standings data for {gcYear}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sport Filter Chips */}
          <div className="sport-filters">
            {sportFilters.map(s => (
              <button
                key={s}
                className={`sport-chip ${activeSport === s ? 'active' : ''}`}
                onClick={() => setActiveSport(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLegacy;
