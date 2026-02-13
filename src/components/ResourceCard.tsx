'use client';

import { ClipboardList, BarChart3, FileText, Factory, Folder, Check } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: 'PDF' | 'Excel' | 'Template' | 'Checklist';
  downloadCount: number;
  category: 'template' | 'guide' | 'whitepaper' | 'industry';
  fileName: string;
  onDownload: () => void;
  isDownloaded?: boolean;
}

export default function ResourceCard({
  title,
  description,
  fileType,
  downloadCount,
  category,
  fileName,
  onDownload,
  isDownloaded = false
}: ResourceCardProps) {

  const getCategoryIcon = () => {
    switch (category) {
      case 'template': return <ClipboardList size={24} />;
      case 'guide': return <BarChart3 size={24} />;
      case 'whitepaper': return <FileText size={24} />;
      case 'industry': return <Factory size={24} />;
      default: return <Folder size={24} />;
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'template': return '#3498db';
      case 'guide': return '#27ae60';
      case 'whitepaper': return '#f39c12';
      case 'industry': return '#e74c3c';
      default: return '#7f8c8d';
    }
  };

  return (
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-icon" style={{ background: getCategoryColor() }}>
          {getCategoryIcon()}
        </div>
        <div className="resource-meta">
          <span className="resource-type" style={{ color: getCategoryColor() }}>
            {fileType}
          </span>
        </div>
      </div>
      
      <div className="resource-content">
        <h3 className="resource-title">{title}</h3>
        <p className="resource-description">{description}</p>
      </div>
      
      <div className="resource-footer">
        <button
          className={`resource-download-btn ${isDownloaded ? 'downloaded' : ''}`}
          onClick={onDownload}
        >
          {isDownloaded ? (
            <><Check size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Downloaded</>
          ) : (
            <>Download {fileType} →</>
          )}
        </button>
      </div>
    </div>
  );
}