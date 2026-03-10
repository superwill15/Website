'use client';

export default function Footer() {
  return (
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
            <li><a href="/#assetstage">AssetStage Platform</a></li>
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
            <li><a href="/services#consulting">Consulting</a></li>
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
  );
}
