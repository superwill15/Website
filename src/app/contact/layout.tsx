import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AssetStage | Book a Demo',
  description: 'Get in touch with AssetStage for CMMS data consulting, engineering standards implementation, and product demos. Email sales@assetstage.io.',
  openGraph: {
    title: 'Contact AssetStage | Book a Demo',
    description: 'Get in touch with AssetStage for CMMS data consulting and product demos.',
    url: 'https://assetstage.io/contact',
    siteName: 'AssetStage',
    type: 'website',
    images: [
      {
        url: 'https://assetstage.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact AssetStage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AssetStage | Book a Demo',
    description: 'Get in touch with AssetStage for CMMS data consulting and demos.',
    images: ['https://assetstage.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://assetstage.io/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
