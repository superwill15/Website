'use client';

import { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import ResourceModal from './ResourceModal';

interface Resource {
  id: string;
  title: string;
  description: string;
  fileType: 'PDF' | 'Excel' | 'Template' | 'Checklist';
  downloadCount: number;
  category: 'template' | 'guide' | 'whitepaper' | 'industry';
  fileName: string;
}

const resources: Resource[] = [
  {
    id: 'maximo-mas9-migration',
    title: 'Maximo to MAS 9 Migration Checklist',
    description: 'Avoid costly migration mistakes with this 100+ point checklist. Covers data export sequencing, field mappings, validation queries, and cutover planning.',
    fileType: 'PDF',
    downloadCount: 2847,
    category: 'template',
    fileName: 'Maximo_to_MAS9_Migration_Checklist.pdf'
  },
  {
    id: 'sap-s4hana-migration',
    title: 'SAP S/4HANA Migration Checklist',
    description: 'Navigate the ECC to S/4HANA transition with confidence. Includes ABAP validation queries, table mapping changes, and Fiori app testing scenarios.',
    fileType: 'PDF',
    downloadCount: 1923,
    category: 'template',
    fileName: 'SAP_S4HANA_Migration_Checklist.pdf'
  },
  {
    id: 'iso14224-cheat-sheet',
    title: 'ISO 14224 Implementation Cheat Sheet',
    description: 'Stop reinventing failure codes. Complete reference with all equipment classes, failure modes, mechanisms, and causes plus CMMS field mappings for Maximo and SAP.',
    fileType: 'PDF',
    downloadCount: 4156,
    category: 'guide',
    fileName: 'ISO14224_AssetStage_CheatSheet_Clean.pdf'
  },
  {
    id: 'maritime-cmms-setup',
    title: 'Maritime CMMS Setup Guide',
    description: 'Purpose-built for shipping operations. Covers complete SFI hierarchy setup, ISM/class survey tracking, running hour meters, and fleet standardization templates.',
    fileType: 'PDF',
    downloadCount: 856,
    category: 'industry',
    fileName: 'Maritime_CMMS_Setup_Guide.pdf'
  },
  {
    id: 'engineering-standards-guide',
    title: 'Engineering Standards Implementation Guide',
    description: 'Choose the right standard for your industry. Decision matrix comparing ISO 14224, RDS-PP, RDS-PS, KKS, and SFI with implementation roadmaps for each.',
    fileType: 'PDF',
    downloadCount: 1634,
    category: 'guide',
    fileName: 'Engineering_Standards_Implementation_Guide.pdf'
  },
  {
    id: 'fmea-maintenance-engineers',
    title: 'FMEA for Maintenance Engineers',
    description: 'Run effective FMEA workshops. Covers RPN scoring scales, workshop facilitation tips, PM task development, and common pitfalls to avoid.',
    fileType: 'PDF',
    downloadCount: 743,
    category: 'whitepaper',
    fileName: 'FMEA_for_Maintenance_Engineers.pdf'
  },
  {
    id: 'fmea-workbook',
    title: 'FMEA Workbook',
    description: 'Ready-to-use Excel workbook with blank FMEA template and worked example (centrifugal pump). Includes severity, occurrence, and detection scales.',
    fileType: 'Excel',
    downloadCount: 892,
    category: 'template',
    fileName: 'FMEA_Workbook_AssetStage.xlsx'
  },
  {
    id: 'asset-standardization-guide',
    title: 'Asset Standardization Guide for CMMS',
    description: 'End the naming chaos. Complete equipment type codes, attribute templates by class, crosswalk methodology, and data quality KPIs with audit queries.',
    fileType: 'PDF',
    downloadCount: 1256,
    category: 'guide',
    fileName: 'Asset_Standardization_Guide_CMMS.pdf'
  },
  {
    id: 'iso14224-non-oilgas',
    title: 'ISO 14224 for Non-Oil & Gas Industries',
    description: 'Adapt proven oil & gas reliability standards for manufacturing, utilities, water treatment, and other industries. Includes equipment class mappings and worked examples.',
    fileType: 'PDF',
    downloadCount: 687,
    category: 'guide',
    fileName: 'ISO14224_for_Non_OilGas_Guide.pdf'
  }
];

export default function ResourcesSection() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [downloadedResources, setDownloadedResources] = useState<Set<string>>(new Set());

  // Load downloaded resources from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('assetstage-downloaded-resources');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDownloadedResources(new Set(parsed));
      } catch (e) {
        console.error('Failed to parse downloaded resources:', e);
      }
    }
  }, []);

  const handleDownloadClick = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const handleModalClose = () => {
    setSelectedResource(null);
  };

  const handleDownload = () => {
    if (!selectedResource) return;

    // Mark resource as downloaded
    const newDownloaded = new Set(downloadedResources);
    newDownloaded.add(selectedResource.id);
    setDownloadedResources(newDownloaded);

    // Save to localStorage
    localStorage.setItem('assetstage-downloaded-resources', JSON.stringify(Array.from(newDownloaded)));

    // Trigger file download
    const link = document.createElement('a');
    link.href = `/resources/${selectedResource.fileName}`;
    link.download = selectedResource.fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="section" id="resources">
        <div className="container">
          <div className="section-header">
            <h2>Free Resources & Templates</h2>
            <p>Industry-proven tools, templates, and guides to accelerate your CMMS success</p>
          </div>
          
          <div className="resources-grid">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                description={resource.description}
                fileType={resource.fileType}
                downloadCount={resource.downloadCount}
                category={resource.category}
                fileName={resource.fileName}
                onDownload={() => handleDownloadClick(resource)}
                isDownloaded={downloadedResources.has(resource.id)}
              />
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>
              Need help implementing these resources? Our consultants can guide you through the entire process.
            </p>
            <a href="#contact" className="btn-primary">
              Get Expert Help
            </a>
          </div>
        </div>
      </section>

      {selectedResource && (
        <ResourceModal
          isOpen={!!selectedResource}
          onClose={handleModalClose}
          resource={{
            title: selectedResource.title,
            description: selectedResource.description,
            fileType: selectedResource.fileType,
            fileName: selectedResource.fileName
          }}
          onDownload={handleDownload}
        />
      )}
    </>
  );
}