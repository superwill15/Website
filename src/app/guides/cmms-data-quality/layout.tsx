import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'The Complete Guide to CMMS Data Quality | AssetStage',
  description: 'Everything you need to know about CMMS data quality: building asset hierarchies, validation best practices, migration strategies, and ongoing governance.',
  keywords: 'CMMS data quality, asset hierarchy, data validation, CMMS migration, maintenance data, asset data management, data governance',
  openGraph: {
    title: 'The Complete Guide to CMMS Data Quality',
    description: 'Everything you need to know about building, validating, and maintaining high-quality asset data for your CMMS.',
    url: 'https://assetstage.io/guides/cmms-data-quality',
    siteName: 'AssetStage',
    type: 'article',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CMMS Data Quality Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to CMMS Data Quality',
    description: 'Everything you need to know about CMMS data quality.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/guides/cmms-data-quality',
  },
};

// Structured data for the guide (pillar page)
const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Complete Guide to CMMS Data Quality",
  "description": "Everything you need to know about building, validating, and maintaining high-quality asset data for your CMMS.",
  "author": {
    "@type": "Organization",
    "name": "AssetStage"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AssetStage",
    "logo": {
      "@type": "ImageObject",
      "url": "https://assetstage.io/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://assetstage.io/guides/cmms-data-quality"
  },
  "datePublished": "2025-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={guideSchema} />
      {children}
    </>
  );
}
