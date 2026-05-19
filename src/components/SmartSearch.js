import React, { useState, useEffect, useRef } from 'react';
import * as Icon from '../assets/Icons';
import './SmartSearch.css';

const ALL_PAGES = [
  { title: 'B.Tech Admission 2025', cat: 'Admissions', desc: 'Apply for B.Tech programs through KIITEE', icon: '🎓' },
  { title: 'Fee Structure', cat: 'Finance', desc: 'Semester-wise fee details for all programs', icon: '💰' },
  { title: 'Placement Statistics 2024', cat: 'Placements', desc: 'Package details, top recruiters, placement rate', icon: '📊' },
  { title: 'Hostel Accommodation', cat: 'Campus Life', desc: 'Room types, amenities, mess facilities', icon: '🏠' },
  { title: 'Examination Schedule', cat: 'Academics', desc: 'Upcoming exam dates and seating arrangements', icon: '📝' },
  { title: 'Scholarship Programs', cat: 'Finance', desc: 'Merit-based and need-based scholarships', icon: '🏅' },
  { title: 'SAP Student Portal', cat: 'Student Services', desc: 'Access grades, attendance, and registration', icon: '💻' },
  { title: 'Faculty Directory', cat: 'Academics', desc: 'Find and contact department faculty members', icon: '👨‍🏫' },
  { title: 'International Admissions', cat: 'Admissions', desc: 'Admission process for international students', icon: '🌍' },
  { title: 'Research & Innovation', cat: 'Research', desc: 'Research centers, publications, grants', icon: '🔬' },
  { title: 'Virtual Campus Tour', cat: 'Campus Life', desc: '360° interactive campus walkthrough', icon: '🏛️' },
  { title: 'Transport Facilities', cat: 'Campus Life', desc: 'Bus routes, schedules, and pickup points', icon: '🚌' },
  { title: 'Anti-Ragging Committee', cat: 'Student Welfare', desc: 'Report issues and get immediate support', icon: '🛡️' },
  { title: 'NIRF Ranking 2025', cat: 'Rankings', desc: 'Ranked 17th among all universities in India', icon: '🏆' },
  { title: 'MBA Admission', cat: 'Admissions', desc: 'MBA program details, eligibility, and process', icon: '📈' },
  { title: 'Library E-Resources', cat: 'Academics', desc: 'Access journals, databases, and e-books', icon: '📚' },
  { title: 'Sports Complex', cat: 'Campus Life', desc: 'Indoor/outdoor sports facilities', icon: '⚽' },
  { title: 'Alumni Connect', cat: 'Community', desc: 'Join the KIIT alumni network worldwide', icon: '🤝' },
];

const CATEGORIES = [...new Set(ALL_PAGES.map(p => p.cat))];

export default function SmartSearch({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState(null);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedCat(null);
      setHighlightIdx(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const results = ALL_PAGES.filter((p) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    const matchesCat = !selectedCat || p.cat === selectedCat;
    return matchesQuery && matchesCat;
  }).slice(0, 8);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div
        className="search-modal"
        role="dialog"
        aria-label="Search KIIT"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="search-modal__header">
          <Icon.Search />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => { setQuery(e.target.value); setHighlightIdx(0); }}
            onKeyDown={handleKeyDown}
            placeholder="Search admissions, fees, placements, exams..."
            aria-label="Search KIIT website"
            className="search-modal__input"
            autoComplete="off"
          />
          <kbd className="search-modal__esc">ESC</kbd>
        </div>

        {/* Category filters */}
        <div className="search-modal__filters">
          <button
            className={`search-modal__filter ${!selectedCat ? 'active' : ''}`}
            onClick={() => setSelectedCat(null)}
          >
            All
          </button>
          {CATEGORIES.slice(0, 6).map((cat) => (
            <button
              key={cat}
              className={`search-modal__filter ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(selectedCat === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="search-modal__results" role="listbox">
          {results.length === 0 ? (
            <div className="search-modal__empty">
              <p>No results found for "{query}"</p>
              <p className="search-modal__empty-hint">Try searching for admissions, fees, or placements</p>
            </div>
          ) : (
            results.map((r, i) => (
              <a
                key={i}
                href="#"
                className={`search-modal__result ${i === highlightIdx ? 'highlighted' : ''}`}
                role="option"
                aria-selected={i === highlightIdx}
                onMouseEnter={() => setHighlightIdx(i)}
                onClick={onClose}
              >
                <span className="search-modal__result-icon">{r.icon}</span>
                <div className="search-modal__result-text">
                  <span className="search-modal__result-title">{r.title}</span>
                  <span className="search-modal__result-desc">{r.desc}</span>
                </div>
                <span className="badge badge-green">{r.cat}</span>
              </a>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="search-modal__footer">
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Open</span>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
