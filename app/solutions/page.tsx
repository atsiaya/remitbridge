"use client";

import { motion } from "framer-motion";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const capabilities = [
  {
    eyebrow: "Payments",
    title: "Money Transfers",
    desc: "Send money internationally across 190+ countries with transparent pricing, local rails, and near real-time settlement on all major corridors.",
    href: "/solutions/money-transfers",
  },
  {
    eyebrow: "Treasury",
    title: "Currency Exchange",
    desc: "Access mid-market FX rates refreshed every 30 seconds. Lock rates up to 72 hours ahead of settlement to eliminate foreign exchange risk.",
    href: "/solutions/currency-exchange",
  },
  {
    eyebrow: "Connectivity",
    title: "Mobile Top-Ups",
    desc: "Recharge airtime and data plans for any number across 150+ countries and 500+ operators — instantly, via dashboard or API.",
    href: "/solutions/mobile-topups",
  },
  {
    eyebrow: "Connectivity",
    title: "Global eSIM",
    desc: "Instant digital mobile connectivity in 190+ countries. Activate in seconds from your dashboard — no physical SIM or carrier switch required.",
    href: "/solutions/esim",
  },
];

const businessTypes = [
  {
    tag: "Startups",
    title: "Launch globally from day one",
    desc: "Multi-currency wallets, international payouts, and FX access without the overhead of a corporate treasury team. Get to market faster.",
    bullets: ["Open in under 10 minutes", "No minimum volume", "API-first from day one"],
  },
  {
    tag: "Scale-ups",
    title: "Automate as you grow",
    desc: "Replace manual payment operations with automated bulk payouts, rate locks, and webhook-driven reconciliation built for finance teams at scale.",
    bullets: ["Bulk payouts to 5,000 recipients", "72h FX rate locks", "ERP & accounting integrations"],
  },
  {
    tag: "Enterprises",
    title: "Institutional-grade infrastructure",
    desc: "Dedicated liquidity pools, custom SLA guarantees, bespoke compliance workflows, and white-label options for high-volume financial operations.",
    bullets: ["Custom FX spreads", "Dedicated solutions engineer", "On-premise deployment option"],
  },
];

const platformFeatures = [
  {
    num: "01",
    title: "Multi-Currency Wallets",
    desc: "Hold and manage balances across 65 currencies from a single account. No switching between providers or managing multiple bank relationships.",
  },
  {
    num: "02",
    title: "Smart Payment Routing",
    desc: "Automatically selects the fastest, lowest-cost corridor for every payment. Local rails where available, SWIFT where necessary — transparent either way.",
  },
  {
    num: "03",
    title: "Real-Time Reporting",
    desc: "Track every transaction from initiation to credit confirmation. Full ledger exports in CSV, MT940, and XBRL — or push directly to your ERP via webhook.",
  },
  {
    num: "04",
    title: "Unified API",
    desc: "One REST API covering transfers, FX, cards, wallets, eSIM, and top-ups. SDKs for Node.js, Python, PHP, and Go. 100% feature parity with the dashboard.",
  },
];

const steps = [
  { n: "01", title: "Create your account",    desc: "Sign up in minutes. No branch visit, no paper forms." },
  { n: "02", title: "Verify your business",   desc: "Automated KYB — most businesses approved within the hour." },
  { n: "03", title: "Fund your wallet",       desc: "Deposit via SWIFT, SEPA, ACH, or local bank transfer." },
  { n: "04", title: "Send globally",          desc: "Pay suppliers, staff, or partners across 190+ countries." },
];

const testimonials = [
  {
    initials: "SK",
    name: "Sarah Kim",
    role: "Finance Lead, Atlas Ventures",
    stars: "★★★★★",
    quote: "RemitBridge reduced our international payment operations from days to minutes. The FX transparency alone changed how we plan cross-border spend.",
  },
  {
    initials: "DM",
    name: "David Mwangi",
    role: "Operations Manager, Nova Logistics",
    stars: "★★★★★",
    quote: "The FX automation saved our finance team countless hours every month. Rate locks mean we know exactly what we're paying before we commit.",
  },
];

