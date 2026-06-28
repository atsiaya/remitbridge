"use client";

import { motion } from "framer-motion";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const metrics = [
  { value: "190+",   label: "Countries served"         },
  { value: "65",     label: "Currencies supported"     },
  { value: "$14.2B", label: "Processed in 2024"        },
  { value: "99.98%", label: "Platform uptime SLA"      },
];

const whatWeBuild = [
  {
    eyebrow: "Global Banking",
    title: "Accounts & Wallets",
    desc: "USD, EUR, GBP, and multi-currency accounts with local banking details — giving businesses a genuine local presence in every market they operate.",
  },
  {
    eyebrow: "Payments",
    title: "Transfers & Payouts",
    desc: "Cross-border transfers, supplier payments, bulk payroll, and mass payout infrastructure across 190+ destination countries.",
  },
  {
    eyebrow: "Treasury",
    title: "FX & Liquidity",
    desc: "Mid-market currency exchange with 72-hour rate locks, real-time liquidity tools, and exposure management for finance teams.",
  },
  {
    eyebrow: "Connectivity",
    title: "eSIM & Top-Ups",
    desc: "Instant digital mobile connectivity and airtime recharge across 190+ countries — managed from the same platform as your payments.",
  },
];

const values = [
  {
    num: "01",
    title: "Trust & Transparency",
    desc: "Financial services should be clear, fair, and predictable. Every fee, every rate, every rule — visible before you commit.",
  },
  {
    num: "02",
    title: "Global Accessibility",
    desc: "The tools that power large multinationals should be equally available to a ten-person startup running payroll across three continents.",
  },
  {
    num: "03",
    title: "Security First",
    desc: "Compliance and security are not features — they are the foundation every product decision is built on.",
  },
  {
    num: "04",
    title: "Customer Obsession",
    desc: "We measure success by outcomes for the finance teams, founders, and developers who rely on our infrastructure every day.",
  },
];

const compliancePillars = [
  {
    title: "Enterprise Security",
    desc: "256-bit AES encryption in transit and at rest. SOC 2 Type II certified. PCI-DSS Level 1 compliant. Independent penetration testing every six months.",
  },
  {
    title: "KYC & AML Controls",
    desc: "Automated identity verification, OFAC/UN/EU sanctions screening, and real-time transaction monitoring — built into the platform, not bolted on after.",
  },
  {
    title: "Segregated Client Funds",
    desc: "Your money is never commingled with operational funds. Held in ring-fenced custodian accounts at tier-1 banks in every operating region.",
  },
];

