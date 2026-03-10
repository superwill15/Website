import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nameplate Data Extraction | AI-Powered Equipment Data Capture',
  description: 'Turn equipment nameplate photos into CMMS records with AI. Extract manufacturer, model, serial numbers, and specifications automatically.',
  openGraph: {
    title: 'Nameplate Data Extraction | AssetStage',
    description: 'Turn equipment nameplate photos into CMMS records with AI. Extract specifications automatically.',
    url: 'https://assetstage.io/nameplate-extraction',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Nameplate Extraction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nameplate Data Extraction | AssetStage',
    description: 'Turn equipment nameplate photos into CMMS records with AI.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/nameplate-extraction',
  },
};

export default function NameplateExtractionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
