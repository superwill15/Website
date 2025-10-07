'use client';

import { useState, FormEvent } from 'react';
import Logo from '@/components/Logo';

export default function PMOptimizationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="/" className="logo-link" aria-label="AssetStage Home">
            <Logo variant="primary" width={200} height={50} />
          </a>
          <ul className="nav-links">
            <li><a href="/#home">Home</a></li>
            <li><a href="/#assetstage">AssetStage</a></li>
            <li><a href="/pm-optimization">PM Optimization</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/#resources">Resources</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
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
            <li><a href="/#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/#assetstage" onClick={toggleMobileMenu}>AssetStage</a></li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu}>PM Optimization</a></li>
            <li><a href="/#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="/blog" onClick={toggleMobileMenu}>Blog</a></li>
            <li><a href="/#resources" onClick={toggleMobileMenu}>Resources</a></li>
            <li><a href="/#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="/#contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Get Demo</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>PM Optimization</h1>
          <p style={{ fontSize: '24px', fontWeight: '500' }}>You know that mess of PM schedules in your CMMS?</p>
          <p>Standardize maintenance across identical assets in minutes instead of days.</p>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>The Problem</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="service-card" style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--accent-blue)' }}>What actually happens</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                You&apos;ve got 20 identical pumps. Open up your CMMS and check their PM schedules. They&apos;re all different. Not because they should be - just because different people set them up over the years.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Some are getting serviced monthly, some quarterly, some have tasks the others don&apos;t. It happens when systems grow organically.
              </p>
            </div>

            <div className="service-card" style={{ marginBottom: '30px', background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--accent-orange)' }}>The usual approach</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                Export everything to Excel. Compare in spreadsheets. Copy and paste for hours. Import it back. Hope nothing broke.
              </p>
            </div>

            <div className="service-card" style={{ background: 'var(--primary-gradient)', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>A different way</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                See all your identical assets side by side. Spot the differences immediately. Pick the best schedule and apply it to all of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Side-by-Side Comparison</h2>
            <p>Compare PM schedules across identical assets, spot inconsistencies, standardize</p>
          </div>

          <div style={{ maxWidth: '1100px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)' }}>
            <img
              src="/pm-optimization-screenshot.png"
              alt="PM Optimization interface showing side-by-side comparison of maintenance schedules across identical assets"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Who This Helps */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Who This Helps</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👷</div>
              <h3>Maintenance Managers</h3>
              <p>
                You know your PM schedules are inconsistent, but standardizing them manually takes forever. Do one equipment type per week and have everything consistent within a few months.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Reliability Engineers</h3>
              <p>
                See patterns you suspected but couldn&apos;t prove. Find out why some pumps fail more than others by checking if they&apos;re missing a critical PM task.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>CMMS Consultants</h3>
              <p>
                Spend less time on data cleanup and more time on what you&apos;re hired for. The tool handles the repetitive work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Inline */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Step 1 */}
            <div className="product-showcase" style={{ marginBottom: '60px' }}>
              <div className="product-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="service-icon" style={{ background: 'var(--accent-blue)', width: '50px', height: '50px', fontSize: '24px' }}>1</div>
                  <h3 style={{ fontSize: '28px', margin: 0 }}>Find Similar Assets</h3>
                </div>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Filter by model number, type, or manufacturer. The same filters you&apos;d use in Excel, just faster.
                </p>
              </div>
              <div className="product-visual">
                <div className="demo-box">
                  <p style={{ fontSize: '16px', color: 'var(--text-light)' }}>Filter interface shows grouped assets</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="product-showcase" style={{ marginBottom: '60px', flexDirection: 'row-reverse' }}>
              <div className="product-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="service-icon" style={{ background: 'var(--accent-green)', width: '50px', height: '50px', fontSize: '24px' }}>2</div>
                  <h3 style={{ fontSize: '28px', margin: 0 }}>See The Differences</h3>
                </div>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  All PM schedules displayed side by side. Differences are highlighted. You can see which assets are over-maintained and which are missing critical tasks.
                </p>
              </div>
              <div className="product-visual">
                <div className="demo-box">
                  <p style={{ fontSize: '16px', color: 'var(--text-light)' }}>Side-by-side comparison with highlighted differences</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="product-showcase" style={{ marginBottom: '60px' }}>
              <div className="product-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="service-icon" style={{ background: 'var(--accent-orange)', width: '50px', height: '50px', fontSize: '24px' }}>3</div>
                  <h3 style={{ fontSize: '28px', margin: 0 }}>Pick Your Standard</h3>
                </div>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Choose the best schedule or build a new one. Usually you already know which one is right - you just need a way to apply it everywhere.
                </p>
              </div>
              <div className="product-visual">
                <div className="demo-box">
                  <p style={{ fontSize: '16px', color: 'var(--text-light)' }}>Select or create standard schedule</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="product-showcase" style={{ flexDirection: 'row-reverse' }}>
              <div className="product-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div className="service-icon" style={{ background: 'var(--primary-navy)', width: '50px', height: '50px', fontSize: '24px' }}>4</div>
                  <h3 style={{ fontSize: '28px', margin: 0 }}>Apply It</h3>
                </div>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Select which assets to update. The system handles the complexity of updating your CMMS with a full audit trail of what changed.
                </p>
              </div>
              <div className="product-visual">
                <div className="demo-box">
                  <p style={{ fontSize: '16px', color: 'var(--text-light)' }}>Apply changes with audit trail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Time Savings</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">15-30</div>
                <div className="stat-label">Minutes with AssetStage</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>vs. 4-8 hours manually</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">Zero</div>
                <div className="stat-label">Copy-Paste Errors</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>Removes the risk</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">20-30%</div>
                <div className="stat-label">Over-Maintenance</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>Commonly found</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Common Situations</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Inheriting a CMMS</h3>
              <p>
                New job. CMMS has been running for 10 years. Nobody knows why things are set up the way they are. This helps you understand what you have and fix it systematically.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Post-Merger</h3>
              <p>
                Two maintenance teams, two different approaches, now one CMMS. See both approaches side by side instead of arguing about whose is better.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Budget Cuts</h3>
              <p>
                Need to reduce maintenance costs without increasing risk? Find over-maintained assets. Often 20-30% of PMs can be optimized without affecting reliability.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Audit Prep</h3>
              <p>
                Auditors look for consistency. Standardized PMs across identical assets with a clear audit trail helps during audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>User Feedback</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '30px' }}>
            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;Seeing it laid out visually was eye-opening. We had pumps getting monthly PMs next to identical pumps with annual PMs.&quot;
              </p>
            </div>

            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-green)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;Was dreading standardizing our compressor PMs. Did it Friday afternoon instead of spending the weekend on it.&quot;
              </p>
            </div>

            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;What used to take me 3 days took 3 hours. Better results in less time.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Try It Out</h2>
          <p style={{ fontSize: '18px', opacity: '0.9', marginBottom: '40px' }}>
            Upload your data, fix some PMs, see if it works for you.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openModal} style={{ background: 'var(--white)', color: 'var(--primary-navy)' }}>
              Request Analysis
            </button>
            <a href="https://app.assetstage.io" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      {modalOpen && (
        <div id="demoModal" className="modal show" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" aria-label="Close dialog" onClick={closeModal}>&times;</button>
              <h2 id="demoTitle">PM Analysis Request</h2>
              <p>Send us your PM data for one asset type and we&apos;ll show you the inconsistencies</p>
            </div>
            <div className="modal-body">
              {formSuccess && (
                <div className="success-message" style={{display: 'block', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  ✓ Thank you. We&apos;ll contact you within 24 hours.
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
                <input type="hidden" name="subject" value="PM Analysis Request" />
                <input type="hidden" name="from_name" value="AssetStage PM Optimization" />
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

                <div className="form-group full-width">
                  <label htmlFor="message">What asset type would you like us to analyze? (e.g., pumps, motors, compressors)</label>
                  <textarea id="message" name="message" placeholder="Tell us about your PM challenges..."></textarea>
                </div>

                <input type="hidden" name="form_type" value="pm_analysis_request"/>
                <input type="hidden" name="page" value="pm-optimization"/>

                <div className="form-actions">
                  <button type="button" className="btn btn-cancel" onClick={closeModal} disabled={formSubmitting}>Cancel</button>
                  <button type="submit" className="btn btn-submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Submitting...' : 'Request Analysis'}
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
