import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maximo Data Staging | Stage & Validate Before Loading | AssetStage',
  description: 'Stage, validate, and prepare your asset data before loading into IBM Maximo or MAS 9. Unlike Maximo-native tools, AssetStage works across your entire portfolio.',
  keywords: 'Maximo data staging, Maximo data management, MAS 9 data staging, Maximo data onboarding, Maximo bulk data loading, governed loading Maximo, MXLoader alternative, Maximo data migration',
  openGraph: {
    title: 'Maximo Data Staging | AssetStage',
    description: 'Stage, validate, and prepare your asset data before loading into IBM Maximo or MAS 9.',
    url: 'https://assetstage.io/maximo-data-staging',
    siteName: 'AssetStage',
    type: 'website',
  },
  alternates: {
    canonical: 'https://assetstage.io/maximo-data-staging',
  },
};

export default function MaximoDataStagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
