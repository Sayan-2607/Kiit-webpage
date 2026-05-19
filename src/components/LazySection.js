import React from 'react';
import { useInView } from '../hooks/useHooks';

export default function LazySection({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}ms`,
      }}
    >
      {isInView ? children : <div style={{ minHeight: 200 }} />}
    </div>
  );
}
