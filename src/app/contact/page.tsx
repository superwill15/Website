'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoModal from '@/components/DemoModal';
import { Mail, MessageSquare, Calendar } from 'lucide-react';

export default function ContactPage() {
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
      <Navigation />

      {/* Hero Section */}
      <section className="hero" style={{ padding: '80px 20px 60px' }}>
        <div className="hero-content">
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--accent-blue)',
            marginBottom: '16px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Get In Touch
          </div>
          <h1>Contact Us</h1>
          <p>Ready to clean up your CMMS data? We&apos;re here to help.</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' }
        ]} />
      </div>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Email Sales */}
            <div className="service-card" style={{ textAlign: 'center', padding: '50px 40px' }}>
              <div className="service-icon" style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}>
                <Mail size={36} />
              </div>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Email Our Sales Team</h2>
              <p style={{ marginBottom: '24px' }}>
                Have questions about AssetStage? Want to discuss your specific requirements?
                Need expert help with engineering standards implementation (RDS-PP, RDS-PS, ISO 14224, KKS, SFI)?
              </p>
              <a
                href="mailto:sales@assetstage.io"
                className="btn-primary"
                style={{ display: 'inline-block', fontSize: '18px', padding: '15px 40px' }}
              >
                sales@assetstage.io
              </a>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-light)' }}>
                We typically respond within 24 hours
              </p>
            </div>

            {/* Book a Demo */}
            <div className="service-card" style={{ textAlign: 'center', padding: '50px 40px' }}>
              <div className="service-icon" style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}>
                <Calendar size={36} />
              </div>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Book a Demo</h2>
              <p style={{ marginBottom: '24px' }}>
                See AssetStage in action. We&apos;ll walk you through the platform and show you
                how it can help with your specific CMMS data challenges.
              </p>
              <button
                onClick={openModal}
                className="btn-primary"
                style={{ fontSize: '18px', padding: '15px 40px', cursor: 'pointer', border: 'none' }}
              >
                Schedule a Demo
              </button>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-light)' }}>
                30-minute video call, no obligation
              </p>
            </div>

            {/* General Inquiries */}
            <div className="service-card" style={{ textAlign: 'center', padding: '50px 40px' }}>
              <div className="service-icon" style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}>
                <MessageSquare size={36} />
              </div>
              <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>General Inquiries</h2>
              <p style={{ marginBottom: '24px' }}>
                For partnership inquiries, media requests, or other questions, reach out to our team.
              </p>
              <a
                href="mailto:team@assetstage.io"
                className="btn-primary"
                style={{
                  display: 'inline-block',
                  fontSize: '18px',
                  padding: '15px 40px',
                  background: 'var(--accent-blue)'
                }}
              >
                team@assetstage.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Ask About Our Professional Services</h2>
            <p>Expert guidance from experienced maintenance and reliability engineers</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '40px'
            }}>
              {[
                'Engineering Standards Consultancy',
                'Standards Training',
                'CMMS Data Migration',
                'Standards Mapping',
                'Criticality Analysis',
                'FMEA Workshops'
              ].map((service) => (
                <div key={service} style={{
                  background: 'var(--white)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 500,
                  color: 'var(--text-dark)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {service}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/services" className="btn-secondary" style={{
                display: 'inline-block',
                background: 'var(--white)',
                border: '2px solid var(--primary-navy)',
                padding: '14px 32px'
              }}>
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Follow Us</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
              Stay updated with the latest CMMS insights, industry news, and product updates.
            </p>
            <a
              href="https://www.linkedin.com/company/assetstage/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#0077b5',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
