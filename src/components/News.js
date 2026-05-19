import React from 'react';
import LazySection from './LazySection';
import * as Icon from '../assets/Icons';
import './News.css';

const NEWS = [
  {
    tag: 'Achievement',
    date: 'May 15, 2025',
    title: 'KIIT Ranked 17th in NIRF 2025 — Highest Ever',
    excerpt: 'A landmark achievement reflecting our commitment to academic excellence and research innovation.',
    color: 'var(--green)',
  },
  {
    tag: 'Placement',
    date: 'May 10, 2025',
    title: 'Record ₹54 LPA Package Offered in Campus Placements',
    excerpt: 'A leading tech giant extends the highest domestic offer, continuing KIIT\'s placement legacy.',
    color: 'var(--accent)',
  },
  {
    tag: 'Research',
    date: 'May 5, 2025',
    title: 'KIIT-TBI Startups Raise ₹45 Cr in Series A Funding',
    excerpt: 'Three incubated startups secure major funding rounds, validating KIIT\'s innovation ecosystem.',
    color: 'var(--info)',
  },
  {
    tag: 'Event',
    date: 'April 28, 2025',
    title: 'International Conference on AI & Sustainability 2025',
    excerpt: 'Over 500 researchers from 30 countries gathered for KIIT\'s flagship academic conference.',
    color: 'var(--purple)',
  },
];

export default function News() {
  return (
    <LazySection>
      <section className="section news" aria-labelledby="news-heading">
        <div className="container">
          <div className="news__header">
            <div>
              <span className="section-label">Latest Updates</span>
              <h2 id="news-heading" className="section-title">News & Events</h2>
            </div>
            <a href="#" className="btn btn-outline news__view-all">
              View All News <Icon.ArrowRight />
            </a>
          </div>

          <div className="news__grid">
            {NEWS.map((item, i) => (
              <a key={i} href="#" className="news__card card">
                <div className="news__card-top">
                  <span className="badge" style={{ background: `${item.color}15`, color: item.color }}>{item.tag}</span>
                  <span className="news__card-date">{item.date}</span>
                </div>
                <h3 className="news__card-title">{item.title}</h3>
                <p className="news__card-excerpt">{item.excerpt}</p>
                <span className="news__card-link">
                  Read More <Icon.ArrowRight />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </LazySection>
  );
}
