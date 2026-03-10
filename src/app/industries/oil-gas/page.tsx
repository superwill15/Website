'use client';

import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function OilGasPage() {
  return (
    <IndustryPageTemplate
      industryName="Oil & Gas"
      industrySlug="oil-gas"
      heroSubtitle="ISO 14224-compliant equipment taxonomies, failure mode tracking, and reliability-focused asset hierarchies for upstream, midstream, and downstream operations."
      challenges={[
        {
          title: 'ISO 14224 Compliance',
          description: 'Implementing proper equipment taxonomies, failure modes, and reliability data structures according to ISO 14224 requirements.',
          icon: '📊',
        },
        {
          title: 'Equipment Boundary Definition',
          description: 'Defining clear boundaries between equipment units, subunits, and maintainable items for consistent failure reporting.',
          icon: '🔲',
        },
        {
          title: 'Legacy Data Migration',
          description: 'Migrating decades of asset data from legacy systems while improving data quality and standardizing nomenclature.',
          icon: '📁',
        },
        {
          title: 'Multi-Site Consistency',
          description: 'Maintaining consistent asset hierarchies and naming conventions across platforms, refineries, and pipeline networks.',
          icon: '🏭',
        },
        {
          title: 'Regulatory Compliance',
          description: 'Ensuring asset data supports regulatory requirements for safety-critical equipment and process safety management.',
          icon: '⚠️',
        },
        {
          title: 'Reliability Analysis',
          description: 'Structuring data to enable meaningful failure analysis, MTBF calculations, and reliability improvement programs.',
          icon: '📈',
        },
      ]}
      solutions={[
        {
          // TODO: Add specific oil & gas solution details
          title: 'ISO 14224 Equipment Taxonomy',
          description: 'Pre-built templates following ISO 14224 equipment classes, from rotating equipment to electrical systems. Automatic validation of equipment categorization and attribute completeness.',
        },
        {
          title: 'Failure Mode Libraries',
          description: 'Standard failure mode and mechanism libraries aligned with ISO 14224 Annex A. Ensure consistent failure coding across your organization.',
        },
        {
          title: 'Equipment Boundary Validation',
          description: 'Visual tools for defining and validating equipment boundaries. Ensure maintainable items are correctly assigned to equipment units.',
        },
        {
          title: 'Reliability Data Structure',
          description: 'Data structures designed for reliability analysis. Proper linkage between equipment, failure events, and maintenance activities.',
        },
      ]}
      standards={[
        {
          name: 'ISO 14224',
          description: 'Full support for ISO 14224 equipment taxonomy, failure modes, and reliability data collection requirements. The industry standard for petroleum and natural gas industries.',
          link: '/resources', // TODO: Link to ISO 14224 resources
        },
        {
          name: 'NORSOK Z-008',
          description: 'Alignment with NORSOK risk-based maintenance management requirements for Norwegian continental shelf operations.',
        },
        {
          // TODO: Add more oil & gas standards as relevant
          name: 'API Standards',
          description: 'Support for API inspection and maintenance standards including API 580/581 RBI requirements.',
        },
      ]}
      relatedPosts={[
        // TODO: Link to actual oil & gas blog posts
        {
          title: 'Implementing ISO 14224 in Your CMMS',
          url: '/blog/iso-14224-implementation',
          description: 'A practical guide to ISO 14224 equipment taxonomy and data collection.',
        },
        {
          title: 'Asset Hierarchy Best Practices for Oil & Gas',
          url: '/blog',
          description: 'Structuring equipment data for reliability analysis and compliance.',
        },
      ]}
    />
  );
}
