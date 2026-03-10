import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEM Data Extraction | AI-Powered PM Generation',
  description: 'Turn OEM manuals into complete PM programs with AI. Automatically generate preventive maintenance schedules, job plans, and task lists for Maximo, SAP PM, and other CMMS.',
  openGraph: {
    title: 'OEM Data Extraction | AssetStage',
    description: 'Turn OEM manuals into complete PM programs with AI. Automatically generate preventive maintenance schedules and job plans.',
    url: 'https://assetstage.io/oem-extraction',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AssetStage OEM Extraction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEM Data Extraction | AssetStage',
    description: 'Turn OEM manuals into complete PM programs with AI.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/oem-extraction',
  },
};

export default function OEMExtractionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
