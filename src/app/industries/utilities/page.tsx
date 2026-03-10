'use client';

import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function UtilitiesPage() {
  return (
    <IndustryPageTemplate
      industryName="Utilities"
      industrySlug="utilities"
      heroSubtitle="Grid infrastructure, generation assets, and distribution network data management for power, water, and gas utilities implementing or upgrading their asset management systems."
      challenges={[
        {
          title: 'Geographic Asset Distribution',
          description: 'Managing asset data for equipment spread across hundreds of miles of transmission and distribution infrastructure.',
          icon: '🗺️',
        },
        {
          title: 'Regulatory Requirements',
          description: 'Meeting regulatory reporting requirements for asset condition, reliability metrics, and capital planning.',
          icon: '📋',
        },
        {
          title: 'Legacy System Migration',
          description: 'Migrating decades of asset records from legacy GIS, OMS, and custom systems into modern enterprise platforms.',
          icon: '💾',
        },
        {
          title: 'Asset Age and Condition',
          description: 'Documenting condition data for aging infrastructure to support replacement planning and risk assessment.',
          icon: '📅',
        },
        {
          title: 'Standards Compliance',
          description: 'Ensuring asset data structures comply with NERC, state PUC, and industry-specific standards.',
          icon: '✅',
        },
        {
          title: 'Work Management Integration',
          description: 'Connecting asset master data to work orders, outage management, and field service systems.',
          icon: '🔗',
        },
      ]}
      solutions={[
        {
          // TODO: Add specific utilities solution details
          title: 'Network Hierarchy Templates',
          description: 'Pre-built templates for substation, feeder, and distribution equipment hierarchies. Structured for utility asset management systems.',
        },
        {
          title: 'GIS Data Integration',
          description: 'Import and validate equipment data from GIS systems. Reconcile spatial data with asset master records.',
        },
        {
          title: 'Condition Assessment Support',
          description: 'Structured data capture for asset condition, health indices, and remaining life estimates. Support capital planning and risk-based decisions.',
        },
        {
          title: 'Regulatory Reporting Alignment',
          description: 'Asset data structures designed to support regulatory reporting requirements. Export data in required formats.',
        },
      ]}
      standards={[
        {
          name: 'NERC Standards',
          description: 'Asset data structures aligned with NERC reliability standards for bulk electric system equipment.',
        },
        {
          name: 'CIP Compliance',
          description: 'Support for Critical Infrastructure Protection requirements in asset identification and documentation.',
        },
        {
          // TODO: Add more utility standards as relevant
          name: 'Utility Taxonomies',
          description: 'Flexible support for industry-standard utility equipment classifications and naming conventions.',
        },
      ]}
      relatedPosts={[
        // TODO: Link to actual utilities blog posts
        {
          title: 'Asset Data for Utility Reliability Reporting',
          url: '/blog',
          description: 'Structuring equipment data to support regulatory compliance.',
        },
        {
          title: 'Migrating Legacy Utility Asset Data',
          url: '/blog/cmms-data-migration',
          description: 'Best practices for modernizing utility asset management systems.',
        },
      ]}
    />
  );
}
