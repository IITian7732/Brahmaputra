import React, { useState } from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';
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

const HallOfFame = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const wardens = [
    { name: "B. Panda Sir", role: "Warden", email: "warden.brahmaputra@iitg.ac.in", phone: "+91 96330 37489", image: imgBPanda },
    { name: "Ashwini Sir", role: "Associate Warden", email: "warden.brahmaputra@iitg.ac.in", phone: "+91 93379 95167", image: imgAshwini },
    { name: "Sparsh Sir", role: "Associate Warden", email: "warden.brahmaputra@iitg.ac.in", phone: "+91 78270 60976", image: imgSparsh }
  ];

  const currentHMC = [
    { role: "General Secretary", name: "Paras Katiyaar", email: "gs.brahmaputra@iitg.ac.in", phone: "+91 6387 843 598", image: imgParasKatiyar },
    { role: "Associate Gen. Sec.", name: "Sidharth Tripathi", email: "s.tripathi@iitg.ac.in", phone: "+91 96854 90845", image: imgSidharthTripathi },
    { role: "Sports Secretary", name: "Divyanshu Singh", email: "divyanshu.kumar@iitg.ac.in", phone: "+91 95366 82179", image: imgDivyanshu },
    { role: "Service Secretary", name: "Shikhar Jindal", email: "ss.brahmaputra@iitg.ac.in", phone: "+91 98298 63827", image: imgShikhar },
    { role: "Technical Secretary", name: "Pruthvi Haleholi", email: "h.pruthvi@iitg.ac.in", phone: "+91 96865 14772", image: imgPruthvi },
    { role: "Welfare Secretary", name: "Priyanshu Bharadwaj", email: "p.bhardwaj@iitg.ac.in", phone: "+91 91420 29326", image: imgPriyanshu },
    { role: "Maintenance Sec.", name: "Sameer Tikar", email: "ms.brahmaputra@iitg.ac.in", phone: "+91 82248 59160", image: imgSameer },
    { role: "Literary Secretary", name: "Raj Singh", email: "rajks6055@iitg.ac.in", phone: "+91 70073 24283", image: imgRaj },
    { role: "Cultural Secretary", name: "To be updated", email: "To be updated", phone: "To be updated", image: imgNonOne },
    { role: "Media Head", name: "To be updated", email: "To be updated", phone: "To be updated", image: imgNonOne }
  ];

  const pastHMC = [
    { 
      year: "2025-2026", 
      members: [
        { role: "General Secretary", name: "Abhishek Sharma", email: "To be updated", phone: "To be updated", image: imgAbhishekSharm },
        { role: "Associate Gen. Sec.", name: "Harshavardhan", email: "To be updated", phone: "To be updated", image: imgHarshawardhan },
        { role: "Technical Secretary", name: "Aditya Jain", email: "To be updated", phone: "To be updated", image: imgAdityaJain },
        { role: "Sports Secretary", name: "Abhishek Gond", email: "To be updated", phone: "To be updated", image: imgAbhishekGind },
        { role: "Welfare Secretary", name: "Paras Katiyar", email: "To be updated", phone: "To be updated", image: imgParasKatiyar },
        { role: "Services Secretary", name: "Abhijeet Kumar", email: "To be updated", phone: "To be updated", image: imgAbhijeet },
        { role: "Maintenance Sec.", name: "Yash Jaiswal", email: "To be updated", phone: "To be updated", image: imgYashJaiswal },
        { role: "Literary Secretary", name: "Chinmay Torvi", email: "To be updated", phone: "To be updated", image: imgChinmay },
        { role: "Media Head", name: "Pruthvi S H", email: "To be updated", phone: "To be updated", image: imgPruthvi }
      ]
    },
    { 
      year: "2024-2025", 
      members: [
        { role: "General Secretary", name: "Yasharth Singh", email: "To be updated", phone: "To be updated", image: imgYasharth },
        { role: "Associate Gen. Sec.", name: "Anany Sihare", email: "To be updated", phone: "To be updated", image: imgAnany },
        { role: "Sports Secretary", name: "Aryan Singh", email: "To be updated", phone: "To be updated", image: imgAryan },
        { role: "Technical Secretary", name: "Adi Jain", email: "To be updated", phone: "To be updated", image: imgAdi },
        { role: "Service Secretary", name: "Anupam Ajay Pratap Singh", email: "To be updated", phone: "To be updated", image: imgAnupam },
        { role: "Cultural Secretary", name: "Ayush Sahu", email: "To be updated", phone: "To be updated", image: imgAyush },
        { role: "Welfare Secretary", name: "Abhinav Gundumalla", email: "To be updated", phone: "To be updated", image: imgAbhinav },
        { role: "Maintenance Sec.", name: "Abhishek Sharma", email: "To be updated", phone: "To be updated", image: imgAbhishekSharm },
        { role: "Literary Secretary", name: "Ashutosh Singh", email: "To be updated", phone: "To be updated", image: imgAshutosh },
        { role: "Media Head", name: "Harsh Shukla", email: "To be updated", phone: "To be updated", image: imgHarsh }
      ]
    }
  ];

  const getRoleBadgeColor = (role) => {
    return '#8B4513'; // Brown for all HMC positions
  };

  return (
    <div className="section hall-of-fame bg-light" id="hmc">
      <div className="container">
        <h2 className="section-title">Hall of Fame & HMC Portal</h2>
        
        {/* Administration */}
        <div className="admin-section mb-5">
          <h3 className="sub-section-title">Administration</h3>
          <div className="admin-grid">
            {wardens.map((warden, idx) => (
              <div key={idx} className="profile-card card">
                {warden.image ? (
                  <img src={warden.image} alt={warden.name} className="profile-photo" loading="lazy" width="120" height="120" />
                ) : (
                  <div className="profile-photo-placeholder"></div>
                )}
                <div className="profile-info">
                  <h4>{warden.name}</h4>
                  <span className="badge" style={{ backgroundColor: '#E87722', color: 'white', marginTop: '0.5rem', marginBottom: '1rem', display: 'inline-block' }}>{warden.role}</span>
                  <div className="contact-links">
                    <a href={`mailto:${warden.email}`}><Mail size={16}/> {warden.email}</a>
                    <a href={`tel:${warden.phone}`}><Phone size={16}/> {warden.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current HMC */}
        <div className="hmc-section mb-5">
          <h3 className="sub-section-title">Current HMC (2026-2027)</h3>
          <div className="hmc-grid">
            {currentHMC.map((member, idx) => (
              <div key={idx} className="hmc-card card">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="hmc-photo" loading="lazy" width="80" height="80" />
                ) : (
                  <div className="hmc-photo-placeholder"></div>
                )}
                <div className="hmc-details">
                  <h4>{member.name}</h4>
                  <span className="hmc-role badge mb-3" style={{ backgroundColor: getRoleBadgeColor(member.role), color: 'white' }}>{member.role}</span>
                  <div className="contact-links-hmc">
                    <a href={`mailto:${member.email}`}><Mail size={14}/> {member.email}</a>
                    <a href={`tel:${member.phone}`}><Phone size={14}/> {member.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* X-HMC Tribute */}
        <div className="x-hmc-section">
          <h3 className="sub-section-title">X-HMC Tribute</h3>
          <p className="text-muted mb-4 text-center">Honoring the leaders who shaped our legacy.</p>
          
          <div className="past-hmc-container">
            {pastHMC.map((item, idx) => (
              <div key={idx} className="past-hmc-group mb-5">
                <button 
                  className="past-hmc-year-heading-btn"
                  onClick={() => toggleYear(item.year)}
                  style={{ background: 'none', border: 'none', width: '100%', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}
                >
                  <h4 className="past-hmc-year-heading" style={{ borderBottom: 'none', marginBottom: 0 }}>{item.year} Council</h4>
                  <ChevronDown 
                    size={28} 
                    className="text-muted"
                    style={{ transform: expandedYear === item.year ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} 
                  />
                </button>
                <div style={{ borderBottom: '2px solid var(--border-light)', marginTop: '0.5rem' }}></div>
                
                {expandedYear === item.year && (
                  <div className="hmc-grid mt-4">
                    {item.members.map((member, mIdx) => (
                      <div key={mIdx} className="hmc-card card x-hmc-card" style={{ backgroundColor: 'rgba(251, 191, 36, 0.08)' }}>
                        <div className="x-hmc-served-badge">Served: {item.year.split('-')[1] || item.year}</div>
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="hmc-photo" loading="lazy" width="80" height="80" />
                        ) : (
                          <div className="hmc-photo-placeholder"></div>
                        )}
                        <div className="hmc-details">
                          <h4>{member.name}</h4>
                          <span className="hmc-role badge mb-3" style={{ backgroundColor: getRoleBadgeColor(member.role), color: 'white' }}>{member.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HallOfFame;
