import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AssetStage vs Spreadsheets: Why Excel Fails for CMMS Data | AssetStage',
  description: 'Why purpose-built CMMS data tools beat Excel and Google Sheets. Compare AssetStage vs spreadsheets for asset data management and avoid spreadsheet chaos.',
  keywords: 'Excel CMMS data, spreadsheet asset management, AssetStage vs Excel, CMMS data tool, asset data management',
  openGraph: {
    title: 'AssetStage vs Spreadsheets: Which is Right for Your CMMS Data?',
    description: 'Why purpose-built tools beat Excel for CMMS data management. Feature comparison and honest assessment.',
    url: 'https://assetstage.io/compare/assetstage-vs-spreadsheets',
    siteName: 'AssetStage',
    type: 'article',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage vs Spreadsheets Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssetStage vs Spreadsheets: Why Excel Fails for CMMS Data',
    description: 'Why purpose-built tools beat Excel for CMMS data management.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/compare/assetstage-vs-spreadsheets',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
