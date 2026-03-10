import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AssetStage Pricing | CMMS Data Staging Platform',
  description: 'Flexible pricing for AssetStage CMMS data workspace. Custom plans tailored to your data volume, team size, and requirements.',
  openGraph: {
    title: 'AssetStage Pricing | CMMS Data Staging Platform',
    description: 'Flexible pricing for AssetStage CMMS data workspace. Custom plans tailored to your needs.',
    url: 'https://assetstage.io/pricing',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AssetStage Pricing | CMMS Data Staging Platform',
    description: 'Flexible pricing for AssetStage CMMS data workspace.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
