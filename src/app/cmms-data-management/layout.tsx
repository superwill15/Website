import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CMMS Data Management - Done Right | AssetStage',
  description: 'CMMS data management starts before the data reaches your CMMS. AssetStage provides the staging layer that most tools miss — structure, validate, and govern asset data upstream.',
  keywords: 'CMMS data management, asset data management, CMMS data quality, CMMS data staging, Maximo data management, SAP PM data management, asset data staging',
  openGraph: {
    title: 'CMMS Data Management - Done Right | AssetStage',
    description: 'CMMS data management starts before the data reaches your CMMS. AssetStage provides the staging layer that most tools miss.',
    url: 'https://assetstage.io/cmms-data-management',
    siteName: 'AssetStage',
    type: 'website',
  },
  alternates: {
    canonical: 'https://assetstage.io/cmms-data-management',
  },
};

export default function CmmsDataManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
