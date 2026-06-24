import React, { useState } from 'react';
import { Search, GraduationCap, Users } from 'lucide-react';
import './AlumniDirectory.css';

const AlumniDirectory = () => {
  const [activeProgram, setActiveProgram] = useState('All');
  const [activeBatch, setActiveBatch] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const programs = ['All', 'B.Tech', 'M.Tech', 'M.Des', 'Ph.D'];
  const batches = ['All', '2026', '2025', '2024', '2023', '2022'];

  const directoryData = [];

  const getAvatarColor = (dept) => {
    switch(dept) {
      case 'CSE': return '#1A3A6B';
      case 'EEE': return '#E87722';
      case 'ME': return '#0F6E56';
      case 'Civil': return '#7C3AED';
      default: return '#6B7280';
    }
  };

  const filteredData = directoryData.filter(student => 
    (activeProgram === 'All' || student.program === activeProgram) && 
    (activeBatch === 'All' || student.batch === activeBatch) &&
    (student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     student.department.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Group by Batch
  const groupedData = filteredData.reduce((acc, student) => {
    if (!acc[student.batch]) {
      acc[student.batch] = [];
    }
    acc[student.batch].push(student);
    return acc;
  }, {});

  return (
    <div className="section alumni-directory bg-tertiary">
      <div className="container">
        <div className="text-center mb-5">
          <GraduationCap className="text-primary mx-auto mb-2" size={48} />
          <h2 className="section-title">Alumni & Student Directory</h2>
          <p className="text-muted">Connect with current residents and our widespread alumni network.</p>
        </div>

        <div className="directory-controls card mb-5">
          <div className="search-bar w-100 mb-4" style={{ maxWidth: '100%' }}>
            <Search className="text-muted" size={24} />
            <input 
              type="text" 
              placeholder="Search by name or department..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '1.1rem' }}
            />
          </div>

          <div className="filter-rows">
            <div className="filter-row">
              <span className="filter-label">Programme:</span>
              <div className="chip-group">
                {programs.map(prog => (
                  <button 
                    key={prog}
                    className={`chip ${activeProgram === prog ? 'active' : ''}`}
                    onClick={() => setActiveProgram(prog)}
                  >
                    {prog}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-row">
              <span className="filter-label">Batch:</span>
              <div className="chip-group">
                {batches.map(batch => (
                  <button 
                    key={batch}
                    className={`chip ${activeBatch === batch ? 'active' : ''}`}
                    onClick={() => setActiveBatch(batch)}
                  >
                    {batch}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="directory-content">
          {Object.keys(groupedData).sort((a, b) => b - a).map(batch => (
            <div key={batch} className="batch-group mb-5">
              <h3 className="batch-title">
                <Users className="text-secondary" size={24} />
                Batch of {batch}
              </h3>
              
              <div className="student-cards-grid">
                {groupedData[batch].map((student, idx) => (
                  <div key={idx} className="student-card card">
                    <div className="student-avatar" style={{ backgroundColor: getAvatarColor(student.department) }}>
                      {student.name.charAt(0)}
                    </div>
                    <div className="student-info">
                      <h4 className="student-name">{student.name}</h4>
                      <p className="student-dept">{student.department}</p>
                      <div className="student-badges">
                        <span className="badge badge-program">{student.program}</span>
                        <span className="badge badge-batch">{student.batch}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {Object.keys(groupedData).length === 0 && (
            <div className="empty-state text-center card py-5">
              <p className="text-muted" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>To Be Updated</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniDirectory;
