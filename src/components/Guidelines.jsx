import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import './Guidelines.css';

const Guidelines = () => {
  const [openRule, setOpenRule] = useState(0);

  const rules = [
    {
      title: "Anti-Ragging Policy",
      content: "Brahmaputra Hostel maintains a strict ZERO TOLERANCE policy towards ragging. Any act of physical or mental abuse, teasing, or intimidation is considered ragging. Violators will face immediate expulsion from the hostel and potentially the institute."
    },
    {
      title: "Quiet Hours",
      content: "Quiet hours are strictly enforced from 10:00 AM to 5:00 PM. During this time, playing loud music, shouting in corridors, or any activity that disturbs other residents is prohibited."
    },
    {
      title: "Substance Abuse",
      content: "Possession, consumption, or distribution of alcohol, illegal drugs, and tobacco products is strictly banned inside the hostel premises. Random checks may be conducted, and strict disciplinary action will follow violations."
    },
    {
      title: "Electrical Appliances",
      content: "Heavy electrical appliances like room heaters, air coolers, and heavy induction cookers are not allowed in individual rooms as they overload the electrical grid. Iron boxes and kettles should be used with extreme caution."
    },
    {
      title: "Visitor Policy",
      content: "Visitors are only allowed in the common areas and visitor rooms between 9:00 AM and 8:00 PM. No external guests (including friends from other hostels) are allowed to stay overnight without prior written permission from the Warden."
    },
    {
      title: "Cleanliness and Hygiene",
      content: "Residents are responsible for keeping their rooms and immediate corridors clean. Do not litter. Please use the designated dustbins. Washing utensils in the bathroom sinks is strictly forbidden."
    }
  ];

  const toggleRule = (index) => {
    setOpenRule(openRule === index ? null : index);
  };

  return (
    <div className="section guidelines bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <ShieldAlert className="text-secondary mx-auto mb-2" size={48} />
          <h2 className="section-title">Hostel Guidelines & Rules</h2>
          <p className="text-muted">A code of conduct ensuring a safe, respectful, and conducive environment for all.</p>
        </div>

        <div className="rules-accordion">
          {rules.map((rule, idx) => (
            <div key={idx} className="rule-item card">
              <button 
                className="rule-header"
                onClick={() => toggleRule(idx)}
                aria-expanded={openRule === idx}
              >
                <span className="font-bold">{idx + 1}. {rule.title}</span>
                {openRule === idx ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-muted" />
                )}
              </button>
              
              <div className={`rule-content ${openRule === idx ? 'open' : ''}`}>
                <div className="rule-body">
                  <p>{rule.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-outline">Download Complete Rulebook (PDF)</button>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
