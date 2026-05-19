import React from 'react';
import LazySection from './LazySection';
import * as Icon from '../assets/Icons';
import './CampusHighlights.css';

const HIGHLIGHTS = [
  {
    icon: <Icon.Building />,
    title: 'World-Class Infrastructure',
    desc: '25+ km campus with smart classrooms, 42 research labs, and innovation centers',
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, #E8F9EF, #D0F0DB)',
  },
  {
    icon: <Icon.Zap />,
    title: 'Cutting-Edge Research',
    desc: '3,500+ publications, ₹120 Cr research grants, 200+ patents filed',
    color: 'var(--info)',
    gradient: 'linear-gradient(135deg, #EBF5FF, #D4E9FF)',
  },
  {
    icon: <Icon.TrendingUp />,
    title: 'Outstanding Placements',
    desc: '95%+ placement rate, ₹54 LPA highest package, 500+ recruiters',
    color: 'var(--accent)',
    gradient: 'linear-gradient(135deg, #FFF8E5, #FFE8B3)',
  },
  {
    icon: <Icon.Globe />,
    title: 'Global Exposure',
    desc: '200+ international MoUs, semester exchange programs across 35 countries',
    color: 'var(--purple)',
    gradient: 'linear-gradient(135deg, #F3EEFF, #E3D6FF)',
  },
  {
    icon: <Icon.Target />,
    title: 'Sports Excellence',
    desc: 'Olympic-grade sports complex, 30+ disciplines, national champions',
    color: 'var(--danger)',
    gradient: 'linear-gradient(135deg, #FFF0F0, #FFD6D6)',
  },
  {
    icon: <Icon.Shield />,
    title: 'Safe & Inclusive Campus',
    desc: 'NAAC A++ accredited, 24/7 security, dedicated wellness center',
    color: 'var(--green-muted)',
    gradient: 'linear-gradient(135deg, #E6FFF0, #CCFFE0)',
  },
];

export default function CampusHighlights() {
  return (
    <LazySection>
      <section className="section campus-hl" aria-labelledby="campus-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <span className="section-label">Why KIIT</span>
            <h2 id="campus-heading" className="section-title">Campus Highlights</h2>
            <p className="section-subtitle" style={{ margin: '8px auto 0' }}>
              Discover what makes KIIT one of India's most preferred universities
            </p>
          </div>

          <div className="campus-hl__grid">
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="campus-hl__card card">
                <div
                  className="campus-hl__icon"
                  style={{ background: h.gradient, color: h.color }}
                >
                  {h.icon}
                </div>
                <h3 className="campus-hl__title">{h.title}</h3>
                <p className="campus-hl__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LazySection>
  );
}
