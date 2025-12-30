'use client';

import Image from 'next/image';

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

  // Use image file for primary and compact variants
  if (variant === 'primary' || variant === 'compact') {
    const w = width || (variant === 'compact' ? 180 : 280);
    const h = height || (variant === 'compact' ? 45 : 70);
    return (
      <Image
        src="/logo-primary.png"
        alt="AssetStage - Data Staging & Quality Platform"
        width={w}
        height={h}
        className={className}
        priority
      />
    );
  }

  // Use image file for reverse variant (for dark backgrounds)
  if (variant === 'reverse') {
    return (
      <Image
        src="/logo-reverse.png"
        alt="AssetStage - Data Staging & Quality Platform"
        width={width || 280}
        height={height || 70}
        className={className}
        priority
      />
    );
  }

  // Icon variant - just show the image sized as icon
  if (variant === 'icon') {
    return (
      <Image
        src="/logo-primary.png"
        alt="AssetStage"
        width={width || 40}
        height={height || 40}
        className={className}
        style={{ objectFit: 'contain' }}
      />
    );
  }

  // Fallback
  return (
    <Image
      src="/logo-primary.png"
      alt="AssetStage - Data Staging & Quality Platform"
      width={width || 280}
      height={height || 70}
      className={className}
      priority
    />
  );
}
