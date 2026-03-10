'use client';

import ComparisonPageTemplate from '@/components/compare/ComparisonPageTemplate';
import { ComparisonFeature } from '@/components/compare/ComparisonTable';

// TODO: Populate with actual NRX AssetHub feature data based on research
const features: ComparisonFeature[] = [
  // Data Management
  { feature: 'Asset data staging', assetStage: true, competitor: true, category: 'Data Management' },
  { feature: 'Hierarchy management', assetStage: true, competitor: true, category: 'Data Management' },
  { feature: 'Visual workspace', assetStage: true, competitor: 'Limited', category: 'Data Management' },
  { feature: 'Data cleansing tools', assetStage: true, competitor: true, category: 'Data Management' },
  { feature: 'Bulk data operations', assetStage: true, competitor: true, category: 'Data Management' },

  // Standards Compliance
  { feature: 'ISO 14224 templates', assetStage: true, competitor: true, category: 'Standards Compliance' },
  { feature: 'SFI coding support', assetStage: true, competitor: 'Limited', category: 'Standards Compliance' },
  { feature: 'Custom taxonomy support', assetStage: true, competitor: true, category: 'Standards Compliance' },
  { feature: 'Compliance reporting', assetStage: true, competitor: true, category: 'Standards Compliance' },

  // Integration
  { feature: 'Maximo integration', assetStage: true, competitor: true, category: 'Integration' },
  { feature: 'SAP PM integration', assetStage: true, competitor: true, category: 'Integration' },
  { feature: 'API access', assetStage: true, competitor: true, category: 'Integration' },
  { feature: 'Excel import/export', assetStage: true, competitor: true, category: 'Integration' },

  // Pricing & Deployment
  { feature: 'Project-based pricing', assetStage: true, competitor: 'Enterprise', category: 'Pricing & Deployment' },
  { feature: 'Quick implementation', assetStage: '2-4 weeks', competitor: '3-6 months', category: 'Pricing & Deployment' },
  { feature: 'No long-term contract required', assetStage: true, competitor: false, category: 'Pricing & Deployment' },
  { feature: 'Self-service option', assetStage: true, competitor: false, category: 'Pricing & Deployment' },

  // Support
  { feature: 'Guided onboarding', assetStage: true, competitor: true, category: 'Support' },
  { feature: 'Industry expertise included', assetStage: true, competitor: 'Additional cost', category: 'Support' },
  { feature: 'Ongoing support', assetStage: true, competitor: true, category: 'Support' },
];

export default function AssetStageVsNRXAssetHubPage() {
  return (
    <ComparisonPageTemplate
      competitorName="NRX AssetHub"
      competitorSlug="nrx-assethub"
      metaDescription="Compare AssetStage vs NRX AssetHub for enterprise asset data management. See feature differences, implementation timelines, and find the right solution."
      features={features}
      sections={{
        overview: (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
          }}>
            {/* AssetStage Overview */}
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>AssetStage</h3>
              <p style={{ marginBottom: '20px' }}>
                {/* TODO: Refine positioning vs NRX */}
                A focused CMMS data workspace designed for rapid data preparation projects.
                Built for teams who need to clean and structure maintenance data quickly
                without enterprise software complexity.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Focus:</strong> Rapid data staging projects
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Implementation:</strong> 2-4 weeks typical
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Pricing:</strong> Project-based
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Best For:</strong> Focused data projects
                </li>
              </ul>
            </div>

            {/* NRX AssetHub Overview */}
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>NRX AssetHub</h3>
              <p style={{ marginBottom: '20px' }}>
                {/* TODO: Add accurate NRX AssetHub description based on research */}
                An enterprise asset data management platform for large organizations.
                Provides comprehensive data governance, master data management, and
                integration capabilities across the asset lifecycle.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Focus:</strong> Enterprise data governance
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Implementation:</strong> 3-6 months typical
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Pricing:</strong> Enterprise licensing
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Best For:</strong> Large-scale programs
                </li>
              </ul>
            </div>
          </div>
        ),

        keyDifferences: (
          <div className="services-grid" style={{ marginTop: '40px' }}>
            {/* TODO: Populate with researched key differences */}
            <div className="service-card">
              <h3>Project vs Platform</h3>
              <p>
                AssetStage is optimized for discrete data preparation projects with
                quick time-to-value. NRX AssetHub is a platform for ongoing enterprise
                data governance.
              </p>
            </div>

            <div className="service-card">
              <h3>Implementation Speed</h3>
              <p>
                AssetStage typically deploys in 2-4 weeks for a data project.
                NRX AssetHub implementations often span 3-6 months or longer
                for enterprise rollouts.
              </p>
            </div>

            <div className="service-card">
              <h3>Pricing Model</h3>
              <p>
                AssetStage offers project-based pricing suitable for focused initiatives.
                NRX AssetHub uses enterprise licensing with longer-term commitments.
              </p>
            </div>

            <div className="service-card">
              <h3>Scope & Complexity</h3>
              <p>
                AssetStage focuses on doing one thing well: data staging and preparation.
                NRX AssetHub provides broader capabilities but with more complexity.
              </p>
            </div>
          </div>
        ),

        whenChooseCompetitor: (
          <>
            {/* TODO: Add honest reasons to choose NRX AssetHub */}
            <ul className="feature-list">
              <li>You need ongoing enterprise-wide data governance</li>
              <li>You have a large organization with complex approval workflows</li>
              <li>You require deep integration with enterprise systems</li>
              <li>You have budget and timeline for a major platform rollout</li>
              <li>You need master data management beyond CMMS data</li>
            </ul>
          </>
        ),

        whenChooseAssetStage: (
          <>
            {/* TODO: Refine based on actual differentiators */}
            <ul className="feature-list" style={{ color: 'rgba(255,255,255,0.95)' }}>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You have a specific data project with a defined timeline
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You need results in weeks, not months
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You prefer project-based pricing without long-term commitments
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You want a focused tool rather than an enterprise platform
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You&apos;re a mid-sized organization or single facility
              </li>
            </ul>
          </>
        ),

        verdict: (
          <>
            {/* TODO: Write honest verdict based on research */}
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>NRX AssetHub</strong> is well-suited for large enterprises needing
              comprehensive data governance across multiple facilities and systems.
              It&apos;s an investment in long-term data management infrastructure.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>AssetStage</strong> is ideal when you have a specific data challenge
              to solve—a migration, a data quality project, or a new CMMS implementation—and
              need to move quickly without enterprise platform overhead.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-light)' }}>
              Some organizations use AssetStage for tactical data projects while
              evaluating or implementing larger platforms like AssetHub for strategic
              data governance.
            </p>
          </>
        ),
      }}
    />
  );
}
