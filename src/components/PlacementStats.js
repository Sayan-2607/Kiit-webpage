import React from 'react';
import LazySection from './LazySection';
import * as Icon from '../assets/Icons';
import './PlacementStats.css';

const STATS = [
  { value: '₹54 LPA', label: 'Highest Package', sub: 'Domestic — 2024 Batch' },
  { value: '95%+', label: 'Placement Rate', sub: 'Consistent across batches' },
  { value: '500+', label: 'Recruiters', sub: 'Including Fortune 500' },
  { value: '₹9.5 LPA', label: 'Average Package', sub: 'Across all programs' },
];

const RECRUITERS = [
  'Google', 'Microsoft', 'Amazon', 'Goldman Sachs', 'JP Morgan',
  'Deloitte', 'TCS', 'Infosys', 'Wipro', 'IBM', 'Accenture', 'EY',
];

export default function PlacementStats() {
  return (
    <LazySection>
      <section className="section placements" aria-labelledby="placements-heading">
        <div className="placements__bg" aria-hidden="true" />
        <div className="container placements__inner">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="section-label" style={{ color: 'var(--green)' }}>Career Outcomes</span>
            <h2 id="placements-heading" className="section-title" style={{ color: '#fff' }}>
              Placement Highlights
            </h2>
          </div>

          <div className="placements__stats">
            {STATS.map((s, i) => (
              <div key={i} className="placements__stat">
                <span className="placements__stat-value">{s.value}</span>
                <span className="placements__stat-label">{s.label}</span>
                <span className="placements__stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="placements__recruiters">
            <p className="placements__recruiters-label">Top Recruiters</p>
            <div className="placements__recruiters-list">
              {RECRUITERS.map((name, i) => (
                <span key={i} className="placements__recruiter">{name}</span>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <a href="#" className="btn btn-ghost">
              View Full Placement Report <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </LazySection>
  );
}
