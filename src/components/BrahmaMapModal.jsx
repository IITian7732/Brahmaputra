import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Maximize2, Map } from 'lucide-react';
import brahmaMapImg from '../assets/Brahmaputra_Hostel_Map.png';
import brahmaMapPdf from '../assets/Brahmaputra_Hostel_Map.pdf';
import './BrahmaMapModal.css';

const BrahmaMapModal = ({ onClose }) => {
  const [zoom, setZoom] = useState(1);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleZoomIn = () => setZoom(z => Math.min(z + 0.25, 3.5));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="brahma-map-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="brahma-map-modal" onClick={(e) => e.stopPropagation()}>
        {/* ── Modal Header ── */}
        <div className="map-modal-header">
          <div className="map-modal-title-group">
            <div className="map-modal-icon">
              <Map size={20} />
            </div>
            <div>
              <h3 className="map-modal-title">Brahmaputra Hostel — Floor Map</h3>
              <span className="map-modal-subtitle">Ground, First, Second &amp; Third Floors</span>
            </div>
          </div>

          {/* ── Zoom Controls ── */}
          <div className="map-zoom-controls">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="zoom-btn"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span className="zoom-level-badge">{Math.round(zoom * 100)}%</span>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3.5}
              className="zoom-btn"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={handleResetZoom}
              className="zoom-btn reset-btn"
              title="Reset Zoom"
            >
              <RotateCcw size={15} />
              <span>Reset</span>
            </button>
          </div>

          {/* ── Actions (Download & Close) ── */}
          <div className="map-modal-actions">
            <a
              href={brahmaMapPdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Brahmaputra_Hostel_Map.pdf"
              className="map-download-btn"
              title="Download Original PDF"
            >
              <Download size={15} />
              <span>PDF</span>
            </a>
            <button onClick={onClose} className="map-close-btn" title="Close Map (Esc)">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* ── Map Viewer Area ── */}
        <div className="map-viewer-container">
          <div
            className="map-image-wrapper"
            style={{ transform: `scale(${zoom})` }}
          >
            <img
              src={brahmaMapImg}
              alt="Brahmaputra Hostel Room Map"
              className="map-viewer-img"
              draggable="false"
            />
          </div>
        </div>

        {/* ── Modal Footer Bar ── */}
        <div className="map-modal-footer">
          <span>💡 Tip: Use the + / - buttons above or scroll to view different sections of the floor map.</span>
          <span className="map-footer-credit">Created By: Mohit Kumar &amp; Contributors</span>
        </div>
      </div>
    </div>
  );
};

export default BrahmaMapModal;
