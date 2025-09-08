import Link from 'next/link';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Privacy Policy - AssetStage',
  description: 'AssetStage privacy policy and data protection information.',
};

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '40px', color: 'var(--text-dark)' }}>Privacy Policy</h1>
        
        <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>
          Last updated: September 8, 2025
        </p>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>1. Introduction</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            AssetStage ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website assetstage.io and use our services.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>2. Information We Collect</h2>
          <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '16px', color: 'var(--text-dark)' }}>Information You Provide</h3>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Contact information (name, email address, company name)</li>
            <li>Account credentials</li>
            <li>Communication preferences</li>
            <li>Information provided through forms, demos, or support requests</li>
          </ul>

          <h3 style={{ fontSize: '18px', marginTop: '24px', marginBottom: '16px', color: 'var(--text-dark)' }}>Automatically Collected Information</h3>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
            <li>IP address and location data</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>3. How We Use Your Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>We use the information we collect to:</p>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>4. Information Sharing and Disclosure</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:
          </p>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
            <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Consent:</strong> With your consent or at your direction</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>5. Data Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, 
            alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage practices.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>6. Data Retention</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
            unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>7. Your Rights and Choices</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>You have the right to:</p>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Access and receive a copy of your personal information</li>
            <li>Correct or update your personal information</li>
            <li>Delete your personal information (subject to certain exceptions)</li>
            <li>Object to or restrict certain processing of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            To exercise these rights, please contact us at privacy@assetstage.io.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>8. Cookies</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>9. Third-Party Links</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. 
            We encourage you to review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>10. Children's Privacy</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from 
            children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps 
            to delete such information.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>11. International Data Transfers</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            Your information may be transferred to and maintained on servers located outside of your state, province, country, 
            or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>12. Changes to This Privacy Policy</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page and updating the "Last updated" date.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--text-dark)' }}>13. Contact Us</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '16px' }}>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul style={{ lineHeight: '1.8', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>By email: privacy@assetstage.io</li>
            <li>By visiting our contact page at: assetstage.io/contact</li>
            <li>For general inquiries: team@assetstage.io</li>
          </ul>
        </section>

        <div style={{ 
          marginTop: '60px', 
          paddingTop: '40px', 
          borderTop: '2px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <Link 
            href="/" 
            style={{ 
              color: 'var(--accent-blue)', 
              textDecoration: 'none', 
              fontWeight: '600' 
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}