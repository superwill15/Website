'use client';

import { useState, FormEvent } from 'react';

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

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
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>PM Optimization</h1>
          <p style={{ fontSize: '24px', fontWeight: '500' }}>You know that mess of PM schedules in your CMMS?</p>
          <p>Standardize maintenance across identical assets in 15 minutes instead of all day.</p>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>The Real Problem We&apos;re Solving</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="service-card" style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--accent-blue)' }}>Here&apos;s what actually happens:</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                You&apos;ve got 20 identical pumps. Open up your CMMS and check their PM schedules. They&apos;re all different. Not because they should be - just because different people set them up over the years.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                Some are getting serviced monthly, some quarterly, some have tasks the others don&apos;t. It&apos;s not anyone&apos;s fault - it&apos;s just what happens when systems grow organically.
              </p>
            </div>

            <div className="service-card" style={{ marginBottom: '30px', background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--accent-orange)' }}>The Excel nightmare everyone goes through:</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
                Export everything. Try to compare in spreadsheets. Spend literally all day copying and pasting. Import it back. Hope nothing broke. Find out a month later something did break.
              </p>
            </div>

            <div className="service-card" style={{ background: 'var(--primary-gradient)', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>What we built:</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                A way to see all your identical assets side by side, spot the differences immediately, pick the best schedule, and apply it to all of them. Takes about 15 minutes instead of a full day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>See The Difference Instantly</h2>
            <p>Compare PM schedules side by side, spot inconsistencies, and standardize with one click</p>
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

      {/* What This Means For You */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What This Actually Means for You</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">👷</div>
              <h3>If you&apos;re a Maintenance Manager</h3>
              <p>
                You probably know your PM schedules are inconsistent, but you don&apos;t have time to fix them. This lets you clean them up gradually - do one equipment type per week and you&apos;ll have everything standardized within a few months.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>If you&apos;re a Reliability Engineer</h3>
              <p>
                You can finally see patterns you suspected but couldn&apos;t prove. Like why some pumps fail more than others (hint: check if they&apos;re missing a critical PM task the others have).
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>If you&apos;re doing CMMS implementations</h3>
              <p>
                Stop wasting days in Excel. Your clients are paying you for your expertise, not your copy-paste skills. This does the grunt work so you can focus on what actually matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Numbers */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Some Real Numbers (Not Marketing Fluff)</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">15-30</div>
                <div className="stat-label">Minutes with AssetStage</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>vs. a full day manually</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">£1,300</div>
                <div className="stat-label">Saved Per Task</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>If paying consultant rates</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">Zero</div>
                <div className="stat-label">Copy-Paste Errors</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>Remove the risk entirely</p>
              </div>

              <div className="stat-card">
                <div className="stat-number">20-30%</div>
                <div className="stat-label">Over-Maintenance</div>
                <p style={{ fontSize: '14px', color: 'var(--text-light)', marginTop: '10px' }}>Usually found and fixed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Actually Works</h2>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="service-card">
                <div className="service-icon" style={{ background: 'var(--accent-blue)' }}>1</div>
                <h3>Find Your Similar Assets</h3>
                <p>Filter by whatever makes sense - model number, type, manufacturer. Just like you would in Excel, but faster.</p>
              </div>

              <div className="service-card">
                <div className="service-icon" style={{ background: 'var(--accent-green)' }}>2</div>
                <h3>See The Differences</h3>
                <p>This is the bit that makes people go &quot;oh wow&quot; - you see all the PM schedules side by side. Differences are highlighted.</p>
              </div>

              <div className="service-card">
                <div className="service-icon" style={{ background: 'var(--accent-orange)' }}>3</div>
                <h3>Pick Your Standard</h3>
                <p>Choose the best schedule (or build a new one from scratch). Usually you already know which one is right.</p>
              </div>

              <div className="service-card">
                <div className="service-icon" style={{ background: 'var(--primary-navy)' }}>4</div>
                <h3>Apply It</h3>
                <p>Select which assets to update. Click apply. It handles all the complexity of updating your CMMS. Full audit trail.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Situations */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Real Situations Where This Helps</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Inheriting a Mess</h3>
              <p>
                New job. CMMS has been running for 10 years. Nobody knows why things are set up the way they are. This helps you understand what you&apos;ve got and fix it systematically.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Post-Merger</h3>
              <p>
                Two maintenance teams, two different approaches, now one CMMS. Instead of arguments about whose way is better, you can see both approaches side by side and pick what works.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Budget Pressure</h3>
              <p>
                Need to cut maintenance costs without increasing risk? Find the over-maintained assets. We usually find 20-30% of PMs that can be optimized without any impact on reliability.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Audit Coming Up</h3>
              <p>
                Auditors love consistency. If you can show them standardized PMs across identical assets with a clear audit trail of changes, you&apos;re golden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Actually Say</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '30px' }}>
            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;I knew it was bad, but seeing it laid out visually was eye-opening. We had pumps getting monthly PMs next to identical pumps with annual PMs.&quot;
              </p>
            </div>

            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-green)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;Saved me a weekend. Was dreading standardizing our compressor PMs. Did it Friday afternoon instead.&quot;
              </p>
            </div>

            <div className="service-card" style={{ borderLeft: '4px solid var(--accent-orange)' }}>
              <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: '1.7' }}>
                &quot;My client thought I was a wizard. What used to take me 3 days took 3 hours. They got better results and I looked like a hero.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Want to Try It?</h2>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>Free for 30 days. Not a demo. Not a limited version. The actual thing.</p>
          <p style={{ fontSize: '18px', opacity: '0.9', marginBottom: '40px' }}>
            Upload your data, fix some PMs, see if it helps. Keep what you fix even if you don&apos;t continue.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={openModal} style={{ background: 'var(--white)', color: 'var(--primary-navy)' }}>
              Get Free Analysis
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
              <h2 id="demoTitle">Free PM Analysis - No Strings</h2>
              <p>Send us your PM data for one asset type and we&apos;ll show you the inconsistencies</p>
            </div>
            <div className="modal-body">
              {formSuccess && (
                <div className="success-message" style={{display: 'block', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  ✓ Thank you! We&apos;ll contact you within 24 hours with your PM analysis.
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
                <input type="hidden" name="page" value="pricing"/>

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
