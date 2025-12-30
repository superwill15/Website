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
        <rect width="100" height="100" rx="20" fill="white" />
        {/* Platform/stage base */}
        <rect x="20" y="65" width="60" height="10" rx="5" fill="#3d5a80" />
        {/* Left block - blue */}
        <rect x="26" y="48" width="14" height="14" rx="2" fill="#5dade2" />
        {/* Middle block - green */}
        <rect x="43" y="48" width="14" height="14" rx="2" fill="#52c41a" />
        {/* Right block - yellow/orange */}
        <rect x="60" y="48" width="14" height="14" rx="2" fill="#faad14" />
        {/* Checkmark badge */}
        <g transform="translate(36, 40)">
          <circle cx="0" cy="0" r="10" fill="#52c41a" />
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
            <stop offset="0%" style={{ stopColor: '#5dade2', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#85c1e9', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g transform="scale(0.8)">
          {/* Platform/stage base */}
          <rect x="15" y="35" width="40" height="6" rx="3" fill="#3d5a80" />
          {/* Left block - blue */}
          <rect x="18" y="26" width="8" height="8" rx="1" fill="#5dade2" />
          {/* Middle block - green */}
          <rect x="28" y="26" width="8" height="8" rx="1" fill="#52c41a" />
          {/* Right block - yellow/orange */}
          <rect x="38" y="26" width="8" height="8" rx="1" fill="#faad14" />
          {/* Checkmark badge */}
          <g transform="translate(26, 20)">
            <circle cx="0" cy="0" r="5" fill="#52c41a" />
            <path d="M -2.5 0 L -0.5 2 L 2.5 -1.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <text x="55" y="34" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="22" fontWeight="800" fill="#3d5a80">
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
          {/* Platform/stage base */}
          <rect x="15" y="60" width="70" height="8" rx="4" fill="white" opacity="0.9" />
          {/* Left block - blue */}
          <rect x="22" y="45" width="14" height="14" rx="2" fill="#5dade2" />
          {/* Middle block - green */}
          <rect x="40" y="45" width="14" height="14" rx="2" fill="#52c41a" />
          {/* Right block - yellow/orange */}
          <rect x="58" y="45" width="14" height="14" rx="2" fill="#faad14" />
          {/* Checkmark badge */}
          <g transform="translate(32, 35)">
            <circle cx="0" cy="0" r="9" fill="#52c41a" />
            <path d="M -4.5 0 L -1.5 3 L 4.5 -2.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <text x="100" y="52" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="28" fontWeight="800" fill="white">
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
        <linearGradient id="primaryGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#5dade2', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#85c1e9', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g id="icon">
        {/* Platform/stage base */}
        <rect x="15" y="60" width="70" height="8" rx="4" fill="#3d5a80" />
        {/* Left block - blue */}
        <rect x="22" y="45" width="14" height="14" rx="2" fill="#5dade2" />
        {/* Middle block - green */}
        <rect x="40" y="45" width="14" height="14" rx="2" fill="#52c41a" />
        {/* Right block - yellow/orange */}
        <rect x="58" y="45" width="14" height="14" rx="2" fill="#faad14" />
        {/* Checkmark badge - positioned above left side */}
        <g transform="translate(32, 35)">
          <circle cx="0" cy="0" r="9" fill="#52c41a" />
          <path d="M -4.5 0 L -1.5 3 L 4.5 -2.5" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
      <text x="100" y="52" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="28" fontWeight="800" fill="#3d5a80">
        ASSET<tspan fill="url(#primaryGrad2)">STAGE</tspan>
      </text>
      <text x="100" y="68" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fontSize="10" fontWeight="400" fill="#7f8c8d" letterSpacing="0.5">
        DATA STAGING &amp; QUALITY PLATFORM
      </text>
    </svg>
  );
}
