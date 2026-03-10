import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AssetStage',
  description: 'Get in touch with AssetStage for CMMS data consulting, engineering standards implementation, and product demos. Email sales@assetstage.io.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
