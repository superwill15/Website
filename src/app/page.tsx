'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import DemoModal from '@/components/DemoModal';
import {
  DollarSign,
  Zap,
  Target,
  Building2,
  GraduationCap,
  ClipboardList,
  Lock,
  FileText,
  Building,
  ArrowRight,
  BookOpen,
  Warehouse,
  Link2,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "description": "The CMMS Data Workspace for maintenance teams",
    "publisher": {
      "@type": "Organization",
      "name": "AssetStage"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AssetStage",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "CMMS Data Workspace for maintenance teams to clean, validate, and prepare asset data",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "GBP",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CMMS data staging?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CMMS data staging is the process of preparing, cleaning, and validating asset data before loading it into a CMMS like Maximo or SAP PM. It ensures data quality and prevents costly errors during implementation."
        }
      },
      {
        "@type": "Question",
        "name": "Why do 70% of CMMS implementations fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most CMMS implementations fail due to poor data quality. Organizations often underestimate the effort required to clean and standardize asset hierarchies, PM schedules, and spare parts data before loading into their new system."
        }
      },
      {
        "@type": "Question",
        "name": "How does AssetStage help with CMMS data migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AssetStage provides a visual workspace where maintenance teams can clean, validate, and prepare their CMMS data. The platform includes drag-and-drop hierarchy building, real-time validation, bulk operations, and exports to Maximo, SAP PM, and other CMMS formats."
        }
      },
      {
        "@type": "Question",
        "name": "What engineering standards does AssetStage support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AssetStage supports major engineering classification standards including ISO 14224 (reliability data), RDS-PP and RDS-PS (power systems), KKS (power plant classification), and SFI (marine classification systems)."
        }
      },
      {
        "@type": "Question",
        "name": "Can AssetStage work with my existing CMMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AssetStage works with any CMMS including IBM Maximo, SAP PM, Oracle eAM, Infor EAM, UpKeep, Fiix, and others. We export data in your CMMS's required format for seamless loading."
        }
      }
    ]
  };

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="/" className="logo-link" aria-label="AssetStage Home">
            <Logo variant="primary" width={200} height={50} />
          </a>
          <ul className="nav-links">
            <li><a href="#assetstage">Platform</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Solutions <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/asset-data-staging">Asset Hierarchy Staging</a>
                <a href="/pm-optimization">PM Optimisation</a>
                <a href="/inventory">Inventory Management</a>
              </div>
            </li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Integrations <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/maximo-data-staging">Maximo</a>
                <a href="/sap-pm-data-staging">SAP PM</a>
              </div>
            </li>
            <li><a href="/services">Services</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Resources <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/blog">Blog</a>
                <a href="/resources">Free Downloads</a>
              </div>
            </li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal}>Book a Demo</button>

          {/* Mobile Menu Button */}
          <button className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#assetstage" onClick={toggleMobileMenu}>Platform</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Solutions</span>
            </li>
            <li><a href="/asset-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Asset Hierarchy Staging</a></li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>PM Optimisation</a></li>
            <li><a href="/inventory" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Inventory Management</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Integrations</span>
            </li>
            <li><a href="/maximo-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Maximo</a></li>
            <li><a href="/sap-pm-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>SAP PM</a></li>
            <li><a href="/services" onClick={toggleMobileMenu}>Services</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Resources</span>
            </li>
            <li><a href="/blog" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Blog</a></li>
            <li><a href="/resources" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Free Downloads</a></li>
            <li><a href="/pricing" onClick={toggleMobileMenu}>Pricing</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Book a Demo</button></li>
          </ul>
        </div>
      </nav>

      <main>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--accent-blue)',
            marginBottom: '16px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            The Asset Data Staging Platform for CMMS Teams
          </div>
          <h1>The Asset Data Staging Platform<br />for CMMS Teams</h1>
          <p>AssetStage is the purpose-built workspace for CMMS data management — structure, validate, and stage asset data before it ever touches production.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openModal}>See Your Data Transformed</button>
            <a href="#assetstage" className="btn-secondary">Learn How It Works</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-tight">
        <div className="container">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">70%</div>
              <div className="stat-label">CMMS Failures Due to Bad Data</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Zero IT</div>
              <div className="stat-label">Setup Required</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Audit Trail Coverage</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Instant</div>
              <div className="stat-label">Error Detection</div>
            </div>
          </div>
        </div>
      </section>

      {/* AssetStage Product Section */}
      <section className="section section-gray" id="assetstage">
        <div className="container">
          <div className="section-header">
            <h2>The CMMS Data Workspace Built for Maintenance Teams</h2>
            <p>A purpose-built staging workspace where asset data is structured, validated, and made CMMS-ready — before it ever touches production.</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>Visual, Not Spreadsheets</h3>
            <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '40px', textAlign: 'center' }}>
              AssetStage gives your team a collaborative workspace to clean, validate, and prepare CMMS data without the consultant price tag.
              See your entire asset structure at a glance. Drag, drop, done. No formulas required.
            </p>

            <div style={{ marginBottom: '40px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src="https://customer-6izgdnhakq10f1a4.cloudflarestream.com/12b5fc07116ba74094281864183736b7/iframe?poster=https%3A%2F%2Fcustomer-6izgdnhakq10f1a4.cloudflarestream.com%2F12b5fc07116ba74094281864183736b7%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                  loading="lazy"
                  style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen={true}
                  title="AssetStage CMMS Data Workspace Demo Video"
                ></iframe>
              </div>
            </div>

            <ul className="feature-list" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
              <li>Drag-and-drop hierarchy builder - reorganize thousands of assets instantly</li>
              <li>Visual tree structure - see your entire asset hierarchy at once</li>
              <li>Team collaboration - multiple users working together, no more emailing Excel files</li>
              <li>Excel import/export - works with your existing CMMS loading templates</li>
              <li>Real-time validation catches errors before CMMS import</li>
              <li>Bulk operations fix 1000 errors with one click</li>
              <li>Works with Maximo, SAP PM, Oracle, and any CMMS</li>
              <li>Complete audit trail - know who changed what, when</li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <button className="btn-primary" onClick={openModal}>
                Book a Demo
              </button>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="services-grid" style={{marginTop: '60px'}}>
            <div className="service-card">
              <div className="service-icon"><DollarSign size={28} /></div>
              <h3>90% Cost Savings</h3>
              <p>Get enterprise-quality results at a fraction of traditional consulting costs. For organizations that prefer hands-on support, our skilled consultants are available to deliver full implementations combining platform efficiency with expert guidance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Zap size={28} /></div>
              <h3>6-Week Delivery</h3>
              <p>Transform your CMMS data in weeks, not months. Our guided process ensures rapid implementation without sacrificing quality.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Target size={28} /></div>
              <h3>PM Optimization</h3>
              <p>Standardize maintenance across identical assets with one click. Turn 8-hour manual tasks into 15-minute automated workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Condensed */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2>AssetStage Professional Services</h2>
            <p>Expert guidance in engineering standards, data management, and CMMS implementation</p>
          </div>

          <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="service-card">
              <div className="service-icon"><Building2 size={28} /></div>
              <h3>Engineering Standards</h3>
              <p>Implementation of ISO 14224, RDS-PP, RDS-PS, KKS, and SFI standards. We ensure your assets are classified according to industry best practices.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><GraduationCap size={28} /></div>
              <h3>Training & Certification</h3>
              <p>Comprehensive training programs on engineering classification systems. Build internal expertise in global standards.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><ClipboardList size={28} /></div>
              <h3>CMMS Advisory & Migration</h3>
              <p>Vendor-neutral CMMS selection guidance and expert data migration services. We evaluate your needs, not vendor commissions.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/services" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View All Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Inventory Section - Condensed */}
      <section className="section section-gray" id="inventory">
        <div className="container">
          <div className="section-header">
            <h2>Materials & Spare Parts Management</h2>
            <p>Centralise your item master, track inventory across storerooms, and link parts to assets</p>
          </div>

          <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="service-card">
              <div className="service-icon"><BookOpen size={28} /></div>
              <h3>Item Master Catalogue</h3>
              <p>Centralised parts catalogue with vendor tracking and preferred supplier management.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Warehouse size={28} /></div>
              <h3>Storeroom Management</h3>
              <p>Track stock balances, min/max levels, and costs per storeroom. Compare inventory across sites.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Link2 size={28} /></div>
              <h3>Spare Part BOMs</h3>
              <p>Link parts to assets with quantities. Copy &quot;gold standard&quot; BOMs across identical equipment.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="/inventory" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section" id="blog">
        <div className="container">
          <div className="section-header">
            <h2>Insights & Resources</h2>
            <p>Industry insights, best practices, and lessons learned from the field</p>
          </div>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-image">Featured Article</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>March 10, 2026</span>
                  <span>Maximo Migration</span>
                </div>
                <h3>Don&apos;t Move the Mess: A Data Engineer&apos;s Guide to Maximo MAS 9 Migration</h3>
                <p>Your Maximo migration will fail without clean data. Here&apos;s exactly what to fix — asset hierarchies, duplicates, field gaps — before you move to MAS 9.</p>
                <a href="/blog/maximo-mas-9-migration-data-guide" className="read-more">Read More &rarr;</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">Complete Guide</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>February 6, 2026</span>
                  <span>Data Staging</span>
                </div>
                <h3>What is CMMS Data Staging? The Complete Guide for Maintenance Teams</h3>
                <p>Why the best CMMS implementations never load data straight into production. Learn what data staging is, when you need it, and how it prevents costly rework.</p>
                <a href="/blog/what-is-cmms-data-staging" className="read-more">Read More &rarr;</a>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-image">Risk &amp; Liability</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>February 2, 2026</span>
                  <span>Maximo</span>
                </div>
                <h3>The Hidden Liability Risk of Loading Data Directly into Maximo with MXLoader</h3>
                <p>MXLoader is unsupported by IBM and disclaims all liability. When it damages production data, who pays? Why smart consultants are adding a staging layer.</p>
                <a href="/blog/mxloader-liability-risk-staging-layer" className="read-more">Read More &rarr;</a>
              </div>
            </article>
          </div>

          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <a href="/blog" className="btn-primary">View All Blog Posts</a>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Enterprise Security, Built-In</h2>
            <p>Professional-grade security for your CMMS data</p>
          </div>

          <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="service-card">
              <div className="service-icon"><Lock size={28} /></div>
              <h3>Data Isolation & Access Control</h3>
              <p>Complete tenant isolation at the database level ensures your data never mixes with other customers. Role-based access control gives you granular permissions.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><FileText size={28} /></div>
              <h3>Complete Audit Trail</h3>
              <p>Every action is logged with user identity, timestamp, and affected records. Full visibility into platform activity for compliance requirements.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Building size={28} /></div>
              <h3>Enterprise Infrastructure</h3>
              <p>Built on Supabase and Vercel (both SOC 2 Type II certified). AES-256 encryption at rest and TLS 1.3 in transit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Condensed */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <h2>About AssetStage</h2>
            <p>On a mission to democratize CMMS data quality</p>
          </div>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px'}}>
              AssetStage was founded by maintenance and reliability engineers who experienced firsthand the pain of CMMS implementations destroyed by bad data. We built AssetStage to solve this problem once and for all.
            </p>
            <a href="/about" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
              Learn More About Us <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Resources Section - Condensed */}
      <section className="section section-gray" id="resources">
        <div className="container">
          <div className="section-header">
            <h2>Free Resources & Templates</h2>
            <p>Industry-proven tools, templates, and guides to accelerate your CMMS success</p>
          </div>

          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px'}}>
              Download free checklists, templates, and guides including our popular ISO 14224 Implementation Cheat Sheet, Maximo Migration Checklist, FMEA Workbook, and more.
            </p>
            <a href="/resources" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Browse Free Resources <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Condensed */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to clean up your CMMS data?</p>
          </div>

          <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px'}}>
              Have questions about AssetStage? Need help with engineering standards implementation? Our team is ready to help you achieve CMMS data excellence.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Contact Us <ArrowRight size={18} />
              </a>
              <a href="mailto:sales@assetstage.io" className="btn-secondary" style={{ background: 'var(--white)', border: '2px solid var(--primary-navy)' }}>
                sales@assetstage.io
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="demo">
        <div className="container">
          <h2>Ready to Fix Your CMMS Data?</h2>
          <p>Join forward-thinking maintenance teams who&apos;ve stopped accepting bad data as inevitable.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openModal} style={{background:'#fff',color:'var(--primary-navy)'}}>
              Book a Demo
            </button>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-logo-section">
          <p style={{ marginTop: '20px', color: '#7f8c8d', fontSize: '14px' }}>
            Transform your CMMS data with enterprise-quality staging and validation.
            Expert consultancy in RDS-PS, RDS-PP, ISO 14224, KKS & SFI standards.
          </p>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#assetstage">AssetStage Platform</a></li>
              <li><a href="/pm-optimization">PM Optimization</a></li>
              <li><a href="/inventory">Inventory Management</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">All Services</a></li>
              <li><a href="/services#standards-implementation">Standards Implementation</a></li>
              <li><a href="/services#training">Training</a></li>
              <li><a href="/services#data-migration">Data Migration</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="/resources">Free Downloads</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="mailto:team@assetstage.io?subject=Speculative%20CV%20submission">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AssetStage. All rights reserved.</p>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/assetstage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow AssetStage on LinkedIn"
              className="social-link"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
