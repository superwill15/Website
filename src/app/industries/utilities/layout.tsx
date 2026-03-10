import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utilities CMMS Data Staging - Grid & Infrastructure Assets | AssetStage',
  description: 'CMMS data staging for utilities. Grid infrastructure, generation assets, and distribution network data management for power, water, and gas utilities.',
  keywords: 'utility CMMS, power utility assets, grid infrastructure, distribution assets, utility asset management, NERC compliance',
  openGraph: {
    title: 'Utilities CMMS Data Staging | AssetStage',
    description: 'Grid infrastructure and distribution network asset data management for utilities.',
    url: 'https://assetstage.io/industries/utilities',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Utilities Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utilities CMMS Data Staging | AssetStage',
    description: 'Grid infrastructure and utility asset management.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/industries/utilities',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
