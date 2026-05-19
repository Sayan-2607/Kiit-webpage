import React, { useState } from 'react';
import LazySection from './LazySection';
import * as Icon from '../assets/Icons';
import './Programs.css';

const PROGRAMS = {
  ug: [
    { name: 'B.Tech', schools: 'CSE, ECE, ME, CE, EE + 12 more', seats: '4,200', icon: '⚙️' },
    { name: 'BBA', schools: 'Management & Commerce', seats: '480', icon: '📊' },
    { name: 'BA/BBA LLB', schools: 'KIIT School of Law', seats: '300', icon: '⚖️' },
    { name: 'B.Sc Nursing', schools: 'KIMS — Health Sciences', seats: '100', icon: '🏥' },
    { name: 'BCA', schools: 'Computer Applications', seats: '180', icon: '💻' },
    { name: 'B.Arch', schools: 'Architecture & Planning', seats: '60', icon: '🏛️' },
  ],
  pg: [
    { name: 'M.Tech', schools: '15 Specializations', seats: '800', icon: '🔧' },
    { name: 'MBA', schools: 'KSOM — AACSB Accredited', seats: '360', icon: '📈' },
    { name: 'LLM', schools: 'Corporate, Constitutional, IPR', seats: '60', icon: '⚖️' },
    { name: 'MCA', schools: 'Computer Applications', seats: '120', icon: '🖥️' },
    { name: 'M.Sc', schools: 'Biotechnology, Chemistry, Physics', seats: '200', icon: '🔬' },
    { name: 'MA', schools: 'Economics, English, Sociology', seats: '90', icon: '📚' },
  ],
  phd: [
    { name: 'Ph.D. Engineering', schools: 'All engineering disciplines', seats: '150+', icon: '⚙️' },
    { name: 'Ph.D. Management', schools: 'KSOM doctoral program', seats: '30', icon: '📊' },
    { name: 'Ph.D. Law', schools: 'Legal research', seats: '20', icon: '⚖️' },
    { name: 'Ph.D. Sciences', schools: 'Biotech, Applied Sciences', seats: '60', icon: '🧬' },
    { name: 'Ph.D. Humanities', schools: 'Social Sciences, Film Studies', seats: '40', icon: '📖' },
    { name: 'Ph.D. Medicine', schools: 'KIMS — Clinical research', seats: '25', icon: '🏥' },
  ],
};

const TABS = [
  { key: 'ug', label: 'Undergraduate' },
  { key: 'pg', label: 'Postgraduate' },
  { key: 'phd', label: 'Doctoral' },
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('ug');

  return (
    <LazySection>
      <section className="section programs" aria-labelledby="programs-heading">
        <div className="container">
          <div className="programs__header">
            <span className="section-label">Academic Programs</span>
            <h2 id="programs-heading" className="section-title">Explore Our Programs</h2>
            <p className="section-subtitle">28 Schools offering 100+ programs across Engineering, Management, Law, Medicine & more</p>
          </div>

          <div className="programs__tabs" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`programs__tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="programs__grid" role="tabpanel">
            {PROGRAMS[activeTab].map((prog, i) => (
              <a
                key={i}
                href="#"
                className="programs__card card"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="programs__card-top">
                  <span className="programs__card-icon">{prog.icon}</span>
                  <span className="badge badge-green">{prog.seats} seats</span>
                </div>
                <h3 className="programs__card-name">{prog.name}</h3>
                <p className="programs__card-schools">{prog.schools}</p>
                <span className="programs__card-link">
                  View Details <Icon.ArrowRight />
                </span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <a href="#" className="btn btn-outline">
              View All Programs <Icon.ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </LazySection>
  );
}
