'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

// Table of Contents sections
const sections = [
  { id: 'why-matters', title: 'Why CMMS Data Quality Matters' },
  { id: 'common-problems', title: 'Common Data Quality Problems' },
  { id: 'asset-hierarchy', title: 'Building an Asset Hierarchy' },
  { id: 'validation-practices', title: 'Data Validation Best Practices' },
  { id: 'migration-loading', title: 'Migration & Loading' },
  { id: 'ongoing-governance', title: 'Ongoing Data Governance' },
];

export default function CMmsDataQualityGuidePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Track active section for TOC highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <ol style={{
                display: 'flex',
                justifyContent: 'center',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '14px',
                opacity: 0.9,
              }}>
                <li>
                  <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                  <span style={{ margin: '0 8px' }}>/</span>
                </li>
                <li>
                  <Link href="/resources" style={{ color: '#fff', textDecoration: 'none' }}>Resources</Link>
                  <span style={{ margin: '0 8px' }}>/</span>
                </li>
                <li style={{ opacity: 0.8 }}>CMMS Data Quality Guide</li>
              </ol>
            </nav>

            <h1>The Complete Guide to CMMS Data Quality</h1>
            <p>
              Everything you need to know about building, validating, and maintaining high-quality asset data for your CMMS.
            </p>
            <div className="hero-buttons">
              <a href="#why-matters" className="btn-primary" style={{ background: '#fff', color: 'var(--primary-navy)' }}>
                Start Reading
              </a>
              <button className="btn-secondary" onClick={openModal}>
                Book a Demo
              </button>
            </div>
          </div>
        </section>

        {/* Content with Sidebar */}
        <section className="section">
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '60px',
              alignItems: 'start',
            }}>
              {/* Table of Contents - Sticky Sidebar */}
              <aside style={{
                position: 'sticky',
                top: '100px',
                background: 'var(--bg-light)',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-light)', marginBottom: '16px' }}>
                  Contents
                </h3>
                <nav>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {sections.map(({ id, title }) => (
                      <li key={id} style={{ marginBottom: '8px' }}>
                        <a
                          href={`#${id}`}
                          style={{
                            display: 'block',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            color: activeSection === id ? 'var(--primary-navy)' : 'var(--text-light)',
                            background: activeSection === id ? '#fff' : 'transparent',
                            fontWeight: activeSection === id ? 600 : 400,
                            borderLeft: activeSection === id ? '3px solid var(--accent-green)' : '3px solid transparent',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Downloadable Resources */}
                <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
                  <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-light)', marginBottom: '16px' }}>
                    Resources
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: '12px' }}>
                      <Link
                        href="/resources"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                        }}
                      >
                        📄 ISO 14224 Cheat Sheet
                      </Link>
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <Link
                        href="/resources"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                        }}
                      >
                        📄 Data Quality Checklist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '14px',
                          color: 'var(--accent-blue)',
                          textDecoration: 'none',
                        }}
                      >
                        📚 View All Resources
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>

              {/* Main Content */}
              <article className="guide-content">
                {/* Section 1: Why CMMS Data Quality Matters */}
                <section id="why-matters" className="guide-section">
                  <h2>Why CMMS Data Quality Matters</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Statistics on CMMS implementation failures due to data issues</li>
                      <li>Impact of poor data on maintenance decisions</li>
                      <li>Cost of bad data vs. investment in data quality</li>
                      <li>Connection between data quality and maintenance outcomes</li>
                    </ul>
                  </div>

                  {/* Related Content Links */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '40px',
                  }}>
                    <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-light)' }}>
                      Related Reading
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li>
                        <Link href="/blog/cmms-data-migration" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                          → The Complete Guide to CMMS Data Migration
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 2: Common Data Quality Problems */}
                <section id="common-problems" className="guide-section">
                  <h2>Common Data Quality Problems</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Inconsistent naming conventions</li>
                      <li>Missing or incomplete asset attributes</li>
                      <li>Duplicate records</li>
                      <li>Broken parent-child relationships</li>
                      <li>Orphaned assets</li>
                      <li>Invalid or outdated data</li>
                    </ul>
                  </div>

                  {/* Problem Cards */}
                  <div className="services-grid" style={{ marginTop: '20px', marginBottom: '40px' }}>
                    <div className="service-card">
                      <h3>Naming Chaos</h3>
                      <p>
                        {/* TODO: Add specific examples */}
                        The same equipment called &quot;Pump 101&quot;, &quot;P-101&quot;, &quot;Centrifugal Pump #1&quot; across different records.
                      </p>
                    </div>
                    <div className="service-card">
                      <h3>Missing Attributes</h3>
                      <p>
                        {/* TODO: Add specific examples */}
                        Equipment with blank manufacturer, model, or specification fields.
                      </p>
                    </div>
                    <div className="service-card">
                      <h3>Hierarchy Issues</h3>
                      <p>
                        {/* TODO: Add specific examples */}
                        Components assigned to wrong parents or missing from the hierarchy entirely.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3: Building an Asset Hierarchy */}
                <section id="asset-hierarchy" className="guide-section">
                  <h2>Building an Asset Hierarchy</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Hierarchy design principles</li>
                      <li>Functional vs. physical hierarchies</li>
                      <li>Level definitions (site, area, system, equipment, component)</li>
                      <li>Industry-standard hierarchy patterns</li>
                      <li>Naming conventions and numbering systems</li>
                    </ul>
                  </div>

                  {/* Related Content Links */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '40px',
                  }}>
                    <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-light)' }}>
                      Related Reading
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li>
                        <Link href="/blog/asset-hierarchy-best-practices" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                          → Asset Hierarchy Best Practices
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 4: Data Validation Best Practices */}
                <section id="validation-practices" className="guide-section">
                  <h2>Data Validation Best Practices</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Required field validation</li>
                      <li>Format validation (dates, IDs, codes)</li>
                      <li>Reference data validation</li>
                      <li>Cross-field validation rules</li>
                      <li>Duplicate detection methods</li>
                      <li>Validation automation</li>
                    </ul>
                  </div>

                  {/* Mid-article CTA */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderLeft: '4px solid var(--accent-green)',
                    padding: '24px 28px',
                    borderRadius: '8px',
                    marginBottom: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}>
                    <div>
                      <strong style={{ fontSize: '18px', display: 'block', marginBottom: '4px' }}>
                        Need help validating your CMMS data?
                      </strong>
                      <p style={{ margin: 0, color: 'var(--text-light)' }}>
                        AssetStage includes built-in validation rules for common CMMS data issues.
                      </p>
                    </div>
                    <button
                      onClick={openModal}
                      className="btn-primary"
                    >
                      Book a Demo →
                    </button>
                  </div>
                </section>

                {/* Section 5: Migration & Loading */}
                <section id="migration-loading" className="guide-section">
                  <h2>Migration & Loading</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Data migration planning</li>
                      <li>Source system analysis</li>
                      <li>Data mapping and transformation</li>
                      <li>Staging and testing approaches</li>
                      <li>Loading strategies (full vs. incremental)</li>
                      <li>Post-load validation</li>
                    </ul>
                  </div>

                  {/* Related Content Links */}
                  <div style={{
                    background: '#fff',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '40px',
                  }}>
                    <h4 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-light)' }}>
                      Related Reading
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li>
                        <Link href="/blog/cmms-data-migration" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                          → The Complete Guide to CMMS Data Migration
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 6: Ongoing Data Governance */}
                <section id="ongoing-governance" className="guide-section">
                  <h2>Ongoing Data Governance</h2>

                  {/* TODO: Add real content */}
                  <div className="content-placeholder" style={{
                    background: 'var(--bg-light)',
                    border: '2px dashed var(--border-light)',
                    borderRadius: '8px',
                    padding: '40px',
                    marginBottom: '24px',
                  }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: '16px' }}>
                      <strong>TODO:</strong> Content for this section should cover:
                    </p>
                    <ul style={{ color: 'var(--text-light)', marginLeft: '20px' }}>
                      <li>Data stewardship roles</li>
                      <li>Change management processes</li>
                      <li>Quality monitoring and KPIs</li>
                      <li>Periodic data audits</li>
                      <li>Training and documentation</li>
                      <li>Continuous improvement cycles</li>
                    </ul>
                  </div>
                </section>

                {/* Conclusion */}
                <section className="guide-section">
                  <h2>Next Steps</h2>
                  <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '24px' }}>
                    {/* TODO: Add real conclusion */}
                    Data quality is not a one-time project—it&apos;s an ongoing commitment. Start with the fundamentals:
                    define your hierarchy, establish naming conventions, and implement validation rules. Then build
                    the governance processes to maintain quality over time.
                  </p>

                  <div className="services-grid" style={{ marginTop: '24px' }}>
                    <Link href="/services" className="service-card" style={{ textDecoration: 'none' }}>
                      <h3 style={{ color: 'var(--text-dark)' }}>Explore Our Services</h3>
                      <p>See how AssetStage can help with your data quality project.</p>
                    </Link>
                    <Link href="/resources" className="service-card" style={{ textDecoration: 'none' }}>
                      <h3 style={{ color: 'var(--text-dark)' }}>Download Resources</h3>
                      <p>Free templates and checklists for CMMS data quality.</p>
                    </Link>
                    <Link href="/blog" className="service-card" style={{ textDecoration: 'none' }}>
                      <h3 style={{ color: 'var(--text-dark)' }}>Read More Articles</h3>
                      <p>Deep dives into specific data quality topics.</p>
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Improve Your CMMS Data Quality?</h2>
            <p>
              See how AssetStage helps maintenance teams clean, validate, and prepare asset data in weeks, not months.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={openModal}
                style={{ background: '#fff', color: 'var(--primary-navy)' }}
              >
                Book a Demo
              </button>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DemoModal isOpen={modalOpen} onClose={closeModal} />

      <style jsx>{`
        .guide-section {
          margin-bottom: 60px;
          scroll-margin-top: 100px;
        }
        .guide-section h2 {
          font-size: 32px;
          margin-bottom: 24px;
          color: var(--text-dark);
        }
        .guide-content p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--text-dark);
          margin-bottom: 16px;
        }
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
          aside {
            position: relative !important;
            top: 0 !important;
            order: -1;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </>
  );
}
