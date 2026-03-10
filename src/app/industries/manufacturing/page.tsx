'use client';

import IndustryPageTemplate from '@/components/industries/IndustryPageTemplate';

export default function ManufacturingPage() {
  return (
    <IndustryPageTemplate
      industryName="Manufacturing"
      industrySlug="manufacturing"
      heroSubtitle="Production equipment hierarchies, OEM data extraction, and plant-wide asset management for manufacturing facilities implementing or upgrading their CMMS."
      challenges={[
        {
          title: 'Production Line Complexity',
          description: 'Managing hierarchies for complex production lines with hundreds of subsystems, conveyors, and automated equipment.',
          icon: '⚙️',
        },
        {
          title: 'OEM Documentation Chaos',
          description: 'Extracting equipment specifications from disparate OEM manuals, installation records, and equipment packages.',
          icon: '📚',
        },
        {
          title: 'Multi-Plant Standardization',
          description: 'Creating consistent asset naming and hierarchy conventions across multiple manufacturing sites.',
          icon: '🏭',
        },
        {
          title: 'Equipment Criticality',
          description: 'Identifying and documenting critical equipment that affects production output and safety.',
          icon: '⚡',
        },
        {
          title: 'Spare Parts Linkage',
          description: 'Connecting equipment assets to spare parts, BOMs, and inventory management systems.',
          icon: '🔧',
        },
        {
          title: 'Acquisition Integration',
          description: 'Integrating asset data from acquired facilities into your standard CMMS structure.',
          icon: '🤝',
        },
      ]}
      solutions={[
        {
          // TODO: Add specific manufacturing solution details
          title: 'Production Line Mapping',
          description: 'Visual hierarchy builder designed for production environments. Map lines, cells, stations, and equipment with proper parent-child relationships.',
        },
        {
          title: 'OEM Data Extraction',
          description: 'AI-powered extraction of nameplate data, specifications, and part numbers from OEM documentation. Structure data for your CMMS automatically.',
        },
        {
          title: 'Criticality Assessment Tools',
          description: 'Built-in frameworks for equipment criticality ranking. Document production impact, safety considerations, and maintenance priorities.',
        },
        {
          title: 'BOM and Spare Parts Integration',
          description: 'Link equipment to bills of materials and spare parts. Export data in formats compatible with inventory management systems.',
        },
      ]}
      standards={[
        {
          name: 'ISO 55000',
          description: 'Asset management principles aligned with ISO 55000. Structure your data for lifecycle management and continuous improvement.',
        },
        {
          name: 'ISA-95 / ISA-88',
          description: 'Equipment hierarchy patterns compatible with ISA-95 enterprise integration and ISA-88 batch control standards.',
        },
        {
          // TODO: Add more manufacturing standards as relevant
          name: 'Custom Taxonomies',
          description: 'Flexible support for company-specific equipment taxonomies and naming conventions.',
        },
      ]}
      relatedPosts={[
        // TODO: Link to actual manufacturing blog posts
        {
          title: 'Building Equipment Hierarchies for Manufacturing Plants',
          url: '/blog',
          description: 'Best practices for structuring production equipment in your CMMS.',
        },
        {
          title: 'OEM Data Extraction for Equipment Documentation',
          url: '/oem-extraction',
          description: 'How AI-powered extraction streamlines equipment data capture.',
        },
      ]}
    />
  );
}