const openRoles = [
  { title: "Senior Backend Engineer",      team: "Infrastructure",    location: "Remote · UTC−5 to UTC+3" },
  { title: "Compliance Analyst",           team: "Legal & Compliance", location: "London · Hybrid"          },
  { title: "Product Manager — Payments",   team: "Product",           location: "New York · Hybrid"         },
  { title: "Developer Relations Engineer", team: "Developer Growth",  location: "Remote · Global"           },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const IcoArrow = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Company() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="co-page">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="co-hero">
          <div className="rb-wrap">
            <motion.div
              className="co-hero__inner"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="co-eyebrow-pill">About RemitBridge</div>

              <h1 className="co-hero__h1">
                Building financial infrastructure<br />
                for a <span className="co-hero__accent">borderless world</span>
              </h1>

              <p className="co-hero__sub">
                RemitBridge exists because global businesses deserve the same
                quality of financial infrastructure that was once only available
                to the largest multinationals. One platform. Every border.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
        <div className="co-stats-bar">
          <div className="rb-wrap">
            <div className="co-stats-grid">
              {metrics.map((m, i) => (
                <div key={i} className="co-stat">
                  <div className="co-stat__val">{m.value}</div>
                  <div className="co-stat__label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MISSION & VISION ──────────────────────────────────────────────── */}
        <section className="co-section">
          <div className="rb-wrap">
            <div className="co-mv-grid">
              <motion.div
                className="co-mv-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div className="eyebrow">Our mission</div>
                <h2 className="co-mv-card__h2">
                  Simplify cross-border finance for every business
                </h2>
                <p className="co-mv-card__p">
                  Businesses today operate globally, yet financial
                  infrastructure often remains fragmented, expensive, and
                  difficult to access. RemitBridge exists to fix that —
                  replacing a tangle of banks, FX brokers, and payment
                  processors with a single regulated platform that works
                  the way modern teams do.
                </p>
              </motion.div>

              <motion.div
                className="co-mv-card co-mv-card--dark"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div className="eyebrow" style={{ color: "#93C5FD" }}>Our vision</div>
                <h2 className="co-mv-card__h2" style={{ color: "#fff" }}>
                  A world with no financial borders
                </h2>
                <p className="co-mv-card__p" style={{ color: "#9CA3AF" }}>
                  We envision a future where any business — regardless of
                  size, domicile, or operating market — can send money, hold
                  currencies, issue cards, and scale internationally without
                  geographic or institutional limitation. That is the
                  infrastructure we are building.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ─────────────────────────────────────────────────── */}
        <section className="co-section co-section--alt">
          <div className="rb-wrap">
            <div className="eyebrow">What we build</div>
            <h2 className="sec-h2">
              Products designed for<br />global commerce
            </h2>
            <p className="co-section-sub">
              Every product in our platform is purpose-built for businesses
              that operate across borders — not adapted from domestic infrastructure.
            </p>

            <div className="co-build-grid">
              {whatWeBuild.map((item, i) => (
                <motion.div
                  key={i}
                  className="co-build-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="eyebrow">{item.eyebrow}</div>
                  <h3 className="co-build-card__title">{item.title}</h3>
                  <p className="co-build-card__desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────────────────────────── */}
        <section className="co-section">
          <div className="rb-wrap">
            <div className="co-values-head">
              <div>
                <div className="eyebrow">Our values</div>
                <h2 className="sec-h2">
                  The principles behind<br />every decision we make
                </h2>
              </div>
            </div>

            <div className="co-values-grid">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="co-value-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="co-value-card__num">{v.num}</div>
                  <h3 className="co-value-card__title">{v.title}</h3>
                  <p className="co-value-card__desc">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLIANCE / TRUST ────────────────────────────────────────────── */}
        <section className="co-section co-section--alt">
          <div className="rb-wrap">
            <div className="co-trust-banner">
              <div className="co-trust-banner__header">
                <div className="eyebrow" style={{ color: "#93C5FD" }}>
                  Security, compliance &amp; reliability
                </div>
                <h2 className="co-trust-banner__h2">
                  Regulated infrastructure<br />you can depend on
                </h2>
                <p className="co-trust-banner__sub">
                  We build with regulatory responsibility at the core —
                  not as a checkbox, but as an engineering discipline.
                  Our infrastructure supports businesses operating across
                  multiple regulated markets simultaneously.
                </p>
                <div className="co-trust-badges">
                  {["FCA Authorised", "SOC 2 Type II", "PCI-DSS L1", "ISO 27001", "FinCEN MSB"].map(b => (
                    <span key={b} className="co-trust-badge">{b}</span>
                  ))}
                </div>
              </div>

              <div className="co-trust-pillars">
                {compliancePillars.map((p, i) => (
                  <motion.div
                    key={i}
                    className="co-trust-pillar"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    <div className="co-trust-pillar__num">0{i + 1}</div>
                    <div className="co-trust-pillar__title">{p.title}</div>
                    <div className="co-trust-pillar__desc">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CAREERS ───────────────────────────────────────────────────────── */}
        <section className="co-section">
          <div className="rb-wrap">
            <div className="co-careers-grid">
              {/* Left — copy */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="eyebrow">Careers</div>
                <h2 className="sec-h2">
                  Build the future of<br />global financial infrastructure
                </h2>
                <p className="co-careers-sub">
                  We're a distributed team united by a conviction that
                  international finance should be simple, transparent, and
                  available to every business. If that resonates, we'd
                  love to hear from you.
                </p>
                <a href="/careers" className="btn-blue" style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
                  View all open roles <IcoArrow />
                </a>
              </motion.div>

              {/* Right — role list */}
              <div className="co-roles-list">
                {openRoles.map((role, i) => (
                  <motion.a
                    key={i}
                    href="/careers"
                    className="co-role-row"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div className="co-role-row__left">
                      <div className="co-role-row__title">{role.title}</div>
                      <div className="co-role-row__meta">
                        <span className="co-role-row__team">{role.team}</span>
                        <span className="co-role-row__sep">·</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                    <div className="co-role-row__arrow"><IcoArrow /></div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT / CTA ─────────────────────────────────────────────────── */}
        <section className="co-section co-section--alt">
          <div className="rb-wrap">
            <div className="co-cta-banner">
              <h2 className="co-cta-banner__h2">
                Let's build globally together
              </h2>
              <p className="co-cta-banner__sub">
                Whether you're looking for a payments partner, integration
                support, or a business collaboration — our team is ready.
              </p>
              <div className="co-cta-banner__actions">
                <a href="/contact" className="btn-white">
                  Contact us <IcoArrow />
                </a>
                <a href="/partner" className="btn-outline-white">
                  Partner with us
                </a>
              </div>

              {/* Contact details strip */}
              <div className="co-cta-contact">
                <div className="co-cta-contact__item">
                  <span className="co-cta-contact__label">Email</span>
                  <a href="mailto:support@remitbridge.com" className="co-cta-contact__val">
                    support@remitbridge.com
                  </a>
                </div>
                <div className="co-cta-contact__divider" />
                <div className="co-cta-contact__item">
                  <span className="co-cta-contact__label">Phone</span>
                  <a href="tel:+15552038841" className="co-cta-contact__val">
                    +1 (555) 203-8841
                  </a>
                </div>
                <div className="co-cta-contact__divider" />
                <div className="co-cta-contact__item">
                  <span className="co-cta-contact__label">HQ</span>
                  <span className="co-cta-contact__val">New York · London</span>
                </div>
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
    text-decoration: none; border: 1.5px solid var(--rb-gray-200);
    transition: border-color .15s, background .15s;
  }
  .btn-outline:hover { border-color: var(--rb-gray-400); background: var(--rb-gray-50); }
  .btn-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-900);
    font-size: 14px; font-weight: 700;
    padding: 13px 24px; border-radius: 9px;
    text-decoration: none; transition: background .15s;
  }
  .btn-white:hover { background: var(--rb-gray-100); }
  .btn-outline-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    font-size: 14px; font-weight: 600;
    padding: 13px 24px; border-radius: 9px;
    text-decoration: none; border: 1.5px solid rgba(255,255,255,.2);
    transition: border-color .15s;
  }
  .btn-outline-white:hover { border-color: rgba(255,255,255,.4); }

  /* ── Shared typography ── */
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
  .co-page { background: var(--rb-white); }

  /* ── Hero ── */
  .co-hero {
    padding: 88px 0 80px;
    border-bottom: 1px solid var(--rb-gray-100);
  }
  .co-hero__inner { max-width: 780px; }
  .co-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50); border: 1px solid var(--rb-blue-200);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700);
    letter-spacing: .06em; text-transform: uppercase;
    margin-bottom: 24px;
  }
  .co-hero__h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.6rem, 5vw, 4rem);
    font-weight: 800; line-height: 1.07;
    letter-spacing: -.03em; color: var(--rb-gray-900);
    margin-bottom: 20px;
  }
  .co-hero__accent { color: var(--rb-blue-700); }
  .co-hero__sub {
    font-size: 1.05rem; color: var(--rb-gray-500);
    line-height: 1.8; max-width: 580px;
  }

  /* ── Stats bar ── */
  .co-stats-bar {
    background: var(--rb-blue-700);
    border-bottom: 1px solid var(--rb-blue-800);
  }
  .co-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
  }
  .co-stat {
    padding: 32px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,.12);
  }
  .co-stat:last-child { border-right: none; }
  .co-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .co-stat__label {
    font-size: 12px; color: rgba(255,255,255,.6);
    margin-top: 7px; font-weight: 500;
  }
  @media (max-width: 640px) {
    .co-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .co-stat:nth-child(2) { border-right: none; }
    .co-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Section helpers ── */
  .co-section { padding: 96px 0; }
  .co-section--alt {
    background: var(--rb-gray-50);
    border-top: 1px solid var(--rb-gray-100);
    border-bottom: 1px solid var(--rb-gray-100);
  }
  .co-section-sub {
    font-size: .95rem; color: var(--rb-gray-500);
    line-height: 1.8; max-width: 500px; margin-bottom: 48px;
  }

  /* ── Mission / Vision ── */
  .co-mv-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .co-mv-card {
    border: 1px solid var(--rb-gray-200);
    border-radius: 20px; padding: 48px 40px;
    background: var(--rb-white);
  }
  .co-mv-card--dark {
    background: var(--rb-gray-900);
    border-color: var(--rb-gray-800);
  }
  .co-mv-card__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    font-weight: 800; letter-spacing: -.02em;
    color: var(--rb-gray-900); line-height: 1.15;
    margin-bottom: 16px;
  }
  .co-mv-card__p {
    font-size: .9rem; color: var(--rb-gray-500); line-height: 1.8;
  }
  @media (max-width: 720px) {
    .co-mv-grid { grid-template-columns: 1fr; }
    .co-mv-card { padding: 36px 28px; }
  }

  /* ── What we build ── */
  .co-build-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--rb-gray-200);
    border: 1px solid var(--rb-gray-200);
    border-radius: 16px; overflow: hidden;
  }
  .co-build-card {
    background: var(--rb-white); padding: 40px 36px;
    transition: background .18s;
  }
  .co-build-card:hover { background: var(--rb-blue-50); }
  .co-build-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.15rem; font-weight: 700;
    color: var(--rb-gray-900); margin-bottom: 12px;
  }
  .co-build-card__desc {
    font-size: .875rem; color: var(--rb-gray-500); line-height: 1.8;
  }
  @media (max-width: 640px) {
    .co-build-grid { grid-template-columns: 1fr; }
    .co-build-card { padding: 28px 24px; }
  }

  /* ── Values ── */
  .co-values-head { margin-bottom: 48px; }
  .co-values-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .co-value-card {
    border: 1px solid var(--rb-gray-200);
    border-radius: 16px; padding: 36px 32px;
    background: var(--rb-white);
    transition: border-color .18s, box-shadow .18s;
  }
  .co-value-card:hover {
    border-color: var(--rb-blue-200);
    box-shadow: 0 0 0 4px rgba(29,78,216,.05);
  }
  .co-value-card__num {
    font-size: 11px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700); margin-bottom: 16px;
  }
  .co-value-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900); margin-bottom: 12px;
  }
  .co-value-card__desc {
    font-size: .875rem; color: var(--rb-gray-500); line-height: 1.8;
  }
  @media (max-width: 640px) {
    .co-values-grid { grid-template-columns: 1fr; }
    .co-value-card { padding: 28px 24px; }
  }

  /* ── Trust banner ── */
  .co-trust-banner {
    background: var(--rb-gray-900);
    border-radius: 20px; padding: 64px 56px;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 64px; align-items: start;
  }
  .co-trust-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.7rem, 3vw, 2.3rem);
    font-weight: 800; letter-spacing: -.025em;
    color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .co-trust-banner__sub {
    font-size: .9rem; color: #9CA3AF;
    line-height: 1.8; margin-bottom: 28px;
  }
  .co-trust-badges { display: flex; flex-wrap: wrap; gap: 8px; }
  .co-trust-badge {
    background: rgba(255,255,255,.07);
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 6px; padding: 4px 12px;
    font-size: 10.5px; font-weight: 700;
    color: rgba(255,255,255,.5); letter-spacing: .04em;
  }
  .co-trust-pillars {
    display: flex; flex-direction: column; gap: 0;
  }
  .co-trust-pillar {
    border-top: 1px solid rgba(255,255,255,.08);
    padding: 28px 0;
  }
  .co-trust-pillar:first-child { border-top: none; padding-top: 0; }
  .co-trust-pillar:last-child { padding-bottom: 0; }
  .co-trust-pillar__num {
    font-size: 11px; font-weight: 700;
    color: #60A5FA; letter-spacing: .08em; margin-bottom: 8px;
  }
  .co-trust-pillar__title {
    font-size: .95rem; font-weight: 700;
    color: #fff; margin-bottom: 8px;
  }
  .co-trust-pillar__desc {
    font-size: .85rem; color: #6B7280; line-height: 1.75;
  }
  @media (max-width: 780px) {
    .co-trust-banner {
      grid-template-columns: 1fr; padding: 40px 28px; gap: 40px;
    }
  }

  /* ── Careers ── */
  .co-careers-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 80px; align-items: start;
  }
  .co-careers-sub {
    font-size: .95rem; color: var(--rb-gray-500);
    line-height: 1.8; margin-bottom: 28px;
  }
  .co-roles-list {
    border: 1px solid var(--rb-gray-200);
    border-radius: 16px; overflow: hidden;
  }
  .co-role-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 24px; border-bottom: 1px solid var(--rb-gray-100);
    text-decoration: none; transition: background .15s;
    background: var(--rb-white);
  }
  .co-role-row:last-child { border-bottom: none; }
  .co-role-row:hover { background: var(--rb-blue-50); }
  .co-role-row__title {
    font-size: .9rem; font-weight: 700; color: var(--rb-gray-900);
    margin-bottom: 5px;
  }
  .co-role-row__meta {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; color: var(--rb-gray-400);
  }
  .co-role-row__team {
    background: var(--rb-blue-50); color: var(--rb-blue-700);
    border-radius: 4px; padding: 2px 8px;
    font-size: .75rem; font-weight: 600;
  }
  .co-role-row__sep { color: var(--rb-gray-200); }
  .co-role-row__arrow { color: var(--rb-gray-400); flex-shrink: 0; }
  @media (max-width: 780px) {
    .co-careers-grid { grid-template-columns: 1fr; gap: 40px; }
  }

  /* ── CTA banner ── */
  .co-cta-banner {
    background: var(--rb-gray-900);
    border-radius: 20px; padding: 72px 56px;
    text-align: center;
  }
  .co-cta-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; letter-spacing: -.025em;
    color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .co-cta-banner__sub {
    font-size: 1rem; color: #9CA3AF; line-height: 1.8;
    max-width: 480px; margin: 0 auto 36px;
  }
  .co-cta-banner__actions {
    display: flex; gap: 12px; justify-content: center;
    flex-wrap: wrap; margin-bottom: 40px;
  }
  .co-cta-contact {
    display: flex; align-items: center; justify-content: center;
    gap: 24px; flex-wrap: wrap;
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,.08);
  }
  .co-cta-contact__item {
    display: flex; flex-direction: column; align-items: center; gap: 3px;
  }
  .co-cta-contact__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .07em;
    text-transform: uppercase; color: rgba(255,255,255,.35);
  }
  .co-cta-contact__val {
    font-size: .875rem; color: rgba(255,255,255,.7);
    text-decoration: none; transition: color .15s;
  }
  .co-cta-contact__val:hover { color: #fff; }
  .co-cta-contact__divider {
    width: 1px; height: 36px; background: rgba(255,255,255,.1);
  }
  @media (max-width: 640px) {
    .co-cta-banner { padding: 48px 24px; }
    .co-cta-contact__divider { display: none; }
  }
`;
