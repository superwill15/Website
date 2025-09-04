'use client';

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
      case 'template': return '📋';
      case 'guide': return '📊';
      case 'whitepaper': return '📄';
      case 'industry': return '🏭';
      default: return '📁';
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
          <span className="resource-downloads">
            {downloadCount.toLocaleString()} downloads
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
            <>✓ Downloaded</>
          ) : (
            <>Download {fileType} →</>
          )}
        </button>
      </div>
    </div>
  );
}