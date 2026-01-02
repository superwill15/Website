'use client';

import { useState, useEffect, useRef } from 'react';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    description: string;
    fileType: string;
    fileName: string;
  };
  onDownload: () => void;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

export default function ResourceModal({ isOpen, onClose, resource, onDownload }: ResourceModalProps) {
  const [formSuccess, setFormSuccess] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    // Load HubSpot script if not already loaded
    const loadHubSpotScript = () => {
      return new Promise<void>((resolve) => {
        if (scriptLoadedRef.current && window.hbspt) {
          resolve();
          return;
        }

        const existingScript = document.querySelector('script[src*="hsforms.net"]');
        if (existingScript && window.hbspt) {
          scriptLoadedRef.current = true;
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/147136026.js';
        script.defer = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          resolve();
        };
        document.head.appendChild(script);
      });
    };

    const createForm = async () => {
      await loadHubSpotScript();

      // Wait a bit for HubSpot to initialize
      await new Promise(resolve => setTimeout(resolve, 100));

      if (window.hbspt && formContainerRef.current) {
        // Clear any existing form
        formContainerRef.current.innerHTML = '';

        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '147136026',
          formId: '86cff260-8011-4d55-9bfc-deef79e37dbd',
          target: '#hubspot-form-container',
          onFormSubmitted: () => {
            setFormSuccess(true);
            onDownload();

            // Auto-close modal after successful download
            setTimeout(() => {
              onClose();
              setFormSuccess(false);
            }, 2500);
          }
        });
      }
    };

    createForm();
  }, [isOpen, onDownload, onClose]);

  const closeModal = () => {
    setFormSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal show" role="dialog" aria-modal="true" aria-labelledby="resourceTitle">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" aria-label="Close dialog" onClick={closeModal}>&times;</button>
          <h2 id="resourceTitle">Download: {resource.title}</h2>
          <p>Get instant access to this {resource.fileType} resource</p>
        </div>

        <div className="modal-body">
          {formSuccess && (
            <div className="success-message" style={{display: 'block', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
              ✓ Download starting! Check your downloads folder.
            </div>
          )}

          {/* Resource Preview */}
          <div className="resource-preview" style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '25px',
            border: '1px solid #e9ecef'
          }}>
            <h4 style={{marginBottom: '10px', color: '#2c3e50'}}>{resource.title}</h4>
            <p style={{color: '#7f8c8d', marginBottom: '15px', fontSize: '14px'}}>{resource.description}</p>
            <div style={{display: 'flex', gap: '15px', fontSize: '12px', color: '#6c757d'}}>
              <span>📄 {resource.fileType}</span>
              <span>🚀 Instant Download</span>
            </div>
          </div>

          {/* HubSpot Form Container */}
          <div
            id="hubspot-form-container"
            ref={formContainerRef}
            style={{ minHeight: '300px' }}
          />

          <div className="form-actions" style={{ marginTop: '20px', textAlign: 'center' }}>
            <button type="button" className="btn btn-cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
