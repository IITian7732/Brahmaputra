import React, { useState } from 'react';
import { Search, GraduationCap, Sparkles, Clock, Lock, MapPin, Briefcase } from 'lucide-react';
import './AlumniDirectory.css';

const mockDirectory = [
  { name: 'Biranchi Panda', program: 'B.Tech', branch: 'Computer Science & Engg.', batch: '2024', role: 'Software Engineer', location: 'Bangalore, India' },
  { name: 'Sparsh Johari', program: 'M.Tech', branch: 'Electronics & Electrical', batch: '2023', role: 'VLSI Design Engineer', location: 'Hyderabad, India' },
  { name: 'Divyanshu Singh', program: 'B.Tech', branch: 'Mechanical Engineering', batch: '2025', role: 'Senior Student & Sports Sec.', location: 'Guwahati, India' },
  { name: 'Priyanshu Bharadwaj', program: 'B.Tech', branch: 'Civil Engineering', batch: '2026', role: 'Student & Welfare Sec.', location: 'Guwahati, India' },
  { name: 'Shikhar Jindal', program: 'B.Tech', branch: 'Biosciences & Bioengg.', batch: '2025', role: 'Student & Service Sec.', location: 'Delhi, India' },
  { name: 'Raj Singh', program: 'M.Des', branch: 'Department of Design', batch: '2024', role: 'Product Designer', location: 'Mumbai, India' },
];

const AlumniDirectory = () => {
  const [activeProgram, setActiveProgram] = useState('All');
  const [activeBatch, setActiveBatch] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programs = ['All', 'B.Tech', 'M.Tech', 'M.Des', 'Ph.D'];
  const batches  = ['All', '2026', '2025', '2024', '2023', '2022', 'Older'];

  return (
    <div className="section alumni-directory">
      <div className="container">
        {/* Header */}
        <div className="alumni-header">
          <GraduationCap size={42} className="alumni-icon" />
          <h2 className="section-title" style={{ paddingTop: 0 }}>Alumni &amp; Student Directory</h2>
          <p className="alumni-subtitle">The Brahmaputra Family — connect with residents across batches and programmes</p>
        </div>

        {/* Blurred Section with Overlay Wrapper */}
        <div className="alumni-blur-container">
          {/* Blurred Background Content (Controls + Mock Cards) */}
          <div className="alumni-blurred-content" aria-hidden="true">
            <div className="alumni-controls card mb-4">
              <div className="search-bar w-100 mb-4">
                <Search size={20} className="text-muted" />
                <input
                  type="text"
                  placeholder="Search by name, branch, or batch year..."
                  value={searchQuery}
                  readOnly
                />
              </div>

              <div className="filter-rows">
                <div className="filter-row">
                  <span className="filter-label">Programme:</span>
                  <div className="chip-group">
                    {programs.map(p => (
                      <button key={p} className={`chip ${activeProgram === p ? 'active' : ''}`} tabIndex={-1}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="filter-row">
                  <span className="filter-label">Batch:</span>
                  <div className="chip-group">
                    {batches.map(b => (
                      <button key={b} className={`chip ${activeBatch === b ? 'active' : ''}`} tabIndex={-1}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Grid to show behind blur */}
            <div className="mock-directory-grid">
              {mockDirectory.map((item, idx) => (
                <div key={idx} className="mock-alumni-card">
                  <div className="mock-card-top">
                    <div className="mock-avatar">{item.name.charAt(0)}</div>
                    <div className="mock-info">
                      <h4 className="mock-name">{item.name}</h4>
                      <span className="mock-branch">{item.branch}</span>
                    </div>
                    <span className="mock-batch-badge">{item.program} '{item.batch.slice(-2)}</span>
                  </div>
                  <div className="mock-card-bottom">
                    <span className="mock-meta"><Briefcase size={13} /> {item.role}</span>
                    <span className="mock-meta"><MapPin size={13} /> {item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Glassmorphic Release Overlay */}
          <div className="alumni-release-overlay">
            <div className="release-glass-card">
              <div className="release-icon-badge">
                <Sparkles size={30} className="sparkle-icon" />
              </div>
              <div className="release-status-pill">
                <Clock size={14} /> Coming Soon
              </div>
              <h3 className="release-title">Will Release Soon</h3>
              <p className="release-desc">
                We are currently compiling, verifying, and onboarding profiles for the official Brahmaputra family directory. Soon you'll be able to search and connect with residents across all batches and departments!
              </p>
              <div className="release-footer-note">
                <Lock size={15} /> Exclusive access for Brahmaputra residents &amp; alumni
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
