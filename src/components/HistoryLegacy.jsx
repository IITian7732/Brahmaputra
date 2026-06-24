import React, { useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import hostelImage from '../assets/hostel.jpg';
import './HistoryLegacy.css';

const HistoryLegacy = () => {
  const leaderboard = [
    { rank: 1, hostel: "Brahmaputra", points: 850, trend: "up" },
    { rank: 2, hostel: "Kameng", points: 820, trend: "down" },
    { rank: 3, hostel: "Umiam", points: 790, trend: "up" },
    { rank: 4, hostel: "Barak", points: 750, trend: "same" },
    { rank: 5, hostel: "Manas", points: 710, trend: "down" },
  ];

  return (
    <div className="section history-legacy bg-light">
      <div className="container">
        <h2 className="section-title">About The Legacy</h2>
        
        <div className="legacy-content">
          <div className="legacy-text">
            <h3>The Pride of IIT Guwahati</h3>
            <blockquote className="legacy-pull-quote">
              "A legacy forged over decades, embodying strength, resilience, and an unending pursuit of excellence."
            </blockquote>
            <p>
              Brahmaputra Hostel is not just a residence; it is an emotion, a brotherhood, and a legacy forged over decades. 
              Named after the mighty river that flows alongside the beautiful campus, Brahmaputra embodies strength, 
              resilience, and an unending pursuit of excellence.
            </p>
            <p>
              The hostel is a centre for various activities. Hostel Brahmaputra is the highest accommodating hostel in the history of IIT Guwahati. Constructed in peaceful and playful environment, it imparts enthusiasm and endeavour in the students. The hostel is always filled with enormously talented students who are always eager for innovation.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number text-primary">2011</span>
                <span className="stat-label">Inaugurated in</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-primary">Boys</span>
                <span className="stat-label">Resident's Gender</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-primary">1200+</span>
                <span className="stat-label">Student Capacity</span>
              </div>
            </div>
            
          </div>
          
          <div className="legacy-image">
            <img src={hostelImage} alt="Brahmaputra Hostel" className="historical-photo" loading="lazy" width="600" height="400" />
          </div>
        </div>

        <div className="gc-subsection mt-5" id="gc">
          <div className="gc-header text-center">
            <Trophy className="text-primary mb-2" size={48} />
            <h3>Inter-Hostel General Championship</h3>
            <p className="text-muted">The ultimate battle for glory at IIT Guwahati</p>
          </div>

          <div className="gc-grid">
            <div className="trophy-showcase card">
              <h4 className="card-title">Trophy Cabinet</h4>
              <div className="trophy-list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '250px' }}>
                <p className="text-muted" style={{ fontStyle: 'italic', fontSize: '1.2rem', letterSpacing: '1px' }}>*To be updated*</p>
              </div>
            </div>

            <div className="leaderboard card">
              <h4 className="card-title">Current Standings (2026)</h4>
              <div className="leaderboard-table-wrapper">
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Hostel</th>
                      <th className="text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((item, idx) => (
                      <tr key={idx} className={item.hostel === 'Brahmaputra' ? 'highlight-row' : ''}>
                        <td>
                          <span className={`rank-badge rank-${item.rank}`}>{item.rank}</span>
                        </td>
                        <td className="font-semibold">{item.hostel}</td>
                        <td className="text-right font-bold text-primary">{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HistoryLegacy;
