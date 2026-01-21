'use client';

import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      zIndex: 999,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
      flexWrap: 'wrap',
    }}>
      <span style={{
        color: 'white',
        fontSize: '15px',
        fontWeight: 500,
      }}>
        Map SFI codes and ISO 14224 failure modes in AssetStage
      </span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <a
          href="/#contact"
          style={{
            background: '#27ae60',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Start Free Trial
        </a>
        <a
          href="/#demo"
          style={{
            background: 'white',
            color: '#1e3c72',
            padding: '8px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Book Demo
        </a>
      </div>
    </div>
  );
}
