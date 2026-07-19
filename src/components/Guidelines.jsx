import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import rulesPdf from '../assets/Brahmaputra_Hostel_Rules_Regulations.pdf';
import './Guidelines.css';

const rules = [
  {
    title: 'Anti-Ragging Policy & Code of Conduct',
    severity: 'Severe',
    levelLabel: 'Level 1: Severe Violations (Zero Tolerance)',
    levelDesc: 'These policies carry a strict ZERO TOLERANCE approach. Violations will lead to immediate disciplinary action, heavy fines, or expulsion from the hostel.',
    items: [
      {
        name: 'Anti-Ragging Policy',
        question: 'What is the Brahmaputra Hostel policy on ragging?',
        content: 'Brahmaputra Hostel maintains a strict ZERO TOLERANCE policy towards ragging. Any act involving physical or mental abuse, teasing, hazing, or intimidation is considered ragging. Engaging in such behavior will result in immediate disciplinary action, including expulsion from the hostel and referral to the institute’s higher authorities for further legal proceedings.',
      },
      {
        name: 'Property Damage & Vandalism',
        question: 'What happens if hostel property is defaced or damaged?',
        content: 'Defacing walls, damaging furniture, tampering with CCTV cameras, or breaking any hostel property is strictly prohibited. The cost of repair or replacement will be charged directly to the responsible individual(s), alongside severe administrative penalties and disciplinary action.',
      },
    ],
  },
  {
    title: 'Substance Abuse & Fire Safety',
    severity: 'Severe',
    levelLabel: 'Level 1: Severe Violations & Safety Hazards',
    levelDesc: 'Prohibited items and fire hazards compromise the safety and well-being of the entire hostel community.',
    items: [
      {
        name: 'Substance Abuse Policy',
        question: 'What is the policy regarding alcohol, drugs, and tobacco?',
        content: 'The possession, consumption, or distribution of alcohol, illegal drugs, and tobacco products is strictly banned anywhere on hostel premises. We conduct random inspections to ensure compliance, and any violation will lead to immediate and strict disciplinary measures.',
      },
      {
        name: 'Fire Safety & Security Protocols',
        question: 'Are candles or open flames permitted inside rooms?',
        content: 'To prevent fire hazards, the use of candles, incense sticks, room heating coils, or any open flames inside individual rooms is strictly prohibited. Additionally, residents are responsible for their personal belongings and must always lock their room when stepping out; the administration is not liable for lost valuables.',
      },
    ],
  },
  {
    title: 'Quiet Hours & Hostel Timings',
    severity: 'Moderate',
    levelLabel: 'Level 2: Moderate Violations (Official Warnings & Fines)',
    levelDesc: 'These rules are essential for the daily functioning of the hostel and academic productivity. Repeated offenses result in fines and official warnings.',
    items: [
      {
        name: 'Quiet Hours',
        question: 'What are the quiet hours for study and rest?',
        content: 'To ensure an environment conducive to study and rest, quiet hours are enforced daily from 10:00 AM to 5:00 PM. During this period, residents must refrain from playing loud music, shouting in corridors, or engaging in any activities that disturb others.',
      },
      {
        name: 'Hostel Timings & Leave Rules',
        question: 'What are the rules for out-station travel or overnight leaves?',
        content: 'Residents must adhere to hostel curfew timings. For any overnight leaves, weekend trips, or out-station travel, residents must obtain prior written approval from the Warden and log their departure and arrival dates in the security gate register.',
      },
    ],
  },
  {
    title: 'Electrical Appliances & Wi-Fi Network',
    severity: 'Moderate',
    levelLabel: 'Level 2: Moderate Violations (Infrastructure Protection)',
    levelDesc: 'Overloading grids or disrupting network equipment affects hundreds of fellow residents.',
    items: [
      {
        name: 'Electrical Appliances',
        question: 'Which electrical appliances are allowed inside individual rooms?',
        content: 'To prevent electrical grid overloading and fire hazards, heavy appliances like room heaters, air coolers, and high-wattage induction cookers are prohibited. If you use allowed low-power items like kettles or iron boxes, use them with extreme caution and ensure they are unplugged immediately when not in use.',
      },
      {
        name: 'Internet & Wi-Fi Guidelines',
        question: 'What are the acceptable use policies for hostel Wi-Fi?',
        content: 'The hostel Wi-Fi and LAN network is provided for academic and personal productivity. Engaging in illegal torrenting/downloading, accessing restricted websites, running unauthorized servers, or tampering with hostel routers and switches is strictly forbidden.',
      },
    ],
  },
  {
    title: 'Visitor Policy & Pet Regulations',
    severity: 'Minor',
    levelLabel: 'Level 3: Community Guidelines & Security Info',
    levelDesc: 'These regulations maintain a secure, hygienic, and allergy-free community environment.',
    items: [
      {
        name: 'Visitor Policy',
        question: 'Can I invite visitors or guests to the hostel?',
        content: 'Visitors are welcome in designated common areas and visitor rooms between 8:00 AM – 9:00 AM and 5:00 PM – 8:00 PM. Please note that external guests, including friends from other hostels, are not permitted to stay overnight inside student rooms without prior written authorization from the Warden.',
      },
      {
        name: 'Pet Policy',
        question: 'Are personal pets allowed inside hostel rooms?',
        content: 'To maintain hygiene, prevent allergic reactions among residents, and ensure safety, keeping personal pets or regularly feeding stray animals inside hostel rooms and internal corridors is strictly not permitted.',
      },
    ],
  },
  {
    title: 'Cleanliness, Hygiene & Pantry Etiquette',
    severity: 'Info',
    levelLabel: 'Level 3: Community Hygiene & Pantry Standards',
    levelDesc: 'Keeping Brahmaputra clean and hygienic is a shared responsibility among all residents.',
    items: [
      {
        name: 'Cleanliness and Hygiene',
        question: 'What are my responsibilities regarding room and corridor cleanliness?',
        content: 'Residents are expected to keep their rooms and immediate corridors tidy. Please dispose of all trash directly into the designated covered dustbins. For health and maintenance reasons, washing utensils or clothing in the bathroom washbasins is strictly forbidden to prevent drain clogging.',
      },
      {
        name: 'Pantry Etiquette',
        question: 'What rules apply when using the common floor pantry?',
        content: 'If using the common pantry rooms, residents must clean up all spills immediately and wash their own utensils after cooking. Do not leave unwashed dishes, leftover oil, or perishable food items unattended in the pantry sinks or on kitchen counters.',
      },
    ],
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
            href={rulesPdf}
            className="btn btn-outline guidelines-pdf-btn"
            download="Brahmaputra_Hostel_Rules_Regulations.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
                    <div className="rule-subitems">
                      {rule.items && rule.items.map((item, subIdx) => (
                        <div key={subIdx} className={`rule-subitem ${subIdx > 0 ? 'rule-subitem-border' : ''}`}>
                          <h4 className="rule-subitem-title">
                            <span className="subitem-number">{idx + 1}.{subIdx + 1}</span> {item.name}
                          </h4>
                          {item.question && (
                            <p className="rule-question">
                              Q: {item.question}
                            </p>
                          )}
                          <p className="rule-subitem-content">{item.content}</p>
                        </div>
                      ))}
                    </div>
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
