import React, { useState } from 'react';
import * as Icon from '../assets/Icons';
import './AccessibilityToolbar.css';

export default function AccessibilityToolbar({ darkMode, setDarkMode, highContrast, setHighContrast, fontSize, setFontSize }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="a11y-toolbar">
      {open && (
        <div className="a11y-panel" role="region" aria-label="Accessibility settings">
          <h3 className="a11y-panel__title">Accessibility</h3>

          {/* Dark mode */}
          <button
            className={`a11y-panel__option ${darkMode ? 'active' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-pressed={darkMode}
          >
            <span className="a11y-panel__option-icon">🌙</span>
            <span>Dark Mode</span>
            <span className={`a11y-panel__toggle ${darkMode ? 'on' : ''}`} />
          </button>

          {/* High contrast */}
          <button
            className={`a11y-panel__option ${highContrast ? 'active' : ''}`}
            onClick={() => setHighContrast(!highContrast)}
            aria-pressed={highContrast}
          >
            <span className="a11y-panel__option-icon">◐</span>
            <span>High Contrast</span>
            <span className={`a11y-panel__toggle ${highContrast ? 'on' : ''}`} />
          </button>

          {/* Font size */}
          <div className="a11y-panel__font-control">
            <span className="a11y-panel__option-icon">Aa</span>
            <span>Text Size</span>
            <div className="a11y-panel__font-btns">
              <button
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                aria-label="Decrease font size"
                disabled={fontSize <= 12}
              >
                A−
              </button>
              <span className="a11y-panel__font-value">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                aria-label="Increase font size"
                disabled={fontSize >= 24}
              >
                A+
              </button>
            </div>
          </div>

          <button
            className="a11y-panel__reset"
            onClick={() => {
              setDarkMode(false);
              setHighContrast(false);
              setFontSize(16);
            }}
          >
            Reset All
          </button>
        </div>
      )}

      <button
        className="a11y-fab"
        onClick={() => setOpen(!open)}
        aria-label="Accessibility settings"
        aria-expanded={open}
      >
        <Icon.Accessibility />
      </button>
    </div>
  );
}
