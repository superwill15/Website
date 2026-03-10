import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AssetStage vs MXLoader: CMMS Data Tool Comparison | AssetStage',
  description: 'Compare AssetStage vs MXLoader for Maximo data loading. Feature comparison, key differences, and which tool is right for your CMMS data needs.',
  keywords: 'MXLoader alternative, AssetStage vs MXLoader, Maximo data loading, CMMS data tool comparison, Maximo data migration',
  openGraph: {
    title: 'AssetStage vs MXLoader: Which is Right for Your CMMS Data?',
    description: 'Detailed comparison of AssetStage and MXLoader for Maximo data loading and CMMS data preparation.',
    url: 'https://assetstage.io/compare/assetstage-vs-mxloader',
    siteName: 'AssetStage',
    type: 'article',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage vs MXLoader Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssetStage vs MXLoader: CMMS Data Tool Comparison',
    description: 'Compare AssetStage with MXLoader for Maximo data loading.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/compare/assetstage-vs-mxloader',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
