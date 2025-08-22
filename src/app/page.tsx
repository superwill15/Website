export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Smarter Asset Management</h1>
        <p>
          Stage, optimize, and prepare your asset data for CMMS integration. Drag‑and‑drop
          hierarchies, dynamic attributes, and analytics designed for reliability teams.
        </p>
      </section>

      <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        <div className="card">
          <h3>Drag‑and‑Drop Hierarchy</h3>
          <p>Build and curate asset/location trees quickly, with copy/paste and bulk moves.</p>
        </div>
        <div className="card">
          <h3>Dynamic Attributes</h3>
          <p>Per‑tenant CMMS templates & validation to match Maximo and ISO 14224 specs.</p>
        </div>
        <div className="card">
          <h3>CMMS‑Ready Export</h3>
          <p>Map and export clean data to your CMMS with confidence.</p>
        </div>
      </section>
    </>
  );
}
