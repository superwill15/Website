'use client';

import { useEffect, useRef } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const createForm = () => {
      if (formContainerRef.current) {
        // Clear any existing form
        formContainerRef.current.innerHTML = '';

        // Insert HubSpot form container
        const formDiv = document.createElement('div');
        formDiv.className = 'hs-form-frame';
        formDiv.setAttribute('data-region', 'eu1');
        formDiv.setAttribute('data-form-id', 'a87d5ba4-e98a-4921-afa1-05e7182ed2a0');
        formDiv.setAttribute('data-portal-id', '147136026');
        formContainerRef.current.appendChild(formDiv);

        // Trigger HubSpot to scan for new forms
        // @ts-expect-error - HubSpot global
        if (window.hbspt?.forms?.create) {
          // @ts-expect-error - HubSpot global
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '147136026',
            formId: 'a87d5ba4-e98a-4921-afa1-05e7182ed2a0',
            target: '#hubspot-demo-form'
          });
        }
      }
    };

    // Load HubSpot script if not already loaded
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector('script[src*="js-eu1.hsforms.net/forms/embed/147136026"]');

      if (existingScript) {
        scriptLoaded.current = true;
        // Give it a moment to initialize
        setTimeout(createForm, 100);
      } else {
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/147136026.js';
        script.defer = true;
        script.onload = () => {
          scriptLoaded.current = true;
          // Give HubSpot time to initialize after script loads
          setTimeout(createForm, 300);
        };
        document.head.appendChild(script);
      }
    } else {
      // Script already loaded, create form immediately
      setTimeout(createForm, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal show" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" aria-label="Close dialog" onClick={onClose}>&times;</button>
          <h2 id="demoTitle">Schedule Your AssetStage Demo</h2>
          <p>See how AssetStage cleans up messy CMMS data in 6 weeks</p>
        </div>
        <div className="modal-body">
          <div
            id="hubspot-demo-form"
            ref={formContainerRef}
            style={{ minHeight: '400px' }}
          />

          <div className="form-actions" style={{ marginTop: '20px', textAlign: 'center' }}>
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
