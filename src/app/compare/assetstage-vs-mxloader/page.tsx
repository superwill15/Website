'use client';

import ComparisonPageTemplate from '@/components/compare/ComparisonPageTemplate';
import { ComparisonFeature } from '@/components/compare/ComparisonTable';

// TODO: Populate with actual MXLoader feature data based on research
const features: ComparisonFeature[] = [
  // Data Staging & Preparation
  { feature: 'Visual data staging workspace', assetStage: true, competitor: false, category: 'Data Staging & Preparation' },
  { feature: 'Drag-and-drop hierarchy building', assetStage: true, competitor: false, category: 'Data Staging & Preparation' },
  { feature: 'Multi-source data import', assetStage: true, competitor: true, category: 'Data Staging & Preparation' },
  { feature: 'Real-time data validation', assetStage: true, competitor: 'Limited', category: 'Data Staging & Preparation' },
  { feature: 'Data transformation rules', assetStage: true, competitor: true, category: 'Data Staging & Preparation' },

  // CMMS Integration
  { feature: 'Maximo integration', assetStage: true, competitor: true, category: 'CMMS Integration' },
  { feature: 'SAP PM integration', assetStage: true, competitor: false, category: 'CMMS Integration' },
  { feature: 'Multiple CMMS support', assetStage: true, competitor: false, category: 'CMMS Integration' },
  { feature: 'Direct database loading', assetStage: 'Export-based', competitor: true, category: 'CMMS Integration' },

  // Data Quality
  { feature: 'ISO 14224 compliance checking', assetStage: true, competitor: false, category: 'Data Quality' },
  { feature: 'SFI coding validation', assetStage: true, competitor: false, category: 'Data Quality' },
  { feature: 'Duplicate detection', assetStage: true, competitor: 'Limited', category: 'Data Quality' },
  { feature: 'Data quality scoring', assetStage: true, competitor: false, category: 'Data Quality' },

  // Collaboration
  { feature: 'Multi-user collaboration', assetStage: true, competitor: false, category: 'Collaboration & Workflow' },
  { feature: 'Approval workflows', assetStage: true, competitor: false, category: 'Collaboration & Workflow' },
  { feature: 'Audit trail', assetStage: true, competitor: 'Limited', category: 'Collaboration & Workflow' },
  { feature: 'Role-based access', assetStage: true, competitor: false, category: 'Collaboration & Workflow' },

  // Deployment
  { feature: 'Cloud-based (SaaS)', assetStage: true, competitor: false, category: 'Deployment' },
  { feature: 'On-premise option', assetStage: true, competitor: true, category: 'Deployment' },
  { feature: 'No installation required', assetStage: true, competitor: false, category: 'Deployment' },
];

export default function AssetStageVsMXLoaderPage() {
  return (
    <ComparisonPageTemplate
      competitorName="MXLoader"
      competitorSlug="mxloader"
      metaDescription="Compare AssetStage vs MXLoader for Maximo data loading. See feature differences, pricing, and find the right CMMS data solution for your team."
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
                {/* TODO: Add concise product positioning */}
                A modern, cloud-based CMMS data workspace designed for collaborative data staging,
                validation, and preparation. Built for teams who need to clean and structure
                maintenance data before loading into any CMMS.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Focus:</strong> Data staging & quality
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Deployment:</strong> Cloud-based SaaS
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>CMMS Support:</strong> Multiple platforms
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Best For:</strong> Data preparation projects
                </li>
              </ul>
            </div>

            {/* MXLoader Overview */}
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>MXLoader</h3>
              <p style={{ marginBottom: '20px' }}>
                {/* TODO: Add accurate MXLoader description based on research */}
                A data loading utility specifically designed for IBM Maximo. Provides direct
                database loading capabilities through the Maximo Integration Framework (MIF).
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Focus:</strong> Data loading to Maximo
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Deployment:</strong> On-premise
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>CMMS Support:</strong> Maximo only
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Best For:</strong> Maximo-specific loading
                </li>
              </ul>
            </div>
          </div>
        ),

        keyDifferences: (
          <div className="services-grid" style={{ marginTop: '40px' }}>
            {/* TODO: Populate with researched key differences */}
            <div className="service-card">
              <h3>Data Staging vs Direct Loading</h3>
              <p>
                AssetStage provides a visual workspace for preparing and validating data
                before it reaches your CMMS. MXLoader focuses on the loading step itself,
                assuming data is already prepared.
              </p>
            </div>

            <div className="service-card">
              <h3>Multi-CMMS vs Maximo-Only</h3>
              <p>
                AssetStage works with multiple CMMS platforms including Maximo, SAP PM,
                and others. MXLoader is purpose-built exclusively for IBM Maximo.
              </p>
            </div>

            <div className="service-card">
              <h3>Cloud vs On-Premise</h3>
              <p>
                AssetStage is primarily cloud-based, enabling collaboration without
                infrastructure setup. MXLoader runs on-premise alongside your Maximo instance.
              </p>
            </div>

            <div className="service-card">
              <h3>Collaboration Features</h3>
              <p>
                AssetStage includes multi-user collaboration, approval workflows, and
                role-based access. MXLoader is typically a single-user utility tool.
              </p>
            </div>
          </div>
        ),

        whenChooseCompetitor: (
          <>
            {/* TODO: Add honest reasons to choose MXLoader */}
            <ul className="feature-list">
              <li>You only use IBM Maximo and need direct database loading</li>
              <li>Your data is already clean and validated externally</li>
              <li>You prefer on-premise tools with no cloud dependency</li>
              <li>You have existing MIF expertise in-house</li>
              <li>You need to load data frequently with minimal preprocessing</li>
            </ul>
          </>
        ),

        whenChooseAssetStage: (
          <>
            {/* TODO: Refine based on actual differentiators */}
            <ul className="feature-list" style={{ color: 'rgba(255,255,255,0.95)' }}>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You need to clean and validate data before loading
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You work with multiple CMMS platforms
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You need collaborative workflows with approvals
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You want ISO 14224 or SFI compliance checking
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You prefer cloud-based tools without infrastructure
              </li>
            </ul>
          </>
        ),

        verdict: (
          <>
            {/* TODO: Write honest verdict based on research */}
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>MXLoader</strong> is a solid choice if you&apos;re exclusively using IBM Maximo
              and your primary challenge is getting already-prepared data into the system.
              It excels at the &quot;last mile&quot; of data loading.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>AssetStage</strong> is the better choice if your challenge is earlier in
              the process—cleaning, validating, and structuring data from multiple sources
              before it&apos;s ready for any CMMS.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-light)' }}>
              Many teams use both tools together: AssetStage for data preparation and
              validation, then MXLoader (or similar) for the final loading step.
            </p>
          </>
        ),
      }}
    />
  );
}
