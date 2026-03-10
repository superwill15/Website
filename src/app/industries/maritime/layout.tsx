import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maritime CMMS Data Staging - SFI Coding & Vessel Systems | AssetStage',
  description: 'CMMS data staging for maritime and shipping. SFI coding validation, vessel asset hierarchies, and fleet-wide data standardization for ship operators.',
  keywords: 'maritime CMMS, SFI coding, vessel CMMS, ship maintenance system, maritime asset management, fleet maintenance data',
  openGraph: {
    title: 'Maritime CMMS Data Staging | AssetStage',
    description: 'SFI-compliant asset hierarchies and fleet-wide data consistency for maritime operations.',
    url: 'https://assetstage.io/industries/maritime',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Maritime Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maritime CMMS Data Staging | AssetStage',
    description: 'SFI coding validation and vessel asset management.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/industries/maritime',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
