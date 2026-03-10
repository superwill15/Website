import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing CMMS Data Staging - Plant Asset Management | AssetStage',
  description: 'CMMS data staging for manufacturing. Production line hierarchies, OEM data extraction, and multi-plant asset standardization for manufacturing facilities.',
  keywords: 'manufacturing CMMS, plant maintenance, production equipment, factory CMMS, equipment hierarchy, OEM data extraction',
  openGraph: {
    title: 'Manufacturing CMMS Data Staging | AssetStage',
    description: 'Production equipment hierarchies and plant-wide asset management for manufacturing.',
    url: 'https://assetstage.io/industries/manufacturing',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Manufacturing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing CMMS Data Staging | AssetStage',
    description: 'Production equipment and plant asset management.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/industries/manufacturing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
