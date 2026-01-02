'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { validateBusinessEmail } from '@/utils/emailValidation';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    description: string;
    fileType: string;
    fileName: string;
  };
  onDownload: (formData: FormData) => Promise<void>;
}

export default function ResourceModal({ isOpen, onClose, resource, onDownload }: ResourceModalProps) {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const error = validateBusinessEmail(email);
    setEmailError(error);
    setFormError(''); // Clear general form error when user is typing
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formSubmitting) return;

    // Get email value from form
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

    // Validate email before submitting
    const validationError = validateBusinessEmail(email);
    if (validationError) {
      setEmailError(validationError);
      setFormError(validationError);
      return;
    }

    setFormSubmitting(true);
    setFormError('');
    setFormSuccess(false);

    try {
      await onDownload(formData);
      setFormSuccess(true);
      form.reset();
      setEmailError(null);

      // Auto-close modal after successful download
      setTimeout(() => {
        onClose();
        setFormSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Resource download error:', error);
      setFormError('Failed to process download. Please try again or contact us directly.');
    } finally {
      setFormSubmitting(false);
    }
  };

  const closeModal = () => {
    setFormSuccess(false);
    setFormError('');
    setEmailError(null);
    setFormSubmitting(false);
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
              ✓ Download starting! Check your downloads folder. We'll also email you a copy.
            </div>
          )}
          
          {formError && (
            <div className="error-message" style={{display: 'block', padding: '15px', background: '#f44336', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
              {formError}
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
              <span>✉️ Email Copy Included</span>
            </div>
          </div>
          
          <form className="demo-form" onSubmit={handleFormSubmit}>
            <input type="hidden" name="access_key" value="5737364f-4088-402b-87b3-80dafb3d48cd" />
            <input type="checkbox" name="botcheck" tabIndex={-1} style={{display:'none'}}/>
            <input type="hidden" name="subject" value={`Resource Download: ${resource.title}`} />
            <input type="hidden" name="from_name" value="AssetStage Resources" />
            <input type="hidden" name="reply_to" value="resources@assetstage.io" />
            <input type="hidden" name="form_type" value="resource_download" />
            <input type="hidden" name="resource_name" value={resource.title} />
            <input type="hidden" name="resource_file" value={resource.fileName} />
            <input type="hidden" name="page" value="resources" />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resource_name">Full Name *</label>
                <input type="text" id="resource_name" name="name" required autoComplete="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="resource_email">Work Email Address *</label>
                <input
                  type="email"
                  id="resource_email"
                  name="email"
                  required
                  autoComplete="email"
                  onChange={handleEmailChange}
                  className={emailError ? 'error' : ''}
                />
                {emailError && (
                  <span style={{
                    display: 'block',
                    color: '#f44336',
                    fontSize: '13px',
                    marginTop: '5px'
                  }}>
                    {emailError}
                  </span>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resource_company">Company *</label>
                <input type="text" id="resource_company" name="company" required autoComplete="organization"/>
              </div>
              <div className="form-group">
                <label htmlFor="resource_phone">Phone Number</label>
                <input type="tel" id="resource_phone" name="phone" autoComplete="tel"/>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resource_industry">Industry</label>
                <select id="resource_industry" name="industry">
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="utilities">Utilities</option>
                  <option value="oil-gas">Oil & Gas</option>
                  <option value="maritime">Maritime</option>
                  <option value="mining">Mining</option>
                  <option value="facilities">Facilities Management</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resource_cmms">Current CMMS</label>
                <select id="resource_cmms" name="current_cmms">
                  <option value="">Select CMMS</option>
                  <option value="maximo">IBM Maximo</option>
                  <option value="sap">SAP PM</option>
                  <option value="oracle">Oracle EAM</option>
                  <option value="infor">Infor EAM</option>
                  <option value="fiix">Fiix</option>
                  <option value="maintainx">MaintainX</option>
                  <option value="emaint">eMaint</option>
                  <option value="excel">Excel/Spreadsheets</option>
                  <option value="other">Other</option>
                  <option value="none">No CMMS Currently</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-cancel" onClick={closeModal} disabled={formSubmitting}>
                Cancel
              </button>
              <button type="submit" className="btn btn-submit" disabled={formSubmitting}>
                {formSubmitting ? 'Processing...' : `Download ${resource.fileType}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}