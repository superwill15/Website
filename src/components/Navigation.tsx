'use client';

import { useState } from 'react';
import Logo from '@/components/Logo';
import DemoModal from '@/components/DemoModal';
import { ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <a href="/" className="logo-link" aria-label="AssetStage Home">
            <Logo variant="primary" width={200} height={50} />
          </a>
          <ul className="nav-links">
            <li><a href="/#assetstage">Platform</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Solutions <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/asset-data-staging">Asset Hierarchy Staging</a>
                <a href="/pm-optimization">PM Optimisation</a>
                <a href="/inventory">Inventory Management</a>
              </div>
            </li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Integrations <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/maximo-data-staging">Maximo</a>
                <a href="/sap-pm-data-staging">SAP PM</a>
              </div>
            </li>
            <li><a href="/services">Services</a></li>
            <li className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Resources <ChevronDown size={14} />
              </button>
              <div className="nav-dropdown-menu">
                <a href="/blog">Blog</a>
                <a href="/resources">Free Downloads</a>
              </div>
            </li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
          <button className="nav-cta" onClick={openModal}>Book a Demo</button>

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
            <li><a href="/#assetstage" onClick={toggleMobileMenu}>Platform</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Solutions</span>
            </li>
            <li><a href="/asset-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Asset Hierarchy Staging</a></li>
            <li><a href="/pm-optimization" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>PM Optimisation</a></li>
            <li><a href="/inventory" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Inventory Management</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Integrations</span>
            </li>
            <li><a href="/maximo-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Maximo</a></li>
            <li><a href="/sap-pm-data-staging" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>SAP PM</a></li>
            <li><a href="/services" onClick={toggleMobileMenu}>Services</a></li>
            <li style={{ borderBottom: 'none', paddingBottom: 0 }}>
              <span style={{ padding: '16px 20px', display: 'block', fontWeight: 600, color: 'var(--text-light)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Resources</span>
            </li>
            <li><a href="/blog" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Blog</a></li>
            <li><a href="/resources" onClick={toggleMobileMenu} style={{ paddingLeft: '32px' }}>Free Downloads</a></li>
            <li><a href="/pricing" onClick={toggleMobileMenu}>Pricing</a></li>
            <li><button className="mobile-nav-cta" onClick={() => { toggleMobileMenu(); openModal(); }}>Book a Demo</button></li>
          </ul>
        </div>
      </nav>

      {/* Demo Request Modal */}
      <DemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
