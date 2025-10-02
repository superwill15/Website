'use client';

import { useState, FormEvent } from 'react';
import Logo from '@/components/Logo';
import ResourcesSection from '@/components/ResourcesSection';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "logo": "https://assetstage.io/logo.png",
    "description": "The CMMS Data Workspace. AssetStage transforms messy Excel files into validated CMMS hierarchies in weeks, not months—without expensive consultants.",
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
    setFormSuccess(false);
    setFormError('');
    setFormSubmitting(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formSubmitting) return;
    
    setFormSubmitting(true);
    setFormError('');
    setFormSuccess(false);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setFormSuccess(true);
        form.reset();
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('Failed to submit form. Please try again or email us directly at sales@assetstage.io');
    } finally {
      setFormSubmitting(false);
    }
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
            <li><a href="#services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal}>Get Demo</button>
          
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
            <li><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="/blog" onClick={toggleMobileMenu}>Blog</a></li>
            <li><a href="#resources" onClick={toggleMobileMenu}>Resources</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Get Demo</button></li>
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
          <h1>Stop Fighting Spreadsheets. Start Shipping Clean Data.</h1>
          <p>AssetStage helps maintenance teams transform messy CMMS data into production-ready hierarchies—faster than traditional consulting, without the six-figure price tag.</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openModal}>See Your Data Transformed</button>
            <a href="#assetstage" className="btn-secondary">Learn How It Works</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">70%</div>
              <div className="stat-label">CMMS Failures Due to Bad Data</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6 Weeks</div>
              <div className="stat-label">Average Implementation Time</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">90%</div>
              <div className="stat-label">Cost Reduction vs Consultants</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">$150k+</div>
              <div className="stat-label">saved per project</div>
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
              AssetStage gives your team a collaborative workspace to clean, validate, and prepare CMMS data—without the consultant price tag.
              See your entire asset structure at a glance. Drag, drop, done. No formulas required.
            </p>

            <div style={{
              background: 'white',
              padding: '32px',
              borderRadius: '12px',
              marginBottom: '40px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ fontSize: '20px', marginBottom: '24px', textAlign: 'center' }}>How Traditional Consulting Compares:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '14px' }}>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-light)', marginBottom: '12px' }}>Traditional Consultants</div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-dark)', margin: '12px 0' }}>$180K+</div>
                  <div style={{ color: 'var(--text-light)' }}>8+ months</div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--text-light)', marginBottom: '12px' }}>DIY in Excel</div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--text-dark)', margin: '12px 0' }}>$0</div>
                  <div style={{ color: 'var(--text-light)' }}>12+ months + chaos</div>
                </div>
                <div style={{
                  background: 'var(--accent-blue)',
                  padding: '20px',
                  borderRadius: '12px',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '12px' }}>AssetStage</div>
                  <div style={{ fontSize: '32px', fontWeight: '700', margin: '12px 0' }}>Contact Us</div>
                  <div>Weeks, not months</div>
                </div>
              </div>
            </div>

            <ul className="feature-list" style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
              <li>Visual hierarchy builder - see your entire structure at once</li>
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
              <div className="service-icon">💰</div>
              <h3>90% Cost Savings</h3>
              <p>Get enterprise-quality results at a fraction of traditional consulting costs. For organizations that prefer hands-on support, our skilled consultants are available to deliver full implementations combining platform efficiency with expert guidance.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>6-Week Delivery</h3>
              <p>Transform your CMMS data in weeks, not months. Our guided process ensures rapid implementation without sacrificing quality.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎯</div>
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
              <div className="service-icon">🏗️</div>
              <h3>Engineering Standards Consultancy</h3>
              <p>Expert implementation of international engineering standards including RDS-PP, RDS-PS (power systems), ISO 14224 (reliability data), KKS (power plant classification), and SFI (marine classification). We ensure your assets are classified and structured according to industry best practices.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Standards Training & Certification</h3>
              <p>Comprehensive training programs on engineering classification systems. Learn how to implement RDS-PP, RDS-PS for power generation, ISO 14224 for reliability, KKS for industrial plants, and SFI for marine systems. Build internal expertise in global standards.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>CMMS Selection Advisory</h3>
              <p>Independent, vendor-neutral guidance to help you choose the right CMMS for your organization. We evaluate your needs, not vendor commissions.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Data Migration Services</h3>
              <p>Expert assistance with complex data migrations. We handle the heavy lifting while your team learns the process for future autonomy.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏭</div>
              <h3>Industry Templates & Standards</h3>
              <p>Pre-built configurations aligned with international standards. Templates for RDS-PP, RDS-PS (power), ISO 14224 (reliability), KKS (plant classification), and SFI (marine). Start with proven industry frameworks.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Master Data Governance</h3>
              <p>Ongoing data quality management services aligned with engineering standards. Keep your CMMS data clean with automated workflows and regular health checks.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Standards Implementation</h3>
              <p>End-to-end support for implementing engineering classification systems. From gap analysis to full deployment of RDS-PP, RDS-PS, ISO 14224, KKS, or SFI standards in your organization.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌍</div>
              <h3>Cross-Industry Standards Mapping</h3>
              <p>Bridge different classification systems during mergers, acquisitions, or multi-site operations. Map between RDS-PP, RDS-PS, ISO 14224, KKS, SFI and other standards for seamless integration.</p>
            </div>
          </div>
        </div>
      </section>

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
                <h3>Maritime CMMS: Revolutionizing the $30 Billion Shipping Industry</h3>
                <p>With over 109,000 vessels and maintenance eating up 30% of operating costs, the maritime industry is ripe for digital transformation.</p>
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
            <p>Ready to transform your maintenance data?</p>
          </div>
          
          <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
            <div className="service-card" style={{padding: '40px'}}>
              <div className="service-icon" style={{fontSize: '48px', marginBottom: '20px'}}>✉️</div>
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
            <button className="btn-secondary" onClick={openModal}>Schedule Demo</button>
            <a href="https://app.assetstage.io" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{background:'#fff',color:'var(--primary-navy)'}}>
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo-section">
          <Logo variant="reverse" width={280} height={70} />
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
          <p>&copy; 2025 AssetStage. All rights reserved.</p>
        </div>
      </footer>

      {/* Demo Request Modal */}
      {modalOpen && (
        <div id="demoModal" className="modal show" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" aria-label="Close dialog" onClick={closeModal}>&times;</button>
              <h2 id="demoTitle">Schedule Your AssetStage Demo</h2>
              <p>See how AssetStage can transform your CMMS data in just 6 weeks</p>
            </div>
            <div className="modal-body">
              {formSuccess && (
                <div className="success-message" style={{display: 'block', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  ✓ Thank you! We&apos;ll contact you within 24 hours to schedule your demo.
                </div>
              )}
              
              {formError && (
                <div className="error-message" style={{display: 'block', padding: '15px', background: '#f44336', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  {formError}
                </div>
              )}
              
              <form id="demoForm" className="demo-form" onSubmit={handleFormSubmit}>
                <input type="hidden" name="access_key" value="5737364f-4088-402b-87b3-80dafb3d48cd" />
                <input type="checkbox" name="botcheck" tabIndex={-1} style={{display:'none'}}/>
                <input type="hidden" name="subject" value="AssetStage Demo Request" />
                <input type="hidden" name="from_name" value="AssetStage Website" />
                <input type="hidden" name="reply_to" value="team@assetstage.io" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required autoComplete="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required autoComplete="email"/>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company *</label>
                    <input type="text" id="company" name="company" required autoComplete="organization"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel"/>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="assets">Number of Assets</label>
                    <select id="assets" name="assets">
                      <option value="">Select range</option>
                      <option value="0-500">Less than 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000-10000">5,000 - 10,000</option>
                      <option value="10000+">More than 10,000</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cmms">Current CMMS</label>
                    <select id="cmms" name="cmms">
                      <option value="">Select CMMS</option>
                      <option value="maximo">IBM Maximo</option>
                      <option value="sap">SAP PM</option>
                      <option value="oracle">Oracle EAM</option>
                      <option value="infor">Infor EAM</option>
                      <option value="fiix">Fiix</option>
                      <option value="maintainx">MaintainX</option>
                      <option value="emaint">eMaint</option>
                      <option value="excel">Excel/Spreadsheets</option>
                      <option value="other">Other</option>
                      <option value="none">No CMMS Currently</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Tell us about your data challenges (optional)</label>
                  <textarea id="message" name="message" placeholder="What are your main CMMS data pain points? What would you like to achieve?"></textarea>
                </div>
                
                <input type="hidden" name="form_type" value="demo_request"/>
                <input type="hidden" name="page" value="homepage"/>
                <input type="hidden" name="redirect" value="https://assetstage.io/thank-you"/>

                <div className="form-actions">
                  <button type="button" className="btn btn-cancel" onClick={closeModal} disabled={formSubmitting}>Cancel</button>
                  <button type="submit" className="btn btn-submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
