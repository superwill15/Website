import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oil & Gas CMMS Data Staging - ISO 14224 Compliance | AssetStage',
  description: 'CMMS data staging for oil and gas. ISO 14224 equipment taxonomy, failure mode tracking, and reliability-focused asset hierarchies for upstream and downstream.',
  keywords: 'oil gas CMMS, ISO 14224, petroleum maintenance, upstream CMMS, downstream CMMS, equipment taxonomy, reliability data',
  openGraph: {
    title: 'Oil & Gas CMMS Data Staging | AssetStage',
    description: 'ISO 14224-compliant equipment taxonomies and reliability data for oil & gas operations.',
    url: 'https://assetstage.io/industries/oil-gas',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Oil & Gas Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oil & Gas CMMS Data Staging | AssetStage',
    description: 'ISO 14224 compliance and equipment taxonomy for oil & gas.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/industries/oil-gas',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
