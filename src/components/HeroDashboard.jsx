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
    "🛠️ Post-holiday maintenance: Some amenities may experience brief pauses during initial semester days",
    "🛒 Stationery Shop Hours: Open 10:00 AM – 10:00 PM daily for all academic & personal supplies",
    "🚲 Cycle Registration: Please register your cycle at the security desk and collect your official cycle number.",
    "🔒 Security Alert: Always ensure your room and cycle are securely locked to prevent any untoward incidents.",
    "🚫 Freshers' Guideline: Freshers are strictly prohibited from visiting the 1st, 2nd, and 3rd floors due to the three-month interaction ban.",
  ];

  // September Mess Menu
  const weeklyMenu = {
    Monday:    {
      breakfast: "Poha + Sev, Vada Pav, Seasonal Fruits, Mandatory items",
      lunch:     "Moong Mysore Dal, Long Beans (Dry), Rajma Curry, Plain Rice, Sweet Lassi, Plain Roti/Ghee Roti, Curd, Papad, Green Chutney",
      dinner:    "Lauki Chana (Dry), Aloo Soyabeen, Arhar Dal, Plain Rice/Tomato Rice, Jaljeera, Plain Roti/Ghee Roti",
    },
    Tuesday:   {
      breakfast: "Uttapam Coconut Chutney + Sambhar, Veg Chowmein, Seasonal Fruits, Mandatory items",
      lunch:     "Mix Veg (Dry), Ridge Gourd Curry (Turai), Chana Dal, Jeera Rice/Plain Rice, Plain Roti/Ghee Roti, Curd, Watermelon Mint Cooler, Green Chutney",
      dinner:    "Chole Bhature, Chatpate Aloo (Dry), Moong Dal, Masala Lemonade, Plain Rice, Plain Roti/Ghee Roti, Fryums",
    },
    Wednesday: {
      breakfast: "Masala Idli + Sambhar + Vada + Coconut Chutney, White Sauce Pasta, Seasonal Fruits, Mandatory items",
      lunch:     "Soya Keema Matar, Aloo Parwal (Dry), Black Mysore Dal, Plain Rice/Lemon Rice, Plain Roti/Ghee Roti, Veg Raita, Papad, Green Chutney",
      dinner:    "Chicken Curry/Matar Paneer, Veg Pulao, Dal Makhni, Methi Paratha, Plain Rice, Rice Kheer, Roohafza, Roasted Papad",
    },
    Thursday:  {
      breakfast: "Kachori + Ghuguni, Upma + Coconut Chutney, Seasonal Fruits, Mandatory items",
      lunch:     "Kadhi Pakora, Baingan Bharta (Dry), Mati Dal (O Tanga), Masala Rice/Plain Rice, Plain Roti/Ghee Roti, Curd, Peanut Papad, Green Chutney, Chaas",
      dinner:    "Lauki Kofta / Egg Curry, Black Chana Masala (Dry), Moong Mysore Dal, Plain Rice, Plain Roti/Ghee Roti, Lemon Water",
    },
    Friday:    {
      breakfast: "Poori Sabji, Sweet Dalia, Seasonal Fruits, Mandatory items",
      lunch:     "Karela Fry (Dry), Beson Gatte Sabji, Mix Dal, Curd Rice/Plain Rice, Watermelon Mint Cooler, Curd, Green Chutney",
      dinner:    "Kadhai Paneer, Kadhai Chicken/Fish Masala Curry, Lehsuni Chana Dal, Masala Rice/Plain Rice, Plain Roti/Ghee Roti, Shahi Tukra, Masala Lemonade, Fryums",
    },
    Saturday:  {
      breakfast: "Aloo Onion Paratha, Dahi Gur Chira, Seasonal Fruits, Mandatory items",
      lunch:     "Khichdi (Vegetable), Corn Masala, Aloo Chokha (Dry), Dal Palak, Plain Rice/Lemon Rice, Roasted Papad, Curd, Green Chutney, Lemon Water",
      dinner:    "Methi Matar Malai, Cabbage + Matar, Arhar Dal, Plain Rice, Plain Roti/Ghee Roti, Jaljeera, Fry Papad",
    },
    Sunday:    {
      breakfast: "Mysore Masala Dosa, Sambhar + Coconut Chutney, Vermicelli Upma, Seasonal Fruits, Mandatory items",
      lunch:     "Bhindi Fry (Dry), Vatana (White Peas) Curry, Dal Makhani, Curd rice, Butter Milk, Plain Rice, Plain Roti/Ghee Roti, Curd",
      dinner:    "Paneer Butter Masala/Chicken Butter Masala, Butter Naan, Chana Dal, Veg Dum Biryani/Plain Rice, Roohafza, Ice-Cream, Roasted Papad",
    },
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
