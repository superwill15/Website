'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DemoModal from '@/components/DemoModal';
import { ArrowRight, CheckCircle, XCircle, Layers, Shield, BarChart3, Users } from 'lucide-react';

export default function CmmsDataManagementPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CMMS Data Management - Done Right | AssetStage",
    "description": "CMMS data management starts before the data reaches your CMMS. AssetStage provides the staging layer that most tools miss — structure, validate, and govern asset data upstream.",
    "url": "https://assetstage.io/cmms-data-management",
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Navigation />

      <main>
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-content">
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--accent-blue)',
              marginBottom: '16px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              CMMS Data Management
            </div>
            <h1>CMMS Data Management — Done Right</h1>
            <p>
              Most CMMS data management tools focus on what happens <em>inside</em> the CMMS. But 70% of data quality problems originate <em>before</em> data ever reaches production. AssetStage is the staging layer that most approaches miss.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>Book a Demo</button>
              <a href="/asset-data-staging" className="btn-secondary">How We Do It</a>
            </div>
          </div>
        </section>

        {/* The Missing Piece */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>The Missing Piece in CMMS Data Management</h2>
              <p>Data management is the discipline. Staging is the step everyone skips.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px', textAlign: 'center' }}>
                CMMS data management encompasses everything from initial data collection through ongoing maintenance. But the most critical phase — preparing and validating data <em>before</em> it enters production — is where most organisations fail. They jump straight from spreadsheets to loading, and wonder why their CMMS is full of duplicates, broken hierarchies, and orphaned records.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginTop: '40px' }}>
                <div className="service-card">
                  <h3 style={{ color: '#e74c3c' }}>Load-First Approach</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <XCircle size={18} color="#e74c3c" style={{ flexShrink: 0 }} /> Data goes straight from Excel to CMMS
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <XCircle size={18} color="#e74c3c" style={{ flexShrink: 0 }} /> Validation happens after loading (if at all)
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <XCircle size={18} color="#e74c3c" style={{ flexShrink: 0 }} /> Locked to a single CMMS vendor
                    </li>
                    <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <XCircle size={18} color="#e74c3c" style={{ flexShrink: 0 }} /> Errors fixed in production at high cost
                    </li>
                  </ul>
                </div>
                <div className="service-card">
                  <h3 style={{ color: 'var(--primary-green)' }}>Staging-First Approach</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--primary-green)" style={{ flexShrink: 0 }} /> Data structured in a dedicated staging workspace
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--primary-green)" style={{ flexShrink: 0 }} /> Validation catches errors before production
                    </li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--primary-green)" style={{ flexShrink: 0 }} /> CMMS-agnostic — works with any system
                    </li>
                    <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle size={18} color="var(--primary-green)" style={{ flexShrink: 0 }} /> Only clean data reaches production
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Good CMMS Data Management Looks Like */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>What Good CMMS Data Management Looks Like</h2>
              <p>It starts upstream — with staging, validation, and governance</p>
            </div>

            <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="service-card">
                <div className="service-icon"><Layers size={28} /></div>
                <h3>Asset Hierarchy Staging</h3>
                <p>Build and validate your complete asset hierarchy visually before loading. Catch structural problems — orphaned assets, incorrect parent-child relationships, missing levels — before they become production issues.</p>
                <a href="/asset-data-staging" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                  Learn about staging <ArrowRight size={16} />
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon"><BarChart3 size={28} /></div>
                <h3>PM Optimisation</h3>
                <p>Standardise preventive maintenance across identical assets. Identify gaps, redundancies, and non-compliant PM schedules before they go live in your CMMS.</p>
                <a href="/pm-optimization" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                  Learn about PM optimisation <ArrowRight size={16} />
                </a>
              </div>
              <div className="service-card">
                <div className="service-icon"><Shield size={28} /></div>
                <h3>Data Governance</h3>
                <p>Complete audit trail of every change. Role-based access control. Approval workflows that ensure data quality standards are met before export to your CMMS.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Users size={28} /></div>
                <h3>Team Collaboration</h3>
                <p>Multiple users working in the same workspace — no more emailing Excel files, no more version conflicts, no more &ldquo;which spreadsheet is the latest?&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Works With Any CMMS */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>Works With Any CMMS</h2>
              <p>CMMS-agnostic data management for multi-platform environments</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
                Many organisations run multiple CMMS platforms across different sites, business units, or as part of a migration. AssetStage manages asset data independently of any specific CMMS, so you get consistent data quality regardless of the target system.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
                {[
                  { name: 'IBM Maximo', href: '/maximo-data-staging' },
                  { name: 'SAP PM', href: '/sap-pm-data-staging' },
                  { name: 'Oracle eAM', href: null },
                  { name: 'Infor EAM', href: null },
                ].map((cmms) => (
                  <div key={cmms.name} style={{
                    padding: '20px',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <strong style={{ color: 'var(--primary-navy)', fontSize: '16px' }}>{cmms.name}</strong>
                    {cmms.href && (
                      <div style={{ marginTop: '8px' }}>
                        <a href={cmms.href} style={{ color: 'var(--accent-blue)', fontSize: '14px' }}>Learn more</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Fix Your CMMS Data Management?</h2>
            <p>See how a staging-first approach transforms your data quality — before anything reaches production.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal} style={{ background: '#fff', color: 'var(--primary-navy)' }}>
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
