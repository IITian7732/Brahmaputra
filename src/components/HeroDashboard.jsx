import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Bell, Coffee, Utensils } from 'lucide-react';
import './HeroDashboard.css';

const CountUpStat = ({ end, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div className="stat-item" ref={statRef}>
      <h3 className="stat-number">{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const HeroDashboard = () => {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = days[currentDate.getDay()];
  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const notices = [
    "📅 Freshers' Accommodation Timeline: Official room allotments and onboarding for incoming freshers will commence on July 20, 2026.",
    "🛠️ Hostel Services Update: Due to post-holiday maintenance, certain hostel amenities will experience brief operational pauses during the initial days of the new semester.",
    "🛒 Hostel Stationery Shop Hours: The Hostel stationery store is fully operational from 10:00 AM to 10:00 PM daily for all your essential academic and personal supplies.",
    "🚲 Cycle & Dorm Essentials Procurement: Bicycles, mattresses, pillows, and other heavy campus essentials are available for direct purchase at the Manas Community Hall."
  ];

  const weeklyMenu = {
    Monday: {
      breakfast: "Pav Bhaji, Uttapam + Coconut Chutney, Seasonal Fruit, Paneer Bhurji / Boiled Egg, Mandatory Items",
      lunch: "Kadhi Pakora, Lauki Chana Dry, Toor Dal Tadka, Fried Rice + Plain Rice, Butter Roti + Plain Roti, Curd, Green Chutney",
      dinner: "Aloo Tamatar Gobi Matar (North Indian Style) + Puri, Chana Masala Dry, Daal Triveni, Plain Rice, Butter Roti + Plain Roti, Green Chutney"
    },
    Tuesday: {
      breakfast: "Poha + Sev + Chopped Onion + Tomato + Lemon, Aloo Sandwich + Green Chutney + Ketchup, Banana / Seasonal Fruit, Sweet Corn / Boiled Egg, Mandatory Items",
      lunch: "Aloo Soya Curry, Cabbage Green Peas, Masoor Daal, Plain Rice + Masala Rice, Butter Roti + Plain Roti, Chaanch, Curd, Green Chutney",
      dinner: "Veg Kofta, Aloo Bhujia, Dal Panchatantra, Plain Rice, Butter Roti + Plain Roti, Green Chutney"
    },
    Wednesday: {
      breakfast: "Chowmein + Ketchup, Upma, Seasonal Fruit, Paneer Bhurji / Boiled Egg, Mandatory Items",
      lunch: "Rajma, Aloo Gobi Fry, Yellow Udad Daal, Masala Rice, Butter Roti / Plain Roti, Curd, Veg Raita, Green Chutney",
      dinner: "Kadhai Paneer / Kadhai Chicken, Methi Paratha, Moong Masoor Daal, Indian Style Fried Rice, Butter Roti / Plain Roti, Gulab Jamun, Veg Soup, Green Chutney"
    },
    Thursday: {
      breakfast: "Idli (Boiled + Masala) + Coconut Chutney + Sambhar, Veg Pasta + Ketchup, Banana / Seasonal Fruit, Sweet Corn / Boiled Egg, Mandatory Items",
      lunch: "Kashmiri Dum Aloo, Aloo Beans, Daal Fry, Kashmiri Pulao + Plain Rice, Butter Roti / Plain Roti, Buttermilk, Curd, Green Chutney",
      dinner: "Chholey + Bhature, Aloo Jeera, Daal Triveni, Plain Rice, Butter Roti / Plain Roti, Imli Chutney, Green Chutney"
    },
    Friday: {
      breakfast: "Ghugni + Ajwain Puri, Vermicelli Upma + Coconut Chutney / Red Chutney, Orange / Seasonal Fruit, Paneer Bhurji / Egg Bhurji / Boiled Egg, Mandatory Items",
      lunch: "Aloo Black Chana Curry, Aloo Brinjal Masala, Toor Daal Tadka, Plain Rice, Butter Roti / Plain Roti, Green Chutney, Curd, Lassi",
      dinner: "Matar Paneer / Fish Curry, Chana Dal Fry, Veg Pulao, Plain Rice, Butter Roti / Plain Roti, Rasgulla, Green Chutney"
    },
    Saturday: {
      breakfast: "Aloo Onion Paratha + Green Chutney + Sauce + Curd, Dahi Gur Chira, Grapes / Seasonal Fruit, Sweet Corn / Egg Bhurji / Boiled Egg, Mandatory Items",
      lunch: "Mix Chokha, Corn Palak, Khichdi, Dal Makhni, Plain Rice, Curd, Chaas, Green Chutney",
      dinner: "Methi Matar Malai / Egg Curry, Gobi Manchurian, Tur Daal, Plain Rice, Butter Roti / Plain Roti, Green Chutney"
    },
    Sunday: {
      breakfast: "Mysore Masala Dosa + Coconut Chutney + Sambar, Daliya, Banana / Seasonal Fruit, Paneer Bhurji / Egg Bhurji / Boiled Egg, Mandatory Items",
      lunch: "Rajma, Aloo Sem Sabzi, Moong Daal, Plain Rice, Butter Roti / Plain Roti, Curd, Lassi, Green Chutney",
      dinner: "Paneer Butter Masala / Chicken Butter Masala, Tandoori Naan, Masoor Daal, Veg Biryani, Plain Rice, Butter Roti / Plain Roti, Rice Kheer, Red Tea, Green Chutney"
    }
  };

  const isWeekend = ["Saturday", "Sunday"].includes(currentDayName);

  const mealTimes = {
    breakfast: { icon: <Coffee size={20} />, time: isWeekend ? "08:00 AM - 10:15 AM" : "07:15 AM - 09:30 AM" },
    lunch: { icon: <Utensils size={20} />, time: isWeekend ? "12:15 PM - 02:30 PM" : "12:00 PM - 02:00 PM" },
    dinner: { icon: <Utensils size={20} />, time: isWeekend ? "08:00 PM - 10:00 PM" : "07:30 PM - 09:30 PM" }
  };

  return (
    <div className="hero-dashboard">
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in">Welcome to <span className="text-primary">Brahmaputra Hostel</span></h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>The Legacy. The Brotherhood. The Excellence.</p>
          
          <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#facilities" className="btn btn-primary">Explore Facilities</a>
            <a href="#hmc" className="btn btn-outline">Meet the HMC</a>
          </div>

          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CountUpStat end={2011} label="Established" />
            <div className="stat-item">
              <h3 className="stat-number">Boys</h3>
              <p className="stat-label">Hostel</p>
            </div>
            <CountUpStat end={1200} suffix="+" label="Capacity" />
          </div>
        </div>
      </div>

      {/* Slim Notice Ticker Bar */}
      <div className="notice-ticker-bar">
        <div className="ticker-label"><Bell size={18} /> Updates</div>
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {notices.map((notice, idx) => (
              <span key={idx} className="ticker-item">{notice}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width Mess Menu Strip */}
      <div className="mess-menu-strip">
        <div className="container">
          <div className="mess-menu-header">
            <div className="mess-menu-title-area">
              <Calendar className="text-primary" size={32} />
              <div>
                <h2>Today's Mess Menu</h2>
                <span className="text-muted">{currentDayName}, {formattedDate}</span>
              </div>
            </div>
            <div className="menu-tabs">
              <button
                className={`menu-tab ${activeTab === 'breakfast' ? 'active' : ''}`}
                onClick={() => setActiveTab('breakfast')}
              >
                Breakfast
              </button>
              <button
                className={`menu-tab ${activeTab === 'lunch' ? 'active' : ''}`}
                onClick={() => setActiveTab('lunch')}
              >
                Lunch
              </button>
              <button
                className={`menu-tab ${activeTab === 'dinner' ? 'active' : ''}`}
                onClick={() => setActiveTab('dinner')}
              >
                Dinner
              </button>
            </div>
          </div>
          
          <div className="mess-menu-content">
            <div className="menu-time badge-orange mb-3">
              {mealTimes[activeTab].icon}
              <span>{mealTimes[activeTab].time}</span>
            </div>
            <p className="menu-items-text">{weeklyMenu[currentDayName][activeTab]}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroDashboard;
