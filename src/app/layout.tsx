import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "AssetStage - Industrial Data Excellence",
  description:
    "AssetStage delivers cutting-edge data staging and quality solutions that make your CMMS actually work. Stop fighting bad data. Start driving results.",
  openGraph: {
    title: "AssetStage - Industrial Data Excellence",
    description:
      "AssetStage delivers cutting-edge data staging and quality solutions that make your CMMS actually work. Stop fighting bad data. Start driving results.",
    url: "https://assetstage.io",
    type: "website",
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
