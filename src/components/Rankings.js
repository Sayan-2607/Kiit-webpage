import React from 'react';
import LazySection from './LazySection';
import * as Icon from '../assets/Icons';
import './Rankings.css';

const RANKINGS = [
  { badge: 'NIRF 2025', rank: '#17', desc: 'Among Govt & Private Universities', color: 'var(--green)' },
  { badge: 'QS World', rank: '5 Stars', desc: "India's First QS 5-Star Rated University", color: 'var(--accent)' },
  { badge: 'THE Rankings', rank: '501-600', desc: 'Times Higher Education World Rankings 2026', color: 'var(--info)' },
  { badge: 'ARIIA', rank: '#1', desc: 'Innovation Achievement — 2 Consecutive Years', color: 'var(--danger)' },
  { badge: 'SDG Impact', rank: 'Top 200', desc: 'THE Impact Rankings 2025', color: 'var(--purple)' },
  { badge: 'SDG 10', rank: '#15 Global', desc: 'Reduced Inequalities — #1 in India', color: 'var(--green-muted)' },
];

export default function Rankings() {
  return (
    <LazySection>
      <section className="section rankings" aria-labelledby="rankings-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="section-label">Globally Recognized</span>
            <h2 id="rankings-heading" className="section-title">Rankings & Accreditations</h2>
          </div>

          <div className="rankings__grid">
            {RANKINGS.map((r, i) => (
              <div key={i} className="rankings__card card">
                <div className="rankings__icon" style={{ background: `${r.color}15`, color: r.color }}>
                  <Icon.Award />
                </div>
                <div className="rankings__info">
                  <span className="rankings__badge" style={{ color: r.color }}>{r.badge}</span>
                  <span className="rankings__rank">{r.rank}</span>
                  <span className="rankings__desc">{r.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazySection>
  );
}
