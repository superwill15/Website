import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import {
  Building2,
  GraduationCap,
  ClipboardList,
  RefreshCw,
  Factory,
  BarChart3,
  Rocket,
  Globe,
  AlertTriangle,
  Microscope,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional CMMS Services | Data Migration & Standards Consultancy',
  description: 'Expert CMMS consulting, ISO 14224, RDS-PP, KKS, SFI implementation, FMEA workshops, criticality analysis, and data migration services for maintenance teams.',
  openGraph: {
    title: 'Professional CMMS Services | AssetStage',
    description: 'Expert CMMS consulting, standards implementation, and data migration services for maintenance teams.',
    url: 'https://assetstage.io/services',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Professional Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional CMMS Services | AssetStage',
    description: 'Expert CMMS consulting, standards implementation, and data migration services.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/services',
  },
};

export default function ServicesPage() {
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
            Professional Services
          </div>
          <h1>AssetStage Professional Services</h1>
          <p>Expert guidance in engineering standards, data management, and CMMS implementation</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services' }
        ]} />
      </div>

      {/* Services Grid */}
      <section className="section" id="all-services">
        <div className="container">
          <div className="services-grid">
            {/* Engineering Standards Consultancy */}
            <div className="service-card" id="consulting">
              <div className="service-icon"><Building2 size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Engineering Standards Consultancy</h2>
              <p>Expert implementation of international engineering standards including RDS-PP, RDS-PS (power systems), ISO 14224 (reliability data), KKS (power plant classification), and SFI (marine classification). We ensure your assets are classified and structured according to industry best practices.</p>
            </div>

            {/* Standards Training */}
            <div className="service-card" id="training">
              <div className="service-icon"><GraduationCap size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Standards Training & Certification</h2>
              <p>Comprehensive training programs on engineering classification systems. Learn how to implement RDS-PP, RDS-PS for power generation, ISO 14224 for reliability, KKS for industrial plants, and SFI for marine systems. Build internal expertise in global standards.</p>
            </div>

            {/* CMMS Selection Advisory */}
            <div className="service-card" id="cmms-selection">
              <div className="service-icon"><ClipboardList size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>CMMS Selection Advisory</h2>
              <p>Independent, vendor-neutral guidance to help you choose the right CMMS for your organization. We evaluate your needs, not vendor commissions.</p>
            </div>

            {/* Data Migration */}
            <div className="service-card" id="data-migration">
              <div className="service-icon"><RefreshCw size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Data Migration Services</h2>
              <p>Expert assistance with complex data migrations. We handle the heavy lifting while your team learns the process for future autonomy.</p>
            </div>

            {/* Industry Templates */}
            <div className="service-card" id="templates">
              <div className="service-icon"><Factory size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Industry Templates & Standards</h2>
              <p>Pre-built configurations aligned with international standards. Templates for RDS-PP, RDS-PS (power), ISO 14224 (reliability), KKS (plant classification), and SFI (marine). Start with proven industry frameworks.</p>
            </div>

            {/* Master Data Governance */}
            <div className="service-card" id="data-governance">
              <div className="service-icon"><BarChart3 size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Master Data Governance</h2>
              <p>Ongoing data quality management services aligned with engineering standards. Keep your CMMS data clean with automated workflows and regular health checks.</p>
            </div>

            {/* Standards Implementation */}
            <div className="service-card" id="standards-implementation">
              <div className="service-icon"><Rocket size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Standards Implementation</h2>
              <p>End-to-end support for implementing engineering classification systems. From gap analysis to full deployment of RDS-PP, RDS-PS, ISO 14224, KKS, or SFI standards in your organization.</p>
            </div>

            {/* Cross-Industry Standards Mapping */}
            <div className="service-card" id="standards-mapping">
              <div className="service-icon"><Globe size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Cross-Industry Standards Mapping</h2>
              <p>Bridge different classification systems during mergers, acquisitions, or multi-site operations. Map between RDS-PP, RDS-PS, ISO 14224, KKS, SFI and other standards for seamless integration.</p>
            </div>

            {/* Criticality Analysis */}
            <div className="service-card" id="criticality-analysis">
              <div className="service-icon"><AlertTriangle size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Criticality Analysis Workshops</h2>
              <p>Facilitated criticality assessment sessions to identify and rank your most important assets. Establish risk-based maintenance priorities using industry-standard methodologies aligned with ISO 55000 and ISO 14224 frameworks.</p>
            </div>

            {/* FMEA */}
            <div className="service-card" id="fmea">
              <div className="service-icon"><Microscope size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>FMEA Workshop Facilitation</h2>
              <p>Expert-led Failure Mode and Effects Analysis (FMEA) workshops for your critical assets. Identify potential failure modes, assess risks, and develop targeted maintenance strategies to prevent costly downtime.</p>
            </div>

            {/* Obsolescence Studies */}
            <div className="service-card" id="obsolescence">
              <div className="service-icon"><Clock size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Obsolescence Studies</h2>
              <p>Proactive obsolescence management for aging assets and equipment. Identify at-risk components, assess spare parts availability, and develop mitigation strategies before obsolescence becomes a critical issue affecting operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With AssetStage</h2>
            <p>We bring deep industry experience and a practical approach to every engagement</p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">Cost Savings vs Traditional Consulting</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">6 Weeks</div>
                <div className="stat-label">Typical Implementation Time</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Vendor Neutral</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
                Our team combines hands-on CMMS implementation experience with deep knowledge of international engineering standards. We focus on practical results, not theoretical frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Expert Help?"
        subtitle="Let's discuss your CMMS challenges and find the right solution for your organization."
        primaryButtonText="Book a Consultation"
        secondaryButtonText="Email Us"
        secondaryButtonHref="mailto:sales@assetstage.io"
      />
      </main>

      <Footer />
    </>
  );
}
