'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Logo from '@/components/Logo';
import { validateBusinessEmail } from '@/utils/emailValidation';
import {
  Camera,
  Bot,
  CheckCircle,
  Zap,
  Target,
  FileSpreadsheet,
  Ship,
  Wind,
  Factory,
  Users,
  Database,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Clipboard,
  AlertTriangle,
  Clock,
  Building2,
  Anchor,
  Cpu
} from 'lucide-react';

export default function NameplateExtractionPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [techSpecsExpanded, setTechSpecsExpanded] = useState(false);

  // Scroll animation visibility tracking
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    setFormSuccess(false);
    setFormError('');
    setEmailError(null);
    setFormSubmitting(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const error = validateBusinessEmail(email);
    setEmailError(error);
    setFormError('');
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;

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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSuccess(true);
        form.reset();
        setEmailError(null);
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('Failed to submit form. Please try again or email us directly at sales@assetstage.io');
    } finally {
      setFormSubmitting(false);
    }
  };

  const useCases = [
    {
      title: 'Field Walkdowns',
      icon: <Clipboard size={24} />,
      useCase: 'Plant startup needs equipment inventory for 200+ assets',
      withoutAI: 'Clipboard notes, manual typing, weeks of data entry',
      withAssetStage: 'Photo-to-record in seconds, validated data in hours'
    },
    {
      title: 'Capital Projects',
      icon: <Building2 size={24} />,
      useCase: 'New facility with OEM equipment needs CMMS loading before operations',
      withoutAI: 'Contractors manually entering specs from vendor docs',
      withAssetStage: 'Photograph nameplates during commissioning, instant records'
    },
    {
      title: 'Fleet Standardization',
      icon: <Anchor size={24} />,
      useCase: 'Maritime fleet needs consistent equipment records across vessels',
      withoutAI: 'Each ship has different naming, formats, data quality',
      withAssetStage: 'Standardized extraction ensures fleet-wide consistency'
    }
  ];

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="/" className="logo-link" aria-label="AssetStage Home">
            <Logo variant="primary" width={200} height={50} />
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/#assetstage">Platform</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Products <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/pm-optimization">PM Optimization</a>
                <a href="/oem-extraction">OEM Extraction</a>
                <a href="/nameplate-extraction">Nameplate Extraction</a>
                <a href="/inventory">Inventory Management</a>
              </div>
            </li>
            <li><a href="/services">Services</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Resources <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/resources">Free Downloads</a>
                <a href="/blog">Blog</a>
              </div>
            </li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal}>Get Demo</button>

          {/* Mobile Menu Button */}
          <button className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="/" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/#assetstage" onClick={toggleMobileMenu}>Platform</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Products</span>
            </li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>PM Optimization</a></li>
            <li><a href="/oem-extraction" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>OEM Extraction</a></li>
            <li><a href="/nameplate-extraction" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Nameplate Extraction</a></li>
            <li><a href="/inventory" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Inventory Management</a></li>
            <li><a href="/services" onClick={toggleMobileMenu}>Services</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Resources</span>
            </li>
            <li><a href="/resources" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Free Downloads</a></li>
            <li><a href="/blog" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Blog</a></li>
            <li><a href="/pricing" onClick={toggleMobileMenu}>Pricing</a></li>
            <li><a href="/contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Get Demo</button></li>
          </ul>
        </div>
      </nav>

      {/* ============================================
          SECTION 1: HERO SECTION
          ============================================ */}
      <section className="hero nameplate-hero">
        <div className="hero-content">
          <h1>AI-Powered Nameplate Extraction: Turn Equipment Photos into CMMS Records</h1>
          <p>
            Capture equipment specifications directly from nameplate photographs. Our AI extracts manufacturer, model, serial numbers, and specifications — ready to load into Maximo, SAP PM, or any CMMS.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary nameplate-btn-primary" onClick={openModal}>
              Book a Demo
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('how-it-works')}>
              Learn More
            </button>
          </div>

          {/* Trust badges */}
          <div className="trust-badges">
            <p>Trusted by cruise lines, offshore wind operators, and oil & gas facilities</p>
            <div className="trust-icons">
              <Ship size={24} />
              <Wind size={24} />
              <Factory size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: THE PROBLEM
          ============================================ */}
      <section className="section section-gray" id="problem" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('problem') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>The Field Walkdown Bottleneck</h2>
            <p>Why equipment data capture is still stuck in the 1990s</p>
          </div>

          <div className="services-grid">
            <div className="service-card nameplate-problem-card">
              <div className="service-icon">
                <Clipboard size={28} />
              </div>
              <h3>Manual Transcription</h3>
              <p>Technicians write on clipboards, someone types later. Double handling, double the effort, double the opportunity for errors.</p>
            </div>

            <div className="service-card nameplate-problem-card">
              <div className="service-icon">
                <AlertTriangle size={28} />
              </div>
              <h3>Transcription Errors</h3>
              <p>Faded nameplates, illegible handwriting, data entry mistakes. Every step introduces potential errors into your CMMS data.</p>
            </div>

            <div className="service-card nameplate-problem-card">
              <div className="service-icon">
                <Clock size={28} />
              </div>
              <h3>Time Delays</h3>
              <p>Weeks between field capture and CMMS-ready data. Projects stall waiting for equipment records to be manually entered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: HOW IT WORKS (3-STEP VISUAL)
          ============================================ */}
      <section className="section" id="how-it-works" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('how-it-works') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps from field photo to CMMS-ready record</p>
          </div>

          <div className="oem-steps-grid nameplate-steps-grid">
            {/* Step 1 */}
            <div className="oem-step-card">
              <div className="oem-step-number">1</div>
              <div className="oem-step-icon">
                <Camera size={32} />
              </div>
              <h3>Photograph Nameplate</h3>
              <p>Technician snaps photo of equipment nameplate in the field using any smartphone or camera</p>
            </div>

            {/* Step Arrow */}
            <div className="oem-step-arrow">
              <ArrowRight size={32} />
            </div>

            {/* Step 2 */}
            <div className="oem-step-card">
              <div className="oem-step-number">2</div>
              <div className="oem-step-icon oem-step-icon-ai">
                <Bot size={32} />
              </div>
              <h3>AI Extraction</h3>
              <p>Our AI reads manufacturer, model, serial, specs, and classifications from the image automatically</p>
            </div>

            {/* Step Arrow */}
            <div className="oem-step-arrow">
              <ArrowRight size={32} />
            </div>

            {/* Step 3 */}
            <div className="oem-step-card">
              <div className="oem-step-number">3</div>
              <div className="oem-step-icon oem-step-icon-success">
                <CheckCircle size={32} />
              </div>
              <h3>Validated Records</h3>
              <p>Structured data reviewed in staging environment, ready for CMMS import with full audit trail</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: WHAT GETS EXTRACTED (AI CAPABILITIES)
          ============================================ */}
      <section className="section oem-ai-section" id="extraction-capabilities" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('extraction-capabilities') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>What Gets Extracted</h2>
            <p>Comprehensive data capture from equipment nameplates</p>
          </div>

          <div className="oem-capabilities-grid nameplate-extraction-grid">
            {/* Column 1: Equipment Identity */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <Cpu size={24} />
                <h3>Equipment Identity</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Check size={18} />
                  <span>Manufacturer name</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Model number</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Serial number</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Manufacturing date</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Specifications */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <FileSpreadsheet size={24} />
                <h3>Specifications</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Check size={18} />
                  <span>Rated capacity</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Voltage/power ratings</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Operating parameters</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Dimensional data</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Classification */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <Database size={24} />
                <h3>Classification</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Check size={18} />
                  <span>Equipment type</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Asset category</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Regulatory markings</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Standards compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: KEY BENEFITS (4 CARDS)
          ============================================ */}
      <section className="section section-gray" id="benefits" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('benefits') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Key Benefits</h2>
            <p>Why organizations choose AI-powered nameplate extraction</p>
          </div>

          <div className="services-grid">
            {/* Benefit 1 */}
            <div className="service-card oem-benefit-card nameplate-benefit-card">
              <div className="service-icon">
                <Zap size={28} />
              </div>
              <h3>Instant Data Capture</h3>
              <p>Seconds instead of days from photo to structured record. No more waiting for manual data entry backlogs.</p>
            </div>

            {/* Benefit 2 */}
            <div className="service-card oem-benefit-card nameplate-benefit-card">
              <div className="service-icon">
                <Target size={28} />
              </div>
              <h3>Accuracy from Source</h3>
              <p>Extract exact data directly from OEM nameplate. No interpretation errors, no handwriting issues.</p>
            </div>

            {/* Benefit 3 */}
            <div className="service-card oem-benefit-card nameplate-benefit-card">
              <div className="service-icon">
                <X size={28} />
              </div>
              <h3>Eliminate Transcription</h3>
              <p>No more clipboard-to-spreadsheet errors. Remove the manual steps that introduce data quality issues.</p>
            </div>

            {/* Benefit 4 */}
            <div className="service-card oem-benefit-card nameplate-benefit-card">
              <div className="service-icon">
                <CheckCircle size={28} />
              </div>
              <h3>Quality Assured</h3>
              <p>Staged validation catches OCR errors before production. Human review where it matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: USE CASES (3 TABS)
          ============================================ */}
      <section className="section" id="use-cases" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('use-cases') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Use Cases</h2>
            <p>How organizations use AI-powered nameplate extraction</p>
          </div>

          {/* Tab navigation */}
          <div className="oem-tabs">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                className={`oem-tab ${activeUseCase === index ? 'active' : ''}`}
                onClick={() => setActiveUseCase(index)}
              >
                {useCase.icon}
                <span>{useCase.title}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="oem-use-case-content">
            <div className="oem-use-case-scenario">
              <h4>The Scenario</h4>
              <p>{useCases[activeUseCase].useCase}</p>
            </div>

            <div className="oem-comparison-row">
              <div className="oem-comparison-card oem-without">
                <div className="oem-comparison-header">
                  <X size={20} />
                  <span>Without AI Automation</span>
                </div>
                <p>{useCases[activeUseCase].withoutAI}</p>
              </div>

              <div className="oem-comparison-card oem-with">
                <div className="oem-comparison-header">
                  <Check size={20} />
                  <span>With AssetStage</span>
                </div>
                <p>{useCases[activeUseCase].withAssetStage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: SERVICE OFFERING (SINGLE CARD)
          ============================================ */}
      <section className="section section-gray" id="service" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('service') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>How We Work With You</h2>
            <p>AI-powered extraction with expert oversight for mission-critical accuracy</p>
          </div>

          <div className="oem-service-card-wrapper">
            <div className="oem-pricing-card">
              <div className="oem-pricing-header">
                <div className="oem-pricing-icon oem-pricing-icon-full">
                  <Users size={32} />
                </div>
                <h3>Full Service Extraction</h3>
                <p className="oem-pricing-subtitle">AI-powered extraction with expert oversight for mission-critical accuracy</p>
              </div>

              <ul className="oem-pricing-features">
                <li><Check size={18} /> AI extracts equipment data from nameplate photos automatically</li>
                <li><Check size={18} /> Quality assurance by maintenance engineers</li>
                <li><Check size={18} /> Handles faded, dirty, or partially obscured nameplates</li>
                <li><Check size={18} /> Custom field mapping for your CMMS structure</li>
                <li><Check size={18} /> Integration with full data staging workflow</li>
                <li><Check size={18} /> Guaranteed data quality for go-live</li>
              </ul>

              <button className="oem-pricing-cta oem-cta-orange" onClick={openModal}>
                Book a Demo
              </button>
              <p className="oem-pricing-note">Custom pricing based on scope</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: TECHNICAL SPECS (EXPANDABLE)
          ============================================ */}
      <section className="section" id="tech-specs" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('tech-specs') ? 'visible' : ''}`}>
          <button
            className="oem-tech-specs-toggle"
            onClick={() => setTechSpecsExpanded(!techSpecsExpanded)}
          >
            <h2>What Our AI Supports</h2>
            {techSpecsExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {techSpecsExpanded && (
            <div className="oem-tech-specs-grid">
              <div className="oem-tech-spec-card">
                <h4>Image Formats</h4>
                <p>JPEG, PNG, HEIC, camera photos</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Languages</h4>
                <p>English, Norwegian, Spanish, German</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Equipment Types</h4>
                <p>Rotating, static, electrical, instrumentation</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Output Formats</h4>
                <p>Maximo XML, SAP PM, CSV, JSON, Excel</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Standards</h4>
                <p>ISO 14224 classification support</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          SECTION 9: INTEGRATION PIPELINE
          ============================================ */}
      <section className="section section-gray" id="integration" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('integration') ? 'visible' : ''}`}>
          <div className="oem-integration-callout">
            <div className="oem-integration-content">
              <h2>Part of Your Complete AI-Powered Data Staging Workflow</h2>
              <p>Nameplate extraction integrates seamlessly with AssetStage&apos;s data validation, hierarchy management, and CMMS loading automation</p>
            </div>

            <div className="oem-pipeline">
              <div className="oem-pipeline-step">
                <span>Field Photos</span>
              </div>
              <ArrowRight size={20} className="oem-pipeline-arrow" />
              <div className="oem-pipeline-step oem-pipeline-active">
                <span>AI Extraction</span>
              </div>
              <ArrowRight size={20} className="oem-pipeline-arrow" />
              <div className="oem-pipeline-step">
                <span>Data Staging</span>
              </div>
              <ArrowRight size={20} className="oem-pipeline-arrow" />
              <div className="oem-pipeline-step">
                <span>Validation</span>
              </div>
              <ArrowRight size={20} className="oem-pipeline-arrow" />
              <div className="oem-pipeline-step">
                <span>CMMS Load</span>
              </div>
            </div>

            <p className="oem-integration-subtext">One platform for all your maintenance data preparation</p>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 10: FINAL CTA SECTION
          ============================================ */}
      <section className="cta-section oem-final-cta">
        <div className="container">
          <h2>Ready to Eliminate Manual Data Entry?</h2>
          <p className="oem-final-cta-subtitle">Talk to us about your equipment walkdown or CMMS implementation project</p>

          <button className="btn-primary nameplate-btn-primary" onClick={openModal}>
            Book a Demo
          </button>

          <div className="oem-final-trust">
            <span><Check size={16} /> Used by Fortune 500 operators</span>
            <span><Check size={16} /> Average 85% time savings vs manual</span>
          </div>
        </div>
      </section>

      {/* Demo Request Modal */}
      {modalOpen && (
        <div id="demoModal" className="modal show" role="dialog" aria-modal="true" aria-labelledby="demoTitle">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" aria-label="Close dialog" onClick={closeModal}>&times;</button>
              <h2 id="demoTitle">Book a Demo</h2>
              <p>See how AI-powered nameplate extraction can transform your equipment data capture</p>
            </div>
            <div className="modal-body">
              {formSuccess && (
                <div className="success-message" style={{display: 'block', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  ✓ Thank you. We&apos;ll contact you within 24 hours.
                </div>
              )}

              {formError && (
                <div className="error-message" style={{display: 'block', padding: '15px', background: '#f44336', color: 'white', borderRadius: '4px', marginBottom: '20px'}}>
                  {formError}
                </div>
              )}

              <form id="demoForm" className="demo-form" onSubmit={handleFormSubmit}>
                <input type="hidden" name="access_key" value="5737364f-4088-402b-87b3-80dafb3d48cd" />
                <input type="checkbox" name="botcheck" tabIndex={-1} style={{display:'none'}}/>
                <input type="hidden" name="subject" value="Nameplate Extraction Demo Request" />
                <input type="hidden" name="from_name" value="AssetStage Nameplate Extraction" />
                <input type="hidden" name="reply_to" value="team@assetstage.io" />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required autoComplete="name"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email Address *</label>
                    <input
                      type="email"
                      id="email"
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
                    <label htmlFor="company">Company *</label>
                    <input type="text" id="company" name="company" required autoComplete="organization"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cmms">Target CMMS</label>
                    <select id="cmms" name="cmms">
                      <option value="">Select your CMMS</option>
                      <option value="maximo">IBM Maximo</option>
                      <option value="sap-pm">SAP PM</option>
                      <option value="upkeep">UpKeep</option>
                      <option value="fiix">Fiix</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Tell us about your project (optional)</label>
                  <textarea id="message" name="message" placeholder="e.g., Number of assets, type of equipment, timeline..."></textarea>
                </div>

                <input type="hidden" name="form_type" value="nameplate_extraction_demo"/>
                <input type="hidden" name="page" value="nameplate-extraction"/>

                <div className="form-actions">
                  <button type="button" className="btn btn-cancel" onClick={closeModal} disabled={formSubmitting}>Cancel</button>
                  <button type="submit" className="btn btn-submit" disabled={formSubmitting}>
                    {formSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
