import React from 'react';
import * as Icon from '../assets/Icons';
import './Hero.css';

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="Welcome to KIIT"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(14, 23, 15, 0.88), rgba(14, 23, 15, 0.35)), url('/images-kiit.png')",
      }}
    >
      <div className="container hero__grid">
        <div className="hero__panel">
          <span className="hero__badge">Admissions Open 2025-26</span>
          <h1 className="hero__title">
            Innovate,
            <br />
            Inspire,
            <br />
            Ignite
          </h1>
          <p className="hero__description">
            Where innovation meets excellence, creating leaders for tomorrow with world-class research,
            global exposure, and industry-ready education.
          </p>

          <div className="hero__actions">
            <a href="#" className="btn btn-primary">
              Apply for KIITEE 2025 <Icon.ArrowRight />
            </a>
            <a href="#" className="btn btn-ghost">
              <Icon.Play /> Virtual Campus Tour
            </a>
          </div>

          <div className="hero__stats">
            {[
              { value: 'NIRF #17', label: 'National Ranking' },
              { value: '25,000+', label: 'Students' },
              { value: '65+', label: 'Countries' },
              { value: '95%+', label: 'Placement Rate' },
            ].map((item) => (
              <div key={item.value} className="hero__stat-card">
                <span className="hero__stat-value">{item.value}</span>
                <span className="hero__stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero__stack">
          <article className="hero__card hero__card--light">
            <p className="hero__card-title">KIIT Rises to 169th in Asia</p>
            <p className="hero__card-copy">6th best among private institutions for innovation, research and employability.</p>
            <div className="hero__card-pillset">
              <span className="badge badge-green">QS Asia</span>
              <span className="badge badge-accent">NIRF</span>
            </div>
          </article>

          <article className="hero__card hero__card--accent">
            <div className="hero__card-heading">
              <Icon.GraduationCap />
              <span>Admissions Open for KIITEE 2026</span>
            </div>
            <p className="hero__card-copy">Apply today for B.Tech, MBA, Law, Pharmacy and flagship programs with flexible scholarships.</p>
            <a href="#" className="btn btn-primary hero__card-cta">
              Apply Now
            </a>
          </article>

          <article className="hero__card hero__card--glass">
            <p className="hero__card-title">Pioneering Success in Education and Beyond</p>
            <div className="hero__partners">
              <span>ABET USA</span>
              <span>NBA</span>
              <span>IET UK</span>
              <span>Tier 1</span>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
