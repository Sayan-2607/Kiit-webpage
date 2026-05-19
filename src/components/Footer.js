import React from 'react';
import * as Icon from '../assets/Icons';
import './Footer.css';

const FOOTER_LINKS = {
  Academics: ['Schools', 'Programs', 'Syllabus', 'Academic Calendar', 'Examination', 'Library'],
  Admissions: ['KIITEE 2025', 'Apply Online', 'Fee Structure', 'Scholarships', 'International', 'FAQs'],
  'Campus Life': ['Hostels', 'Sports', 'Clubs', 'Events', 'Transport', 'Health Center'],
  Research: ['Publications', 'Centers', 'Innovation Hub', 'Patents', 'Grants', 'KIIT-TBI'],
  'Quick Links': ['SAP Portal', 'Placements', 'Alumni', 'NIRF Data', 'RTI', 'Careers at KIIT'],
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Main footer */}
        <div className="footer__main">
          {/* Brand col */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="navbar__logo-mark">K</div>
              <div>
                <div className="footer__logo-name">KIIT</div>
                <div className="footer__logo-sub">Deemed to be University</div>
              </div>
            </div>
            <p className="footer__desc">
              Kalinga Institute of Industrial Technology — Empowering lives through education since 1997. NAAC A++ accredited, NIRF #17.
            </p>
            <div className="footer__contact">
              <a href="tel:+916742725113" className="footer__contact-item">
                <Icon.Phone /> +91-674-2725113
              </a>
              <a href="mailto:info@kiit.ac.in" className="footer__contact-item">
                <Icon.Mail /> info@kiit.ac.in
              </a>
              <span className="footer__contact-item">
                <Icon.MapPin size={16} strokeWidth={2} /> Bhubaneswar, Odisha 751024
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="footer__col">
              <h3 className="footer__col-heading">{heading}</h3>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} KIIT — Kalinga Institute of Industrial Technology. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
            <a href="#">Grievance Redressal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
