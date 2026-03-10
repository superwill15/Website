'use client';

import { useState } from 'react';
import DemoModal from '@/components/DemoModal';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function CTASection({
  title = "Ready to Fix Your CMMS Data?",
  subtitle = "Join forward-thinking maintenance teams who've stopped accepting bad data as inevitable.",
  primaryButtonText = "Book a Demo",
  secondaryButtonText,
  secondaryButtonHref
}: CTASectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="cta-section">
        <div className="container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={openModal}
              style={{ background: '#fff', color: 'var(--primary-navy)' }}
            >
              {primaryButtonText}
            </button>
            {secondaryButtonText && secondaryButtonHref && (
              <a href={secondaryButtonHref} className="btn-secondary">
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </section>

      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
