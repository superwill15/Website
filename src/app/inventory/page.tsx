import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { BookOpen, Warehouse, Link2, BarChart3, TrendingUp, Building2, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Materials & Spare Parts Management | AssetStage',
  description: 'Centralize your item master, track inventory across storerooms, link parts to assets, and get complete spare parts visibility with AssetStage.',
};

export default function InventoryPage() {
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
            Inventory Management
          </div>
          <h1>Materials & Spare Parts Management</h1>
          <p>Centralise your item master, track inventory across storerooms, and link parts to assets for complete spare parts visibility</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bg-light)', padding: '0 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Inventory' }
        ]} />
      </div>

      {/* Features Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card" id="item-master">
              <div className="service-icon"><BookOpen size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Item Master Catalogue</h2>
              <p>
                Centralised parts catalogue with descriptions, commodity codes, and rotating/condition-monitored flags.
                Link items to multiple vendors and manufacturers with preferred supplier tracking.
              </p>
            </div>

            <div className="service-card" id="storeroom">
              <div className="service-icon"><Warehouse size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Inventory Per Storeroom</h2>
              <p>
                Track stock balances, min/max levels, reorder points, and costs per storeroom per site.
                Compare inventory across all storerooms side by side — spot inconsistencies instantly.
              </p>
            </div>

            <div className="service-card" id="bom">
              <div className="service-icon"><Link2 size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Spare Part BOMs</h2>
              <p>
                Link parts to assets and locations with quantities and fit positions.
                Copy a &quot;gold standard&quot; BOM across identical equipment in one click.
              </p>
            </div>

            <div className="service-card" id="comparison">
              <div className="service-icon"><BarChart3 size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Fleet-Wide Comparison</h2>
              <p>
                Compare storeroom stock levels across your entire fleet side by side.
                Identify where identical equipment has different spare part coverage.
              </p>
            </div>

            <div className="service-card" id="analytics">
              <div className="service-icon"><TrendingUp size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Usage Analytics</h2>
              <p>
                Import issue/return/transfer history from your CMMS.
                Calculate consumption rates, identify slow-moving stock and obsolete items.
              </p>
            </div>

            <div className="service-card" id="vendors">
              <div className="service-icon"><Building2 size={28} /></div>
              <h2 style={{ fontSize: '22px', marginBottom: '15px' }}>Vendor & Manufacturer Management</h2>
              <p>
                Centralised company register for all vendors and manufacturers.
                Track preferred vendors, lead times, and costs per item.
              </p>
            </div>
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '60px',
            fontSize: '18px',
            color: 'var(--text-light)',
            maxWidth: '800px',
            margin: '60px auto 0'
          }}>
            Works with Maximo, SAP PM, Oracle, and any CMMS. Import your existing inventory data and start standardising immediately.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2>Why Manage Spare Parts in AssetStage?</h2>
            <p>Get visibility across your entire spare parts inventory before loading to your CMMS</p>
          </div>

          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Visibility Across Sites</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">Zero</div>
                <div className="stat-label">Duplicate Items</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">Instant</div>
                <div className="stat-label">BOM Standardization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Common Use Cases</h2>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
              <div className="service-card">
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--accent-blue)' }}>CMMS Migration</h3>
                <p style={{ marginBottom: '20px' }}>
                  Preparing spare parts data for a new CMMS? Use AssetStage to clean, standardize, and validate before loading.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Deduplicate item records',
                    'Standardize descriptions',
                    'Validate vendor data',
                    'Build complete BOMs'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
                      <Check size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-light)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card">
                <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--accent-blue)' }}>Fleet Standardization</h3>
                <p style={{ marginBottom: '20px' }}>
                  Multiple sites or vessels? Ensure consistent spare parts coverage across identical equipment.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Compare BOMs across sites',
                    'Identify coverage gaps',
                    'Standardize inventory levels',
                    'Optimize stocking strategy'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0' }}>
                      <Check size={18} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-light)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Clean Up Your Spare Parts Data?"
        subtitle="See how AssetStage can help you manage inventory across all your sites."
        primaryButtonText="Book a Demo"
        secondaryButtonText="View Pricing"
        secondaryButtonHref="/pricing"
      />

      <Footer />
    </>
  );
}
