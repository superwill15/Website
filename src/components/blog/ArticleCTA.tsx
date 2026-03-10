'use client';

import { useState } from 'react';
import DemoModal from '@/components/DemoModal';

interface ArticleCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'subtle' | 'highlight';
}

export default function ArticleCTA({
  title = "Ready to fix your CMMS data?",
  description = "See how AssetStage can help you clean, validate, and prepare your asset data in weeks, not months.",
  buttonText = "Book a Demo →",
  variant = 'default'
}: ArticleCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      borderLeft: '4px solid var(--accent-green)',
    },
    subtle: {
      background: 'var(--bg-light)',
      borderLeft: '3px solid var(--border-light)',
    },
    highlight: {
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      borderLeft: 'none',
    }
  };

  const isHighlight = variant === 'highlight';

  return (
    <>
      <div
        className="article-cta"
        style={{
          ...variantStyles[variant],
          padding: '24px 28px',
          borderRadius: '8px',
          margin: '40px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ flex: '1 1 300px' }}>
          <strong style={{
            fontSize: '18px',
            color: isHighlight ? '#fff' : 'var(--text-dark)',
            display: 'block',
            marginBottom: '4px'
          }}>
            {title}
          </strong>
          <p style={{
            margin: 0,
            color: isHighlight ? 'rgba(255,255,255,0.9)' : 'var(--text-light)',
            fontSize: '15px',
            lineHeight: '1.5'
          }}>
            {description}
          </p>
        </div>
        <button
          onClick={openModal}
          style={{
            background: isHighlight ? '#fff' : 'var(--accent-green)',
            color: isHighlight ? 'var(--primary-navy)' : '#fff',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            fontWeight: 600,
            fontSize: '15px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {buttonText}
        </button>
      </div>

      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
