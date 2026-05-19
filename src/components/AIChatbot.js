import React, { useState, useRef, useEffect } from 'react';
import { useClickOutside } from '../hooks/useHooks';
import * as Icon from '../assets/Icons';
import './AIChatbot.css';

const FAQ_RESPONSES = {
  'Admission Process': 'KIIT admissions for 2025-26 are through KIITEE (KIIT Entrance Examination). Apply online at kiitee.kiit.ac.in. Key dates: Application deadline — June 30, 2025. Exam: Online CBT mode. Results: Within 15 days of exam.',
  'Fee Structure': 'B.Tech: ₹3.74L/semester | MBA: ₹4.25L/semester | Law: ₹2.85L/semester. Includes tuition, lab, library, and examination fees. Hostel & mess fees are separate (~₹65,000/semester). EMI options available through partner banks.',
  'Placements 2024': 'Highlights: 95%+ placement rate | ₹54 LPA highest (domestic) | ₹9.5 LPA average | 500+ recruiters including Google, Microsoft, Amazon, Goldman Sachs, JP Morgan, Deloitte. Pre-placement offers start from 7th semester.',
  'Hostel & Facilities': 'KIIT provides AC & Non-AC hostels for all students. Amenities: Wi-Fi, 24/7 security, laundry, gym, mess (veg & non-veg). Medical center on campus. Separate hostels for boys and girls. Allotment is on first-come basis.',
  'Exam Schedule': 'End-semester exams: May 15 – June 10, 2025. Mid-semester: March 10-20. Supplementary exams: July. Check SAP portal for your personalized schedule and seating arrangement. Hall tickets available 1 week before exams.',
};

const QUICK_QUERIES = Object.keys(FAQ_RESPONSES);

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm KIIT's AI assistant. How can I help you today? Choose a topic below or type your question." }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);
  const panelRef = useRef(null);

  useClickOutside(panelRef, () => { if (open) setOpen(false); });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    const userMsg = { role: 'user', text: text.trim() };
    const response = FAQ_RESPONSES[text] ||
      "Thanks for your question! For detailed information, please visit the relevant section on our website or contact us at info@kiit.ac.in / +91-674-2725113. Our admissions team is available Mon-Sat, 9 AM - 5 PM.";
    
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: response }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Chat panel */}
      {open && (
        <div ref={panelRef} className="chatbot-panel" role="dialog" aria-label="AI Chatbot">
          <div className="chatbot-panel__header">
            <div className="chatbot-panel__header-info">
              <Icon.Bot />
              <div>
                <strong>KIIT Assistant</strong>
                <span className="chatbot-panel__status">● Online</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="chatbot-panel__close">
              <Icon.Close />
            </button>
          </div>

          <div className="chatbot-panel__messages" ref={chatRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick queries */}
          <div className="chatbot-panel__quick">
            {QUICK_QUERIES.map((q) => (
              <button key={q} className="chatbot-panel__quick-btn" onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-panel__input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Type your question..."
              className="chatbot-panel__input"
              aria-label="Type your question"
            />
            <button
              onClick={() => handleSend(input)}
              className="chatbot-panel__send"
              aria-label="Send message"
              disabled={!input.trim()}
            >
              <Icon.Send />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        className={`chatbot-fab ${open ? 'chatbot-fab--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        aria-expanded={open}
      >
        {open ? <Icon.Close /> : <Icon.Bot />}
      </button>
    </div>
  );
}
