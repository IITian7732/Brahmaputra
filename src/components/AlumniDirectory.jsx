import React, { useState } from 'react';
import { Search, GraduationCap, Plus } from 'lucide-react';
import './AlumniDirectory.css';

const AlumniDirectory = () => {
  const [activeProgram, setActiveProgram] = useState('All');
  const [activeBatch, setActiveBatch] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programs = ['All', 'B.Tech', 'M.Tech', 'M.Des', 'Ph.D'];
  const batches  = ['All', '2026', '2025', '2024', '2023', '2022', 'Older'];

  // Empty — "To Be Updated"
  const directoryData = [];

  return (
    <div className="section alumni-directory">
      <div className="container">
        {/* Header */}
        <div className="alumni-header">
          <GraduationCap size={40} className="alumni-icon" />
          <h2 className="section-title" style={{ paddingTop: 0 }}>Alumni &amp; Student Directory</h2>
          <p className="alumni-subtitle">The Brahmaputra Family — past and present</p>
          <a
            href="https://forms.gle/YourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline alumni-submit-btn"
          >
            Submit Your Details →
          </a>
        </div>

        {/* Controls */}
        <div className="alumni-controls card">
          <div className="search-bar w-100 mb-4">
            <Search size={20} className="text-muted" />
            <input
              type="text"
              placeholder="Search by name, branch, or batch year..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-rows">
            <div className="filter-row">
              <span className="filter-label">Programme:</span>
              <div className="chip-group">
                {programs.map(p => (
                  <button
                    key={p}
                    className={`chip ${activeProgram === p ? 'active' : ''}`}
                    onClick={() => setActiveProgram(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-row">
              <span className="filter-label">Batch:</span>
              <div className="chip-group">
                {batches.map(b => (
                  <button
                    key={b}
                    className={`chip ${activeBatch === b ? 'active' : ''}`}
                    onClick={() => setActiveBatch(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* To Be Updated State */}
        <div className="alumni-empty-state">
          <div className="empty-icon-wrap">
            <GraduationCap size={48} style={{ color: '#D1D5DB' }} />
          </div>
          <h3 className="empty-title">To Be Updated</h3>
          <p className="empty-desc">
            The alumni and student directory is currently being compiled. <br />
            Be the first to contribute — submit your details to help build the Brahmaputra family network!
          </p>
          <a
            href="https://forms.gle/YourGoogleFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ marginTop: '1.25rem' }}
          >
            <Plus size={16} /> Add Your Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
