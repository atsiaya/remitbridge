"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const featuredProducts = [
  {
    id: "usd",
    eyebrow: "Global Banking",
    title: "USD Accounts",
    desc: "Receive, hold, and send USD globally through dedicated account infrastructure designed for modern international businesses. Get local routing and account numbers that work exactly like a US bank account.",
    bullets: [
      "Dedicated US routing & account numbers",
      "Receive SWIFT, ACH, and wire transfers",
      "Instant access — no branch visits required",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768730534/692ca904948ae143aac5a33f_hero_Image_3_-p-500_lqmszx.png",
  },
  {
    id: "cards",
    eyebrow: "Cards",
    title: "Virtual USD Cards",
    desc: "Issue secure virtual cards for subscriptions, advertising, procurement, and team expenses with real-time spend controls, custom limits, and instant provisioning — no plastic required.",
    bullets: [
      "Issue unlimited virtual cards instantly",
      "Per-card spend limits and merchant controls",
      "Real-time transaction notifications",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768716663/visa-virtual-card-removebg-preview_wow5ad.png",
  },
  {
    id: "transfers",
    eyebrow: "Payments",
    title: "International Transfers",
    desc: "Move money globally through optimized local payment rails with transparent pricing, fast settlement, and full tracking from initiation to credit confirmation on every corridor.",
    bullets: [
      "50+ destination countries supported",
      "Sub-3 second settlement on major corridors",
      "End-to-end payment status tracking",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "fx",
    eyebrow: "Treasury",
    title: "Currency Exchange",
    desc: "Convert between major and emerging market currencies using competitive mid-market exchange rates refreshed every 30 seconds. Lock rates for up to 72 hours to eliminate FX risk on future settlements.",
    bullets: [
      "Mid-market rates — no hidden markups",
      "72-hour rate lock before confirmation",
      "65 currencies supported for conversion",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "esim",
    eyebrow: "Connectivity",
    title: "Global eSIM",
    desc: "Instant digital mobile connectivity across 50+ countries without physical SIM cards. Activate in seconds from your dashboard or via API — ideal for teams managing travel or field operations globally.",
    bullets: [
      "Instant activation — no SIM swap needed",
      "50+ countries on a single eSIM profile",
      "Managed via dashboard or REST API",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
  {
    id: "topups",
    eyebrow: "Connectivity",
    title: "Mobile Top-Ups",
    desc: "Recharge airtime and data plans for any mobile number across 150+ countries through a unified platform — programmatically via API or directly from your RemitBridge dashboard.",
    bullets: [
      "150+ countries, 500+ mobile operators",
      "Instant delivery — no delays",
      "Bulk top-up via API for scale",
    ],
    image:
      "https://res.cloudinary.com/dbmlsgjof/image/upload/v1768733078/hero-fullhd_rjboib.png",
  },
];

const ecosystemProducts = [
  { title: "USD Accounts",          desc: "Global USD receiving and holding accounts." },
  { title: "EUR Accounts",          desc: "European banking and SEPA collections."     },
  { title: "GBP Accounts",          desc: "Local UK payment and Faster Payments rails." },
  { title: "Multi-Currency Wallets",desc: "Hold and manage balances across 65 currencies." },
  { title: "Virtual Cards",         desc: "Secure instant-issue online payment cards."  },
  { title: "Bulk Payouts",          desc: "Mass payment distributions to 5,000+ recipients." },
  { title: "FX Exchange",           desc: "Real-time currency conversions at mid-market." },
  { title: "Treasury Tools",        desc: "Liquidity management and FX exposure controls." },
  { title: "Global eSIM",           desc: "Digital connectivity in 50+ countries."     },
  { title: "Mobile Top-Ups",        desc: "Airtime and data recharge for 500+ operators." },
  { title: "Developer APIs",        desc: "Embed accounts, payments, cards, and FX."    },
  { title: "Compliance Suite",      desc: "KYC, AML screening, and regulatory reporting." },
];

const categories = [
  "Accounts", "Cards", "Payments", "Treasury", "Connectivity", "Developer APIs",
];

const complianceFeatures = [
  {
    title: "KYC & AML",
    desc: "Automated identity verification, ongoing transaction monitoring, sanctions screening, and risk-based compliance decisions — handled at the platform level.",
  },
  {
    title: "Enterprise Security",
    desc: "256-bit AES encryption, SOC 2 Type II certification, PCI-DSS Level 1 compliance, and segregated client fund custody at tier-1 banks.",
  },
  {
    title: "Developer APIs",
    desc: "REST APIs covering 100% of platform functionality. SDKs for Node.js, Python, PHP, and Go. Webhooks for every payment and account event.",
  },
];

// ─── ICON ─────────────────────────────────────────────────────────────────────
const IcoCheck = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const IcoArrow = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="prod-page">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="prod-hero">
          <div className="rb-wrap">
            <motion.div
              className="prod-hero__inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="prod-eyebrow-pill">Products</div>

              <h1 className="prod-hero__h1">
                Financial infrastructure<br />
                for <span className="prod-hero__accent">global businesses</span>
              </h1>

              <p className="prod-hero__sub">
                Accounts, cards, FX, transfers, connectivity, and APIs —
                everything your business needs to operate across borders,
                from one regulated platform.
              </p>

              <div className="prod-hero__actions">
                <a href="/register" className="btn-blue">
                  Open an account <IcoArrow />
                </a>
                <a href="/developers" className="btn-outline">
                  View API docs
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
        <div className="prod-stats-bar">
          <div className="rb-wrap">
            <div className="prod-stats-grid">
              {[
                { val: "50+",  label: "Countries supported"    },
                { val: "65",    label: "Currencies held"        },
                { val: "< 3s",  label: "Settlement on majors"   },
                { val: "99.98%",label: "Platform uptime"        },
              ].map((s, i) => (
                <div key={i} className="prod-stat">
                  <div className="prod-stat__val">{s.val}</div>
                  <div className="prod-stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CATEGORY PILLS ────────────────────────────────────────────────── */}
        <section className="prod-categories">
          <div className="rb-wrap">
            <div className="prod-categories__inner">
              {categories.map((cat) => (
                <button key={cat} className="prod-cat-pill">{cat}</button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────── */}
        <section className="prod-featured">
          <div className="rb-wrap">
            {featuredProducts.map((product, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={product.id}
                  className={`prod-feat-row ${reverse ? "prod-feat-row--reverse" : ""}`}
                >
                  {/* Text */}
                  <motion.div
                    className="prod-feat-row__text"
                    initial={{ opacity: 0, x: reverse ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                  >
                    <div className="eyebrow">{product.eyebrow}</div>
                    <h2 className="sec-h2">{product.title}</h2>
                    <p className="prod-feat-row__desc">{product.desc}</p>

                    <ul className="prod-feat-row__bullets">
                      {product.bullets.map((b, i) => (
                        <li key={i} className="prod-feat-row__bullet">
                          <span className="prod-bullet-icon"><IcoCheck /></span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a href={`/product/${product.id}`} className="btn-blue" style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
                      Learn more <IcoArrow />
                    </a>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className="prod-feat-row__media"
                    initial={{ opacity: 0, x: reverse ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                  >
                    <div className="prod-feat-row__img-wrap">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={480}
                        height={340}
                        className="prod-feat-row__img"
                        priority={index === 0}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ECOSYSTEM GRID ────────────────────────────────────────────────── */}
        <section className="prod-section prod-section--alt">
          <div className="rb-wrap">
            <div className="prod-ecosystem-head">
              <div className="eyebrow">Complete ecosystem</div>
              <h2 className="sec-h2">Every tool your global<br />finance team needs</h2>
              <p className="prod-ecosystem-sub">
                One regulated, auditable platform. No stitching together five vendors.
              </p>
            </div>

            <div className="prod-ecosystem-grid">
              {ecosystemProducts.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="prod-eco-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.045 }}
                >
                  <div className="prod-eco-card__title">{p.title}</div>
                  <div className="prod-eco-card__desc">{p.desc}</div>
                  <a href="#" className="prod-eco-card__link">
                    Learn more →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE / TRUST ────────────────────────────────────────────── */}
        <section className="prod-section">
          <div className="rb-wrap">
            <div className="prod-trust-banner">
              <div className="prod-trust-banner__left">
                <div className="eyebrow" style={{ color: "#93C5FD" }}>
                  Compliance & security
                </div>
                <h2 className="prod-trust-banner__h2">
                  Built for scale.<br />Built for compliance.
                </h2>
                <p className="prod-trust-banner__sub">
                  Enterprise-grade infrastructure trusted by global businesses,
                  fintechs, and distributed finance teams operating across
                  regulated markets.
                </p>
                <div className="prod-trust-badges">
                  {["FCA Authorised", "SOC 2 Type II", "PCI-DSS L1", "ISO 27001"].map((b) => (
                    <span key={b} className="prod-trust-badge">{b}</span>
                  ))}
                </div>
              </div>

              <div className="prod-trust-banner__features">
                {complianceFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    className="prod-trust-feature"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="prod-trust-feature__num">0{i + 1}</div>
                    <div className="prod-trust-feature__title">{f.title}</div>
                    <div className="prod-trust-feature__desc">{f.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="prod-section prod-section--alt">
          <div className="rb-wrap">
            <div className="prod-cta-banner">
              <h2 className="prod-cta-banner__h2">
                Build globally with confidence
              </h2>
              <p className="prod-cta-banner__sub">
                Open a RemitBridge account in under 10 minutes. Access banking,
                payments, treasury, connectivity, and developer tools from a
                single regulated platform.
              </p>
              <div className="prod-cta-banner__actions">
                <a href="/register" className="btn-blue">
                  Open account — free <IcoArrow />
                </a>
                <a href="/contact" className="btn-outline">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
// All tokens reference --rb-* variables defined in layout.tsx globals.
// Page-local classes are prefixed prod- to avoid collisions.
const PAGE_STYLES = `
  /* ── Shared buttons (duplicated here for page isolation, layout defines these globally) ── */
  .btn-blue {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-blue-700); color: #fff;
    font-size: 14px; font-weight: 600;
    padding: 13px 24px; border-radius: 9px;
    text-decoration: none; border: none; cursor: pointer;
    transition: background .15s;
  }
  .btn-blue:hover { background: var(--rb-blue-800); }

  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-700);
    font-size: 14px; font-weight: 600;
    padding: 13px 24px; border-radius: 9px;
    text-decoration: none;
    border: 1.5px solid var(--rb-gray-200);
    transition: border-color .15s, background .15s;
  }
  .btn-outline:hover { border-color: var(--rb-gray-400); background: var(--rb-gray-50); }

  /* ── Shared typography (mirrors layout globals) ── */
  .eyebrow {
    font-size: 11.5px; font-weight: 700;
    letter-spacing: .09em; color: var(--rb-blue-700);
    text-transform: uppercase; margin-bottom: 14px;
  }
  .sec-h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.7rem);
    font-weight: 800; letter-spacing: -.025em;
    color: var(--rb-gray-900); line-height: 1.12;
    margin-bottom: 14px;
  }

  /* ── Page wrapper ── */
  .prod-page { background: var(--rb-white); }

  /* ── Hero ── */
  .prod-hero {
    background: var(--rb-white);
    border-bottom: 1px solid var(--rb-gray-100);
    padding: 88px 0 80px;
  }
  .prod-hero__inner { max-width: 760px; }
  .prod-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50); border: 1px solid var(--rb-blue-200);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700);
    letter-spacing: .06em; text-transform: uppercase;
    margin-bottom: 24px;
  }
  .prod-hero__h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.6rem, 5vw, 4rem);
    font-weight: 800; line-height: 1.07;
    letter-spacing: -.03em; color: var(--rb-gray-900);
    margin-bottom: 20px;
  }
  .prod-hero__accent { color: var(--rb-blue-700); }
  .prod-hero__sub {
    font-size: 1.05rem; color: var(--rb-gray-500);
    line-height: 1.8; max-width: 560px; margin-bottom: 36px;
  }
  .prod-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

  /* ── Stats bar ── */
  .prod-stats-bar {
    background: var(--rb-blue-700);
    border-bottom: 1px solid var(--rb-blue-800);
  }
  .prod-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
  }
  .prod-stat {
    padding: 32px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,.12);
  }
  .prod-stat:last-child { border-right: none; }
  .prod-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .prod-stat__label {
    font-size: 12px; color: rgba(255,255,255,.6);
    margin-top: 7px; font-weight: 500;
  }
  @media (max-width: 640px) {
    .prod-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .prod-stat:nth-child(2) { border-right: none; }
    .prod-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Category pills ── */
  .prod-categories {
    padding: 28px 0;
    border-bottom: 1px solid var(--rb-gray-100);
    background: var(--rb-white);
  }
  .prod-categories__inner {
    display: flex; gap: 10px; flex-wrap: wrap;
  }
  .prod-cat-pill {
    border: 1.5px solid var(--rb-gray-200);
    border-radius: 100px;
    background: var(--rb-white);
    padding: 7px 18px;
    font-size: 13px; font-weight: 600;
    color: var(--rb-gray-500);
    cursor: pointer; transition: all .15s;
  }
  .prod-cat-pill:hover {
    border-color: var(--rb-blue-700);
    color: var(--rb-blue-700);
    background: var(--rb-blue-50);
  }

  /* ── Featured products ── */
  .prod-featured { padding: 96px 0; }
  .prod-feat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: center;
    padding-bottom: 96px;
    border-bottom: 1px solid var(--rb-gray-100);
    margin-bottom: 96px;
  }
  .prod-feat-row:last-child {
    border-bottom: none; margin-bottom: 0; padding-bottom: 0;
  }
  .prod-feat-row--reverse { direction: rtl; }
  .prod-feat-row--reverse > * { direction: ltr; }
  .prod-feat-row__desc {
    font-size: .95rem; color: var(--rb-gray-500);
    line-height: 1.8; margin-bottom: 24px;
  }
  .prod-feat-row__bullets { list-style: none; margin-bottom: 28px; display: flex; flex-direction: column; gap: 12px; }
  .prod-feat-row__bullet {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: .9rem; color: var(--rb-gray-500); line-height: 1.5;
  }
  .prod-bullet-icon {
    color: var(--rb-green-500); flex-shrink: 0; margin-top: 2px;
  }
  .prod-feat-row__img-wrap {
    background: var(--rb-gray-50);
    border: 1px solid var(--rb-gray-200);
    border-radius: 20px;
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    padding: 32px; min-height: 320px;
  }
  .prod-feat-row__img { object-fit: contain; width: 100%; height: auto; }
  @media (max-width: 860px) {
    .prod-feat-row { grid-template-columns: 1fr; gap: 40px; direction: ltr !important; }
    .prod-feat-row > * { direction: ltr !important; }
  }

  /* ── Section helpers ── */
  .prod-section { padding: 96px 0; }
  .prod-section--alt {
    background: var(--rb-gray-50);
    border-top: 1px solid var(--rb-gray-100);
    border-bottom: 1px solid var(--rb-gray-100);
  }

  /* ── Ecosystem grid ── */
  .prod-ecosystem-head { margin-bottom: 48px; }
  .prod-ecosystem-sub {
    font-size: .95rem; color: var(--rb-gray-500); line-height: 1.8;
    max-width: 480px;
  }
  .prod-ecosystem-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--rb-gray-200);
    border: 1px solid var(--rb-gray-200);
    border-radius: 16px; overflow: hidden;
  }
  .prod-eco-card {
    background: var(--rb-white); padding: 28px 24px;
    display: flex; flex-direction: column; gap: 8px;
    transition: background .18s;
  }
  .prod-eco-card:hover { background: var(--rb-blue-50); }
  .prod-eco-card__title {
    font-size: .9rem; font-weight: 700; color: var(--rb-gray-900);
  }
  .prod-eco-card__desc {
    font-size: .82rem; color: var(--rb-gray-500); line-height: 1.65; flex: 1;
  }
  .prod-eco-card__link {
    font-size: .82rem; font-weight: 600; color: var(--rb-blue-700);
    text-decoration: none; margin-top: 4px;
    transition: opacity .15s;
  }
  .prod-eco-card__link:hover { opacity: .75; }
  @media (max-width: 960px) { .prod-ecosystem-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 640px) { .prod-ecosystem-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 400px) { .prod-ecosystem-grid { grid-template-columns: 1fr; } }

  /* ── Trust banner ── */
  .prod-trust-banner {
    background: var(--rb-gray-900);
    border-radius: 20px;
    padding: 64px 56px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: start;
  }
  .prod-trust-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 800; letter-spacing: -.025em;
    color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .prod-trust-banner__sub {
    font-size: .9rem; color: #9CA3AF; line-height: 1.8;
    margin-bottom: 28px;
  }
  .prod-trust-badges { display: flex; flex-wrap: wrap; gap: 8px; }
  .prod-trust-badge {
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 6px; padding: 4px 12px;
    font-size: 10.5px; font-weight: 700;
    color: rgba(255,255,255,.5); letter-spacing: .04em;
  }
  .prod-trust-banner__features {
    display: flex; flex-direction: column; gap: 32px;
  }
  .prod-trust-feature { border-top: 1px solid rgba(255,255,255,.08); padding-top: 28px; }
  .prod-trust-feature:first-child { border-top: none; padding-top: 0; }
  .prod-trust-feature__num {
    font-size: 11px; font-weight: 700; color: #60A5FA;
    letter-spacing: .08em; margin-bottom: 8px;
  }
  .prod-trust-feature__title {
    font-size: .95rem; font-weight: 700; color: #fff; margin-bottom: 8px;
  }
  .prod-trust-feature__desc {
    font-size: .875rem; color: #6B7280; line-height: 1.75;
  }
  @media (max-width: 780px) {
    .prod-trust-banner { grid-template-columns: 1fr; padding: 40px 28px; gap: 40px; }
  }

  /* ── CTA banner ── */
  .prod-cta-banner {
    background: var(--rb-gray-900);
    border-radius: 20px;
    padding: 72px 56px;
    text-align: center;
  }
  .prod-cta-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; letter-spacing: -.025em;
    color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .prod-cta-banner__sub {
    font-size: 1rem; color: #9CA3AF; line-height: 1.8;
    max-width: 560px; margin: 0 auto 36px;
  }
  .prod-cta-banner__actions {
    display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
  }
  .prod-cta-banner .btn-blue { background: #fff; color: var(--rb-gray-900); }
  .prod-cta-banner .btn-blue:hover { background: var(--rb-gray-100); }
  .prod-cta-banner .btn-outline {
    border-color: rgba(255,255,255,.2); color: #fff; background: transparent;
  }
  .prod-cta-banner .btn-outline:hover { border-color: rgba(255,255,255,.4); background: transparent; }
  @media (max-width: 640px) {
    .prod-cta-banner { padding: 48px 24px; }
    .prod-trust-banner { padding: 40px 24px; }
  }
`;
