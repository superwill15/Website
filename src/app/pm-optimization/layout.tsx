import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PM Optimization Tool | Standardize Preventive Maintenance',
  description: 'Standardize PM schedules across identical assets in minutes. Compare maintenance programs, spot inconsistencies, and optimize your CMMS PM data.',
  openGraph: {
    title: 'PM Optimization Tool | AssetStage',
    description: 'Standardize PM schedules across identical assets in minutes. Compare and optimize your CMMS preventive maintenance programs.',
    url: 'https://assetstage.io/pm-optimization',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage PM Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PM Optimization Tool | AssetStage',
    description: 'Standardize PM schedules across identical assets in minutes.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/pm-optimization',
  },
};

export default function PMOptimizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
