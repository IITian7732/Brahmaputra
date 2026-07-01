import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import './Guidelines.css';

const rules = [
  {
    title: 'Anti-Ragging Policy',
    severity: 'Severe',
    content: 'Brahmaputra Hostel maintains a strict ZERO TOLERANCE policy towards ragging. Any act of physical or mental abuse, teasing, or intimidation is considered ragging. Violators will face immediate expulsion from the hostel and potentially the institute.',
  },
  {
    title: 'Quiet Hours',
    severity: 'Moderate',
    content: 'Quiet hours are strictly enforced from 10:00 AM to 5:00 PM. During this time, playing loud music, shouting in corridors, or any activity that disturbs other residents is prohibited.',
  },
  {
    title: 'Substance Abuse',
    severity: 'Severe',
    content: 'Possession, consumption, or distribution of alcohol, illegal drugs, and tobacco products is strictly banned inside the hostel premises. Random checks may be conducted, and strict disciplinary action will follow violations.',
  },
  {
    title: 'Electrical Appliances',
    severity: 'Moderate',
    content: 'Heavy electrical appliances like room heaters, air coolers, and heavy induction cookers are not allowed in individual rooms as they overload the electrical grid. Iron boxes and kettles should be used with extreme caution.',
  },
  {
    title: 'Visitor Policy',
    severity: 'Minor',
    content: 'Visitors are only allowed in the common areas and visitor rooms between 9:00 AM and 8:00 PM. No external guests are allowed to stay overnight without prior written permission from the Warden.',
  },
  {
    title: 'Cleanliness and Hygiene',
    severity: 'Info',
    content: 'Residents are responsible for keeping their rooms and immediate corridors clean. Do not litter. Please use the designated dustbins. Washing utensils in the bathroom sinks is strictly forbidden.',
  },
];

const severityConfig = {
  Severe:   { bg: '#FEE2E2', color: '#991B1B' },
  Moderate: { bg: '#FEF3C7', color: '#92400E' },
  Minor:    { bg: '#DCFCE7', color: '#166534' },
  Info:     { bg: '#DBEAFE', color: '#1E40AF' },
};

const Guidelines = () => {
  const [openRule, setOpenRule] = useState(0);

  return (
    <div className="section guidelines bg-light">
      <div className="container">
        <div className="guidelines-header">
          <div className="guidelines-header-text">
            <h2 className="section-title" style={{ textAlign: 'left', paddingTop: '22px' }}>
              Hostel Guidelines &amp; Rules
            </h2>
            <p className="guidelines-subtitle">
              A place to ensure learning in a safe, responsible and inclusive environment for all
            </p>
          </div>
          <a
            href="#"
            className="btn btn-outline guidelines-pdf-btn"
            download
            aria-label="Download complete guidelines PDF"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>

        <div className="rules-accordion">
          {rules.map((rule, idx) => {
            const isOpen = openRule === idx;
            const sv = severityConfig[rule.severity] || severityConfig.Info;
            return (
              <div key={idx} className="rule-item">
                <button
                  className={`rule-header ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenRule(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="rule-header-left">
                    <span className="rule-number">{idx + 1}.</span>
                    <span className="rule-name">{rule.title}</span>
                    <span
                      className="severity-badge"
                      style={{ background: sv.bg, color: sv.color }}
                    >
                      {rule.severity}
                    </span>
                  </div>
                  <ChevronDown
                    size={20}
                    className="rule-chevron"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>

                <div className={`rule-content ${isOpen ? 'open' : ''}`}>
                  <div className="rule-body">
                    <p>{rule.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
