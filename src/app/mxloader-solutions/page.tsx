'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function MxloaderSolutionsLanding() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
    "name": "MXLoader Solutions Guide",
    "description": "Solve the 7 most common MXLoader pain points. Get the comprehensive troubleshooting guide for Maximo data professionals.",
    "publisher": { "@type": "Organization", "name": "AssetStage" }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

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
          <h1>Stop Wasting Hours on Failed MXLoader Imports</h1>
          <p>Validate your Maximo data <strong>before</strong> it hits MXLoader.
          Catch errors early, maintain audit trails, and reduce import failures by 95%.</p>
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
                }}>Solutions Guide</span>

                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>The 7 Pain Points We Solve</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>No pre-validation:</strong> Catch errors before import</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Excel formatting nightmares:</strong> Preserve data integrity</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Parent-child chaos:</strong> Validate relationships automatically</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Duplicate disasters:</strong> Detect conflicts before they happen</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Object structure confusion:</strong> Visual mapping & validation</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Performance timeouts:</strong> Optimize batch processing</span>
                    </li>
                    <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px', marginRight: '12px' }}>✅</span>
                      <span><strong>Audit trail black hole:</strong> Complete import history</span>
                    </li>
                  </ul>
                </div>

                <div style={{
                  borderTop: '2px solid var(--border-light)',
                  paddingTop: '24px',
                  marginTop: '24px'
                }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>
                    Real Results from Maximo Teams
                  </h4>
                  <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '8px' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-dark)', lineHeight: '1.6', margin: '0 0 16px' }}>
                      <strong>Organizations using data staging platforms</strong> report dramatic improvements:
                    </p>
                    <ul style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
                      <li><strong>95% reduction</strong> in import errors</li>
                      <li><strong>75% faster</strong> data preparation cycles</li>
                      <li><strong>100% audit trail</strong> for all data changes</li>
                      <li><strong>Zero duplicate</strong> assets from validated imports</li>
                    </ul>
                    <p style={{ fontSize: '13px', color: 'var(--text-light)', fontStyle: 'italic', marginTop: '16px', marginBottom: 0 }}>
                      Based on real-world implementations and customer feedback from Maximo deployments.
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
              <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>📥 Get the MXLoader Solutions Guide</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '24px' }}>
                7 pain points • Proven solutions • Implementation templates
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
                <input type="hidden" name="subject" value="MXLoader Solutions Guide Request" />
                <input type="hidden" name="from_name" value="AssetStage Website" />
                <input type="hidden" name="to" value="team@assetstage.io" />
                <input type="hidden" name="form_type" value="guide_request" />
                <input type="hidden" name="page" value="/mxloader-solutions" />
                <input type="hidden" name="main_article" value="https://assetstage.io/blog/mxloader-pain-points-solutions" />
                <input type="hidden" name="redirect" value="/thank-you" />
                <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="form-group">
                    <label>Full name *</label>
                    <input name="name" type="text" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label>Work email *</label>
                    <input name="email" type="email" required autoComplete="email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Company *</label>
                    <input name="company" type="text" required autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <select name="role" defaultValue="">
                      <option value="">Select</option>
                      <option value="maximo-admin">Maximo Administrator</option>
                      <option value="data-analyst">Data Analyst</option>
                      <option value="reliability-engineer">Reliability Engineer</option>
                      <option value="it-manager">IT Manager</option>
                      <option value="cmms-specialist">CMMS Specialist</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>What MXLoader challenges do you face? (optional)</label>
                  <textarea
                    name="notes"
                    placeholder="e.g., frequent import failures, Excel formatting issues, no audit trail"
                    style={{ minHeight: '80px' }}
                  />
                </div>

                <button type="submit" className="btn-submit" disabled={submitting} style={{ width: '100%' }}>
                  {submitting ? 'Sending...' : 'Email me the guide'}
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
            <h2>Why Data Staging Beats Direct MXLoader Import</h2>
            <p>Pre-validate, pre-clean, and pre-audit your data before it touches Maximo</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Pre-Import Validation</h3>
              <p>Catch errors before they hit your production system. Validate parent-child relationships, data types, and business rules.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Check all references exist before import</li>
                <li>Validate data formats and required fields</li>
                <li>Test against your actual Maximo configuration</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Visual Data Quality</h3>
              <p>See your data issues before importing. Highlight duplicates, missing parents, and format problems in an easy-to-fix interface.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Identify duplicates automatically</li>
                <li>Visual hierarchy validation</li>
                <li>Bulk correction tools for common issues</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Complete Audit Trail</h3>
              <p>Track every data change from source to Maximo. Know who imported what, when, and why.</p>
              <ul style={{ marginTop: '16px', paddingLeft: '20px', color: 'var(--text-light)' }}>
                <li>Full history of all import activities</li>
                <li>Before/after snapshots of data changes</li>
                <li>Compliance-ready documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Common Scenarios We Solve</h2>
            <p>Real problems Maximo teams face every day</p>
          </div>

          <div style={{ display: 'grid', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>
                ❌ Problem: "I imported 5,000 assets but 3,000 failed because of missing parent locations"
              </h4>
              <p style={{ color: 'var(--text-light)', margin: 0 }}>
                ✅ <strong>Solution:</strong> AssetStage validates all parent references before import,
                shows you exactly which parents are missing, and lets you fix them in a staging area.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>
                ❌ Problem: "Excel removed the leading zeros from my asset numbers"
              </h4>
              <p style={{ color: 'var(--text-light)', margin: 0 }}>
                ✅ <strong>Solution:</strong> Upload CSVs directly to AssetStage without Excel touching your data.
                All formatting is preserved exactly as intended.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>
                ❌ Problem: "I can't remember who imported those 1,000 bad work orders last quarter"
              </h4>
              <p style={{ color: 'var(--text-light)', margin: 0 }}>
                ✅ <strong>Solution:</strong> Every import is logged with user, timestamp, source file, and
                complete before/after data. Search and audit any import instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>See How AssetStage Eliminates MXLoader Pain Points</h2>
          <p>Pre-validate your data, catch errors early, and maintain complete audit trails.</p>
          <div className="hero-buttons">
            <Link href="/#demo" className="btn-primary">Schedule a Demo</Link>
            <Link href="https://app.assetstage.io" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Start Free Trial
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
