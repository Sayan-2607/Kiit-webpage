import React, { useState } from 'react';
import * as Icon from '../assets/Icons';
import './RoleQuickAccess.css';

const ROLES = {
  student: {
    label: 'Student',
    icon: <Icon.GraduationCap />,
    links: [
      { label: 'SAP Portal', desc: 'Grades, attendance & registration', icon: '💻' },
      { label: 'Exam Schedule', desc: 'Upcoming exams & seating plan', icon: '📝' },
      { label: 'Fee Payment', desc: 'Pay fees online securely', icon: '💳' },
      { label: 'Library', desc: 'E-resources & catalog search', icon: '📚' },
      { label: 'Hostel Services', desc: 'Room allotment & maintenance', icon: '🏠' },
      { label: 'Placement Portal', desc: 'Job listings & applications', icon: '💼' },
    ],
  },
  parent: {
    label: 'Parent',
    icon: <Icon.Users />,
    links: [
      { label: 'Ward Progress', desc: 'Track academic performance', icon: '📊' },
      { label: 'Fee Structure', desc: 'Semester-wise fee breakdown', icon: '💰' },
      { label: 'Attendance Report', desc: 'Monthly summary report', icon: '📋' },
      { label: 'Hostel Info', desc: 'Accommodation & amenities', icon: '🏢' },
      { label: 'Contact Faculty', desc: 'Reach department heads', icon: '📞' },
      { label: 'Campus Safety', desc: 'Security & wellness services', icon: '🛡️' },
    ],
  },
  faculty: {
    label: 'Faculty',
    icon: <Icon.BookOpen />,
    links: [
      { label: 'ERP Portal', desc: 'Marks entry & class records', icon: '📝' },
      { label: 'Research Portal', desc: 'Publications & grant status', icon: '🔬' },
      { label: 'Leave Management', desc: 'Apply & track leave', icon: '📅' },
      { label: 'Course Materials', desc: 'Upload syllabus & notes', icon: '📖' },
      { label: 'Faculty Directory', desc: 'Connect with colleagues', icon: '👥' },
      { label: 'Conferences', desc: 'Upcoming academic events', icon: '🎤' },
    ],
  },
  recruiter: {
    label: 'Recruiter',
    icon: <Icon.Briefcase />,
    links: [
      { label: 'Placement Cell', desc: 'Connect with T&P office', icon: '🤝' },
      { label: 'Student Profiles', desc: 'Browse candidate database', icon: '👨‍💻' },
      { label: 'Schedule Visit', desc: 'Plan campus recruitment drive', icon: '📅' },
      { label: 'Past Recruiters', desc: 'Companies that hired from KIIT', icon: '🏢' },
      { label: 'Infrastructure', desc: 'Placement test facilities', icon: '🏗️' },
      { label: 'MoU Partnership', desc: 'Industry-academia collaboration', icon: '📄' },
    ],
  },
};

export default function RoleQuickAccess() {
  const [activeRole, setActiveRole] = useState('student');

  return (
    <section className="section role-access" aria-labelledby="role-heading">
      <div className="container">
        <div className="role-access__header">
          <span className="section-label">Quick Access Dashboard</span>
          <h2 id="role-heading" className="section-title">I am a...</h2>
          <p className="section-subtitle">Select your role for personalized quick links</p>
        </div>

        {/* Role tabs */}
        <div className="role-access__tabs" role="tablist" aria-label="Select your role">
          {Object.entries(ROLES).map(([key, role]) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeRole === key}
              aria-controls={`panel-${key}`}
              className={`role-access__tab ${activeRole === key ? 'active' : ''}`}
              onClick={() => setActiveRole(key)}
            >
              {role.icon}
              <span>{role.label}</span>
            </button>
          ))}
        </div>

        {/* Links grid */}
        <div
          id={`panel-${activeRole}`}
          role="tabpanel"
          aria-label={`${ROLES[activeRole].label} quick links`}
          className="role-access__grid"
        >
          {ROLES[activeRole].links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="role-access__card"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="role-access__card-icon">{link.icon}</span>
              <div className="role-access__card-text">
                <span className="role-access__card-label">{link.label}</span>
                <span className="role-access__card-desc">{link.desc}</span>
              </div>
              <Icon.ChevronRight />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
