import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compare CMMS Data Solutions - AssetStage Alternatives & Comparisons',
  description: 'Compare AssetStage with MXLoader, NRX AssetHub, and spreadsheet-based approaches. Find the right CMMS data staging solution for your maintenance team.',
  keywords: 'AssetStage alternative, MXLoader alternative, NRX AssetHub alternative, CMMS data comparison, Maximo data tools',
  openGraph: {
    title: 'Compare CMMS Data Solutions - AssetStage',
    description: 'Compare AssetStage with other CMMS data solutions to find the right fit for your team.',
    url: 'https://assetstage.io/compare',
    siteName: 'AssetStage',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare CMMS Data Solutions - AssetStage',
    description: 'Compare AssetStage with other CMMS data solutions.',
  },
  alternates: {
    canonical: 'https://assetstage.io/compare',
  },
};

const comparisons = [
  {
    title: 'AssetStage vs MXLoader',
    slug: 'assetstage-vs-mxloader',
    description: 'Compare AssetStage with MXLoader, the popular Maximo data loading tool. See the differences in data staging, validation, and workflow capabilities.',
    tags: ['Maximo', 'Data Loading'],
  },
  {
    title: 'AssetStage vs NRX AssetHub',
    slug: 'assetstage-vs-nrx-assethub',
    description: 'Compare AssetStage with NRX AssetHub for enterprise asset data management. Understand the different approaches to data quality and governance.',
    tags: ['Enterprise', 'Asset Data'],
  },
  {
    title: 'AssetStage vs Spreadsheets',
    slug: 'assetstage-vs-spreadsheets',
    description: 'Why purpose-built CMMS data tools beat Excel and Google Sheets. See how AssetStage eliminates spreadsheet chaos.',
    tags: ['Excel', 'Manual Process'],
  },
];

export default function ComparePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Compare CMMS Data Solutions</h1>
            <p>
              Honest, detailed comparisons to help you choose the right tool for your maintenance data challenges.
            </p>
          </div>
        </section>

        {/* Comparisons Grid */}
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="service-card"
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    {comparison.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: 'var(--bg-light)',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          color: 'var(--text-light)',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ color: 'var(--text-dark)', marginBottom: '12px' }}>
                    {comparison.title}
                  </h3>
                  <p>{comparison.description}</p>
                  <span style={{
                    color: 'var(--accent-blue)',
                    fontWeight: 500,
                    marginTop: '16px',
                    display: 'inline-block',
                  }}>
                    Read comparison →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to See AssetStage in Action?</h2>
            <p>Book a demo and see how AssetStage can transform your CMMS data workflow.</p>
            <div className="hero-buttons">
              <Link
                href="/#contact"
                className="btn-primary"
                style={{ background: '#fff', color: 'var(--primary-navy)' }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
