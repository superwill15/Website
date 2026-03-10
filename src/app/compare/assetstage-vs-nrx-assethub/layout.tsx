import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AssetStage vs NRX AssetHub: Asset Data Management Comparison | AssetStage',
  description: 'Compare AssetStage vs NRX AssetHub for enterprise asset data management. Feature comparison, implementation timelines, and which solution fits your needs.',
  keywords: 'NRX AssetHub alternative, AssetStage vs NRX, asset data management, CMMS data tool comparison, enterprise asset data',
  openGraph: {
    title: 'AssetStage vs NRX AssetHub: Which is Right for Your CMMS Data?',
    description: 'Detailed comparison of AssetStage and NRX AssetHub for enterprise asset data management.',
    url: 'https://assetstage.io/compare/assetstage-vs-nrx-assethub',
    siteName: 'AssetStage',
    type: 'article',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage vs NRX AssetHub Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssetStage vs NRX AssetHub: Asset Data Management Comparison',
    description: 'Compare AssetStage with NRX AssetHub for enterprise asset data.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/compare/assetstage-vs-nrx-assethub',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
