import React from 'react';
import { ShieldCheck, Building, Dumbbell, Trophy, Tv, BookOpen, Music, Coffee, Store, Map, ShoppingCart } from 'lucide-react';
import './FacilityTracker.css';

const FacilityTracker = () => {
  const facilities = [
    { name: "Hostel Office", icon: <Building size={28}/>, timing: "9:00 AM - 5:00 PM", desc: "Administrative tasks, Wardens offices, and Hostel works.", status: "Working" },
    { name: "Security Desk", icon: <ShieldCheck size={28}/>, timing: "24x7", desc: "Main entrance monitoring and Visitor Logs.", status: "Working" },
    { name: "Stationary Shop", icon: <ShoppingCart size={28}/>, timing: "10:00 AM - 10:00 PM", desc: "Well Equipped stationary shop is available for students which contains all the daily and acadmic related items.", status: "Working" },
    { name: "Vending machine", icon: <Coffee size={28}/>, timing: "24x7", desc: "A 24x7 vending machine with snacks and drinks is available for students near security desk.", status: "Working" },
    
    { name: "GYM", icon: <Dumbbell size={28}/>, timing: "24x7", desc: "Well-equipped gym for fitness enthusiasts.", status: "Working" },
    { name: "Music Room", icon: <Music size={28}/>, timing: "10:00 AM - 12:00 PM", desc: "Soundproof room with basic instruments, like guitar, drums, speaker, flute, and etc.", status: "Working" },
    { name: "Sports Room", icon: <Trophy size={28}/>, timing: "10:00 AM - 12:00 PM", desc: "Caroom, Chess, Foosball, Billard Table, Table Tennis", status: "Working" },
    { name: "TV Room", icon: <Tv size={28}/>, timing: "10:00 AM - 12:00 PM", desc: "Watch matchs and movies with your friends and spend qualitity time.", status: "Working" },
    
    { name: "Library", icon: <BookOpen size={28}/>, timing: "24x7", desc: "Quiet study space with reference materials, books available to read.", status: "Working" },
    { name: "Canteen & Juice Center", icon: <Store size={28}/>, timing: "10:00 AM - 2:00 PM", desc: "Snacks, beverages, and late-night meals.", status: "Working" },
    { name: "Hostel Ground", icon: <Map size={28}/>, timing: "24x7", desc: "Volleyball, badminton court, Football and Cricket ground.", status: "Working" },
    { name: "Pantry", icon: <Coffee size={28}/>, timing: "10:00 AM - 12:00 PM", desc: "Microwave and induction cooktop available.", status: "Working" },
  ];

  const getCategoryColor = (name) => {
    const gray = ['Hostel Office', 'Security Desk', 'Stationary Shop', 'Vending machine'];
    const green = ['GYM', 'Music Room', 'Sports Room', 'TV Room'];
    const blue = ['Library', 'Canteen & Juice Center', 'Hostel Ground', 'Pantry'];
    
    if (gray.includes(name)) return '#6B7280';
    if (green.includes(name)) return '#16A34A';
    if (blue.includes(name)) return '#2563EB';
    return '#6B7280'; // fallback
  };

  const getStatusInfo = (status) => {
    switch (status) {
      case 'Under Maintenance': return { bg: '#CA8A04', text: 'white' };
      case 'Not Working': return { bg: '#DC2626', text: 'white' };
      default: return { bg: '#16A34A', text: 'white' }; // Working
    }
  };

  return (
    <div className="section facility-tracker bg-light">
      <div className="container">
        <h2 className="section-title">Facilities & Utilities</h2>
        
        <div className="facilities-grid">
          {facilities.map((fac, idx) => {
            const borderColor = getCategoryColor(fac.name);
            const statusInfo = getStatusInfo(fac.status || 'Working');

            return (
              <div key={idx} className="facility-card card" style={{ borderLeft: `4px solid ${borderColor}` }}>
                
                {/* Photo Area */}
                <div className="fac-photo-area">
                  {fac.image ? (
                    <img src={fac.image} alt={fac.name} className="fac-image" loading="lazy" />
                  ) : (
                    <div className="fac-placeholder" style={{ backgroundColor: `${borderColor}1A`, color: borderColor }}>
                      {fac.name}
                    </div>
                  )}
                  
                  {/* Status Badge */}
                  <div className="fac-status-badge" style={{ backgroundColor: statusInfo.bg, color: statusInfo.text }}>
                    {fac.status || 'Working'}
                  </div>
                </div>

                <div className="fac-content-area">
                  <div className="fac-icon" style={{ color: borderColor, backgroundColor: `${borderColor}1A` }}>
                    {fac.icon}
                  </div>
                  <h4 className="fac-name">{fac.name}</h4>
                  <span className="fac-timing text-secondary">{fac.timing}</span>
                  <p className="fac-desc text-muted">{fac.desc}</p>
                </div>

                {/* Report Link */}
                <a href="#report" className="fac-report-link">
                  Report Issue &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacilityTracker;
