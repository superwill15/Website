'use client';

import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function MaritimePage() {
  return (
    <IndustryPageTemplate
      industryName="Maritime"
      industrySlug="maritime"
      heroSubtitle="SFI-compliant asset hierarchies, vessel system management, and fleet-wide data consistency for shipping companies and maritime operators."
      challenges={[
        {
          title: 'SFI Coding Complexity',
          description: 'Maintaining consistent SFI coding across vessels and ensuring proper classification of ship systems and equipment.',
          icon: '🏷️',
        },
        {
          title: 'Fleet-Wide Consistency',
          description: 'Standardizing asset naming, hierarchies, and attributes across multiple vessels with different build dates and configurations.',
          icon: '🚢',
        },
        {
          title: 'Shipyard Documentation',
          description: 'Extracting and structuring equipment data from shipyard deliverables, OEM manuals, and classification society documents.',
          icon: '📋',
        },
        {
          title: 'Class Survey Compliance',
          description: 'Ensuring asset data supports classification society requirements and planned maintenance system (PMS) compliance.',
          icon: '✅',
        },
        {
          title: 'Crew Changeover Knowledge',
          description: 'Maintaining data quality despite regular crew rotations and varying levels of CMMS expertise onboard.',
          icon: '👥',
        },
        {
          title: 'Multi-System Integration',
          description: 'Coordinating data across separate systems for maintenance, inventory, purchasing, and technical management.',
          icon: '🔗',
        },
      ]}
      solutions={[
        {
          // TODO: Add specific maritime solution details
          title: 'SFI Coding Validation',
          description: 'Built-in SFI group/subgroup validation ensures every asset is correctly classified according to the Ship Function Index standard. Automatic detection of miscoded equipment and suggestions for proper classification.',
        },
        {
          title: 'Vessel Template Library',
          description: 'Start with proven asset hierarchy templates for common vessel types, then customize for your specific fleet. Ensures consistency across new builds and acquisitions.',
        },
        {
          title: 'OEM Data Extraction',
          description: 'AI-powered extraction of equipment specifications from shipyard documentation, technical manuals, and maker lists. Structured data ready for your maritime CMMS.',
        },
        {
          title: 'Fleet-Wide Standardization',
          description: 'Visual tools for identifying and resolving naming inconsistencies across vessels. Create and enforce naming conventions fleet-wide.',
        },
      ]}
      standards={[
        {
          name: 'SFI Coding System',
          description: 'Full support for the SFI Group System used by shipowners worldwide. Validate SFI codes, ensure proper hierarchy placement, and maintain coding consistency across your fleet.',
          link: '/blog', // TODO: Link to SFI-related content
        },
        {
          name: 'IMCA Guidelines',
          description: 'Alignment with IMCA recommendations for maintenance and inspection data management in the marine industry.',
        },
        {
          // TODO: Add more maritime standards as relevant
          name: 'ISM Code Compliance',
          description: 'Data structures that support International Safety Management Code requirements for planned maintenance and safety equipment tracking.',
        },
      ]}
      relatedPosts={[
        // TODO: Link to actual maritime blog posts
        {
          title: 'Understanding the SFI Coding System for Ship Maintenance',
          url: '/blog/sfi-coding-system',
          description: 'A comprehensive guide to implementing SFI coding in your maritime CMMS.',
        },
        {
          title: 'Building Effective Vessel Asset Hierarchies',
          url: '/blog',
          description: 'Best practices for structuring ship equipment data for maintenance management.',
        },
      ]}
    />
  );
}
