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
    description: 'Complete step-by-step checklist for migrating from IBM Maximo to MAS 9. Covers data preparation, validation, testing, and go-live activities.',
    fileType: 'PDF',
    downloadCount: 2847,
    category: 'template',
    fileName: 'Maximo_to_MAS9_Migration_Checklist.pdf'
  },
  {
    id: 'sap-s4hana-migration',
    title: 'SAP S/4HANA Migration Checklist',
    description: 'Essential checklist for SAP PM to S/4HANA migration projects. Includes data mapping, testing scenarios, and risk mitigation strategies.',
    fileType: 'PDF',
    downloadCount: 1923,
    category: 'template',
    fileName: 'SAP_S4HANA_Migration_Checklist.pdf'
  },
  {
    id: 'iso14224-cheat-sheet',
    title: 'ISO 14224 Implementation Cheat Sheet',
    description: 'Quick reference guide for implementing ISO 14224 reliability data standards. Includes taxonomy, failure modes, and classification examples.',
    fileType: 'PDF',
    downloadCount: 4156,
    category: 'guide',
    fileName: 'ISO14224_AssetStage_CheatSheet_Clean.pdf'
  },
  {
    id: 'maritime-cmms-setup',
    title: 'Maritime CMMS Setup Guide',
    description: 'Industry-specific guide for implementing CMMS systems in maritime operations, including vessel hierarchies, SFI classification, and regulatory compliance.',
    fileType: 'PDF',
    downloadCount: 856,
    category: 'industry',
    fileName: 'Maritime_CMMS_Setup_Guide.pdf'
  },
  {
    id: 'engineering-standards-guide',
    title: 'Engineering Standards Implementation Guide',
    description: 'Comprehensive guide for implementing engineering standards in your CMMS. Covers RDS-PP, RDS-PS, KKS, and integration strategies.',
    fileType: 'PDF',
    downloadCount: 1634,
    category: 'guide',
    fileName: 'Engineering_Standards_Implementation_Guide.pdf'
  },
  {
    id: 'fmea-maintenance-engineers',
    title: 'FMEA for Maintenance Engineers',
    description: 'Practical guide to Failure Mode and Effects Analysis specifically for maintenance teams. Includes templates and real-world examples.',
    fileType: 'PDF',
    downloadCount: 743,
    category: 'whitepaper',
    fileName: 'FMEA_for_Maintenance_Engineers.pdf'
  },
  {
    id: 'fmea-workbook',
    title: 'FMEA Workbook',
    description: 'Interactive Excel workbook for conducting FMEA analysis. Includes templates, calculations, and step-by-step guidance for maintenance teams.',
    fileType: 'Excel',
    downloadCount: 892,
    category: 'template',
    fileName: 'FMEA_Workbook_AssetStage.xlsx'
  },
  {
    id: 'asset-standardization-guide',
    title: 'Asset Standardization Guide for CMMS',
    description: 'Comprehensive guide for standardizing asset naming, classification, and hierarchy in CMMS systems. Includes industry best practices and implementation strategies.',
    fileType: 'PDF',
    downloadCount: 1256,
    category: 'guide',
    fileName: 'Asset_Standardization_Guide_CMMS.pdf'
  },
  {
    id: 'iso14224-non-oilgas',
    title: 'ISO 14224 for Non Oil & Gas Industries Guide',
    description: 'Practical guide for applying ISO 14224 reliability data standards in manufacturing, utilities, and other non-oil & gas industries.',
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

  const handleDownload = async (formData: FormData) => {
    if (!selectedResource) return;

    try {
      // Submit form to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Form submission failed');
      }

      // Mark resource as downloaded
      const newDownloaded = new Set(downloadedResources);
      newDownloaded.add(selectedResource.id);
      setDownloadedResources(newDownloaded);
      
      // Save to localStorage
      localStorage.setItem('assetstage-downloaded-resources', JSON.stringify([...newDownloaded]));

      // Trigger file download
      const link = document.createElement('a');
      link.href = `/resources/${selectedResource.fileName}`;
      link.download = selectedResource.fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download error:', error);
      throw error;
    }
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