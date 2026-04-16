'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import DemoModal from '@/components/DemoModal';
import { ArrowRight, CheckCircle, Layers, Shield, Database, GitBranch } from 'lucide-react';

export default function SapPmDataStagingPage() {
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
    "name": "SAP PM Data Staging | AssetStage",
    "description": "Stage, validate, and prepare your asset data before loading into SAP PM or S/4HANA. Structure functional locations, equipment, and maintenance plans in a dedicated staging workspace.",
    "url": "https://assetstage.io/sap-pm-data-staging",
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
        "name": "Why do I need a staging layer for SAP PM data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAP PM has strict data structure requirements — functional locations, equipment records, maintenance plans, and BOMs must all align correctly. Loading data directly without upstream validation leads to errors that are costly to fix in a production SAP environment. A staging layer catches these issues before they reach SAP."
        }
      },
      {
        "@type": "Question",
        "name": "Does AssetStage support SAP S/4HANA migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AssetStage stages and validates asset data for both SAP ECC PM and S/4HANA Asset Management. The staging process ensures your data meets the target system's requirements before migration."
        }
      },
      {
        "@type": "Question",
        "name": "Can I stage data for both SAP PM and Maximo in the same workspace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AssetStage is CMMS-agnostic, so you can stage data for SAP PM, Maximo, Oracle eAM, and any other CMMS from a single workspace. This is especially valuable for organisations running multiple CMMS platforms or migrating between systems."
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
              SAP PM Data Staging
            </div>
            <h1>SAP PM Data Staging</h1>
            <p>
              Stage, validate, and prepare your asset data before loading into SAP PM or S/4HANA. Structure functional locations, equipment records, and maintenance plans in a dedicated staging workspace — then export clean, validated data ready for SAP.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>Book a Demo</button>
              <a href="/blog/maximo-vs-sap-pm-comparison" className="btn-secondary">Maximo vs SAP PM Comparison</a>
            </div>
          </div>
        </section>

        {/* SAP PM Data Challenges */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>SAP PM Data Challenges</h2>
              <p>SAP PM has strict structural requirements that demand clean data from the start</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px', textAlign: 'center' }}>
                SAP Plant Maintenance structures data differently from other CMMS platforms. Functional locations, equipment records, maintenance plans, task lists, and BOMs all have strict relationships that must be correct before loading. Getting this wrong in production means expensive rework in a system that is notoriously difficult to clean up after the fact.
              </p>

              <div className="services-grid">
                <div className="service-card">
                  <h3>Functional Location Hierarchies</h3>
                  <p>SAP&apos;s functional location structure is rigid and difficult to restructure once loaded. Staging lets you build and validate the hierarchy visually before committing to SAP&apos;s structure.</p>
                </div>
                <div className="service-card">
                  <h3>Equipment-to-FuncLoc Mapping</h3>
                  <p>Equipment must be correctly assigned to functional locations. Orphaned equipment, incorrect assignments, and duplicate records create downstream problems in maintenance planning.</p>
                </div>
                <div className="service-card">
                  <h3>S/4HANA Migration</h3>
                  <p>Migrating from SAP ECC to S/4HANA is an opportunity to clean your asset data. Stage and validate before migration rather than carrying forward years of accumulated data debt.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How AssetStage Helps */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Stage for SAP PM with AssetStage</h2>
              <p>Purpose-built staging for SAP PM&apos;s unique data structure</p>
            </div>

            <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="service-card">
                <div className="service-icon"><GitBranch size={28} /></div>
                <h3>Functional Location Builder</h3>
                <p>Visually build your SAP functional location hierarchy with drag-and-drop. See the entire structure at a glance and catch problems before they reach SAP.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Database size={28} /></div>
                <h3>Equipment Staging</h3>
                <p>Stage equipment records with all required SAP fields — manufacturer, model, serial numbers, installation dates. Validate completeness before loading.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Layers size={28} /></div>
                <h3>PM Plan Preparation</h3>
                <p>Stage maintenance plans and task lists alongside your asset hierarchy. Ensure PM schedules align with equipment records and functional locations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><CheckCircle size={28} /></div>
                <h3>SAP Validation Rules</h3>
                <p>Validate data against SAP PM field requirements, mandatory fields, and classification standards before export. Catch errors that would cause SAP import failures.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><Shield size={28} /></div>
                <h3>Governed Export</h3>
                <p>Export validated data in SAP-compatible formats with full audit trail. Every change tracked, every approval recorded for compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-CMMS */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>Not Just SAP — Stage for Any CMMS</h2>
              <p>CMMS-agnostic staging for multi-platform environments</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
                Many organisations run SAP PM alongside other CMMS platforms — Maximo at some sites, Oracle at others. AssetStage manages asset data independently of any specific CMMS, so you get consistent data quality across your entire portfolio.
              </p>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/maximo-data-staging" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  Maximo Data Staging <ArrowRight size={18} />
                </a>
                <a href="/asset-data-staging" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                  What is Asset Data Staging? <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Stage Your SAP PM Data?</h2>
            <p>See how AssetStage gives your SAP team a structured, validated path from raw data to production-ready assets.</p>
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
