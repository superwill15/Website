import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AssetStage",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PricingPage() {
  return (
    <section className="hero">
      <h1>Pricing</h1>
      <p>Simple, transparent pricing at launch.</p>
    </section>
  );
}
