'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import Logo from '@/components/Logo';
import { validateBusinessEmail } from '@/utils/emailValidation';
import {
  Upload,
  Bot,
  ClipboardList,
  Zap,
  Target,
  CheckCircle,
  FileCode,
  Rocket,
  Users,
  Ship,
  Wind,
  Factory,
  Calendar,
  Wrench,
  Package,
  AlertTriangle,
  Clock,
  List,
  Link2,
  UserCheck,
  FileJson,
  Database,
  FileSpreadsheet,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function OEMExtractionPage() {
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
      title: 'CMMS Implementations',
      icon: <Database size={24} />,
      useCase: 'New Maximo rollout needs 500+ equipment records with PM programs',
      withoutAI: '6 months of manual data entry at £800/day consultant rates',
      withAssetStage: 'Upload OEM manuals, AI generates complete PM library in days'
    },
    {
      title: 'Data Migrations',
      icon: <FileCode size={24} />,
      useCase: 'Moving from legacy system to SAP PM, missing PM documentation',
      withoutAI: 'Pay consultants to recreate programs from scratch or incomplete data',
      withAssetStage: 'AI extracts and generates standardized programs directly from manufacturer documentation'
    },
    {
      title: 'Fleet Standardization',
      icon: <Ship size={24} />,
      useCase: 'Cruise line with 12 ships needs consistent PM programs',
      withoutAI: 'Each ship has different procedures in spreadsheets, zero standardization',
      withAssetStage: 'AI generates standardized job plans from OEM manuals across entire fleet, automatic consistency'
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
            <li><a href="/#home">Home</a></li>
            <li><a href="/#assetstage">AssetStage</a></li>
            <li><a href="/pm-optimization">PM Optimization</a></li>
            <li><a href="/oem-extraction">OEM Extraction</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#inventory">Inventory</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/#resources">Resources</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
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
            <li><a href="/#home" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/#assetstage" onClick={toggleMobileMenu}>AssetStage</a></li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu}>PM Optimization</a></li>
            <li><a href="/oem-extraction" onClick={toggleMobileMenu}>OEM Extraction</a></li>
            <li><a href="/#services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="/#inventory" onClick={toggleMobileMenu}>Inventory</a></li>
            <li><a href="/blog" onClick={toggleMobileMenu}>Blog</a></li>
            <li><a href="/#resources" onClick={toggleMobileMenu}>Resources</a></li>
            <li><a href="/#about" onClick={toggleMobileMenu}>About</a></li>
            <li><a href="/#contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Get Demo</button></li>
          </ul>
        </div>
      </nav>

      {/* ============================================
          SECTION 1: HERO SECTION
          Primary keywords: AI maintenance planning, automatic PM generation, AI preventive maintenance
          ============================================ */}
      <section className="hero oem-hero">
        <div className="hero-content">
          {/* Primary keyword: AI-Powered Maintenance Planning */}
          <h1>AI-Powered Maintenance Planning: Turn OEM Manuals into Complete PM Programs</h1>
          {/* Secondary keywords: automatic PM generation, generate preventive maintenance from OEM manual */}
          <p>
            Automatically generate preventive maintenance schedules, job plans, and task lists from PDF documentation.
            Our AI extracts maintenance intervals, procedures, and specifications for Maximo, SAP PM, and other CMMS platforms.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary oem-btn-primary" onClick={openModal}>
              Book a Demo
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('pricing')}>
              Get Started
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
          SECTION 2: HOW IT WORKS (3-STEP VISUAL)
          Secondary keywords: maintenance manual data extraction, automated CMMS data entry
          ============================================ */}
      <section className="section" id="how-it-works" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('how-it-works') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>How It Works</h2>
            {/* Secondary keyword: maintenance manual data extraction */}
            <p>Three simple steps from OEM documentation to CMMS-ready job plans</p>
          </div>

          <div className="oem-steps-grid">
            {/* Step 1 */}
            <div className="oem-step-card">
              <div className="oem-step-number">1</div>
              <div className="oem-step-icon">
                <Upload size={32} />
              </div>
              <h3>Upload OEM Manual</h3>
              <p>Drop any equipment maintenance manual, parts catalog, or technical documentation</p>
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
              {/* Secondary keyword: AI-powered maintenance */}
              <h3>AI Extraction & Analysis</h3>
              <p>Our AI reads maintenance intervals, task procedures, parts lists, and safety requirements. Automatically structures data into preventive maintenance programs.</p>
            </div>

            {/* Step Arrow */}
            <div className="oem-step-arrow">
              <ArrowRight size={32} />
            </div>

            {/* Step 3 */}
            <div className="oem-step-card">
              <div className="oem-step-number">3</div>
              <div className="oem-step-icon oem-step-icon-success">
                <ClipboardList size={32} />
              </div>
              <h3>Generate Job Plans</h3>
              {/* Secondary keyword: automated CMMS data entry */}
              <p>Get complete PM schedules and job plans ready to import into Maximo, SAP PM, UpKeep, or any CMMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: KEY BENEFITS (4 CARDS)
          Primary keywords: automatic PM generation, AI preventive maintenance
          ============================================ */}
      <section className="section section-gray" id="benefits" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('benefits') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Key Benefits</h2>
            <p>Why organizations choose AI-powered maintenance planning</p>
          </div>

          <div className="services-grid">
            {/* Benefit 1 */}
            <div className="service-card oem-benefit-card">
              <div className="service-icon">
                <Zap size={28} />
              </div>
              {/* Primary keyword: Automatic PM Generation */}
              <h3>Automatic PM Generation</h3>
              <p>AI creates complete preventive maintenance programs from source documentation in minutes, not weeks</p>
            </div>

            {/* Benefit 2 */}
            <div className="service-card oem-benefit-card">
              <div className="service-icon">
                <Target size={28} />
              </div>
              <h3>Maintain Accuracy</h3>
              <p>Extract exact specifications, intervals, and part numbers directly from OEM manuals</p>
            </div>

            {/* Benefit 3 */}
            <div className="service-card oem-benefit-card">
              <div className="service-icon">
                <CheckCircle size={28} />
              </div>
              {/* Primary keyword: AI preventive maintenance */}
              <h3>AI-Powered Validation</h3>
              <p>Smart detection of maintenance intervals, frequencies, and task dependencies</p>
            </div>

            {/* Benefit 4 */}
            <div className="service-card oem-benefit-card">
              <div className="service-icon">
                <FileCode size={28} />
              </div>
              <h3>Built for Integration</h3>
              <p>Generate job plans in Maximo XML, SAP PM format, or universal CSV. Works with any CMMS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: AI CAPABILITIES CALLOUT
          Primary keywords: AI maintenance software, automated maintenance planning software
          ============================================ */}
      <section className="section oem-ai-section" id="ai-capabilities" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('ai-capabilities') ? 'visible' : ''}`}>
          <div className="section-header">
            {/* Primary keyword: AI maintenance software */}
            <h2>Purpose-Built AI for Maintenance Planning</h2>
            <p>Not generic AI — trained specifically on OEM documentation and maintenance standards</p>
          </div>

          <div className="oem-capabilities-grid">
            {/* Column 1: Intelligent Extraction */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <Bot size={24} />
                <h3>Intelligent Extraction</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Calendar size={18} />
                  <span>Recognizes maintenance intervals (hours, days, months, cycles)</span>
                </li>
                <li>
                  <Wrench size={18} />
                  <span>Identifies task types (inspection, lubrication, replacement)</span>
                </li>
                <li>
                  <Package size={18} />
                  <span>Extracts part numbers and specifications</span>
                </li>
                <li>
                  <AlertTriangle size={18} />
                  <span>Understands safety procedures and lock-out requirements</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Automatic Structuring */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <List size={24} />
                {/* Secondary keyword: automate PM program creation */}
                <h3>Automatic Structuring</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Clock size={18} />
                  <span>Generates PM schedules with correct frequencies</span>
                </li>
                <li>
                  <ClipboardList size={18} />
                  <span>Creates hierarchical task lists</span>
                </li>
                <li>
                  <Link2 size={18} />
                  <span>Links procedures to required parts</span>
                </li>
                <li>
                  <UserCheck size={18} />
                  <span>Assigns craft skills and duration estimates</span>
                </li>
              </ul>
            </div>

            {/* Column 3: CMMS-Ready Output */}
            <div className="oem-capability-column">
              <div className="oem-capability-header">
                <FileJson size={24} />
                <h3>CMMS-Ready Output</h3>
              </div>
              <ul className="oem-capability-list">
                <li>
                  <Database size={18} />
                  <span>Maximo job plans with sequences</span>
                </li>
                <li>
                  <FileCode size={18} />
                  <span>SAP PM task lists with materials</span>
                </li>
                <li>
                  <FileSpreadsheet size={18} />
                  <span>Generic formats for any system</span>
                </li>
                <li>
                  <List size={18} />
                  <span>Maintains equipment hierarchy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: USE CASES (3 TABS)
          Secondary keywords: CMMS data migration tools, preventive maintenance automation
          ============================================ */}
      <section className="section section-gray" id="use-cases" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('use-cases') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Use Cases</h2>
            {/* Secondary keyword: CMMS data migration tools */}
            <p>How organizations use AI-powered preventive maintenance automation</p>
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
          SECTION 7: CHOOSE YOUR APPROACH (TWO-COLUMN)
          Primary keywords: automated maintenance planning software
          ============================================ */}
      <section className="section" id="pricing" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('pricing') ? 'visible' : ''}`}>
          <div className="section-header">
            <h2>Choose Your Approach</h2>
            <p>Select the right option for your needs — both deliver AI-powered results</p>
          </div>

          <div className="oem-pricing-grid">
            {/* Self-Service Option */}
            <div className="oem-pricing-card">
              <div className="oem-pricing-header">
                <div className="oem-pricing-icon oem-pricing-icon-self">
                  <Rocket size={32} />
                </div>
                <h3>Automated Self-Service</h3>
                <p className="oem-pricing-subtitle">Perfect for evaluating the AI technology, small batches, or straightforward extractions</p>
              </div>

              <ul className="oem-pricing-features">
                <li><Check size={18} /> Upload manuals, AI processes automatically</li>
                <li><Check size={18} /> Extract PM intervals and maintenance tasks</li>
                <li><Check size={18} /> Download in CSV or standard formats</li>
                <li><Check size={18} /> Instant results — see what the AI can do</li>
                <li><Check size={18} /> Great for proof-of-concept</li>
              </ul>

              <div className="oem-pricing-use-when">
                <strong>Use when:</strong> Testing the platform, &lt;20 assets, straightforward OEM documentation
              </div>

              <button className="oem-pricing-cta oem-cta-blue" onClick={() => console.log('Start Free Trial clicked')}>
                Start Free Trial
              </button>
              <p className="oem-pricing-note">No credit card required • First manual free</p>
            </div>

            {/* Full-Service Option */}
            <div className="oem-pricing-card oem-pricing-featured">
              <div className="oem-pricing-badge">Recommended for Implementations</div>
              <div className="oem-pricing-header">
                <div className="oem-pricing-icon oem-pricing-icon-full">
                  <Users size={32} />
                </div>
                <h3>AI with Human Oversight</h3>
                <p className="oem-pricing-subtitle">For migrations, implementations, and complex requirements where accuracy is mission-critical</p>
              </div>

              <ul className="oem-pricing-features">
                <li><Check size={18} /> Everything in self-service, plus:</li>
                <li><Check size={18} /> Quality assurance by maintenance engineers</li>
                <li><Check size={18} /> Complex equipment hierarchies handled</li>
                <li><Check size={18} /> Custom CMMS format mapping and validation</li>
                <li><Check size={18} /> Integration with full data staging workflow</li>
                <li><Check size={18} /> Expert consultation on PM strategy and optimization</li>
                <li><Check size={18} /> Guaranteed data quality for go-live</li>
              </ul>

              <div className="oem-pricing-use-when">
                <strong>Use when:</strong> CMMS implementations, data migrations, 50+ assets, critical production systems
              </div>

              <button className="oem-pricing-cta oem-cta-orange" onClick={openModal}>
                Book a Demo
              </button>
              <p className="oem-pricing-note">Custom pricing based on scope • Typical ROI in first migration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: TECHNICAL SPECS (EXPANDABLE)
          ============================================ */}
      <section className="section section-gray" id="tech-specs" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('tech-specs') ? 'visible' : ''}`}>
          <button
            className="oem-tech-specs-toggle"
            onClick={() => setTechSpecsExpanded(!techSpecsExpanded)}
          >
            <h2>What Our AI Maintenance Platform Supports</h2>
            {techSpecsExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>

          {techSpecsExpanded && (
            <div className="oem-tech-specs-grid">
              <div className="oem-tech-spec-card">
                <h4>Document Types</h4>
                <p>PDF, scanned images, Word docs, Excel parts lists</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Languages</h4>
                <p>English, Norwegian, Spanish, German</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Equipment Types</h4>
                <p>Rotating, static, HVAC, marine, offshore, industrial</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Output Formats</h4>
                <p>Maximo XML, SAP PM IDoc, CSV, JSON, Excel</p>
              </div>
              <div className="oem-tech-spec-card">
                <h4>Standards</h4>
                <p>ISO 14224, RCM, manufacturer-specific formats</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          SECTION 9: INTEGRATION CALLOUT
          ============================================ */}
      <section className="section" id="integration" data-animate>
        <div className={`container oem-fade-in ${visibleSections.has('integration') ? 'visible' : ''}`}>
          <div className="oem-integration-callout">
            <div className="oem-integration-content">
              <h2>Part of Your Complete AI-Powered Data Staging Workflow</h2>
              <p>Automatic PM generation works alongside AssetStage&apos;s data validation, hierarchy management, and CMMS loading automation</p>
            </div>

            <div className="oem-pipeline">
              <div className="oem-pipeline-step">
                <span>Data Cleanup</span>
              </div>
              <ArrowRight size={20} className="oem-pipeline-arrow" />
              <div className="oem-pipeline-step oem-pipeline-active">
                <span>AI PM Generation</span>
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
          <h2>Ready to Automate Your Preventive Maintenance Planning?</h2>

          <div className="oem-final-cta-grid">
            <div className="oem-final-cta-option">
              <button className="btn-secondary" onClick={() => console.log('Try AI Self-Service Free clicked')}>
                Try AI Self-Service Free
              </button>
              <p>Upload a manual and see automatic PM generation in minutes</p>
            </div>

            <div className="oem-final-cta-option">
              <button className="btn-primary oem-btn-primary" onClick={openModal}>
                Book a Demo
              </button>
              <p>Talk to us about your migration or implementation project</p>
            </div>
          </div>

          <div className="oem-final-trust">
            <span><Check size={16} /> No credit card required</span>
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
              <p>See how AI-powered PM generation can transform your CMMS implementation</p>
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
                <input type="hidden" name="subject" value="OEM Extraction Demo Request" />
                <input type="hidden" name="from_name" value="AssetStage OEM Extraction" />
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

                <input type="hidden" name="form_type" value="oem_extraction_demo"/>
                <input type="hidden" name="page" value="oem-extraction"/>

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
