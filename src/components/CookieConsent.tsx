/**
 * Cookie Consent Banner - Standalone Version for assetstage.io
 *
 * Drop this file into your marketing site's components folder.
 *
 * Usage in layout.tsx:
 *   import CookieConsent from '@/components/CookieConsent'
 *   // Add inside <body>: <CookieConsent gaId="G-XXXXXXXXXX" />
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';

// Brand colors (matches AssetStage app)
const colors = {
  primaryNavy: '#1e3c72',
  surface: '#ffffff',
  border: '#e5e7eb',
  textPrimary: '#1f2937',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  stageBlue: '#3498db',
};

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const CONSENT_KEY = 'cookie_consent';

function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

interface CookieConsentProps {
  gaId?: string; // Google Analytics Measurement ID (G-XXXXXXXXXX)
  onConsentChange?: (consent: ConsentPreferences) => void;
}

export default function CookieConsent({ gaId, onConsentChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: '',
  });

  // Check consent and load GA if consented
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored);
      setShowBanner(false);
      // Load GA if consent was given
      if (stored.analytics && gaId) {
        loadGoogleAnalytics(gaId);
      }
    } else {
      setShowBanner(true);
    }
  }, [gaId]);

  // Load Google Analytics dynamically
  const loadGoogleAnalytics = (measurementId: string) => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
      return; // Already loaded
    }
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) { window.dataLayer.push(args); }
      gtag('js', new Date());
      gtag('config', measurementId);
    };
  };

  const saveConsent = useCallback((consent: ConsentPreferences) => {
    const updated = { ...consent, timestamp: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(updated));
    setPreferences(updated);
    setShowBanner(false);
    setShowPreferences(false);
    onConsentChange?.(updated);

    // Load GA if analytics consent given
    if (updated.analytics && gaId) {
      loadGoogleAnalytics(gaId);
    }
  }, [gaId, onConsentChange]);

  const handleAcceptAll = () => saveConsent({ essential: true, analytics: true, marketing: true, timestamp: '' });
  const handleRejectNonEssential = () => saveConsent({ essential: true, analytics: false, marketing: false, timestamp: '' });
  const handleSavePreferences = () => saveConsent(preferences);

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Minimal Banner */}
      {showBanner && !showPreferences && (
        <div style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: colors.surface,
          border: `1px solid ${colors.border}`,
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          padding: 16,
          zIndex: 9999,
          maxWidth: 320,
          width: 'calc(100% - 32px)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          <p style={{ margin: '0 0 12px', fontSize: 13, color: colors.textSecondary, lineHeight: 1.4 }}>
            We use cookies for analytics.{' '}
            <a href="/privacy" style={{ color: colors.stageBlue, textDecoration: 'none' }}>Learn more</a>
          </p>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={handleRejectNonEssential} style={buttonStyle('outline')}>Decline</button>
            <button onClick={handleAcceptAll} style={buttonStyle('primary')}>Accept</button>
            <button onClick={() => setShowPreferences(true)} style={buttonStyle('link')}>Settings</button>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: 16,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }} onClick={(e) => e.target === e.currentTarget && setShowPreferences(false)}>
          <div style={{
            backgroundColor: colors.surface,
            borderRadius: 12,
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            maxWidth: 450,
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            padding: 24,
          }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 600, color: colors.textPrimary }}>
              Cookie Preferences
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: colors.textSecondary }}>
              Customize which cookies you allow.
            </p>

            {/* Essential */}
            <CookieOption
              title="Essential Cookies"
              description="Required for the site to function"
              checked={true}
              disabled={true}
              badge="Always Active"
            />

            {/* Analytics */}
            <CookieOption
              title="Analytics Cookies"
              description="Help us understand how you use our site"
              checked={preferences.analytics}
              onChange={(v) => setPreferences(p => ({ ...p, analytics: v }))}
            />

            {/* Marketing */}
            <CookieOption
              title="Marketing Cookies"
              description="Used for personalized content"
              checked={preferences.marketing}
              onChange={(v) => setPreferences(p => ({ ...p, marketing: v }))}
            />

            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 20, paddingTop: 16, borderTop: `1px solid ${colors.border}` }}>
              <button onClick={() => setShowPreferences(false)} style={buttonStyle('outline')}>Cancel</button>
              <button onClick={handleSavePreferences} style={buttonStyle('primary')}>Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper components
function CookieOption({ title, description, checked, onChange, disabled, badge }: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
  badge?: string;
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      backgroundColor: '#f9fafb',
      borderRadius: 8,
      marginBottom: 12,
    }}>
      <div>
        <div style={{ fontWeight: 500, color: colors.textPrimary, fontSize: 14 }}>{title}</div>
        <div style={{ fontSize: 13, color: colors.textSecondary }}>{description}</div>
      </div>
      {badge ? (
        <span style={{ fontSize: 11, padding: '3px 8px', backgroundColor: '#d1fae5', color: '#059669', borderRadius: 4 }}>
          {badge}
        </span>
      ) : (
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          style={{ width: 18, height: 18, cursor: disabled ? 'default' : 'pointer', accentColor: colors.primaryNavy }}
        />
      )}
    </div>
  );
}

function buttonStyle(variant: 'primary' | 'outline' | 'link'): React.CSSProperties {
  const base: React.CSSProperties = { fontSize: 12, fontWeight: 500, cursor: 'pointer', borderRadius: 6 };
  if (variant === 'primary') return { ...base, padding: '6px 12px', backgroundColor: colors.primaryNavy, color: '#fff', border: 'none' };
  if (variant === 'outline') return { ...base, padding: '6px 12px', backgroundColor: 'transparent', color: colors.textSecondary, border: `1px solid ${colors.border}` };
  return { ...base, padding: 6, backgroundColor: 'transparent', color: colors.textMuted, border: 'none', textDecoration: 'underline' };
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
