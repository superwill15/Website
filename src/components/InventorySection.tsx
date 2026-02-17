'use client';

import { BookOpen, Warehouse, Link2, BarChart3, TrendingUp, Building2 } from 'lucide-react';

export default function InventorySection() {
  return (
    <section className="section section-gray" id="inventory">
      <div className="container">
        <div className="section-header">
          <h2>Materials & Spare Parts Management</h2>
          <p>Centralise your item master, track inventory across storerooms, and link parts to assets for complete spare parts visibility</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><BookOpen size={28} /></div>
            <h3>Item Master Catalogue</h3>
            <p>
              Centralised parts catalogue with descriptions, commodity codes, and rotating/condition-monitored flags.
              Link items to multiple vendors and manufacturers with preferred supplier tracking.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><Warehouse size={28} /></div>
            <h3>Inventory Per Storeroom</h3>
            <p>
              Track stock balances, min/max levels, reorder points, and costs per storeroom per site.
              Compare inventory across all storerooms side by side — spot inconsistencies instantly.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><Link2 size={28} /></div>
            <h3>Spare Part BOMs</h3>
            <p>
              Link parts to assets and locations with quantities and fit positions.
              Copy a "gold standard" BOM across identical equipment in one click.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><BarChart3 size={28} /></div>
            <h3>Fleet-Wide Comparison</h3>
            <p>
              Compare storeroom stock levels across your entire fleet side by side.
              Identify where identical equipment has different spare part coverage.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><TrendingUp size={28} /></div>
            <h3>Usage Analytics</h3>
            <p>
              Import issue/return/transfer history from your CMMS.
              Calculate consumption rates, identify slow-moving stock and obsolete items.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon"><Building2 size={28} /></div>
            <h3>Vendor & Manufacturer Management</h3>
            <p>
              Centralised company register for all vendors and manufacturers.
              Track preferred vendors, lead times, and costs per item.
            </p>
          </div>
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '40px',
          fontSize: '16px',
          color: 'var(--text-light)',
          maxWidth: '800px',
          margin: '40px auto 0'
        }}>
          Works with Maximo, SAP PM, Oracle, and any CMMS. Import your existing inventory data and start standardising immediately.
        </p>
      </div>
    </section>
  );
}
