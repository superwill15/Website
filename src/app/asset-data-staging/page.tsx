'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DemoModal from '@/components/DemoModal';
import { ArrowRight, CheckCircle, Layers, Shield, RefreshCw, Database } from 'lucide-react';

export default function AssetDataStagingPage() {
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
    "name": "What is Asset Data Staging? | AssetStage",
    "description": "Asset data staging is the process of structuring, validating, and preparing asset data before loading it into your CMMS. Learn how staging prevents costly errors and accelerates implementations.",
    "url": "https://assetstage.io/asset-data-staging",
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is asset data staging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asset data staging is the process of structuring, cleaning, validating, and preparing asset data in a dedicated workspace before loading it into a production CMMS like Maximo, SAP PM, or Oracle eAM. It sits upstream of the CMMS, ensuring only clean, validated data enters your production system."
        }
      },
      {
        "@type": "Question",
        "name": "How is asset data staging different from CMMS data management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CMMS data management is the broader discipline of maintaining data quality across your maintenance systems. Asset data staging is the critical upstream step that most tools skip — preparing and validating data before it ever touches production. Staging prevents problems; data management reacts to them."
        }
      },
      {
        "@type": "Question",
        "name": "Why can't I just load data directly into my CMMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct loading tools like MXLoader push data straight into production without validation. This means errors, duplicates, and hierarchy problems go live immediately. A staging layer catches these issues before they reach production, protecting your CMMS data integrity and reducing costly rework."
        }
      },
      {
        "@type": "Question",
        "name": "Does AssetStage work with my CMMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AssetStage is CMMS-agnostic — it works with IBM Maximo, SAP PM, Oracle eAM, Infor EAM, and any other CMMS. Your data is staged and validated in AssetStage, then exported in your CMMS's required format for clean, confident loading."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              Asset Data Staging
            </div>
            <h1>What is Asset Data Staging?</h1>
            <p>
              Asset data staging is the process of structuring, cleaning, and validating asset data in a purpose-built workspace — before it ever touches your production CMMS. It is the critical upstream step that separates successful CMMS implementations from the 70% that fail.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>Book a Demo</button>
              <a href="/blog/what-is-cmms-data-staging" className="btn-secondary">Read the Complete Guide</a>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>Why Staging Matters</h2>
              <p>Most CMMS implementations load data directly into production. This is where things go wrong.</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                <div className="service-card" style={{ borderLeft: '4px solid #e74c3c' }}>
                  <h3>Without Staging</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: '#e74c3c' }}>Raw data loaded directly into CMMS</li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: '#e74c3c' }}>Errors discovered in production</li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: '#e74c3c' }}>Hierarchy problems cascade downstream</li>
                    <li style={{ padding: '10px 0', color: '#e74c3c' }}>Costly rework and project delays</li>
                  </ul>
                </div>
                <div className="service-card" style={{ borderLeft: '4px solid var(--primary-green)' }}>
                  <h3>With Staging</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-green)' }}>Data structured and validated first</li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-green)' }}>Errors caught before production</li>
                    <li style={{ padding: '10px 0', borderBottom: '1px solid var(--border-light)', color: 'var(--primary-green)' }}>Clean hierarchies from day one</li>
                    <li style={{ padding: '10px 0', color: 'var(--primary-green)' }}>Confident, governed CMMS loading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Staging Workflow */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>The Asset Data Staging Workflow</h2>
              <p>From raw data to CMMS-ready — in a structured, auditable process</p>
            </div>

            <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="service-card">
                <div className="service-icon"><Database size={28} /></div>
                <h3>1. Import Raw Data</h3>
                <p>Bring in data from spreadsheets, vendor documents, existing CMMS exports, and engineering databases. Any format, any source.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Layers size={28} /></div>
                <h3>2. Structure &amp; Stage</h3>
                <p>Build and organise asset hierarchies visually. Drag-and-drop assets into the correct structure. Standardise naming, classifications, and attributes.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><CheckCircle size={28} /></div>
                <h3>3. Validate</h3>
                <p>Real-time validation checks for duplicates, missing fields, hierarchy violations, and standards compliance (ISO 14224, SFI, RDS-PS).</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Shield size={28} /></div>
                <h3>4. Review &amp; Approve</h3>
                <p>Collaborative review workflows with full audit trail. Every change tracked, every approval recorded.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><RefreshCw size={28} /></div>
                <h3>5. Export to CMMS</h3>
                <p>Export validated data in your CMMS&apos;s native format — Maximo, SAP PM, Oracle eAM, or any other system. Stage with AssetStage, load with confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CMMS Agnostic */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>CMMS-Agnostic by Design</h2>
              <p>AssetStage works upstream of your CMMS — not inside it</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
                Unlike vendor-locked tools that only work with a single CMMS, AssetStage sits upstream of your entire maintenance ecosystem. Stage data once, export to any CMMS. This means you can manage multi-CMMS environments, switch platforms without re-staging, and maintain a single source of truth for asset data across your portfolio.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
                {['IBM Maximo', 'SAP PM', 'Oracle eAM', 'Infor EAM', 'Any CMMS'].map((cmms) => (
                  <div key={cmms} style={{
                    padding: '16px 24px',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    fontWeight: 600,
                    color: 'var(--primary-navy)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    {cmms}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Staging vs Loading */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Staging vs Direct Loading</h2>
              <p>Governed loading starts with governed staging</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px', textAlign: 'center' }}>
                Tools like MXLoader load data directly into your production CMMS. That is the loading step — not the staging step. AssetStage handles everything that needs to happen <em>before</em> loading: structuring hierarchies, validating data quality, resolving duplicates, and ensuring standards compliance. Stage with AssetStage, then load with whatever tool your CMMS requires — with confidence that your data is clean.
              </p>

              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <a href="/compare/assetstage-vs-mxloader" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  See How AssetStage Compares to MXLoader <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Stage Your Asset Data?</h2>
            <p>See how AssetStage gives your team a structured, validated path from raw data to CMMS-ready assets.</p>
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
