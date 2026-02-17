'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import ResourcesSection from '@/components/ResourcesSection';
import InventorySection from '@/components/InventorySection';
import DemoModal from '@/components/DemoModal';
import {
  DollarSign,
  Zap,
  Target,
  Building2,
  GraduationCap,
  ClipboardList,
  RefreshCw,
  Factory,
  BarChart3,
  Rocket,
  Globe,
  AlertTriangle,
  Microscope,
  Clock,
  Lock,
  FileText,
  Building,
  Mail
} from 'lucide-react';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "logo": "https://assetstage.io/logo.png",
    "description": "The CMMS Data Workspace. AssetStage transforms messy Excel files into validated CMMS hierarchies in weeks, not months, without expensive consultants.",
    "founder": {
      "@type": "Organization",
      "name": "AssetStage"
    },
    "foundingDate": "2024",
    "industry": "Industrial Software",
    "serviceArea": "Global",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@assetstage.io"
    },
    "sameAs": [
      "https://assetstage.io"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="/" className="logo-link" aria-label="AssetStage Home">
            <Logo variant="primary" width={200} height={50} />
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#assetstage">AssetStage</a></li>
            <li><a href="/pm-optimization">PM Optimization</a></li>
            <li><a href="/oem-extraction">OEM Extraction</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
            <li><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="#assetstage" onClick={toggleMobileMenu}>AssetStage</a></li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu}>PM Optimization</a></li>
            <li><a href="/oem-extraction" onClick={toggleMobileMenu}>OEM Extraction</a></li>
            <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="#inventory" onClick={toggleMobileMenu}>Inventory</a></li>
            <li><a href="/blog" onClick={toggleMobileMenu}>Blog</a></li>
            <li><a href="#resources" onClick={toggleMobileMenu}>Resources</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Book a Demo</button></li>
          </ul>
        </div>
      </nav>

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
            The CMMS Data Workspace
          </div>
          <h1>Stop Fighting Spreadsheets.<br />Start Shipping Clean Data.</h1>
          <p>AssetStage helps maintenance teams transform messy CMMS data into production-ready hierarchies. Faster than traditional consulting, without the six-figure price tag.</p>
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
            <p>Not staging. Not MDM. Not consulting. A purpose-built workspace where CMMS data problems get solved.</p>
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

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <h2>AssetStage Professional Services</h2>
            <p>Expert guidance in engineering standards, data management, and CMMS implementation</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Building2 size={28} /></div>
              <h3>Engineering Standards Consultancy</h3>
              <p>Expert implementation of international engineering standards including RDS-PP, RDS-PS (power systems), ISO 14224 (reliability data), KKS (power plant classification), and SFI (marine classification). We ensure your assets are classified and structured according to industry best practices.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><GraduationCap size={28} /></div>
              <h3>Standards Training & Certification</h3>
              <p>Comprehensive training programs on engineering classification systems. Learn how to implement RDS-PP, RDS-PS for power generation, ISO 14224 for reliability, KKS for industrial plants, and SFI for marine systems. Build internal expertise in global standards.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><ClipboardList size={28} /></div>
              <h3>CMMS Selection Advisory</h3>
              <p>Independent, vendor-neutral guidance to help you choose the right CMMS for your organization. We evaluate your needs, not vendor commissions.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><RefreshCw size={28} /></div>
              <h3>Data Migration Services</h3>
              <p>Expert assistance with complex data migrations. We handle the heavy lifting while your team learns the process for future autonomy.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Factory size={28} /></div>
              <h3>Industry Templates & Standards</h3>
              <p>Pre-built configurations aligned with international standards. Templates for RDS-PP, RDS-PS (power), ISO 14224 (reliability), KKS (plant classification), and SFI (marine). Start with proven industry frameworks.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><BarChart3 size={28} /></div>
              <h3>Master Data Governance</h3>
              <p>Ongoing data quality management services aligned with engineering standards. Keep your CMMS data clean with automated workflows and regular health checks.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Rocket size={28} /></div>
              <h3>Standards Implementation</h3>
              <p>End-to-end support for implementing engineering classification systems. From gap analysis to full deployment of RDS-PP, RDS-PS, ISO 14224, KKS, or SFI standards in your organization.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Globe size={28} /></div>
              <h3>Cross-Industry Standards Mapping</h3>
              <p>Bridge different classification systems during mergers, acquisitions, or multi-site operations. Map between RDS-PP, RDS-PS, ISO 14224, KKS, SFI and other standards for seamless integration.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><AlertTriangle size={28} /></div>
              <h3>Criticality Analysis Workshops</h3>
              <p>Facilitated criticality assessment sessions to identify and rank your most important assets. Establish risk-based maintenance priorities using industry-standard methodologies aligned with ISO 55000 and ISO 14224 frameworks.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Microscope size={28} /></div>
              <h3>FMEA Workshop Facilitation</h3>
              <p>Expert-led Failure Mode and Effects Analysis (FMEA) workshops for your critical assets. Identify potential failure modes, assess risks, and develop targeted maintenance strategies to prevent costly downtime.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Clock size={28} /></div>
              <h3>Obsolescence Studies</h3>
              <p>Proactive obsolescence management for aging assets and equipment. Identify at-risk components, assess spare parts availability, and develop mitigation strategies before obsolescence becomes a critical issue affecting operations.</p>
            </div>
          </div>
        </div>
      </section>

      <InventorySection />

      {/* Blog Section */}
      <section className="section section-gray" id="blog">
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
                  <span>September 8, 2025</span>
                  <span>Maritime Standards</span>
                </div>
                <h3>SFI Coding and ISO 14224: A Complete Guide for Maritime CMMS</h3>
                <p>How combining SFI equipment identification with ISO 14224 reliability standards creates a comprehensive framework for maritime maintenance management.</p>
                <a href="/blog/SFI-ISO14224" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Industry Guide</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>September 1, 2025</span>
                  <span>Maritime</span>
                </div>
                <h3>Maritime CMMS: Why Shipping's $30B Maintenance Bill Keeps Growing</h3>
                <p>With 109,000+ vessels and maintenance consuming 30% of operating costs, most fleets still run on paper and spreadsheets.</p>
                <a href="/blog/maritime-cmms-guide" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Technical Deep Dive</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>August 25, 2025</span>
                  <span>Standards</span>
                </div>
                <h3>RDS-PP to RDS-PS: Evolution in Power System Classification</h3>
                <p>A detailed comparison of RDS-PP and RDS-PS reference designation systems for power generation and electrical systems.</p>
                <a href="/blog/rds-pp-vs-rds-ps-improvements" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Best Practices</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>August 18, 2025</span>
                  <span>Implementation</span>
                </div>
                <h3>Building Your Asset Hierarchy: A Step-by-Step Guide</h3>
                <p>Learn how to structure your asset hierarchy for maximum efficiency. Includes real-world examples from manufacturing, utilities, and facilities.</p>
                <a href="/blog/building-asset-hierarchy-guide" className="read-more">Read More →</a>
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
              <p>Complete tenant isolation at the database level ensures your data never mixes with other customers. Role-based access control gives you granular permissions. Control exactly who can view, edit, or delete data.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><FileText size={28} /></div>
              <h3>Complete Audit Trail</h3>
              <p>Every action is logged with user identity, timestamp, and affected records. Full visibility into platform activity helps you meet compliance requirements and investigate issues with confidence.</p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Building size={28} /></div>
              <h3>Enterprise Infrastructure</h3>
              <p>Built on Supabase and Vercel (both SOC 2 Type II certified platforms). Your data is protected with AES-256 encryption at rest and TLS 1.3 in transit. Enterprise-grade security without enterprise complexity.</p>
            </div>
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '16px',
            color: 'var(--text-light)',
            maxWidth: '800px',
            margin: '40px auto 0'
          }}>
            Significantly more secure than Excel spreadsheets, email attachments, and shared drives. Professional data security without the consultant price tag.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-header">
            <h2>About AssetStage</h2>
            <p>On a mission to democratize CMMS data quality</p>
          </div>
          
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px'}}>
              AssetStage was founded by maintenance and reliability engineers who experienced firsthand the pain of CMMS implementations destroyed by bad data. We watched companies spend millions on software that never delivered value because the data was wrong.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px'}}>
              We built AssetStage to solve this problem once and for all. Our platform makes enterprise-quality data staging accessible to every organization, with skilled consultants available for those who prefer expert-delivered implementations.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)'}}>
              Today, we help maintenance teams across manufacturing, utilities, and facilities management achieve what was once impossible: clean, standardized CMMS data in weeks, not months, at a fraction of traditional costs.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Contact Section */}
      <section className="section section-gray" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to clean up your CMMS data?</p>
          </div>
          
          <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
            <div className="service-card" style={{padding: '40px'}}>
              <div className="service-icon" style={{width: '80px', height: '80px', marginBottom: '20px'}}><Mail size={40} /></div>
              <h3 style={{marginBottom: '20px'}}>Contact Our Sales Team</h3>
              <p style={{fontSize: '18px', marginBottom: '30px', color: 'var(--text-light)'}}>
                Have questions about AssetStage? Want to discuss your specific requirements? 
                Need expert help with engineering standards implementation (RDS-PP, RDS-PS, ISO 14224, KKS, SFI)?
                Our team is ready to help you achieve CMMS data excellence.
              </p>
              <p style={{fontSize: '16px', marginBottom: '25px', color: 'var(--text-light)'}}>
                <strong>Ask us about our Professional Services:</strong><br/>
                • Engineering Standards Consultancy & Training<br/>
                • CMMS Data Migration & Implementation<br/>
                • Standards Mapping & Integration<br/>
                • Custom Solutions for Your Industry
              </p>
              <a 
                href="mailto:sales@assetstage.io" 
                className="btn-primary" 
                style={{display: 'inline-block', fontSize: '18px', padding: '15px 40px'}}
              >
                Email sales@assetstage.io
              </a>
              <p style={{marginTop: '20px', fontSize: '16px', color: 'var(--text-light)'}}>
                We typically respond within 24 hours
              </p>
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
              <li><a href="#assetstage">Features</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Implementation</a></li>
              <li><a href="#services">Training</a></li>
              <li><a href="#services">Data Migration</a></li>
              <li><a href="#services">Consulting</a></li>
              <li><a href="#services">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#resources">Free Downloads</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#blog">Case Studies</a></li>
              <li><a href="#blog">White Papers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#demo" onClick={openModal}>Contact</a></li>
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
