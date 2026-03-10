import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Guides - CMMS Data Resources | AssetStage',
  description: 'Comprehensive guides on CMMS data quality, asset hierarchy design, data migration, and maintenance data best practices.',
  keywords: 'CMMS guides, asset data guides, maintenance data resources, CMMS tutorials',
  openGraph: {
    title: 'Guides - CMMS Data Resources | AssetStage',
    description: 'Comprehensive guides on CMMS data quality and maintenance data best practices.',
    url: 'https://assetstage.io/guides',
    siteName: 'AssetStage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides - CMMS Data Resources | AssetStage',
    description: 'Comprehensive guides on CMMS data quality.',
  },
  alternates: {
    canonical: 'https://assetstage.io/guides',
  },
};

const guides = [
  {
    title: 'The Complete Guide to CMMS Data Quality',
    slug: 'cmms-data-quality',
    description: 'Everything you need to know about building, validating, and maintaining high-quality asset data for your CMMS.',
    sections: [
      'Why CMMS Data Quality Matters',
      'Common Data Quality Problems',
      'Building an Asset Hierarchy',
      'Data Validation Best Practices',
      'Migration & Loading',
      'Ongoing Data Governance',
    ],
    featured: true,
  },
  // TODO: Add more guides as they are created
];

export default function GuidesPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>CMMS Data Guides</h1>
            <p>
              In-depth resources to help you master maintenance data management.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="section">
          <div className="container">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="service-card"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                {guide.featured && (
                  <span style={{
                    background: 'var(--accent-green)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px',
                    display: 'inline-block',
                  }}>
                    Featured Guide
                  </span>
                )}
                <h2 style={{ color: 'var(--text-dark)', marginBottom: '12px', fontSize: '28px' }}>
                  {guide.title}
                </h2>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                  {guide.description}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '12px' }}>
                    What&apos;s Inside:
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '8px',
                  }}>
                    {guide.sections.map((section, index) => (
                      <li key={index} style={{
                        fontSize: '14px',
                        color: 'var(--text-dark)',
                        padding: '4px 0',
                      }}>
                        ✓ {section}
                      </li>
                    ))}
                  </ul>
                </div>
                <span style={{
                  color: 'var(--accent-blue)',
                  fontWeight: 600,
                  fontSize: '16px',
                }}>
                  Read the full guide →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Need Hands-On Help?</h2>
            <p>Our team can help you implement these best practices in your organization.</p>
            <div className="hero-buttons">
              <Link
                href="/#contact"
                className="btn-primary"
                style={{ background: '#fff', color: 'var(--primary-navy)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
