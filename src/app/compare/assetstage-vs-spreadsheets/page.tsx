'use client';

import ComparisonPageTemplate from '@/components/compare/ComparisonPageTemplate';
import { ComparisonFeature } from '@/components/compare/ComparisonTable';

const features: ComparisonFeature[] = [
  // Data Validation
  { feature: 'Built-in CMMS validation rules', assetStage: true, competitor: false, category: 'Data Validation' },
  { feature: 'Real-time error checking', assetStage: true, competitor: 'Manual formulas', category: 'Data Validation' },
  { feature: 'ISO 14224 compliance checking', assetStage: true, competitor: false, category: 'Data Validation' },
  { feature: 'Duplicate detection', assetStage: true, competitor: 'Manual', category: 'Data Validation' },
  { feature: 'Data type enforcement', assetStage: true, competitor: 'Limited', category: 'Data Validation' },

  // Hierarchy Management
  { feature: 'Visual hierarchy builder', assetStage: true, competitor: false, category: 'Hierarchy Management' },
  { feature: 'Parent-child relationship validation', assetStage: true, competitor: 'Manual', category: 'Hierarchy Management' },
  { feature: 'Drag-and-drop reorganization', assetStage: true, competitor: false, category: 'Hierarchy Management' },
  { feature: 'Multi-level hierarchy support', assetStage: true, competitor: 'Complex', category: 'Hierarchy Management' },

  // Collaboration
  { feature: 'Multi-user editing', assetStage: true, competitor: 'Limited', category: 'Collaboration' },
  { feature: 'Approval workflows', assetStage: true, competitor: false, category: 'Collaboration' },
  { feature: 'Change tracking', assetStage: true, competitor: 'Basic', category: 'Collaboration' },
  { feature: 'Role-based permissions', assetStage: true, competitor: false, category: 'Collaboration' },
  { feature: 'Audit trail', assetStage: true, competitor: false, category: 'Collaboration' },

  // CMMS Integration
  { feature: 'CMMS-ready export formats', assetStage: true, competitor: 'Manual', category: 'CMMS Integration' },
  { feature: 'Pre-built templates', assetStage: true, competitor: false, category: 'CMMS Integration' },
  { feature: 'Field mapping automation', assetStage: true, competitor: 'Manual', category: 'CMMS Integration' },
  { feature: 'Validation against CMMS schema', assetStage: true, competitor: false, category: 'CMMS Integration' },

  // Scale & Performance
  { feature: 'Handles 100K+ assets', assetStage: true, competitor: 'Slow/crashes', category: 'Scale & Performance' },
  { feature: 'No file size limits', assetStage: true, competitor: false, category: 'Scale & Performance' },
  { feature: 'Version corruption protection', assetStage: true, competitor: false, category: 'Scale & Performance' },
];

export default function AssetStageVsSpreadsheetsPage() {
  return (
    <ComparisonPageTemplate
      competitorName="Spreadsheets"
      competitorSlug="spreadsheets"
      metaDescription="Why purpose-built CMMS data tools beat Excel and Google Sheets. Compare AssetStage vs spreadsheets for asset data management and migration projects."
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
                A purpose-built CMMS data workspace designed specifically for asset data
                preparation, validation, and staging. Built by maintenance data experts
                who understand the unique challenges of CMMS projects.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Purpose:</strong> CMMS data preparation
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Validation:</strong> Built-in rules
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Collaboration:</strong> Multi-user + workflows
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Scale:</strong> Built for large datasets
                </li>
              </ul>
            </div>

            {/* Spreadsheets Overview */}
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Spreadsheets (Excel/Google Sheets)</h3>
              <p style={{ marginBottom: '20px' }}>
                General-purpose tools that many teams default to for data management.
                Flexible but require significant manual work to adapt for CMMS data
                projects, with limitations at scale.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Purpose:</strong> General data/calculations
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Validation:</strong> Manual formulas
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid var(--border-light)' }}>
                  <strong>Collaboration:</strong> File sharing
                </li>
                <li style={{ padding: '8px 0' }}>
                  <strong>Scale:</strong> Performance degrades
                </li>
              </ul>
            </div>
          </div>
        ),

        keyDifferences: (
          <div className="services-grid" style={{ marginTop: '40px' }}>
            <div className="service-card">
              <h3>Built-in CMMS Knowledge</h3>
              <p>
                AssetStage understands asset hierarchies, CMMS field requirements, and
                industry standards like ISO 14224. Spreadsheets require you to build
                all validation logic from scratch.
              </p>
            </div>

            <div className="service-card">
              <h3>Version Control & Audit</h3>
              <p>
                AssetStage provides complete audit trails and version history.
                Spreadsheet versioning leads to &quot;Final_v3_FINAL_revised.xlsx&quot; chaos
                and lost changes.
              </p>
            </div>

            <div className="service-card">
              <h3>Scale Without Pain</h3>
              <p>
                AssetStage handles 100,000+ assets without performance issues.
                Excel slows to a crawl or crashes with large asset datasets.
              </p>
            </div>

            <div className="service-card">
              <h3>Collaboration That Works</h3>
              <p>
                AssetStage enables multiple users to work simultaneously with
                approval workflows. Spreadsheet collaboration often leads to
                merge conflicts and overwritten work.
              </p>
            </div>

            <div className="service-card">
              <h3>Hierarchy Visualization</h3>
              <p>
                AssetStage displays asset hierarchies visually with drag-and-drop
                management. Spreadsheets can only represent hierarchies as flat rows
                with indentation.
              </p>
            </div>

            <div className="service-card">
              <h3>CMMS-Ready Output</h3>
              <p>
                AssetStage exports in formats your CMMS expects, with validated data.
                Spreadsheet exports require manual reformatting and field mapping.
              </p>
            </div>
          </div>
        ),

        whenChooseCompetitor: (
          <>
            <ul className="feature-list">
              <li>You have a very small dataset (under 500 assets)</li>
              <li>You&apos;re doing a one-time, simple import</li>
              <li>You have no budget for specialized tools</li>
              <li>You have extensive Excel expertise and time to build validation</li>
              <li>You&apos;re working solo without collaboration needs</li>
            </ul>
          </>
        ),

        whenChooseAssetStage: (
          <>
            <ul className="feature-list" style={{ color: 'rgba(255,255,255,0.95)' }}>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You have thousands of assets to manage
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You need compliance with ISO 14224, SFI, or other standards
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                Multiple team members need to collaborate
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You&apos;ve been burned by spreadsheet versioning chaos
              </li>
              <li style={{ color: 'rgba(255,255,255,0.95)' }}>
                You want to finish your project faster, not manage Excel
              </li>
            </ul>
          </>
        ),

        verdict: (
          <>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>Spreadsheets</strong> are fine for small, simple datasets where you&apos;re
              working alone and have time to manually validate everything. They&apos;re familiar
              and have zero upfront cost.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>AssetStage</strong> makes sense when spreadsheet limitations start
              costing you time and quality—large datasets, team collaboration, compliance
              requirements, or complex hierarchies.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-light)' }}>
              The &quot;hidden cost&quot; of spreadsheets is the time spent on manual validation,
              fixing errors, reconciling versions, and reworking rejected imports.
              Purpose-built tools often pay for themselves in avoided frustration.
            </p>
          </>
        ),
      }}
    />
  );
}
