import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Utensils, Moon, Bell } from 'lucide-react';
import heroBg from '../assets/Brahma.png';
import './HeroDashboard.css';

/* ── Count-Up Number ── */
const CountUp = ({ from, to, duration = 1400, suffix = '' }) => {
  const [value, setValue] = useState(from);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = Math.ceil(duration / 16);
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) { setValue(to); clearInterval(timer); }
      else setValue(Math.round(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, from, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
};

const HeroDashboard = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const now = new Date();
  const todayIdx = now.getDay();
  const todayName = days[todayIdx];

  const [selectedDayIdx, setSelectedDayIdx] = useState(todayIdx);
  const [activeMeal, setActiveMeal] = useState(() => {
    const h = now.getHours();
    if (h < 10) return 'breakfast';
    if (h < 15) return 'lunch';
    return 'dinner';
  });

  const notices = [
    "📅 Freshers' Accommodation: Room allotments for incoming freshers commence July 20, 2026",
    "🛠️ Post-holiday maintenance: Some amenities may experience brief pauses during initial semester days",
    "🛒 Stationery Shop Hours: Open 10:00 AM – 10:00 PM daily for all academic & personal supplies",
    "🚲 Cycle & Dorm Essentials: Bicycles, mattresses, pillows available at Manas Community Hall",
  ];

  const weeklyMenu = {
    Monday:    { breakfast: "Pav Bhaji, Uttapam, Coconut Chutney, Seasonal Fruit, Paneer Bhurji, Boiled Egg, Mandatory Items", lunch: "Kadhi Pakora, Lauki Chana Dry, Toor Dal Tadka, Fried Rice, Plain Rice, Butter Roti, Curd, Green Chutney", dinner: "Aloo Tamatar Gobi Matar, Puri, Chana Masala Dry, Daal Triveni, Plain Rice, Butter Roti, Green Chutney" },
    Tuesday:   { breakfast: "Poha, Sev, Chopped Onion, Tomato, Lemon, Aloo Sandwich, Green Chutney, Banana, Boiled Egg, Mandatory Items", lunch: "Aloo Soya Curry, Cabbage Green Peas, Masoor Daal, Plain Rice, Masala Rice, Butter Roti, Curd, Green Chutney", dinner: "Veg Kofta, Aloo Bhujia, Dal Panchatantra, Plain Rice, Butter Roti, Green Chutney" },
    Wednesday: { breakfast: "Chowmein, Ketchup, Upma, Seasonal Fruit, Paneer Bhurji, Boiled Egg, Mandatory Items", lunch: "Rajma, Aloo Gobi Fry, Yellow Udad Daal, Masala Rice, Butter Roti, Curd, Veg Raita, Green Chutney", dinner: "Kadhai Paneer, Methi Paratha, Moong Masoor Daal, Fried Rice, Butter Roti, Gulab Jamun, Veg Soup" },
    Thursday:  { breakfast: "Idli Boiled, Idli Masala, Coconut Chutney, Sambhar, Veg Pasta, Ketchup, Banana, Boiled Egg, Mandatory Items", lunch: "Kashmiri Dum Aloo, Aloo Beans, Daal Fry, Kashmiri Pulao, Plain Rice, Butter Roti, Curd, Green Chutney", dinner: "Chholey, Bhature, Aloo Jeera, Daal Triveni, Plain Rice, Butter Roti, Green Chutney" },
    Friday:    { breakfast: "Ghugni, Ajwain Puri, Vermicelli Upma, Coconut Chutney, Seasonal Fruit, Paneer Bhurji, Egg Bhurji, Mandatory Items", lunch: "Aloo Black Chana Curry, Aloo Brinjal Masala, Toor Daal Tadka, Plain Rice, Butter Roti, Curd, Lassi", dinner: "Matar Paneer, Chana Dal Fry, Veg Pulao, Plain Rice, Butter Roti, Rasgulla, Green Chutney" },
    Saturday:  { breakfast: "Aloo Onion Paratha, Green Chutney, Sauce, Curd, Dahi Gur Chira, Seasonal Fruit, Boiled Egg, Mandatory Items", lunch: "Mix Chokha, Corn Palak, Khichdi, Dal Makhni, Plain Rice, Curd, Chaas, Green Chutney", dinner: "Methi Matar Malai, Gobi Manchurian, Tur Daal, Plain Rice, Butter Roti, Green Chutney" },
    Sunday:    { breakfast: "Mysore Masala Dosa, Coconut Chutney, Sambar, Daliya, Banana, Paneer Bhurji, Egg Bhurji, Mandatory Items", lunch: "Rajma, Aloo Sem Sabzi, Moong Daal, Plain Rice, Butter Roti, Curd, Lassi, Green Chutney", dinner: "Paneer Butter Masala, Tandoori Naan, Masoor Daal, Veg Biryani, Plain Rice, Rice Kheer, Green Chutney" },
  };

  const isWeekend = ['Saturday', 'Sunday'].includes(days[selectedDayIdx]);
  const mealConfig = {
    breakfast: { label: 'Breakfast', icon: <Coffee size={16} />, color: '#F97316', time: isWeekend ? '8:00 – 10:15 AM' : '7:15 – 9:30 AM' },
    lunch:     { label: 'Lunch',     icon: <Utensils size={16} />, color: '#16A34A', time: isWeekend ? '12:15 – 2:30 PM' : '12:00 – 2:00 PM' },
    dinner:    { label: 'Dinner',    icon: <Moon size={16} />,    color: '#7C3AED', time: isWeekend ? '8:00 – 10:00 PM' : '7:30 – 9:30 PM' },
  };

  const menuItems = (weeklyMenu[days[selectedDayIdx]][activeMeal] || '').split(',').map(s => s.trim()).filter(Boolean);

  return (
    <div className="hero-dashboard">
      {/* ── Hero Banner ── */}
      <div className="hero-banner" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-breadcrumb animate-fade-in">BRAHMAPUTRA HOSTEL · IIT GUWAHATI</p>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Welcome to <span>Brahmaputra Hostel</span>
          </h1>
          <p className="hero-tagline animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The Legacy. The Brotherhood. The Excellence.
          </p>

          <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <a href="#facilities" className="btn btn-hero-primary">Explore Hostel</a>
            <a href="#hof" className="btn btn-hero-secondary">Meet the HMC</a>
          </div>

          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="stat-item">
              <span className="stat-num"><CountUp from={2000} to={2011} duration={1200} /></span>
              <span className="stat-lbl">Established</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">Boys</span>
              <span className="stat-lbl">Hostel</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num"><CountUp from={0} to={1200} duration={1500} suffix="+" /></span>
              <span className="stat-lbl">Capacity</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── LIVE Notice Ticker ── */}
      <div className="notice-ticker-bar">
        <div className="ticker-live-badge">
          <span className="live-dot" />
          <span className="live-text">LIVE</span>
        </div>
        <div className="ticker-track-wrapper">
          <div className="ticker-track">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="ticker-item">
                {n} &nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mess Menu ── */}
      <div className="mess-menu-section">
        <div className="container">
          <div className="mess-header">
            <div className="mess-title-area">
              <Bell size={22} className="mess-bell" />
              <div>
                <h2 className="mess-heading">Today's Mess Menu</h2>
                <p className="mess-sub">Select a day and meal to view the menu</p>
              </div>
            </div>

            {/* Day Tabs */}
            <div className="day-tabs">
              {days.map((day, i) => (
                <button
                  key={day}
                  className={`day-tab ${selectedDayIdx === i ? 'active' : ''} ${todayIdx === i ? 'today' : ''}`}
                  onClick={() => setSelectedDayIdx(i)}
                >
                  {dayAbbr[i]}
                  {todayIdx === i && <span className="today-dot" />}
                </button>
              ))}
            </div>
          </div>

          {/* Meal Columns */}
          <div className="meal-columns">
            {Object.entries(mealConfig).map(([key, cfg]) => {
              const items = (weeklyMenu[days[selectedDayIdx]][key] || '').split(',').map(s => s.trim()).filter(Boolean);
              return (
                <div
                  key={key}
                  className={`meal-col ${activeMeal === key ? 'selected' : ''}`}
                  onClick={() => setActiveMeal(key)}
                  style={{ '--meal-color': cfg.color }}
                >
                  <div className="meal-col-header">
                    <span className="meal-icon" style={{ background: `${cfg.color}18`, color: cfg.color }}>
                      {cfg.icon}
                    </span>
                    <div>
                      <div className="meal-label" style={{ color: cfg.color }}>{cfg.label}</div>
                      <div className="meal-time">{cfg.time}</div>
                    </div>
                  </div>
                  <div className="meal-pills">
                    {items.slice(0, 8).map((item, i) => (
                      <span key={i} className="meal-pill">{item}</span>
                    ))}
                    {items.length > 8 && (
                      <span className="meal-pill more">+{items.length - 8} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
