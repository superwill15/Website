import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "AssetStage - CMMS Data Quality & Engineering Standards Platform",
  description:
    "Transform your CMMS with AssetStage's data staging platform. Expert consultancy in RDS-PS, RDS-PP, ISO 14224, KKS & SFI standards. 90% cost reduction vs consultants.",
  keywords: "CMMS data quality, asset management, RDS-PS, RDS-PP, ISO 14224, KKS, SFI, engineering standards, maintenance data migration, CMMS implementation, industrial data staging",
  authors: [{ name: "AssetStage" }],
  creator: "AssetStage",
  publisher: "AssetStage",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AssetStage - CMMS Data Quality & Engineering Standards Platform",
    description:
      "Transform your CMMS with AssetStage's data staging platform. Expert consultancy in RDS-PS, RDS-PP, ISO 14224, KKS & SFI standards. 90% cost reduction vs consultants.",
    url: "https://assetstage.io",
    siteName: "AssetStage",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://assetstage.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "AssetStage - CMMS Data Staging & Quality Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssetStage - CMMS Data Quality & Engineering Standards Platform",
    description:
      "Transform your CMMS with AssetStage's data staging platform. Expert consultancy in RDS-PS, RDS-PP, ISO 14224, KKS & SFI standards.",
    creator: "@AssetStage",
    images: ["https://assetstage.io/og-image.png"],
  },
  alternates: {
    canonical: "https://assetstage.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q027KXVY63"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q027KXVY63');
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
