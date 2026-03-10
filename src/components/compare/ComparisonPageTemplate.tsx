'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import ComparisonTable, { ComparisonFeature } from './ComparisonTable';

interface ComparisonPageTemplateProps {
  competitorName: string;
  competitorSlug: string;
  metaDescription: string;
  features: ComparisonFeature[];
  sections: {
    overview: React.ReactNode;
    keyDifferences: React.ReactNode;
    whenChooseCompetitor: React.ReactNode;
    whenChooseAssetStage: React.ReactNode;
    verdict: React.ReactNode;
  };
}

export default function ComparisonPageTemplate({
  competitorName,
  competitorSlug,
  features,
  sections,
}: ComparisonPageTemplateProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="hero comparison-hero">
          <div className="hero-content">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <ol style={{
                display: 'flex',
                justifyContent: 'center',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '14px',
                opacity: 0.9,
              }}>
                <li>
                  <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                  <span style={{ margin: '0 8px' }}>/</span>
                </li>
                <li>
                  <Link href="/compare" style={{ color: '#fff', textDecoration: 'none' }}>Compare</Link>
                  <span style={{ margin: '0 8px' }}>/</span>
                </li>
                <li style={{ opacity: 0.8 }}>AssetStage vs {competitorName}</li>
              </ol>
            </nav>

            <h1>AssetStage vs {competitorName}: Which is Right for Your CMMS Data?</h1>
            <p>
              An honest comparison to help you choose the right solution for your maintenance data challenges.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>
                Book a Demo
              </button>
              <a href="#comparison-table" className="btn-secondary">
                Jump to Comparison
              </a>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Overview</h2>
              <p>Understanding both solutions at a glance</p>
            </div>
            <div className="comparison-overview">
              {sections.overview}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section id="comparison-table" className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>Feature Comparison</h2>
              <p>Side-by-side comparison of key capabilities</p>
            </div>
            <ComparisonTable
              competitorName={competitorName}
              features={features}
            />
          </div>
        </section>

        {/* Key Differences */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Key Differences</h2>
              <p>What sets these solutions apart</p>
            </div>
            <div className="comparison-differences">
              {sections.keyDifferences}
            </div>
          </div>
        </section>

        {/* When to Choose Each */}
        <section className="section section-gray">
          <div className="container">
            <div className="comparison-choice-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '40px',
            }}>
              {/* When to Choose Competitor */}
              <div className="comparison-choice-card" style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>
                  When to Choose {competitorName}
                </h3>
                {sections.whenChooseCompetitor}
              </div>

              {/* When to Choose AssetStage */}
              <div className="comparison-choice-card" style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                color: '#fff',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#fff' }}>
                  When to Choose AssetStage
                </h3>
                {sections.whenChooseAssetStage}
              </div>
            </div>
          </div>
        </section>

        {/* Verdict */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>The Verdict</h2>
              <p>Our honest assessment</p>
            </div>
            <div className="comparison-verdict" style={{
              maxWidth: '800px',
              margin: '0 auto',
              background: 'var(--bg-light)',
              padding: '40px',
              borderRadius: '12px',
              borderLeft: '4px solid var(--accent-green)',
            }}>
              {sections.verdict}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>See AssetStage in Action — Book a Demo</h2>
            <p>
              Get a personalized walkthrough of how AssetStage can transform your CMMS data workflow.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={openModal}
                style={{ background: '#fff', color: 'var(--primary-navy)' }}
              >
                Book a Demo
              </button>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>More Comparisons</h2>
              <p>See how AssetStage compares to other solutions</p>
            </div>
            <div className="services-grid" style={{ marginTop: '40px' }}>
              {competitorSlug !== 'mxloader' && (
                <Link href="/compare/assetstage-vs-mxloader" className="service-card" style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--text-dark)' }}>AssetStage vs MXLoader</h3>
                  <p>Compare with the Maximo data loading tool</p>
                </Link>
              )}
              {competitorSlug !== 'nrx-assethub' && (
                <Link href="/compare/assetstage-vs-nrx-assethub" className="service-card" style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--text-dark)' }}>AssetStage vs NRX AssetHub</h3>
                  <p>Compare with the enterprise asset data solution</p>
                </Link>
              )}
              {competitorSlug !== 'spreadsheets' && (
                <Link href="/compare/assetstage-vs-spreadsheets" className="service-card" style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--text-dark)' }}>AssetStage vs Spreadsheets</h3>
                  <p>Why purpose-built tools beat Excel for CMMS data</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
