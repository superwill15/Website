'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DemoModal from '@/components/DemoModal';
import { ArrowRight, CheckCircle, AlertTriangle, Layers, Shield, RefreshCw, Database } from 'lucide-react';

export default function MaximoDataStagingPage() {
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
    "name": "Maximo Data Staging | AssetStage",
    "description": "Stage, validate, and prepare your asset data before loading into IBM Maximo or MAS 9. Unlike Maximo-native tools, AssetStage works across your entire portfolio.",
    "url": "https://assetstage.io/maximo-data-staging",
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
        "name": "Why do I need a staging layer for Maximo data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tools like MXLoader load data directly into Maximo production without upstream validation. This means errors, duplicates, and hierarchy problems go live immediately. A staging layer catches these issues before they reach production, protecting your Maximo data integrity."
        }
      },
      {
        "@type": "Question",
        "name": "Does AssetStage work with MAS 9 (Maximo Application Suite)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AssetStage stages and validates data before loading into any version of Maximo, including Maximo 7.6 and MAS 9. The staging process is the same — structure, validate, and export clean data ready for your Maximo environment."
        }
      },
      {
        "@type": "Question",
        "name": "How is AssetStage different from MXLoader?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MXLoader is a loading tool — it pushes data into Maximo. AssetStage is a staging tool — it prepares and validates data before loading. They serve different purposes in the data pipeline. Stage with AssetStage, then load with MXLoader or any other loading tool."
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
              Maximo Data Staging
            </div>
            <h1>Maximo Data Staging</h1>
            <p>
              Stage, validate, and prepare your asset data before loading into IBM Maximo or MAS 9. Unlike Maximo-native tools, AssetStage works across your entire portfolio — so you can manage data for Maximo alongside SAP PM, Oracle, or any other CMMS.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>Book a Demo</button>
              <a href="/blog/maximo-mas-9-migration-data-guide" className="btn-secondary">MAS 9 Migration Guide</a>
            </div>
          </div>
        </section>

        {/* The Maximo Data Problem */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>The Maximo Data Problem</h2>
              <p>Loading data directly into Maximo is where most implementations go wrong</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="services-grid">
                <div className="service-card">
                  <div className="service-icon"><AlertTriangle size={28} color="#e74c3c" /></div>
                  <h3>MXLoader Loads Blind</h3>
                  <p>MXLoader pushes data directly into Maximo production without upstream validation. Errors, duplicates, and broken hierarchies go live immediately. MXLoader is unsupported by IBM and disclaims all liability for data damage.</p>
                  <a href="/blog/mxloader-liability-risk-staging-layer" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                    Read about MXLoader liability risks <ArrowRight size={16} />
                  </a>
                </div>
                <div className="service-card">
                  <div className="service-icon"><AlertTriangle size={28} color="#e74c3c" /></div>
                  <h3>MAS 9 Migration Risk</h3>
                  <p>Migrating to MAS 9 means moving your entire Maximo environment to the cloud. If your data is dirty, you are migrating the mess. Every duplicate, every orphaned record, every broken hierarchy comes with you.</p>
                  <a href="/blog/maximo-mas-9-migration-data-guide" style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
                    MAS 9 data preparation guide <ArrowRight size={16} />
                  </a>
                </div>
                <div className="service-card">
                  <div className="service-icon"><AlertTriangle size={28} color="#e74c3c" /></div>
                  <h3>Vendor-Locked Tools</h3>
                  <p>Maximo-native data management tools only work with Maximo. If you run multiple CMMS platforms or plan to switch, your data preparation process is locked to a single vendor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The AssetStage Approach */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Stage with AssetStage, Load with Confidence</h2>
              <p>The staging layer your Maximo implementation needs</p>
            </div>

            <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="service-card">
                <div className="service-icon"><Database size={28} /></div>
                <h3>Import from Anywhere</h3>
                <p>Bring in data from existing Maximo exports, vendor spreadsheets, engineering databases, or any other source. AssetStage normalises everything into a clean staging environment.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Layers size={28} /></div>
                <h3>Build Maximo Hierarchies</h3>
                <p>Visually build and validate your Maximo asset hierarchy — locations, systems, assets, and sub-assets. Drag-and-drop organisation with real-time validation.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><CheckCircle size={28} /></div>
                <h3>Validate Before Loading</h3>
                <p>Catch duplicates, missing fields, hierarchy violations, and classification errors before anything touches Maximo production. Fix issues in staging, not in prod.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Shield size={28} /></div>
                <h3>Governed Export</h3>
                <p>Export validated data in Maximo&apos;s required format with a full audit trail. Every change tracked, every approval recorded. Stage with AssetStage, load with confidence.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><RefreshCw size={28} /></div>
                <h3>Portfolio-Wide Staging</h3>
                <p>Unlike Maximo-native tools, AssetStage works across your entire portfolio. Stage data for Maximo alongside SAP PM, Oracle, or any other CMMS from a single workspace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAS 9 Migration */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>MAS 9 Migration? Stage First.</h2>
              <p>Clean data before you move — not after</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
                A MAS 9 migration is the perfect opportunity to clean your Maximo data. But cleaning data inside Maximo — while it is being migrated — is risky and expensive. AssetStage gives you a clean staging environment to fix asset hierarchies, resolve duplicates, and validate data quality <em>before</em> the migration begins.
              </p>

              <ul className="feature-list" style={{ maxWidth: '600px', margin: '0 auto 40px', textAlign: 'left' }}>
                <li>Audit existing Maximo data quality before migration</li>
                <li>Fix asset hierarchies and resolve duplicates in staging</li>
                <li>Validate against Maximo field requirements and classification standards</li>
                <li>Export clean, validated data ready for MAS 9 loading</li>
                <li>Full audit trail for migration governance and compliance</li>
              </ul>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/blog/maximo-mas-9-migration-data-guide" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  Read the MAS 9 Data Guide <ArrowRight size={18} />
                </a>
                <a href="/resources" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  Free Migration Checklist <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>AssetStage vs MXLoader</h2>
              <p>Different tools for different jobs</p>
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '16px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary-navy)' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}></th>
                    <th style={{ padding: '12px', textAlign: 'center', color: 'var(--primary-green)' }}>AssetStage</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>MXLoader</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Purpose', 'Data staging & validation', 'Data loading'],
                    ['When it runs', 'Before loading', 'At loading'],
                    ['Validation', 'Comprehensive upstream', 'Basic field-level'],
                    ['CMMS support', 'Any CMMS', 'Maximo only'],
                    ['Audit trail', 'Complete', 'Limited'],
                    ['IBM support', 'N/A (independent)', 'Unsupported by IBM'],
                    ['Liability', 'Your data stays in staging until approved', 'Disclaims all liability'],
                  ].map(([feature, assetstage, competitor], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                      <td style={{ padding: '12px', fontWeight: 600 }}>{feature}</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: 'var(--primary-green)' }}>{assetstage}</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text-light)' }}>{competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <a href="/compare/assetstage-vs-mxloader" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  Full Comparison <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Stage Your Maximo Data?</h2>
            <p>See how AssetStage gives your Maximo team a structured, validated path from raw data to production-ready assets.</p>
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
