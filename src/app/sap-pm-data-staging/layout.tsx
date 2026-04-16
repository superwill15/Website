import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAP PM Data Staging | Stage & Validate Before Loading | AssetStage',
  description: 'Stage, validate, and prepare your asset data before loading into SAP PM or S/4HANA. Structure functional locations, equipment, and maintenance plans in a dedicated staging workspace.',
  keywords: 'SAP PM data staging, SAP PM data management, SAP PM asset hierarchy, S/4HANA data migration, SAP Plant Maintenance data, SAP PM functional locations, SAP equipment master data',
  openGraph: {
    title: 'SAP PM Data Staging | AssetStage',
    description: 'Stage, validate, and prepare your asset data before loading into SAP PM or S/4HANA.',
    url: 'https://assetstage.io/sap-pm-data-staging',
    siteName: 'AssetStage',
    type: 'website',
  },
  alternates: {
    canonical: 'https://assetstage.io/sap-pm-data-staging',
  },
};

export default function SapPmDataStagingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
