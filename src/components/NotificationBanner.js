import React, { useState } from 'react';
import { Close } from '../assets/Icons';

export default function NotificationBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="notification-banner"
      style={{
        background: 'linear-gradient(90deg, var(--green), var(--green-dark))',
        color: 'var(--white)',
        padding: '10px 20px',
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        position: 'relative',
        zIndex: 9001,
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: 16 }}>🎓</span>
        <span>KIITEE 2025 Counselling Schedule Released</span>
        <a
          href="#"
          style={{
            color: 'var(--white)',
            fontWeight: 700,
            textDecoration: 'underline',
            textUnderlineOffset: 3,
          }}
        >
          View Details →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss notification"
        style={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--white)',
          opacity: 0.8,
          padding: 4,
          display: 'flex',
        }}
      >
        <Close size={18} />
      </button>
    </div>
  );
}
