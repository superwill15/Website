import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans | AssetStage CMMS Data Workspace',
  description: 'Flexible pricing plans for AssetStage CMMS data workspace. From starter to enterprise, find the right plan for your maintenance team.',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
