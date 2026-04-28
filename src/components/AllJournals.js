import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { allJournals } from '../data';
import './AllJournals.css';
import Navbar from './Navbar';

const categoryColors = {
  Cardiology: '#e53e3e',
  Neurology: '#6b46c1',
  Gastroenterology: '#2f855a',
  Nanomedicine: '#0097a7',
  Biotechnology: '#c8963e',
  Psychiatry: '#38a169',
  Oncology: '#d44000',
  'Infectious Diseases': '#1a7ec8',
  Surgery: '#b7410e',
  'Public Health': '#2d8a6b',
  Nutrition: '#5a7a2b',
  Gynecology: '#c2185b',
  Pharmacology: '#7b1fa2',
  Hematology: '#c62828',
  Immunology: '#1565c0',
  Endocrinology: '#6a1e91',
  Dermatology: '#f57f17',
  Orthopedics: '#4e342e',
  Radiology: '#37474f',
  Nephrology: '#00695c',
  Microbiology: '#558b2f',
  Anesthesia: '#00796b',
  Anatomy: '#8d6e63',
  Dentistry: '#0277bd',
  Pediatrics: '#e91e63',
  'Reproductive Medicine': '#ad1457',
  'Forensic Science': '#546e7a',
  Urology: '#1976d2',
  ENT: '#00897b',
  Chemistry: '#6d4c41',
  Biology: '#33691e',
  Veterinary: '#4caf50',
  Geriatrics: '#ff8f00',
  'Emergency Medicine': '#d32f2f',
  'Family Medicine': '#1b5e20',
  'Clinical Medicine': '#455a64',
  'Palliative Care': '#7986cb',
  'Environmental Science': '#2e7d32',
  Engineering: '#5c6bc0',
  'Ophthalmology': '#0288d1',
  Nursing: '#f06292',
};

const getColor = (category) => categoryColors[category] || '#0097a7';

const ALL = 'All';

export default function AllJournals() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = useMemo(() => {
    const cats = [ALL, ...new Set(allJournals.map((j) => j.category))].sort((a, b) =>
      a === ALL ? -1 : b === ALL ? 1 : a.localeCompare(b)
    );
    return cats;
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allJournals.filter((j) => {
      const matchSearch = j.title.toLowerCase().includes(q) || j.category.toLowerCase().includes(q);
      const matchCat = activeCategory === ALL || j.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="aj-page">
      <Navbar/>
      {/* Header */}
      <div className="aj-hero">
        <div className="aj-hero-content">
        <button className="aj-back-btn" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </button>
          
          <h1 className="aj-title">A to Z Journals</h1>
          <p className="aj-subtitle">
            Browse all <strong>{allJournals.length}</strong> open access journals published by MedDocs Publishers,
            covering medicine, science, and technology.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="aj-controls">
        <div className="aj-search-wrap">
          <svg className="aj-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            className="aj-search"
            type="text"
            placeholder="Search journals…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="aj-search-clear" onClick={() => setSearch('')}>×</button>
          )}
        </div>
        <span className="aj-count">{filtered.length} journal{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Category filters */}
      <div className="aj-filters-wrap">
        <div className="aj-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`aj-filter-btn${activeCategory === cat ? ' active' : ''}`}
              style={activeCategory === cat && cat !== ALL ? { '--cat-color': getColor(cat) } : {}}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="aj-grid-wrap">
        {filtered.length === 0 ? (
          <div className="aj-empty">No journals found for "<strong>{search}</strong>"</div>
        ) : (
          <div className="aj-grid">
            {filtered.map((j) => (
              <a
                key={j.id}
                href={j.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aj-card"
                style={{ '--accent': getColor(j.category) }}
              >
                <div className="aj-card-top">
                  <span className="aj-cat-badge" style={{ background: getColor(j.category) + '18', color: getColor(j.category) }}>
                    {j.category}
                  </span>
                  <svg className="aj-ext-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
                <h3 className="aj-card-title">{j.title}</h3>
                <div className="aj-card-bar" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
