import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industries - CMMS Data Solutions by Sector | AssetStage',
  description: 'CMMS data staging solutions for maritime, oil & gas, manufacturing, and utilities. Industry-specific standards compliance and data quality tools.',
  keywords: 'CMMS industries, maritime CMMS, oil gas CMMS, manufacturing CMMS, utilities CMMS, industry data standards',
  openGraph: {
    title: 'Industries - CMMS Data Solutions by Sector | AssetStage',
    description: 'Industry-specific CMMS data staging solutions with built-in standards compliance.',
    url: 'https://assetstage.io/industries',
    siteName: 'AssetStage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries - CMMS Data Solutions | AssetStage',
    description: 'Industry-specific CMMS data staging solutions.',
  },
  alternates: {
    canonical: 'https://assetstage.io/industries',
  },
};

const industries = [
  {
    name: 'Maritime',
    slug: 'maritime',
    icon: '⚓',
    description: 'SFI coding, vessel systems, and fleet-wide asset hierarchy management for shipping companies and maritime operators.',
    standards: ['SFI Coding', 'IMCA Guidelines'],
  },
  {
    name: 'Oil & Gas',
    slug: 'oil-gas',
    icon: '🛢️',
    description: 'ISO 14224 compliance for upstream, midstream, and downstream operations with equipment taxonomy and failure mode tracking.',
    standards: ['ISO 14224', 'NORSOK Z-008'],
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: '🏭',
    description: 'Production equipment hierarchies, OEM data extraction, and plant-wide asset data management for manufacturing facilities.',
    standards: ['ISO 55000', 'Custom Taxonomies'],
  },
  {
    name: 'Utilities',
    slug: 'utilities',
    icon: '⚡',
    description: 'Grid infrastructure, generation assets, and distribution network data management for power, water, and gas utilities.',
    standards: ['NERC Standards', 'Utility Taxonomies'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Industry-Specific CMMS Data Solutions</h1>
            <p>
              Built-in standards compliance and domain expertise for your sector.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="service-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="service-icon">{industry.icon}</div>
                  <h3 style={{ color: 'var(--text-dark)', marginBottom: '12px' }}>
                    {industry.name}
                  </h3>
                  <p style={{ marginBottom: '16px' }}>{industry.description}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {industry.standards.map((standard) => (
                      <span
                        key={standard}
                        style={{
                          background: 'var(--bg-light)',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          color: 'var(--text-light)',
                          fontWeight: 500,
                        }}
                      >
                        {standard}
                      </span>
                    ))}
                  </div>
                  <span style={{
                    color: 'var(--accent-blue)',
                    fontWeight: 500,
                  }}>
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Don&apos;t See Your Industry?</h2>
            <p>AssetStage works with any CMMS and any asset type. Let&apos;s discuss your specific needs.</p>
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
