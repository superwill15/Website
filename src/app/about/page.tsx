import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { Target, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About AssetStage | Built by Maintenance Engineers',
  description: 'AssetStage was founded by maintenance engineers to solve CMMS data quality problems. We make enterprise-quality data staging accessible to every organization.',
  openGraph: {
    title: 'About AssetStage | Built by Maintenance Engineers',
    description: 'Founded by maintenance engineers to solve CMMS data quality problems.',
    url: 'https://assetstage.io/about',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About AssetStage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AssetStage | Built by Maintenance Engineers',
    description: 'Founded by maintenance engineers to solve CMMS data quality problems.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '80px 20px 60px' }}>
        <div className="hero-content">
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--accent-blue)',
            marginBottom: '16px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Our Story
          </div>
          <h1>About AssetStage</h1>
          <p>On a mission to democratize CMMS data quality</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]} />
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '20px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: '30px' }}>
              AssetStage was founded by maintenance and reliability engineers who experienced firsthand the pain of CMMS implementations destroyed by bad data.
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
              We watched companies spend millions on software that never delivered value because the data was wrong. The same pattern repeated across industries: promising CMMS projects failing because of inconsistent asset hierarchies, duplicate records, and missing critical data.
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '30px' }}>
              We built AssetStage to solve this problem once and for all. Our platform makes enterprise-quality data staging accessible to every organization, with skilled consultants available for those who prefer expert-delivered implementations.
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-light)' }}>
              Today, we help maintenance teams across manufacturing, utilities, and facilities management achieve what was once impossible: clean, standardized CMMS data in weeks, not months, at a fraction of traditional costs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>What Drives Us</h2>
          </div>

          <div className="services-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="service-card">
              <div className="service-icon"><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>
                Make enterprise-quality CMMS data accessible to every maintenance team, regardless of budget or internal IT resources. No more choosing between expensive consultants and messy spreadsheets.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Users size={28} /></div>
              <h3>Built by Practitioners</h3>
              <p>
                Our team has spent years in the trenches of CMMS implementations. We understand the real challenges because we&apos;ve lived them. Every feature we build solves a problem we&apos;ve experienced firsthand.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon"><Zap size={28} /></div>
              <h3>Practical, Not Perfect</h3>
              <p>
                We focus on getting 80% of the value in 20% of the time. Perfect data isn&apos;t always necessary. Clean, consistent data that supports your maintenance operations is what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>The Problem We Solve</h2>
            <p>70% of CMMS implementations fail to deliver expected value. Bad data is the #1 reason.</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">70%</div>
                <div className="stat-label">CMMS Projects Fail Due to Bad Data</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">6-12</div>
                <div className="stat-label">Months for Traditional Data Cleanup</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">$100K+</div>
                <div className="stat-label">Typical Consulting Spend</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <p style={{ fontSize: '18px', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto' }}>
                AssetStage changes this equation. We give maintenance teams the tools to fix their own data, with expert support available when needed. The result: faster implementations, lower costs, and better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Our platform and services adapt to the unique requirements of each industry</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              textAlign: 'center'
            }}>
              {[
                'Manufacturing',
                'Utilities',
                'Oil & Gas',
                'Maritime',
                'Power Generation',
                'Facilities Management',
                'Mining',
                'Water & Wastewater'
              ].map((industry) => (
                <div key={industry} style={{
                  background: 'var(--white)',
                  padding: '24px',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-sm)',
                  fontWeight: 500,
                  color: 'var(--text-dark)'
                }}>
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        subtitle="Let's discuss how AssetStage can help your maintenance team."
        primaryButtonText="Book a Demo"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
      </main>

      <Footer />
    </>
  );
}
