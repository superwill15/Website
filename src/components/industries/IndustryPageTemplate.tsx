'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

interface Standard {
  name: string;
  description: string;
  link?: string;
}

interface RelatedPost {
  title: string;
  url: string;
  description?: string;
}

interface IndustryPageTemplateProps {
  industryName: string;
  industrySlug: string;
  heroSubtitle: string;
  challenges: {
    title: string;
    description: string;
    icon: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  standards: Standard[];
  relatedPosts: RelatedPost[];
}

export default function IndustryPageTemplate({
  industryName,
  industrySlug,
  heroSubtitle,
  challenges,
  solutions,
  standards,
  relatedPosts,
}: IndustryPageTemplateProps) {
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
        <section className="hero">
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
                  <Link href="/industries" style={{ color: '#fff', textDecoration: 'none' }}>Industries</Link>
                  <span style={{ margin: '0 8px' }}>/</span>
                </li>
                <li style={{ opacity: 0.8 }}>{industryName}</li>
              </ol>
            </nav>

            <h1>CMMS Data Staging for {industryName}</h1>
            <p>{heroSubtitle}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={openModal}>
                Book a Demo
              </button>
              <Link href="#challenges" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Challenges */}
        <section id="challenges" className="section">
          <div className="container">
            <div className="section-header">
              <h2>{industryName} Data Challenges</h2>
              <p>Common obstacles teams face when managing CMMS data in {industryName.toLowerCase()}</p>
            </div>
            <div className="services-grid">
              {challenges.map((challenge, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{challenge.icon}</div>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How AssetStage Helps */}
        <section className="section section-gray">
          <div className="container">
            <div className="section-header">
              <h2>How AssetStage Helps</h2>
              <p>Purpose-built solutions for {industryName.toLowerCase()} maintenance teams</p>
            </div>
            <div className="product-showcase" style={{ gridTemplateColumns: '1fr', maxWidth: '900px', margin: '0 auto' }}>
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    padding: '32px',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-sm)',
                    borderLeft: '4px solid var(--accent-green)',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{
                    minWidth: '48px',
                    height: '48px',
                    background: 'var(--primary-gradient)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '20px',
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '8px', fontSize: '20px' }}>{solution.title}</h3>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Callout */}
        {standards.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <h2>Standards Compliance</h2>
                <p>Built-in support for {industryName.toLowerCase()} standards</p>
              </div>
              <div className="services-grid">
                {standards.map((standard, index) => (
                  <div key={index} className="service-card" style={{
                    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                    color: '#fff',
                  }}>
                    <h3 style={{ color: '#fff', marginBottom: '12px' }}>{standard.name}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
                      {standard.description}
                    </p>
                    {standard.link && (
                      <Link
                        href={standard.link}
                        style={{
                          color: '#fff',
                          textDecoration: 'underline',
                          fontSize: '14px',
                        }}
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Blog Posts */}
        {relatedPosts.length > 0 && (
          <section className="section section-gray">
            <div className="container">
              <div className="section-header">
                <h2>Related Resources</h2>
                <p>Learn more about CMMS data in {industryName.toLowerCase()}</p>
              </div>
              <div className="blog-grid">
                {relatedPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.url}
                    className="blog-card"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="blog-image">
                      <span className="blog-category">{industryName}</span>
                    </div>
                    <div className="blog-content">
                      <h3 className="blog-card-title">{post.title}</h3>
                      {post.description && (
                        <p className="blog-excerpt">{post.description}</p>
                      )}
                      <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>
                        Read article →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Transform Your {industryName} CMMS Data?</h2>
            <p>
              See how AssetStage helps {industryName.toLowerCase()} teams clean, validate, and prepare maintenance data in weeks, not months.
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

        {/* Other Industries */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2>Other Industries</h2>
              <p>See how AssetStage helps teams across sectors</p>
            </div>
            <div className="services-grid" style={{ marginTop: '40px' }}>
              {industrySlug !== 'maritime' && (
                <Link href="/industries/maritime" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="service-icon">⚓</div>
                  <h3 style={{ color: 'var(--text-dark)' }}>Maritime</h3>
                  <p>SFI coding, vessel systems, and marine asset hierarchies</p>
                </Link>
              )}
              {industrySlug !== 'oil-gas' && (
                <Link href="/industries/oil-gas" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="service-icon">🛢️</div>
                  <h3 style={{ color: 'var(--text-dark)' }}>Oil & Gas</h3>
                  <p>ISO 14224 compliance for upstream and downstream operations</p>
                </Link>
              )}
              {industrySlug !== 'manufacturing' && (
                <Link href="/industries/manufacturing" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="service-icon">🏭</div>
                  <h3 style={{ color: 'var(--text-dark)' }}>Manufacturing</h3>
                  <p>Production line equipment and facility asset management</p>
                </Link>
              )}
              {industrySlug !== 'utilities' && (
                <Link href="/industries/utilities" className="service-card" style={{ textDecoration: 'none' }}>
                  <div className="service-icon">⚡</div>
                  <h3 style={{ color: 'var(--text-dark)' }}>Utilities</h3>
                  <p>Grid infrastructure and utility asset data management</p>
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
