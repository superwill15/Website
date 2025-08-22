import "./globals.css";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "AssetStage.io — Data Staging & Quality Platform",
  description:
    "Stage, optimize, and prepare asset data for CMMS integration with hierarchies, dynamic attributes, and analytics.",
  openGraph: {
    title: "AssetStage.io — Data Staging & Quality Platform",
    description:
      "Stage, optimize, and prepare asset data for CMMS integration with hierarchies, dynamic attributes, and analytics.",
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
        {/* Header with reverse logo */}
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand">
              <img
                src="/logo-reverse.png"
                alt="AssetStage logo"
                height={40}
              />
            </Link>
            <nav className="menu">
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="container">{children}</main>

        {/* Footer with primary logo */}
        <footer className="site-footer">
          <div className="container" style={{ textAlign: "center" }}>
            <img
              src="/logo-primary.png"
              alt="AssetStage logo"
              height={40}
              style={{ marginBottom: "12px" }}
            />
            <div>© {new Date().getFullYear()} AssetStage.io. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
