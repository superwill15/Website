import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is Asset Data Staging? | AssetStage',
  description: 'Asset data staging is the process of structuring, validating, and preparing asset data before loading it into your CMMS. Learn how staging prevents costly errors and accelerates implementations.',
  keywords: 'asset data staging, CMMS data staging, asset hierarchy staging, CMMS-agnostic staging, CMMS data management, asset data management, data staging platform',
  openGraph: {
    title: 'What is Asset Data Staging? | AssetStage',
    description: 'Asset data staging is the process of structuring, validating, and preparing asset data before loading it into your CMMS.',
    url: 'https://assetstage.io/asset-data-staging',
    siteName: 'AssetStage',
    type: 'website',
  },
  alternates: {
    canonical: 'https://assetstage.io/asset-data-staging',
  },
};

export default function AssetDataStagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
