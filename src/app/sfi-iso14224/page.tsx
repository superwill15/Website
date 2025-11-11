'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { validateBusinessEmail } from '@/utils/emailValidation';

export default function SfiIso14224Landing() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "logo": "https://assetstage.io/logo.png"
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SFI + ISO 14224 Executive Summary",
    "description": "Why fleets need SFI coding plus ISO 14224 to fix maritime CMMS data quality. Download the implementation checklist.",
    "publisher": { "@type": "Organization", "name": "AssetStage" }
  };

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    const validationError = validateBusinessEmail(email);
    setEmailError(validationError);
    setError(null); // Clear general error when user is typing
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    // Get email value from form
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get('email') as string;

    // Validate email before submitting
    const validationError = validateBusinessEmail(email);
    if (validationError) {
      setEmailError(validationError);
      setError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      console.log('Submitting to:', form.action);
      
      const res = await fetch('https://api.web3forms.com/submit', { 
        method: 'POST', 
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('Response status:', res.status);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const json = await res.json();
      console.log('Response:', json);
      
      if (json.success) {
        setSuccess(true);
        form.reset();
        setEmailError(null);
        // Short delay to show success message, then redirect
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1000);
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(`Submission failed: ${err?.message}. Please email team@assetstage.io or try again.`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <Link href="/" className="logo-link">
            <Logo />
          </Link>
          <ul className="nav-links">
            <li><Link href="/#product">Product</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#demo" className="nav-cta">Book Demo</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Stop Losing Millions to Bad Maintenance Data</h1>
          <p>The fastest path to reliable maritime CMMS data is <strong>SFI coding</strong> (what & where) 
          + <strong>ISO 14224</strong> (how & why). Get the implementation checklist.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Left: Value Proposition */}
            <div>
              <div style={{ 
                background: 'white', 
                padding: '32px', 
                borderRadius: '12px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid var(--border-light)' 
              }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'var(--accent-blue)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}>Executive Summary</span>
                
                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Proven ROI Metrics</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span>70% faster spare parts search</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span>25% higher first-time fix rate</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span>15–20% lower inventory costs</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span>40% better predictive accuracy</span>
                    </li>
                  </ul>
                </div>

                <div style={{ 
                  borderTop: '2px solid var(--border-light)', 
                  paddingTop: '24px',
                  marginTop: '24px'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>
                    Why Industry Leaders Choose Both Standards
                  </h4>
                  <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '8px' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.6', margin: '0 0 16px' }}>
                      <strong>Major shipping companies</strong> report that implementing both SFI and ISO 14224 together delivers compound benefits:
                    </p>
                    <ul style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
                      <li>Unified equipment coding across entire fleets</li>
                      <li>Standardized failure reporting for benchmarking</li>
                      <li>Compatible with AMOS, Maximo, and SAP PM</li>
                      <li>Meets ISM Code and class society requirements</li>
                    </ul>
                    <p style={{ fontSize: '13px', color: 'var(--text-light)', fontStyle: 'italic', marginTop: '16px', marginBottom: 0 }}>
                      Based on industry studies and implementation data from maritime CMMS deployments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ 
              background: 'white', 
              padding: '32px', 
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '2px solid var(--accent-orange)'
            }}>
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>📥 Get the SFI + ISO 14224 Checklist</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '24px' }}>
                Step-by-step phases • Pre-mapped codes • Ready-to-use CMMS tasks
              </p>

              {success && (
                <div style={{ 
                  background: '#d4edda', 
                  border: '1px solid #c3e6cb', 
                  color: '#155724', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  marginBottom: '16px',
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  ✅ Success! Redirecting to download page...
                </div>
              )}

              {error && (
                <div style={{ 
                  background: '#fff4e6', 
                  border: '1px solid #ffd5a8', 
                  color: '#7b4b00', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  marginBottom: '16px',
                  fontSize: '14px'
                }}>
                  {error}
                </div>
              )}

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="demo-form"
              >
                <input type="hidden" name="access_key" value="5737364f-4088-402b-87b3-80dafb3d48cd" />
                <input type="hidden" name="subject" value="SFI + ISO 14224 Checklist Request" />
                <input type="hidden" name="from_name" value="AssetStage Website" />
                <input type="hidden" name="to" value="team@assetstage.io" />
                <input type="hidden" name="form_type" value="checklist_request" />
                <input type="hidden" name="page" value="/sfi-iso14224" />
                <input type="hidden" name="main_article" value="https://assetstage.io/blog/SFI-ISO14224" />
                <input type="hidden" name="redirect" value="/thank-you" />
                <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="form-group">
                    <label>Full name *</label>
                    <input name="name" type="text" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label>Work email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      onChange={handleEmailChange}
                      className={emailError ? 'error' : ''}
                    />
                    {emailError && (
                      <span style={{
                        display: 'block',
                        color: '#f44336',
                        fontSize: '13px',
                        marginTop: '5px'
                      }}>
                        {emailError}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Company *</label>
                    <input name="company" type="text" required autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label>Fleet size</label>
                    <select name="fleet_size" defaultValue="">
                      <option value="">Select</option>
                      <option value="1-5">1–5 vessels</option>
                      <option value="6-10">6–10 vessels</option>
                      <option value="11-25">11–25 vessels</option>
                      <option value="26-50">26–50 vessels</option>
                      <option value="50+">50+ vessels</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>What are your data challenges? (optional)</label>
                  <textarea 
                    name="notes" 
                    placeholder="e.g., duplicate PMs, inconsistent SFI, missing failure codes"
                    style={{ minHeight: '80px' }}
                  />
                </div>

                <button type="submit" className="btn-submit" style={{ width: '100%' }}>
                  Email me the checklist
                </button>

                <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '12px', textAlign: 'center' }}>
                  By submitting, you agree to our <Link href="/privacy">Privacy Policy</Link>.
                </p>
              </form>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '20px 0',
                color: 'var(--text-light)',
                fontSize: '14px'
              }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
                <span style={{ padding: '0 16px' }}>or</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
              </div>

              <Link 
                href="/#demo" 
                className="btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                🚀 Book a 15-min call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Understanding SFI & ISO 14224</h2>
            <p>Two standards that work together to transform maritime maintenance</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚓</div>
              <h3>SFI = What & Where</h3>
              <p>Universal equipment identification for vessels. Structure parts and systems so crews can find the right item in seconds.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Main group → group → sub-group → detail code</li>
                <li>Works across shipyards, suppliers, and CMMS</li>
                <li>Example: <code style={{ background: 'var(--bg-light)', padding: '2px 6px', borderRadius: '4px' }}>735.007</code> = Stern tube seal</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>ISO 14224 = How & Why</h3>
              <p>Standardized reliability & maintenance data: equipment classes, failure modes, and maintenance actions that enable analytics.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Benchmark failures across sister vessels</li>
                <li>Predictive maintenance & root-cause analysis</li>
                <li>Feeds work planning with real failure patterns</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Combined Power</h3>
              <p>When SFI and ISO 14224 work together, you get complete visibility into your fleet\'s maintenance operations.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Instant equipment location with SFI codes</li>
                <li>Failure patterns tracked via ISO 14224</li>
                <li>Data-driven maintenance decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>See AssetStage Implement SFI + ISO 14224 in Weeks</h2>
          <p>Clean, standardized data ready for AMOS, Maximo, SAP — without six-figure consulting.</p>
          <div className="hero-buttons">
            <Link href="/#demo" className="btn-primary">Schedule a Demo</Link>
            <Link href="/#contact" className="btn-secondary">
              Request a Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section.section > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}