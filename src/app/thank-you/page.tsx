import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Thank You - AssetStage',
  description: 'Download your SFI + ISO 14224 implementation checklist.',
};

export default function ThankYouPage() {
  return (
    <>
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

      {/* Thank You Content */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Success Message */}
            <div style={{ 
              marginBottom: '40px',
              padding: '40px',
              background: 'var(--white)',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '2px solid var(--accent-green)'
            }}>
              <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
              <h1 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--text-dark)' }}>
                Thank You!
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '32px' }}>
                Your SFI + ISO 14224 implementation checklist is ready for download.
              </p>
              
              {/* Download Button */}
              <div style={{ marginBottom: '32px' }}>
                <a 
                  href="/downloads/sfi-iso14224-checklist.txt"
                  className="btn-primary"
                  download="SFI-ISO14224-Implementation-Checklist.txt"
                  style={{ 
                    fontSize: '18px',
                    padding: '16px 32px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  📥 Download Your Checklist
                </a>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
                The checklist includes implementation phases, pre-mapped codes, and CMMS templates.
              </p>
            </div>

            {/* What's Included */}
            <div style={{ 
              background: 'var(--white)',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              marginBottom: '40px',
              textAlign: 'left'
            }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>
                What's in Your Checklist
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '12px 0', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>📋</span>
                  <span><strong>Phase-by-phase implementation plan</strong> - Step-by-step timeline for SFI + ISO 14224 rollout</span>
                </li>
                <li style={{ padding: '12px 0', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>🔢</span>
                  <span><strong>Pre-mapped SFI codes</strong> - Common maritime equipment with standard SFI classifications</span>
                </li>
                <li style={{ padding: '12px 0', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>⚙️</span>
                  <span><strong>ISO 14224 templates</strong> - Equipment hierarchies and failure mode structures</span>
                </li>
                <li style={{ padding: '12px 0', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>💻</span>
                  <span><strong>CMMS configuration guide</strong> - Setup instructions for AMOS, Maximo, and SAP PM</span>
                </li>
                <li style={{ padding: '12px 0', display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>📊</span>
                  <span><strong>Success metrics framework</strong> - KPIs to measure implementation progress</span>
                </li>
              </ul>
            </div>

            {/* Next Steps */}
            <div style={{ 
              background: 'var(--bg-light)',
              padding: '32px',
              borderRadius: '12px',
              marginBottom: '40px'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Ready to Get Started?</h3>
              <p style={{ marginBottom: '24px', color: 'var(--text-light)' }}>
                AssetStage can help you implement these standards across your fleet in weeks, not months.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/#demo" className="btn-primary">
                  Schedule a Demo
                </Link>
                <Link href="/blog/SFI-ISO14224" className="btn-secondary">
                  Read the Full Guide
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            <div style={{ 
              paddingTop: '32px',
              borderTop: '1px solid var(--border-light)',
              color: 'var(--text-light)'
            }}>
              <p style={{ marginBottom: '16px' }}>
                Questions? Email us at <a href="mailto:team@assetstage.io" style={{ color: 'var(--accent-blue)' }}>team@assetstage.io</a>
              </p>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                  ← Back to Home
                </Link>
                <Link href="/blog" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                  Browse Blog
                </Link>
                <Link href="/resources" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
                  More Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}