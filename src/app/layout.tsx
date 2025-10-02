import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "AssetStage - The CMMS Data Workspace | Professional Data Quality Tools",
  description:
    "The CMMS Data Workspace. AssetStage helps maintenance teams transform messy data into production-ready hierarchies—faster than traditional consulting, without the six-figure price tag.",
  keywords: "CMMS data workspace, CMMS data quality, asset management, data staging platform, Maximo data prep, SAP PM implementation, maintenance data migration, CMMS implementation, industrial data staging, RDS-PS, ISO 14224, SFI standards",
  authors: [{ name: "AssetStage" }],
  creator: "AssetStage",
  publisher: "AssetStage",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AssetStage - The CMMS Data Workspace",
    description:
      "AssetStage helps maintenance teams transform messy data into production-ready hierarchies—faster than traditional consulting, without the six-figure price tag.",
    url: "https://assetstage.io",
    siteName: "AssetStage",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://assetstage.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "AssetStage - The CMMS Data Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssetStage - The CMMS Data Workspace",
    description:
      "Professional tools for maintenance teams to transform messy data into production-ready hierarchies—without the consulting price tag.",
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
