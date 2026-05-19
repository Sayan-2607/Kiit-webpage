import React, { useState, useRef, useCallback } from 'react';
import { useScrolled, useMediaQuery, useClickOutside } from '../hooks/useHooks';
import * as Icon from '../assets/Icons';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Academics', children: ['Schools & Programs', 'B.Tech', 'MBA', 'Law', 'Ph.D.', 'Syllabus', 'Academic Calendar'] },
  { label: 'Admissions', children: ['KIITEE 2025', 'Apply Now', 'Eligibility', 'International', 'Scholarships', 'Fee Structure'] },
  { label: 'Research', children: ['Publications', 'Research Centers', 'Innovation Hub', 'KIIT-TBI', 'Grants & Funding'] },
  { label: 'Campus Life', children: ['Hostels', 'Sports Complex', 'Clubs & Societies', 'Events', 'Transport', 'Health Center'] },
  { label: 'Placements', children: ['Statistics 2024', 'Top Recruiters', 'Training Programs', 'Internships', 'Alumni Network'] },
  { label: 'Rankings', children: ['NIRF 2025', 'QS World Rankings', 'THE Rankings', 'ARIIA', 'Accreditations'] },
];

export default function Navbar({ onSearchOpen }) {
  const scrolled = useScrolled(20);
  const isMobile = useMediaQuery('(max-width: 960px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const mobileRef = useRef(null);

  useClickOutside(mobileRef, () => setMobileOpen(false));

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        role="banner"
      >
        {/* Utility bar */}
        <div className="navbar__utility">
          <div className="container navbar__utility-inner">
            <div className="navbar__utility-left">
              <a href="tel:+916742725113" className="navbar__utility-link">
                <Icon.Phone /> +91-674-2725113
              </a>
              <a href="mailto:info@kiit.ac.in" className="navbar__utility-link">
                <Icon.Mail /> info@kiit.ac.in
              </a>
            </div>
            <div className="navbar__utility-right">
              <a href="#" className="navbar__utility-link"><Icon.Globe /> International</a>
              <a href="#" className="navbar__utility-link"><Icon.User /> SAP Login</a>
              <a href="#" className="navbar__utility-link"><Icon.Bell /> Alerts</a>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav aria-label="Main navigation" className="container">
          <div className="navbar__main">
            {/* Logo */}
            <a href="#" className="navbar__logo" aria-label="KIIT Home">
              <img 
                src="/images-kiit.png" 
                alt="KIIT Logo" 
                className="navbar__logo-img"
              />
            </a>

            {/* Desktop nav items */}
            {!isMobile && (
              <div className="navbar__items" role="menubar">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="navbar__item"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`navbar__item-btn ${activeDropdown === item.label ? 'active' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <Icon.ChevronDown />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="navbar__dropdown animate-fade-in" role="menu">
                        {item.children.map((child) => (
                          <a key={child} href="#" className="navbar__dropdown-link" role="menuitem">
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="navbar__actions">
              <button
                onClick={onSearchOpen}
                className="navbar__search-btn"
                aria-label="Open search (Ctrl+K)"
              >
                <Icon.Search />
                {!isMobile && <span className="navbar__search-text">Search...</span>}
                {!isMobile && <kbd className="navbar__kbd">⌘K</kbd>}
              </button>
              <a href="#" className="btn btn-primary navbar__apply-btn">
                Apply Now
              </a>
              {isMobile && (
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="navbar__hamburger"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                >
                  {mobileOpen ? <Icon.Close /> : <Icon.Menu />}
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {isMobile && mobileOpen && (
        <div className="mobile-overlay" onClick={closeMobile}>
          <nav
            ref={mobileRef}
            className="mobile-nav"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav__header">
              <div className="navbar__logo">
                <div className="navbar__logo-mark">K</div>
                <div className="navbar__logo-text">
                  <span className="navbar__logo-name">KIIT</span>
                  <span className="navbar__logo-sub">Deemed to be University</span>
                </div>
              </div>
              <button onClick={closeMobile} aria-label="Close menu" className="mobile-nav__close">
                <Icon.Close />
              </button>
            </div>

            <div className="mobile-nav__search">
              <button onClick={() => { closeMobile(); onSearchOpen(); }} className="mobile-nav__search-btn">
                <Icon.Search /> Search KIIT...
              </button>
            </div>

            <div className="mobile-nav__items">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="mobile-nav__group">
                  <button
                    className="mobile-nav__group-btn"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    aria-expanded={mobileExpanded === item.label}
                  >
                    <span>{item.label}</span>
                    <Icon.ChevronDown
                      style={{
                        transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mobile-nav__children">
                      {item.children.map((child) => (
                        <a key={child} href="#" className="mobile-nav__child-link" onClick={closeMobile}>
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mobile-nav__footer">
              <a href="#" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Apply Now
              </a>
              <div className="mobile-nav__footer-links">
                <a href="#">SAP Portal</a>
                <a href="#">International</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
