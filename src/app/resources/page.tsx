import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ResourcesSection from '@/components/ResourcesSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Free CMMS Resources & Templates | AssetStage',
  description: 'Download free CMMS templates, checklists, and guides. ISO 14224 cheat sheet, Maximo migration checklist, FMEA workbook, SFI implementation guide, and more.',
};

export default function ResourcesPage() {
  return (
    <>
      <Navigation />

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
            Free Downloads
          </div>
          <h1>Free Resources & Templates</h1>
          <p>Industry-proven tools, templates, and guides to accelerate your CMMS success</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Resources' }
        ]} />
      </div>

      {/* Resources Section - Using the existing component */}
      <ResourcesSection />

      {/* Additional Info */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Need Help Implementing?</h2>
            <p>Our consultants can guide you through the entire process</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '30px' }}>
              These resources are designed to be self-serve, but sometimes you need expert guidance. Our team has implemented these standards and processes dozens of times across various industries.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginTop: '40px'
            }}>
              <div style={{
                background: 'var(--white)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>15,000+</div>
                <div style={{ color: 'var(--text-light)' }}>Resources Downloaded</div>
              </div>

              <div style={{
                background: 'var(--white)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>10+</div>
                <div style={{ color: 'var(--text-light)' }}>Free Templates</div>
              </div>

              <div style={{
                background: 'var(--white)',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>100%</div>
                <div style={{ color: 'var(--text-light)' }}>Free, No Strings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need More Than Templates?"
        subtitle="Get expert help implementing these standards in your organization."
        primaryButtonText="Book a Demo"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
      />

      <Footer />
    </>
  );
}
