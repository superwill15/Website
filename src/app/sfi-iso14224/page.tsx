'use client';

import { useState } from 'react';

export default function SfiIso14224Landing() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AssetStage",
    "url": "https://assetstage.io",
    "logo": "https://assetstage.io/logo.png"
  };

  const pageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SFI + ISO 14224 Executive Summary",
    "description": "Why fleets need SFI coding plus ISO 14224 to fix maritime CMMS data quality. Download the implementation checklist.",
    "publisher": { "@type": "Organization", "name": "AssetStage" }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        const redirect = (form.querySelector('input[name="redirect"]') as HTMLInputElement)?.value;
        window.location.href = redirect || '/thank-you';
      } else {
        throw new Error(json.message || 'Submission failed');
      }
    } catch (err: any) {
      setError(err?.message || 'Could not submit the form.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />

      <main className="wrap">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <h1>Stop Losing Millions to Bad Maintenance Data</h1>
            <p className="sub">
              The fastest path to reliable maritime CMMS data is <strong>SFI coding</strong> (what &amp; where)
              + <strong>ISO 14224</strong> (how &amp; why). Get the implementation checklist.
            </p>

            <div className="split">
              {/* LEFT: Value props */}
              <div className="card">
                <div className="badge">Executive Summary</div>
                <ul className="checks">
                  <li><span>✅</span> 70% faster spare parts search</li>
                  <li><span>✅</span> 25% higher first-time fix rate</li>
                  <li><span>✅</span> 15–20% lower inventory costs</li>
                  <li><span>✅</span> 40% better predictive accuracy</li>
                </ul>

                <div className="mini-case">
                  <div className="mini-title">North Sea operator (dual implementation)</div>
                  <div className="mini-grid">
                    <div><strong>30%</strong><br/>less unplanned downtime</div>
                    <div><strong>2.3M</strong><br/>annual savings</div>
                    <div><strong>45%</strong><br/>better parts availability</div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Form */}
              <div className="card form">
                <h2> Get the SFI + ISO 14224 Checklist</h2>
                <p className="muted">Step-by-step phases • Pre-mapped codes • Ready-to-use CMMS tasks</p>

                {error && (
                  <div role="alert" className="alert">
                    {error} — or email <a href="mailto:team@assetstage.io">team@assetstage.io</a>
                  </div>
                )}

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Web3Forms */}
                  <input type="hidden" name="access_key" value="c300faca-a3f7-4781-b00c-83651d9db015" />
                  <input type="hidden" name="subject" value="SFI + ISO 14224 Checklist Request" />
                  <input type="hidden" name="from_name" value="AssetStage Website" />
                  <input type="hidden" name="form_type" value="checklist_request" />
                  <input type="hidden" name="page" value="/sfi-iso14224" />
                  <input type="hidden" name="redirect" value="https://assetstage.io/thank-you" />
                  {/* honeypot */}
                  <input type="checkbox" name="botcheck" tabIndex={-1} style={{ display: 'none' }} />

                  <div className="grid">
                    <label>
                      <span>Full name *</span>
                      <input name="name" type="text" required autoComplete="name" />
                    </label>
                    <label>
                      <span>Work email *</span>
                      <input name="email" type="email" required autoComplete="email" />
                    </label>
                  </div>

                  <div className="grid">
                    <label>
                      <span>Company *</span>
                      <input name="company" type="text" required autoComplete="organization" />
                    </label>
                    <label>
                      <span>Fleet size</span>
                      <select name="fleet_size" defaultValue="">
                        <option value="">Select</option>
                        <option value="1-5">1–5 vessels</option>
                        <option value="6-10">6–10 vessels</option>
                        <option value="11-25">11–25 vessels</option>
                        <option value="26-50">26–50 vessels</option>
                        <option value="50+">50+ vessels</option>
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span>What are your data challenges? (optional)</span>
                    <textarea name="notes" placeholder="e.g., duplicate PMs, inconsistent SFI, missing failure codes" />
                  </label>

                  <button type="submit" className="btn" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Email me the checklist'}
                  </button>

                  <p className="tiny">
                    By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
                  </p>
                </form>

                <div className="or">
                  <span>or</span>
                </div>

                <a href="#demo" className="btn-outlined"> Book a 15-min call</a>
              </div>
            </div>
          </div>
        </section>

        {/* Explainer row (SFI vs ISO) */}
        <section className="explain">
          <div className="container">
            <div className="ex-grid">
              <div className="ex-card">
                <h3>SFI = What &amp; Where</h3>
                <p>Universal equipment identification for vessels. Structure parts and systems so crews can find the right item in seconds.</p>
                <ul className="dots">
                  <li>Main group → group → sub-group → detail code</li>
                  <li>Works across shipyards, suppliers, and CMMS</li>
                  <li>Example: <code>735.007</code> = Stern tube seal</li>
                </ul>
              </div>
              <div className="ex-card">
                <h3>ISO 14224 = How &amp; Why</h3>
                <p>Standardized reliability & maintenance data: equipment classes, failure modes, and maintenance actions that enable analytics.</p>
                <ul className="dots">
                  <li>Benchmark failures across sister vessels</li>
                  <li>Predictive maintenance & root-cause analysis</li>
                  <li>Feeds work planning with real failure patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="strip" id="demo">
          <div className="container strip-inner">
            <div>
              <h3>See AssetStage implement SFI + ISO 14224 in weeks</h3>
              <p className="muted">Clean, standardized data ready for AMOS, Maximo, SAP — without six-figure consulting.</p>
            </div>
            <div className="strip-actions">
              <a href="/#demo" className="btn white">Schedule a demo</a>
              <a href="https://app.assetstage.io" target="_blank" rel="noopener noreferrer" className="btn ghost">Start free trial</a>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        :root{
          --primary:#1e3c72; --primary2:#2a5298;
          --text:#0b1220; --muted:#5b6b86;
          --bg:#f7f9fc; --card:#ffffff; --line:#e7edf6; --good:#27ae60;
        }
        *{box-sizing:border-box}
        body{margin:0; font-family: Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif; color:var(--text); background:var(--bg)}
        .wrap{min-height:100vh}

        .container{max-width:1120px; margin:0 auto; padding:0 20px}

        .hero{background:linear-gradient(180deg,#f5f9ff,#eef3f9); padding:48px 0 64px}
        .hero h1{margin:0 0 8px; font-size:36px; line-height:1.2}
        .sub{color:var(--muted); margin:0 0 22px; font-size:18px}

        .split{display:grid; grid-template-columns: 1.1fr 0.9fr; gap:20px}
        .card{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:22px; box-shadow:0 6px 18px rgba(0,0,0,0.05)}
        .badge{display:inline-block; padding:6px 10px; border-radius:999px; background:#edf2ff; color:#2b45a6; font-weight:700; font-size:12px; margin-bottom:10px}

        .checks{list-style:none; padding:0; margin:10px 0 18px}
        .checks li{display:flex; gap:8px; align-items:flex-start; margin:6px 0}
        .checks span{line-height:1.2}

        .mini-case{border-top:1px dashed var(--line); padding-top:14px}
        .mini-title{font-weight:700; margin-bottom:8px}
        .mini-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:10px}
        .mini-grid div{background:#fafcff; border:1px solid var(--line); border-radius:10px; padding:10px; text-align:center}

        .form h2{margin:0 0 6px}
        .muted{color:var(--muted)}
        .grid{display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:12px 0}
        label{display:flex; flex-direction:column; gap:6px; font-size:14px}
        input, select, textarea{padding:10px 12px; border:1px solid #dbe3ef; border-radius:10px; font-size:14px; background:white}
        textarea{min-height:100px; resize:vertical}
        .block{margin-top:8px}

        .btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 16px; border-radius:12px; border:1px solid transparent; background:var(--primary); color:#fff; font-weight:800; text-decoration:none}
        .btn:hover{opacity:.95}
        .btn-outlined{display:inline-flex; margin-top:10px; padding:10px 14px; border-radius:12px; border:1px solid var(--primary); color:var(--primary); text-decoration:none; font-weight:800; background:#fff}
        .btn.white{background:#fff; color:var(--primary); border-color:#fff}
        .btn.ghost{background:transparent; border-color:#fff; color:#fff}

        .alert{background:#fff4e6; border:1px solid #ffd5a8; color:#7b4b00; padding:10px 12px; border-radius:10px; margin:8px 0}

        .explain{padding:32px 0 10px}
        .ex-grid{display:grid; grid-template-columns:1fr 1fr; gap:20px}
        .ex-card{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:20px}
        .dots{margin:10px 0 0; padding-left:20px}
        code{background:#eef3ff; padding:2px 6px; border-radius:6px}

        .strip{background:linear-gradient(90deg,var(--primary),var(--primary2)); color:#fff; padding:26px 0}
        .strip-inner{display:flex; align-items:center; justify-content:space-between; gap:20px}
        .strip-actions{display:flex; gap:10px; flex-wrap:wrap}

        .or{display:flex; align-items:center; gap:10px; margin:12px 0}
        .or:before, .or:after{content:""; flex:1; height:1px; background:var(--line)}

        @media (max-width: 980px){
          .split{grid-template-columns:1fr}
          .mini-grid{grid-template-columns:1fr 1fr}
          .ex-grid{grid-template-columns:1fr}
          .grid{grid-template-columns:1fr}
          .strip-inner{flex-direction:column; align-items:flex-start}
        }
      `}</style>
    </>
  );
}

