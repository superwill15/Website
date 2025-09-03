'use client';

import { useState } from 'react';

export default function HomePage() {
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
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">ASSETSTAGE</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#assetstage">AssetStage</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal}>Get Demo</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Transform Your Industrial Data Into Operational Excellence</h1>
          <p>AssetStage delivers cutting-edge data staging and quality solutions that make your CMMS actually work. Stop fighting bad data. Start driving results.</p>
          <div className="hero-buttons">
            <a href="#assetstage" className="btn-primary">Explore AssetStage</a>
            <button className="btn-secondary" onClick={openModal}>Book a Demo</button>
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
              <div className="stat-number">$400+</div>
              <div className="stat-label">Saved Per PM Standardization</div>
            </div>
          </div>
        </div>
      </section>

      {/* AssetStage Product Section */}
      <section className="section section-gray" id="assetstage">
        <div className="container">
          <div className="section-header">
            <h2>AssetStage: Your CMMS Data Staging Platform</h2>
            <p>The self-service platform that transforms messy CMMS data into operational gold in weeks, not months</p>
          </div>
          
          <div className="product-showcase">
            <div className="product-content">
              <h3>Finally, CMMS Data That Works</h3>
              <p>AssetStage is the missing link between your legacy systems and a successful CMMS implementation. Our guided self-implementation platform empowers your team to clean, standardize, and optimize maintenance data without expensive consultants.</p>
              
              <ul className="feature-list">
                <li>Import from any CMMS - Maximo, SAP PM, Excel</li>
                <li>Intelligent data validation and error detection</li>
                <li>PM standardization across identical assets</li>
                <li>Pre-built templates for common industries</li>
                <li>Export-ready files for all major CMMS platforms</li>
              </ul>
              
              <div style={{marginTop: '30px'}}>
                <a href="https://app.assetstage.io" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </div>
            </div>
            
            <div className="product-visual">
              <div className="demo-box">
                <div style={{background: 'var(--accent-green)', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
                  <div style={{fontSize: '24px', fontWeight: 'bold'}}>AssetStage Demo</div>
                </div>
                <div style={{textAlign: 'left', padding: '20px', background: 'white', borderRadius: '8px'}}>
                  <div style={{marginBottom: '15px'}}>📊 Data Quality Score: <span style={{color: 'var(--accent-green)', fontWeight: 'bold'}}>87%</span></div>
                  <div style={{marginBottom: '15px'}}>🔧 Assets Processed: <span style={{fontWeight: 'bold'}}>2,347</span></div>
                  <div style={{marginBottom: '15px'}}>⚠️ Issues Found: <span style={{color: 'var(--accent-orange)', fontWeight: 'bold'}}>156</span></div>
                  <div>✅ Ready for Import: <span style={{color: 'var(--accent-green)', fontWeight: 'bold'}}>2,191</span></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="services-grid" style={{marginTop: '60px'}}>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>90% Cost Savings</h3>
              <p>Get enterprise-quality results at a fraction of traditional consulting costs. Your $15K investment replaces $150K+ consulting projects.</p>
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
                  <span>August 15, 2024</span>
                  <span>Data Quality</span>
                </div>
                <h3>Why 70% of CMMS Implementations Fail (And How to Be in the 30%)</h3>
                <p>The shocking truth about CMMS failures isn&apos;t technology - it&apos;s data. Learn the five critical data quality mistakes that doom implementations and our proven framework for avoiding them.</p>
                <a href="/blog/why-cmms-implementations-fail" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Industry Guide</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>August 5, 2024</span>
                  <span>Best Practices</span>
                </div>
                <h3>The Complete Guide to CMMS Data Migration</h3>
                <p>Everything you need to know about migrating from legacy systems to modern CMMS platforms. Includes templates, checklists, and common pitfalls to avoid.</p>
                <a href="/blog/complete-guide-cmms-data-migration" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Technical Deep Dive</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>July 28, 2024</span>
                  <span>Technical</span>
                </div>
                <h3>Maximo vs SAP PM: Data Structure Comparison</h3>
                <p>A technical comparison of how Maximo and SAP PM handle asset hierarchies, work orders, and preventive maintenance. Essential reading for migration projects.</p>
                <a href="/blog/maximo-vs-sap-pm-comparison" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">Industry Trends</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>July 20, 2024</span>
                  <span>Market Analysis</span>
                </div>
                <h3>Why AI Won&apos;t Save Your CMMS (But Good Data Will)</h3>
                <p>Everyone&apos;s talking about AI in maintenance, but the real ROI comes from something much simpler: clean, standardized data. Here&apos;s why data quality beats algorithms every time.</p>
                <a href="/blog/why-ai-wont-save-your-cmms" className="read-more">Read More →</a>
              </div>
            </article>
            
            <article className="blog-card">
              <div className="blog-image">How-To Guide</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>July 15, 2024</span>
                  <span>Tutorial</span>
                </div>
                <h3>Building Your Asset Hierarchy: A Step-by-Step Guide</h3>
                <p>Learn how to structure your asset hierarchy for maximum efficiency. Includes real-world examples from manufacturing, utilities, and facilities management.</p>
                <a href="/blog/building-asset-hierarchy-guide" className="read-more">Read More →</a>
              </div>
            </article>
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
              We built AssetStage to solve this problem once and for all. Our platform makes enterprise-quality data staging accessible to every organization, not just those with $400K consulting budgets.
            </p>
            <p style={{fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)'}}>
              Today, we help maintenance teams across manufacturing, utilities, and facilities management achieve what was once impossible: clean, standardized CMMS data in weeks, not months, at a fraction of traditional costs.
            </p>
          </div>
        </div>
      </section>

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
                Our team is ready to help you achieve CMMS data excellence.
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
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#assetstage">AssetStage Platform</a></li>
              <li><a href="#assetstage">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Security</a></li>
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
              <li><a href="#blog">Blog</a></li>
              <li><a href="#blog">Case Studies</a></li>
              <li><a href="#blog">White Papers</a></li>
              <li><a href="#blog">Webinars</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#demo" onClick={openModal}>Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 AssetStage. All rights reserved. | Privacy Policy | Terms of Service</p>
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
              <div id="successMessage" className="success-message">
                ✓ Thank you! We&apos;ll contact you within 24 hours to schedule your demo.
              </div>
              
              <form id="demoForm" className="demo-form" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="c300faca-a3f7-4781-b00c-83651d9db015" />
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
                  <button type="button" className="btn btn-cancel" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="btn btn-submit">Request Demo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
