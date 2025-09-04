'use client';

interface LogoProps {
  variant?: 'primary' | 'reverse' | 'compact' | 'icon';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ 
  variant = 'primary', 
  className = '', 
  width,
  height 
}: LogoProps) {
  
  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        width={width || 40} 
        height={height || 40}
        className={className}
      >
        <defs>
          <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#1e3c72', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2a5298', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="20" fill="white" />
        <rect x="20" y="65" width="60" height="10" rx="2" fill="url(#iconGrad)" />
        <rect x="26" y="48" width="14" height="14" rx="2" fill="#3498db" />
        <rect x="43" y="48" width="14" height="14" rx="2" fill="#27ae60" />
        <rect x="60" y="48" width="14" height="14" rx="2" fill="#f39c12" />
        <g transform="translate(50, 40)">
          <circle cx="0" cy="0" r="10" fill="#27ae60" />
          <path d="M -5 0 L -1.5 3.5 L 5 -3" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <svg 
        viewBox="10 10 280 40" 
        width={width || 200} 
        height={height || 32}
        className={className}
      >
        <defs>
          <linearGradient id="compactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#5dade2', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g transform="scale(0.8)">
          <rect x="15" y="35" width="40" height="6" rx="1" fill="#2c3e50" />
          <rect x="18" y="26" width="8" height="8" rx="1" fill="#3498db" />
          <rect x="28" y="26" width="8" height="8" rx="1" fill="#27ae60" />
          <rect x="38" y="26" width="8" height="8" rx="1" fill="#f39c12" />
          <g transform="translate(35, 20)">
            <circle cx="0" cy="0" r="5" fill="#27ae60" />
            <path d="M -2.5 0 L -0.5 2 L 2.5 -1.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <text x="55" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="22" fontWeight="700" fill="#2c3e50">
          ASSET<tspan fill="url(#compactGrad)">STAGE</tspan>
        </text>
      </svg>
    );
  }

  if (variant === 'reverse') {
    return (
      <svg 
        viewBox="0 0 400 100" 
        width={width || 280} 
        height={height || 70}
        className={className}
      >
        <g id="icon">
          <rect x="20" y="55" width="60" height="8" rx="1" fill="white" opacity="0.9" />
          <rect x="25" y="42" width="12" height="12" rx="1" fill="#5dade2" />
          <rect x="39" y="42" width="12" height="12" rx="1" fill="#52c41a" />
          <rect x="53" y="42" width="12" height="12" rx="1" fill="#faad14" />
          <g transform="translate(50, 35)">
            <circle cx="0" cy="0" r="8" fill="#52c41a" />
            <path d="M -4 0 L -1 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <text x="100" y="52" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="28" fontWeight="700" fill="white">
          ASSET<tspan fill="#5dade2">STAGE</tspan>
        </text>
        <text x="100" y="68" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="10" fontWeight="400" fill="#adb5bd" letterSpacing="0.5">
          DATA STAGING &amp; QUALITY PLATFORM
        </text>
      </svg>
    );
  }

  // Primary variant (default)
  return (
    <svg 
      viewBox="0 0 400 100" 
      width={width || 280} 
      height={height || 70}
      className={className}
    >
      <defs>
        <linearGradient id="primaryGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1e3c72', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2a5298', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="primaryGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#5dade2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g id="icon">
        <rect x="20" y="55" width="60" height="8" rx="1" fill="url(#primaryGrad1)" />
        <rect x="25" y="42" width="12" height="12" rx="1" fill="#3498db" opacity="0.9" />
        <rect x="39" y="42" width="12" height="12" rx="1" fill="#27ae60" opacity="0.9" />
        <rect x="53" y="42" width="12" height="12" rx="1" fill="#f39c12" opacity="0.9" />
        <g transform="translate(50, 35)">
          <circle cx="0" cy="0" r="8" fill="#27ae60" fillOpacity="0.95" />
          <path d="M -4 0 L -1 3 L 4 -2" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <text x="100" y="52" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="28" fontWeight="700" fill="#2c3e50">
        ASSET<tspan fill="url(#primaryGrad2)">STAGE</tspan>
      </text>
      <text x="100" y="68" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="10" fontWeight="400" fill="#7f8c8d" letterSpacing="0.5">
        DATA STAGING &amp; QUALITY PLATFORM
      </text>
    </svg>
  );
}