const securityItems = [
  { label: "KYC & AML Monitoring",       desc: "Automated screening on every transaction against OFAC, UN, and EU sanctions lists." },
  { label: "Real-Time Fraud Detection",   desc: "ML-based anomaly detection flags unusual patterns before funds move." },
  { label: "256-bit AES Encryption",      desc: "All data encrypted in transit and at rest. SOC 2 Type II certified." },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
type IcoProps = {
  d: string;
  size?: number;
};

const Ico = ({ d, size = 18 }: IcoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
  </svg>
);
const IcoArrow  = ({ size = 16 }) => <Ico d="M5 12h14M12 5l7 7-7 7" size={size} />;
const IcoCheck  = () => <Ico d="M20 6L9 17l-5-5" size={14} />;
const IcoShield = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={20} />;

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Solutions() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="sl-page">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="sl-hero">
          <div className="rb-wrap">
            <motion.div
              className="sl-hero__inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="sl-eyebrow-pill">Global Financial Infrastructure</div>

              <h1 className="sl-hero__h1">
                Solutions built for<br />
                <span className="sl-hero__accent">modern global finance</span>
              </h1>

              <p className="sl-hero__sub">
                Move money, exchange currencies, issue multi-currency wallets,
                and manage global payments — from one regulated platform built
                for the way finance teams actually work.
              </p>

              <div className="sl-hero__actions">
                <a href="/register" className="btn-blue">
                  Explore solutions <IcoArrow />
                </a>
                <a href="/contact" className="btn-outline">
                  Contact sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
        <div className="sl-stats-bar">
          <div className="rb-wrap">
            <div className="sl-stats-grid">
              {[
                { val: "190+",   label: "Countries supported"    },
                { val: "65",     label: "Currencies held"        },
                { val: "99.98%", label: "Platform uptime"        },
                { val: "24/7",   label: "Transaction monitoring" },
              ].map((s, i) => (
                <div key={i} className="sl-stat">
                  <div className="sl-stat__val">{s.val}</div>
                  <div className="sl-stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CORE CAPABILITIES ─────────────────────────────────────────────── */}
        <section className="sl-section">
          <div className="rb-wrap">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="eyebrow">Core capabilities</div>
              <h2 className="sec-h2">Everything your business<br />needs to go global</h2>
              <p className="sl-section-sub">
                Four core services. One platform. One integration. One compliance layer.
              </p>
            </motion.div>

            <div className="sl-cap-grid">
              {capabilities.map((cap, i) => (
                <motion.a
                  key={i}
                  href={cap.href}
                  className="sl-cap-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="eyebrow">{cap.eyebrow}</div>
                  <h3 className="sl-cap-card__title">{cap.title}</h3>
                  <p className="sl-cap-card__desc">{cap.desc}</p>
                  <div className="sl-cap-card__cta">
                    Learn more <IcoArrow />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <section className="sl-section sl-section--alt">
          <div className="rb-wrap">
            <div className="eyebrow">Getting started</div>
            <h2 className="sec-h2">Live in under an hour</h2>
            <p className="sl-section-sub">
              No branch visits. No paperwork. No waiting weeks for account approval.
            </p>

            <div className="sl-steps-grid">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="sl-step"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  {i < steps.length - 1 && <div className="sl-step__connector" />}
                  <div className="sl-step__num">{i + 1}</div>
                  <div className="sl-step__label">{s.n}</div>
                  <div className="sl-step__title">{s.title}</div>
                  <div className="sl-step__desc">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM FEATURES ─────────────────────────────────────────────── */}
        <section className="sl-section">
          <div className="rb-wrap">
            <div className="eyebrow">Platform infrastructure</div>
            <h2 className="sec-h2">Built for the way<br />finance teams work</h2>
            <p className="sl-section-sub">
              Not just payment rails — a complete operational layer for global money movement.
            </p>

            <div className="sl-feat-grid">
              {platformFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  className="sl-feat-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="sl-feat-card__num">{f.num}</div>
                  <h3 className="sl-feat-card__title">{f.title}</h3>
                  <p className="sl-feat-card__desc">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BUSINESS TYPES ────────────────────────────────────────────────── */}
        <section className="sl-section sl-section--alt">
          <div className="rb-wrap">
            <div className="eyebrow">Who we serve</div>
            <h2 className="sec-h2">Designed for every<br />stage of growth</h2>
            <p className="sl-section-sub">
              From seed-stage startup to public-company treasury — the same platform scales with you.
            </p>

            <div className="sl-biz-grid">
              {businessTypes.map((b, i) => (
                <motion.div
                  key={i}
                  className="sl-biz-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="sl-biz-card__tag">{b.tag}</div>
                  <h3 className="sl-biz-card__title">{b.title}</h3>
                  <p className="sl-biz-card__desc">{b.desc}</p>
                  <ul className="sl-biz-card__bullets">
                    {b.bullets.map((bl, j) => (
                      <li key={j} className="sl-biz-card__bullet">
                        <span className="sl-biz-bullet-icon"><IcoCheck /></span>
                        {bl}
                      </li>
                    ))}
                  </ul>
                  <a href="/register" className="btn-blue" style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
                    Get started <IcoArrow />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECURITY ──────────────────────────────────────────────────────── */}
        <section className="sl-section">
          <div className="rb-wrap">
            <div className="sl-security-banner">
              <div className="sl-security-banner__left">
                <div className="sl-security-icon"><IcoShield /></div>
                <div className="eyebrow" style={{ color: "#93C5FD" }}>
                  Security &amp; compliance
                </div>
                <h2 className="sl-security-banner__h2">
                  Enterprise-grade security<br />on every transaction
                </h2>
                <p className="sl-security-banner__sub">
                  Security and compliance are not features we added — they are
                  the foundation every product decision is built on. Every
                  transaction on RemitBridge passes through multiple automated
                  risk layers before funds move.
                </p>
                <div className="sl-trust-badges">
                  {["FCA Authorised", "SOC 2 Type II", "PCI-DSS L1", "ISO 27001"].map(b => (
                    <span key={b} className="sl-trust-badge">{b}</span>
                  ))}
                </div>
              </div>

              <div className="sl-security-banner__right">
                {securityItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="sl-security-item"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div className="sl-security-item__check"><IcoCheck /></div>
                    <div>
                      <div className="sl-security-item__title">{item.label}</div>
                      <div className="sl-security-item__desc">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <section className="sl-section sl-section--alt">
          <div className="rb-wrap">
            <div className="eyebrow">Customer stories</div>
            <h2 className="sec-h2">Trusted by growing<br />businesses worldwide</h2>

            <div className="sl-testi-grid">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  className="sl-testi-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="sl-testi-stars">{t.stars}</div>
                  <p className="sl-testi-quote">"{t.quote}"</p>
                  <div className="sl-testi-author">
                    <div className="sl-testi-avatar">{t.initials}</div>
                    <div>
                      <div className="sl-testi-name">{t.name}</div>
                      <div className="sl-testi-role">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="sl-section">
          <div className="rb-wrap">
            <div className="sl-cta-banner">
              <h2 className="sl-cta-banner__h2">
                Build globally with confidence
              </h2>
              <p className="sl-cta-banner__sub">
                Open a RemitBridge account in under 10 minutes. Every solution
                on this page — accounts, FX, cards, payouts, eSIM — available
                from day one.
              </p>
              <div className="sl-cta-banner__actions">
                <a href="/register" className="btn-white">
                  Start today — free <IcoArrow />
                </a>
                <a href="/contact" className="btn-outline-white">
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
const PAGE_STYLES = `
  /* ── Shared buttons ── */
  .btn-blue {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    font-size: 14px; font-weight: 600; padding: 13px 24px;
    border-radius: 9px; text-decoration: none; border: none;
    cursor: pointer; transition: background .15s;
  }
  .btn-blue:hover { background: var(--rb-blue-800, #1e40af); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-700, #374151);
    font-size: 14px; font-weight: 600; padding: 13px 24px;
    border-radius: 9px; text-decoration: none;
    border: 1.5px solid var(--rb-gray-200, #E5E7EB);
    transition: border-color .15s, background .15s;
  }
  .btn-outline:hover { border-color: var(--rb-gray-400, #9CA3AF); background: var(--rb-gray-50, #F9FAFB); }
  .btn-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-900, #111827);
    font-size: 14px; font-weight: 700; padding: 13px 24px;
    border-radius: 9px; text-decoration: none; transition: background .15s;
  }
  .btn-white:hover { background: var(--rb-gray-100, #F3F4F6); }
  .btn-outline-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    font-size: 14px; font-weight: 600; padding: 13px 24px;
    border-radius: 9px; text-decoration: none;
    border: 1.5px solid rgba(255,255,255,.2); transition: border-color .15s;
  }
  .btn-outline-white:hover { border-color: rgba(255,255,255,.4); }

  /* ── Shared typography ── */
  .eyebrow {
    font-size: 11.5px; font-weight: 700; letter-spacing: .09em;
    color: var(--rb-blue-700, #1D4ED8); text-transform: uppercase; margin-bottom: 14px;
  }
  .sec-h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.7rem); font-weight: 800;
    letter-spacing: -.025em; color: var(--rb-gray-900, #111827);
    line-height: 1.12; margin-bottom: 14px;
  }

  /* ── Page wrapper ── */
  .sl-page { background: var(--rb-white, #fff); }

  /* ── Hero ── */
  .sl-hero {
    padding: 88px 0 80px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .sl-hero__inner { max-width: 760px; }
  .sl-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase; margin-bottom: 24px;
  }
  .sl-hero__h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.6rem, 5vw, 4rem); font-weight: 800;
    line-height: 1.07; letter-spacing: -.03em;
    color: var(--rb-gray-900, #111827); margin-bottom: 20px;
  }
  .sl-hero__accent { color: var(--rb-blue-700, #1D4ED8); }
  .sl-hero__sub {
    font-size: 1.05rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 560px; margin-bottom: 36px;
  }
  .sl-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

  /* ── Stats bar ── */
  .sl-stats-bar {
    background: var(--rb-blue-700, #1D4ED8);
    border-bottom: 1px solid var(--rb-blue-800, #1e40af);
  }
  .sl-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .sl-stat {
    padding: 32px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,.12);
  }
  .sl-stat:last-child { border-right: none; }
  .sl-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .sl-stat__label { font-size: 12px; color: rgba(255,255,255,.6); margin-top: 7px; font-weight: 500; }
  @media (max-width: 640px) {
    .sl-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .sl-stat:nth-child(2) { border-right: none; }
    .sl-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Section helpers ── */
  .sl-section { padding: 96px 0; }
  .sl-section--alt {
    background: var(--rb-gray-50, #F9FAFB);
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .sl-section-sub {
    font-size: .95rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 500px; margin-bottom: 48px;
  }

  /* ── Capabilities ── */
  .sl-cap-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 1px; background: var(--rb-gray-200, #E5E7EB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; overflow: hidden;
  }
  .sl-cap-card {
    background: #fff; padding: 36px 28px;
    text-decoration: none; display: flex; flex-direction: column;
    gap: 0; transition: background .18s;
  }
  .sl-cap-card:hover { background: var(--rb-blue-50, #EFF6FF); }
  .sl-cap-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 12px;
  }
  .sl-cap-card__desc {
    font-size: .85rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.75; flex: 1; margin-bottom: 20px;
  }
  .sl-cap-card__cta {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 600;
    color: var(--rb-blue-700, #1D4ED8);
    transition: gap .15s;
  }
  .sl-cap-card:hover .sl-cap-card__cta { gap: 10px; }
  @media (max-width: 900px) { .sl-cap-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .sl-cap-grid { grid-template-columns: 1fr; } }

  /* ── How it works steps ── */
  .sl-steps-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 24px; margin-top: 0;
  }
  .sl-step { position: relative; }
  .sl-step__connector {
    position: absolute; top: 19px;
    left: calc(50% + 20px); right: calc(-50% + 20px);
    height: 1px; background: var(--rb-blue-200, #BFDBFE); z-index: 0;
  }
  .sl-step__num {
    width: 38px; height: 38px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    font-size: 13px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px; position: relative; z-index: 1;
  }
  .sl-step__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700, #1D4ED8); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .sl-step__title {
    font-size: .95rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 8px;
  }
  .sl-step__desc {
    font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.7;
  }
  @media (max-width: 800px) {
    .sl-steps-grid { grid-template-columns: repeat(2, 1fr); }
    .sl-step__connector { display: none; }
  }
  @media (max-width: 480px) { .sl-steps-grid { grid-template-columns: 1fr; } }

  /* ── Platform features ── */
  .sl-feat-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--rb-gray-200, #E5E7EB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; overflow: hidden;
  }
  .sl-feat-card {
    background: #fff; padding: 40px 36px; transition: background .18s;
  }
  .sl-feat-card:hover { background: var(--rb-gray-50, #F9FAFB); }
  .sl-feat-card__num {
    font-size: 11px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700, #1D4ED8); margin-bottom: 16px;
  }
  .sl-feat-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 12px;
  }
  .sl-feat-card__desc {
    font-size: .875rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8;
  }
  @media (max-width: 640px) { .sl-feat-grid { grid-template-columns: 1fr; } }

  /* ── Business types ── */
  .sl-biz-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .sl-biz-card {
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 36px 28px;
    background: #fff; display: flex; flex-direction: column;
    transition: border-color .18s, box-shadow .18s;
  }
  .sl-biz-card:hover {
    border-color: var(--rb-blue-200, #BFDBFE);
    box-shadow: 0 0 0 4px rgba(29,78,216,.05);
  }
  .sl-biz-card__tag {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 3px 12px;
    font-size: 11px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .05em; text-transform: uppercase;
    width: fit-content; margin-bottom: 20px;
  }
  .sl-biz-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 10px;
  }
  .sl-biz-card__desc {
    font-size: .875rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; margin-bottom: 20px; flex: 1;
  }
  .sl-biz-card__bullets {
    list-style: none; display: flex; flex-direction: column;
    gap: 10px; margin-bottom: 24px;
  }
  .sl-biz-card__bullet {
    display: flex; align-items: flex-start; gap: 9px;
    font-size: .85rem; color: var(--rb-gray-500, #6B7280);
  }
  .sl-biz-bullet-icon { color: #10B981; flex-shrink: 0; margin-top: 1px; }
  @media (max-width: 860px) { .sl-biz-grid { grid-template-columns: 1fr; } }

  /* ── Security banner ── */
  .sl-security-banner {
    background: var(--rb-gray-900, #111827);
    border-radius: 20px; padding: 64px 56px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: start;
  }
  .sl-security-icon {
    color: #60A5FA; margin-bottom: 16px;
  }
  .sl-security-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.7rem, 3vw, 2.3rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .sl-security-banner__sub {
    font-size: .9rem; color: #9CA3AF; line-height: 1.8; margin-bottom: 28px;
  }
  .sl-trust-badges { display: flex; flex-wrap: wrap; gap: 8px; }
  .sl-trust-badge {
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 6px; padding: 4px 12px;
    font-size: 10.5px; font-weight: 700;
    color: rgba(255,255,255,.5); letter-spacing: .04em;
  }
  .sl-security-banner__right {
    display: flex; flex-direction: column; gap: 0;
  }
  .sl-security-item {
    display: flex; gap: 16px; align-items: flex-start;
    border-top: 1px solid rgba(255,255,255,.08); padding: 28px 0;
  }
  .sl-security-item:first-child { border-top: none; padding-top: 0; }
  .sl-security-item:last-child { padding-bottom: 0; }
  .sl-security-item__check {
    width: 28px; height: 28px; border-radius: 8px;
    background: rgba(16,185,129,.15); border: 1px solid rgba(16,185,129,.25);
    display: flex; align-items: center; justify-content: center;
    color: #34D399; flex-shrink: 0;
  }
  .sl-security-item__title {
    font-size: .9rem; font-weight: 700; color: #fff; margin-bottom: 6px;
  }
  .sl-security-item__desc {
    font-size: .82rem; color: #6B7280; line-height: 1.7;
  }
  @media (max-width: 780px) {
    .sl-security-banner { grid-template-columns: 1fr; padding: 40px 28px; gap: 40px; }
  }

  /* ── Testimonials ── */
  .sl-testi-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 20px; margin-top: 48px;
  }
  .sl-testi-card {
    background: #fff; border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 36px 32px;
    display: flex; flex-direction: column; gap: 16px;
  }
  .sl-testi-stars { color: #F59E0B; font-size: 13px; letter-spacing: 2px; }
  .sl-testi-quote {
    font-size: .95rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; flex: 1;
  }
  .sl-testi-author { display: flex; align-items: center; gap: 12px; }
  .sl-testi-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8); flex-shrink: 0;
  }
  .sl-testi-name { font-size: .9rem; font-weight: 700; color: var(--rb-gray-900, #111827); }
  .sl-testi-role { font-size: .8rem; color: var(--rb-gray-400, #9CA3AF); }
  @media (max-width: 640px) { .sl-testi-grid { grid-template-columns: 1fr; } }

  /* ── CTA banner ── */
  .sl-cta-banner {
    background: var(--rb-gray-900, #111827);
    border-radius: 20px; padding: 72px 56px; text-align: center;
  }
  .sl-cta-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .sl-cta-banner__sub {
    font-size: 1rem; color: #9CA3AF; line-height: 1.8;
    max-width: 520px; margin: 0 auto 36px;
  }
  .sl-cta-banner__actions {
    display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
  }
  @media (max-width: 640px) {
    .sl-cta-banner { padding: 48px 24px; }
    .sl-security-banner { padding: 40px 24px; }
  }
`;
