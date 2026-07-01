import React, { useState } from 'react';
import { WashingMachine, ChevronDown, MapPin, CheckCircle, XCircle, AlertTriangle, Layers } from 'lucide-react';
import './WashingMachineTracker.css';

/* ═══════════════════════════════════════════════════════
   MACHINE DATA — Edit statuses here easily
   operationalStatus: 'operational' | 'maintenance' | 'down'
   rotator / dryer: { status: 'working' | 'faulty', issue?: string }
═══════════════════════════════════════════════════════ */
const MACHINES = [
  /* ─── GROUND FLOOR ─── */
  {
    id: 'GF-A1-M1', machineNo: 'Machine 1', floor: 'ground',
    locationId: 'GF-A1',
    detailedLocation: 'A Block · Near A Block Canteen & Juice Center',
    nearbyRooms: 'Rooms GK-20 to GK-23 corridor',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-A1-M2', machineNo: 'Machine 2', floor: 'ground',
    locationId: 'GF-A1',
    detailedLocation: 'A Block · Near A Block Canteen & Juice Center',
    nearbyRooms: 'Rooms GK-20 to GK-23 corridor',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-A2-M3', machineNo: 'Machine 3', floor: 'ground',
    locationId: 'GF-A2',
    detailedLocation: 'A Block · Near A Block Near Khokha',
    nearbyRooms: 'Rooms GK-220 to GK-225 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-A2-M4', machineNo: 'Machine 4', floor: 'ground',
    locationId: 'GF-A2',
    detailedLocation: 'A Block · Near A Block Near Khokha',
    nearbyRooms: 'Rooms GK-220 to GK-225 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-B1-M5', machineNo: 'Machine 5', floor: 'ground',
    locationId: 'GF-B1',
    detailedLocation: 'B Block · Near B Block Canteen & Juice Center',
    nearbyRooms: 'Rooms GK-190 to GK-199 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-B1-M6', machineNo: 'Machine 6', floor: 'ground',
    locationId: 'GF-B1',
    detailedLocation: 'B Block · Near B Block Canteen & Juice Center',
    nearbyRooms: 'Rooms GK-190 to GK-199 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-B2-M7', machineNo: 'Machine 7', floor: 'ground',
    locationId: 'GF-B2',
    detailedLocation: 'Near B Block near Disang Hostel',
    nearbyRooms: 'Rooms GK-200 to GK-209 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'GF-B2-M8', machineNo: 'Machine 8', floor: 'ground',
    locationId: 'GF-B2',
    detailedLocation: 'Near B Block near Disang Hostel',
    nearbyRooms: 'Rooms GK-200 to GK-209 wing',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },

  /* ─── SECOND FLOOR ─── */
  {
    id: 'SF-W1-M9', machineNo: 'Machine 9', floor: 'second',
    locationId: 'SF-W1',
    detailedLocation: 'A Block · Near A Block Canteen & Juice Center',
    nearbyRooms: 'Rooms Sw21–Sw27, between SBm03–SBm04',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W1-M10', machineNo: 'Machine 10', floor: 'second',
    locationId: 'SF-W1',
    detailedLocation: 'A Block · Near A Block Canteen & Juice Center',
    nearbyRooms: 'Rooms Sw21–Sw27, between SBm03–SBm04',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W2-M11', machineNo: 'Machine 11', floor: 'second',
    locationId: 'SF-W2',
    detailedLocation: 'A Block · Near A Block Near Khokha',
    nearbyRooms: 'Rooms Sw119–Sw122, near SBm05–SBm06',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W2-M12', machineNo: 'Machine 12', floor: 'second',
    locationId: 'SF-W2',
    detailedLocation: 'A Block · Near A Block Near Khokha',
    nearbyRooms: 'Rooms Sw119–Sw122, near SBm05–SBm06',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W3-M13', machineNo: 'Machine 13', floor: 'second',
    locationId: 'SF-W3',
    detailedLocation: 'B Block · Near B Block Canteen & Juice Center',
    nearbyRooms: 'Rooms Sw200–Sw205, near SBm07–SBm08',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W3-M14', machineNo: 'Machine 14', floor: 'second',
    locationId: 'SF-W3',
    detailedLocation: 'B Block · Near B Block Canteen & Juice Center',
    nearbyRooms: 'Rooms Sw200–Sw205, near SBm07–SBm08',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W4-M15', machineNo: 'Machine 15', floor: 'second',
    locationId: 'SF-W4',
    detailedLocation: 'Near B Block near Disang Hostel',
    nearbyRooms: 'Rooms Sw228–Sw232, between SBm11–SBm12',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
  {
    id: 'SF-W4-M16', machineNo: 'Machine 16', floor: 'second',
    locationId: 'SF-W4',
    detailedLocation: 'Near B Block near Disang Hostel',
    nearbyRooms: 'Rooms Sw228–Sw232, between SBm11–SBm12',
    operationalStatus: 'operational',
    rotator: { status: 'working' },
    dryer:   { status: 'working' },
  },
];

/* ═══════════════════════════════════════════
   BADGE HELPERS
═══════════════════════════════════════════ */
const OverallBadge = ({ status }) => {
  const cfg = {
    operational: { bg: '#DCFCE7', color: '#166534', icon: <CheckCircle size={12}/>, label: 'Operational' },
    maintenance:  { bg: '#FEF9C3', color: '#854D0E', icon: <AlertTriangle size={12}/>, label: 'Maintenance' },
    down:         { bg: '#FEE2E2', color: '#991B1B', icon: <XCircle size={12}/>, label: 'Down' },
  }[status] || { bg: '#F3F4F6', color: '#374151', icon: null, label: status };
  return (
    <span className="wmt-badge" style={{ background: cfg.bg, color: cfg.color }}>
      {cfg.icon} {cfg.label}
    </span>
  );
};

const PartBadge = ({ status, issue }) => {
  if (status === 'working')
    return <span className="wmt-part-badge ok"><CheckCircle size={11}/> Working</span>;
  return <span className="wmt-part-badge err"><XCircle size={11}/> {issue || 'Faulty'}</span>;
};

/* ═══════════════════════════════════════════
   FLOOR TABLE
═══════════════════════════════════════════ */
const FloorTable = ({ machines, title, icon }) => (
  <div className="wmt-floor-block">
    <div className="wmt-floor-header">
      {icon}
      <h4 className="wmt-floor-title">{title}</h4>
      <span className="wmt-floor-count">
        {machines.filter(m => m.operationalStatus === 'operational').length}/{machines.length} active
      </span>
    </div>
    <div className="wmt-table-scroll">
      <table className="wmt-table">
        <thead>
          <tr>
            <th>Machine ID</th>
            <th>Detailed Location &amp; Nearby Rooms</th>
            <th>Status</th>
            <th>Washer</th>
            <th>Dryer</th>
          </tr>
        </thead>
        <tbody>
          {machines.map((m, i) => (
            <tr key={m.id} className={`wmt-row ${m.operationalStatus !== 'operational' ? 'wmt-row-issue' : ''}`}>
              <td>
                <div className="wmt-machine-id">
                  <span className="wmt-loc-badge">{m.locationId}</span>
                  <span className="wmt-machine-no">{m.machineNo}</span>
                </div>
              </td>
              <td>
                <div className="wmt-location-cell">
                  <div className="wmt-location-main">{m.detailedLocation}</div>
                  <div className="wmt-location-sub"><MapPin size={10}/> {m.nearbyRooms}</div>
                </div>
              </td>
              <td><OverallBadge status={m.operationalStatus} /></td>
              <td><PartBadge status={m.rotator.status} issue={m.rotator.issue} /></td>
              <td><PartBadge status={m.dryer.status} issue={m.dryer.issue} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
const WashingMachineTracker = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ground');

  const groundMachines = MACHINES.filter(m => m.floor === 'ground');
  const secondMachines = MACHINES.filter(m => m.floor === 'second');
  const totalActive    = MACHINES.filter(m => m.operationalStatus === 'operational').length;
  const total          = MACHINES.length;
  const hasIssues      = MACHINES.some(m => m.operationalStatus !== 'operational');

  return (
    <section className="wmt-section">
      <div className="container">
        {/* ── Accordion Header ── */}
        <button
          className={`wmt-accordion-btn ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="wmt-panel"
        >
          {/* Left: Icon + Title */}
          <div className="wmt-btn-left">
            <div className="wmt-btn-icon">
              <WashingMachine size={22} />
            </div>
            <div className="wmt-btn-text">
              <span className="wmt-btn-title">Hostel Washing Machine Fleet — Live Status</span>
              <span className="wmt-btn-sub">
                {open ? 'Click to collapse' : 'Click to view all machines, locations & real-time status'}
              </span>
            </div>
          </div>

          {/* Right: Fleet badge + chevron */}
          <div className="wmt-btn-right">
            <span
              className="wmt-fleet-badge"
              style={{
                background: hasIssues ? '#FEF9C3' : '#DCFCE7',
                color: hasIssues ? '#854D0E' : '#166534',
              }}
            >
              {hasIssues && <AlertTriangle size={13}/>}
              {!hasIssues && <CheckCircle size={13}/>}
              {totalActive}/{total} Active
            </span>
            <ChevronDown
              size={20}
              className="wmt-chevron"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </div>
        </button>

        {/* ── Accordion Panel ── */}
        <div
          id="wmt-panel"
          className={`wmt-panel ${open ? 'open' : ''}`}
          role="region"
          aria-label="Washing machine fleet status"
        >
          <div className="wmt-panel-inner">
            {/* Legend */}
            <div className="wmt-legend">
              <span className="wmt-legend-item ok"><CheckCircle size={13}/> Operational</span>
              <span className="wmt-legend-item warn"><AlertTriangle size={13}/> Under Maintenance</span>
              <span className="wmt-legend-item err"><XCircle size={13}/> Down</span>
              <span className="wmt-legend-sep">Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>

            {/* Floor selector tabs */}
            <div className="wmt-tabs">
              <button
                className={`wmt-tab-btn ${activeTab === 'ground' ? 'active' : ''}`}
                onClick={() => setActiveTab('ground')}
              >
                <Layers size={14} /> Ground Floor
              </button>
              <button
                className={`wmt-tab-btn ${activeTab === 'second' ? 'active' : ''}`}
                onClick={() => setActiveTab('second')}
              >
                <Layers size={14} /> Second Floor
              </button>
            </div>

            {/* Conditional Rendering of Floor Tables */}
            {activeTab === 'ground' && (
              <FloorTable
                machines={groundMachines}
                title="Ground Floor"
                icon={<Layers size={16} style={{ color: '#6B7280' }}/>}
              />
            )}

            {activeTab === 'second' && (
              <FloorTable
                machines={secondMachines}
                title="Second Floor"
                icon={<Layers size={16} style={{ color: '#3B82F6' }}/>}
              />
            )}

            {/* Footer note */}
            <p className="wmt-footer-note">
              ⚠️ Data is maintained by the HMC. To report a faulty machine, use the Appliance Complaint form above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WashingMachineTracker;
