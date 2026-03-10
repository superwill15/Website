'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoModal from '@/components/DemoModal';
import { Check, Mail, Calendar, MessageSquare } from 'lucide-react';

export default function PricingPage() {
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
      <section className="hero" style={{ padding: '100px 20px 80px' }}>
        <div className="hero-content">
          <h1>Pricing Tailored to Your Needs</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Every organization is different. We&apos;ll work with you to create a plan that fits your data volume, team size, and requirements.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Pricing' }
        ]} />
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

            {/* Value Props */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}>
              {[
                'Flexible contracts',
                'Volume discounts',
                'Partner pricing available'
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '16px 20px',
                  background: 'var(--bg-light)',
                  borderRadius: '8px',
                  fontWeight: 500
                }}>
                  <Check size={18} style={{ color: 'var(--accent-green)' }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '60px 40px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--primary-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                color: 'var(--white)'
              }}>
                <MessageSquare size={36} />
              </div>

              <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Let&apos;s Talk</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
                Tell us about your CMMS data challenges and we&apos;ll put together a proposal that makes sense for your organization.
              </p>

              <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '30px'
              }}>
                <a
                  href="mailto:sales@assetstage.io?subject=Pricing%20Inquiry"
                  className="btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '18px',
                    padding: '16px 32px'
                  }}
                >
                  <Mail size={20} />
                  sales@assetstage.io
                </a>
                <button
                  onClick={openModal}
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--white)',
                    border: '2px solid var(--primary-navy)',
                    cursor: 'pointer',
                    fontSize: '18px',
                    padding: '16px 32px'
                  }}
                >
                  <Calendar size={20} />
                  Book a Demo
                </button>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>What&apos;s Included</h2>
            <p>Every plan includes the core features you need</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {[
                'Visual asset hierarchy builder',
                'Drag-and-drop organization',
                'Excel import/export',
                'Real-time validation',
                'Bulk operations',
                'Complete audit trail',
                'Team collaboration',
                'Works with any CMMS'
              ].map((feature) => (
                <div key={feature} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  background: 'var(--white)',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <Check size={20} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 500 }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Common Questions</h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {[
              {
                q: 'Is there a free trial?',
                a: 'We offer a free proof-of-concept where we process a sample of your data so you can see the results before committing.'
              },
              {
                q: 'What CMMS systems do you support?',
                a: 'AssetStage works with any CMMS including Maximo, SAP PM, Oracle eAM, Infor, and others. We export data in your CMMS\'s required format.'
              },
              {
                q: 'Do you offer partner pricing?',
                a: 'Yes, we have special pricing for consulting partners and system integrators. Contact us to discuss partnership opportunities.'
              },
              {
                q: 'What support is included?',
                a: 'All plans include email support. We also offer dedicated account management and training for larger deployments.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'var(--white)',
                padding: '24px 30px',
                borderRadius: '12px',
                marginBottom: '16px',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--text-dark)' }}>
                  {faq.q}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.6, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
