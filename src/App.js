import React, { useState, useEffect, useCallback } from 'react';
import { useKeyboard } from './hooks/useHooks';
import NotificationBanner from './components/NotificationBanner';
import Navbar from './components/Navbar';
import SmartSearch from './components/SmartSearch';
import Hero from './components/Hero';
import RoleQuickAccess from './components/RoleQuickAccess';
import Rankings from './components/Rankings';
import Programs from './components/Programs';
import CampusHighlights from './components/CampusHighlights';
import PlacementStats from './components/PlacementStats';
import News from './components/News';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import AccessibilityToolbar from './components/AccessibilityToolbar';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Keyboard shortcut: Ctrl/Cmd+K to open search
  const openSearch = useCallback(() => setSearchOpen(true), []);
  useKeyboard('k', openSearch, ['ctrl']);

  // Apply theme + accessibility
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    return () => { document.documentElement.style.fontSize = ''; };
  }, [fontSize]);

  return (
    <>
      {/* Skip to content link — Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <NotificationBanner />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SmartSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main id="main-content">
        <Hero />
        <RoleQuickAccess />
        <Rankings />
        <Programs />
        <CampusHighlights />
        <PlacementStats />
        <News />
      </main>

      <Footer />

      {/* Floating tools */}
      <AIChatbot />
      <AccessibilityToolbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
    </>
  );
}
