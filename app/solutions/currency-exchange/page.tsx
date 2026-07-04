"use client";

import { motion } from "framer-motion";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "65",    label: "Currencies supported"       },
  { value: "24/7",  label: "Market access"              },
  { value: "< 30s", label: "Rate refresh interval"      },
  { value: "72h",   label: "Maximum rate lock duration" },
];

const features = [
  {
    num: "01",
    title: "Real-time mid-market rates",
    desc: "Live exchange rates refreshed every 30 seconds from a composite of five institutional liquidity providers — with the spread shown clearly before you confirm.",
  },
  {
    num: "02",
    title: "72-hour rate locks",
    desc: "Lock a rate before settlement and hold it for up to 72 hours. Eliminate FX exposure on future payments without buying a forward contract.",
  },
  {
    num: "03",
    title: "Instant wallet conversions",
    desc: "Convert between any supported currencies held in your RemitBridge wallets in seconds — no withdrawal, no wait, no bank involved.",
  },
  {
    num: "04",
    title: "FX automation via API",
    desc: "Trigger conversions programmatically on threshold, schedule, or event. Build automated treasury rules without a dedicated FX desk.",
  },
];

const steps = [
  {
    n: "01",
    title: "Choose your currency pair",
    desc: "Select the source and destination currencies from our full list of 65 supported pairs.",
  },
  {
    n: "02",
    title: "Review the live rate",
    desc: "See the mid-market rate, our spread, and the exact amount you'll receive — before committing.",
  },
  {
    n: "03",
    title: "Lock or execute",
    desc: "Confirm immediately or lock the rate for up to 72 hours and settle later.",
  },
  {
    n: "04",
    title: "Funds arrive instantly",
    desc: "Converted funds land in your destination wallet immediately — no processing delay.",
  },
];

const currencyPairs = [
  { from: "USD", to: "EUR", region: "Europe"       },
  { from: "USD", to: "GBP", region: "UK"           },
  { from: "USD", to: "KES", region: "East Africa"  },
  { from: "USD", to: "NGN", region: "West Africa"  },
  { from: "USD", to: "AED", region: "Gulf"         },
  { from: "USD", to: "INR", region: "South Asia"   },
  { from: "USD", to: "SGD", region: "SE Asia"      },
  { from: "USD", to: "ZAR", region: "South Africa" },
];

const useCases = [
  {
    eyebrow: "Payroll",
    title: "International payroll",
    desc: "Pay contractors and remote teams in their local currency at the real rate — not whatever your bank decides to charge that day.",
  },
  {
    eyebrow: "Trade",
    title: "Supplier payments",
    desc: "Reduce FX friction on cross-border procurement. Lock rates ahead of invoice due dates to eliminate cost uncertainty.",
  },
  {
    eyebrow: "Treasury",
    title: "Multi-currency holdings",
    desc: "Hold balances in 65 currencies, rebalance automatically, and monitor your FX exposure from one dashboard.",
  },
  {
    eyebrow: "Expansion",
    title: "Cross-border scaling",
    desc: "Enter new markets without setting up local banking. Collect, hold, convert, and pay — all from your RemitBridge account.",
  },
];

const treasuryFeatures = [
  {
    title: "Currency holdings",
    desc: "Maintain working balances in 65 currencies with no monthly holding fees.",
  },
  {
    title: "FX automation",
    desc: "Set threshold-based conversion rules so your treasury rebalances without manual intervention.",
  },
  {
    title: "Audit-ready reporting",
    desc: "Every conversion creates a timestamped record. Export full FX history in CSV or push to your ERP via API.",
  },
];

const securityItems = [
  {
    title: "Encrypted infrastructure",
    desc: "256-bit AES encryption on every transaction, in transit and at rest.",
  },
  {
    title: "AML screening",
    desc: "Automated compliance monitoring and sanctions checking on every conversion.",
  },
  {
    title: "Full audit trails",
    desc: "Immutable transaction logs ready for regulatory reporting and internal audits.",
  },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Ico = ({ d, size = 16 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const IcoArrow  = () => <Ico d="M5 12h14M12 5l7 7-7 7" />;
const IcoCheck  = () => <Ico d="M20 6L9 17l-5-5" size={13} />;
const IcoShield = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={20} />;

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CurrencyExchange() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="cx-page">
        <div className="rb-wrap">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <section className="cx-hero">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="cx-eyebrow-pill">Global Foreign Exchange</div>
              <h1 className="cx-h1">
                Exchange currencies<br />
                <span className="cx-h1__accent">with full transparency</span>
              </h1>
              <p className="cx-sub">
                Convert funds across 65 currencies using real-time mid-market
                rates, transparent spreads, and institutional-grade liquidity —
                with no hidden markups, ever.
              </p>
              <div className="cx-hero__actions">
                <a href="/register" className="btn-blue">
                  Start exchanging <IcoArrow />
                </a>
                <a href="#rates" className="btn-outline">
                  View live rates
                </a>
              </div>
            </motion.div>
          </section>

          {/* ── STATS BAR ────────────────────────────────────────────────── */}
          <div className="cx-stats-bar">
            {stats.map((s, i) => (
              <div key={i} className="cx-stat">
                <div className="cx-stat__val">{s.value}</div>
                <div className="cx-stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── FEATURES ─────────────────────────────────────────────────── */}
          <section className="cx-section">
            <div className="eyebrow">Platform capabilities</div>
            <h2 className="sec-h2">
              Built for modern<br />foreign exchange
            </h2>
            <p className="cx-section-sub">
              Everything a global finance team needs to manage currency
              conversions — from one-off swaps to automated treasury operations.
            </p>

            <div className="cx-feat-grid">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="cx-feat-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="cx-feat-card__num">{f.num}</div>
                  <h3 className="cx-feat-card__title">{f.title}</h3>
                  <p className="cx-feat-card__desc">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
          <section className="cx-section cx-section--alt">
            <div className="eyebrow">How it works</div>
            <h2 className="sec-h2">Four steps to any conversion</h2>
            <p className="cx-section-sub">
              From pair selection to settled funds in your wallet — the whole
              flow takes under 30 seconds.
            </p>

            <div className="cx-steps-grid">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  className="cx-step"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  {i < steps.length - 1 && <div className="cx-step__connector" />}
                  <div className="cx-step__num">{i + 1}</div>
                  <div className="cx-step__label">{s.n}</div>
                  <h3 className="cx-step__title">{s.title}</h3>
                  <p className="cx-step__desc">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CURRENCY PAIRS ───────────────────────────────────────────── */}
          <section id="rates" className="cx-section">
            <div className="eyebrow">Supported pairs</div>
            <h2 className="sec-h2">Popular currency pairs</h2>
            <p className="cx-section-sub">
              Major, regional, and emerging-market currencies — all accessible
              from one account. Full list of 65 currencies available in your dashboard.
            </p>

            <div className="cx-pairs-grid">
              {currencyPairs.map((pair, i) => (
                <motion.div
                  key={i}
                  className="cx-pair-card"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <div className="cx-pair-card__pair">
                    <span className="cx-pair-card__from">{pair.from}</span>
                    <span className="cx-pair-card__arrow">→</span>
                    <span className="cx-pair-card__to">{pair.to}</span>
                  </div>
                  <div className="cx-pair-card__region">{pair.region}</div>
                </motion.div>
              ))}
            </div>

            <div className="cx-pairs-footer">
              <span>+ 57 more currency pairs available</span>
              <a href="/register" className="cx-pairs-link">
                See all pairs <IcoArrow />
              </a>
            </div>
          </section>

          {/* ── USE CASES ────────────────────────────────────────────────── */}
          <section className="cx-section cx-section--alt">
            <div className="eyebrow">Who it's for</div>
            <h2 className="sec-h2">
              Designed for every<br />cross-border use case
            </h2>

            <div className="cx-use-grid">
              {useCases.map((u, i) => (
                <motion.div
                  key={i}
                  className="cx-use-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="eyebrow">{u.eyebrow}</div>
                  <h3 className="cx-use-card__title">{u.title}</h3>
                  <p className="cx-use-card__desc">{u.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── TREASURY ─────────────────────────────────────────────────── */}
          <section className="cx-section">
            <div className="cx-treasury-banner">
              <div className="cx-treasury-banner__left">
                <div className="eyebrow">Treasury management</div>
                <h2 className="cx-treasury-banner__h2">
                  Multi-currency treasury<br />without the complexity
                </h2>
                <p className="cx-treasury-banner__sub">
                  Hold, convert, and manage balances across 65 currencies from
                  a unified dashboard. Monitor FX exposures, reduce conversion
                  costs, and optimise global cash flow — without a dedicated
                  treasury desk.
                </p>
                <a href="/register" className="btn-blue"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Open your account <IcoArrow />
                </a>
              </div>

              <div className="cx-treasury-banner__features">
                {treasuryFeatures.map((f, i) => (
                  <div key={i} className="cx-treasury-feature">
                    <div className="cx-treasury-feature__icon"><IcoCheck /></div>
                    <div>
                      <div className="cx-treasury-feature__title">{f.title}</div>
                      <div className="cx-treasury-feature__desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECURITY ─────────────────────────────────────────────────── */}
          <section className="cx-section cx-section--alt">
            <div className="cx-security-banner">
              <div className="cx-security-banner__left">
                <div className="cx-security-icon"><IcoShield /></div>
                <div className="eyebrow" style={{ color: "#93C5FD" }}>
                  Security &amp; compliance
                </div>
                <h2 className="cx-security-banner__h2">
                  Enterprise-grade security<br />on every conversion
                </h2>
                <p className="cx-security-banner__sub">
                  Every FX transaction passes through automated encryption,
                  compliance screening, and audit logging — no exceptions.
                </p>
                <div className="cx-trust-badges">
                  {["FCA Authorised", "SOC 2 Type II", "PCI-DSS L1", "ISO 27001"].map(b => (
                    <span key={b} className="cx-trust-badge">{b}</span>
                  ))}
                </div>
              </div>

              <div className="cx-security-banner__right">
                {securityItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="cx-security-item"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="cx-security-item__check"><IcoCheck /></div>
                    <div>
                      <div className="cx-security-item__title">{item.title}</div>
                      <div className="cx-security-item__desc">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
          <section className="cx-section">
            <motion.div
              className="cx-testi"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="cx-testi__stars">★★★★★</div>
              <blockquote className="cx-testi__quote">
                "RemitBridge gives us full visibility into FX costs while delivering
                significantly better exchange rates than our previous banking channels.
                The rate-lock feature alone saves us tens of thousands per quarter."
              </blockquote>
              <div className="cx-testi__author">
                <div className="cx-testi__avatar">MC</div>
                <div>
                  <div className="cx-testi__name">Michael Carter</div>
                  <div className="cx-testi__role">Treasury Manager, GlobalTech Ltd</div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="cx-section" style={{ paddingTop: 0 }}>
            <div className="cx-cta-banner">
              <h2 className="cx-cta-banner__h2">
                Exchange currencies smarter
              </h2>
              <p className="cx-cta-banner__sub">
                Access competitive FX rates, instant conversions, and
                multi-currency treasury tools — all from one regulated platform.
              </p>
              <div className="cx-cta-banner__actions">
                <a href="/register" className="btn-white">
                  Start exchanging — free <IcoArrow />
                </a>
                <a href="/contact" className="btn-outline-white">
                  Talk to sales
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  /* ── Buttons ── */
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
    background: transparent; color: #fff; font-size: 14px; font-weight: 600;
    padding: 13px 24px; border-radius: 9px; text-decoration: none;
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

  /* ── Page ── */
  .cx-page { background: var(--rb-white, #fff); }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero ── */
  .cx-hero {
    padding: 88px 0 64px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .cx-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase; margin-bottom: 24px;
  }
  .cx-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.4rem, 4.5vw, 3.8rem); font-weight: 800;
    line-height: 1.07; letter-spacing: -.03em;
    color: var(--rb-gray-900, #111827); margin-bottom: 20px;
  }
  .cx-h1__accent { color: var(--rb-blue-700, #1D4ED8); }
  .cx-sub {
    font-size: 1.05rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 520px; margin-bottom: 36px;
  }
  .cx-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

  /* ── Stats bar ── */
  .cx-stats-bar {
    display: grid; grid-template-columns: repeat(4, 1fr);
    background: var(--rb-blue-700, #1D4ED8);
    border-radius: 16px; overflow: hidden; margin-bottom: 8px;
  }
  .cx-stat {
    padding: 28px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,.12);
  }
  .cx-stat:last-child { border-right: none; }
  .cx-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .cx-stat__label {
    font-size: 11.5px; color: rgba(255,255,255,.6); margin-top: 6px; font-weight: 500;
  }
  @media (max-width: 640px) {
    .cx-stats-bar { grid-template-columns: repeat(2, 1fr); }
    .cx-stat:nth-child(2) { border-right: none; }
    .cx-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Section helpers ── */
  .cx-section { padding: 80px 0; }
  .cx-section--alt {
    background: var(--rb-gray-50, #F9FAFB);
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-left: -24px; margin-right: -24px;
    padding-left: 24px; padding-right: 24px;
  }
  .cx-section-sub {
    font-size: .95rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 520px; margin-bottom: 48px;
  }

  /* ── Features grid ── */
  .cx-feat-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--rb-gray-200, #E5E7EB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; overflow: hidden;
  }
  .cx-feat-card {
    background: var(--rb-white, #fff); padding: 36px 32px; transition: background .18s;
  }
  .cx-feat-card:hover { background: var(--rb-blue-50, #EFF6FF); }
  .cx-feat-card__num {
    font-size: 11px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700, #1D4ED8); margin-bottom: 16px;
  }
  .cx-feat-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 10px;
  }
  .cx-feat-card__desc {
    font-size: .875rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8;
  }
  @media (max-width: 640px) { .cx-feat-grid { grid-template-columns: 1fr; } }

  /* ── Steps ── */
  .cx-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .cx-step { position: relative; }
  .cx-step__connector {
    position: absolute; top: 19px;
    left: calc(50% + 20px); right: calc(-50% + 20px);
    height: 1px; background: var(--rb-blue-200, #BFDBFE); z-index: 0;
  }
  .cx-step__num {
    width: 38px; height: 38px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    font-size: 13px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px; position: relative; z-index: 1;
  }
  .cx-step__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700, #1D4ED8); text-transform: uppercase; margin-bottom: 8px;
  }
  .cx-step__title {
    font-size: .95rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 8px;
  }
  .cx-step__desc { font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.7; }
  @media (max-width: 800px) {
    .cx-steps-grid { grid-template-columns: repeat(2, 1fr); }
    .cx-step__connector { display: none; }
  }
  @media (max-width: 480px) { .cx-steps-grid { grid-template-columns: 1fr; } }

  /* ── Currency pairs ── */
  .cx-pairs-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 14px; margin-bottom: 20px;
  }
  .cx-pair-card {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 12px;
    padding: 20px; background: var(--rb-white, #fff);
    transition: border-color .18s, box-shadow .18s;
  }
  .cx-pair-card:hover {
    border-color: var(--rb-blue-200, #BFDBFE);
    box-shadow: 0 4px 16px rgba(29,78,216,.07);
  }
  .cx-pair-card__pair {
    display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
  }
  .cx-pair-card__from {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1rem; font-weight: 800; color: var(--rb-gray-900, #111827);
  }
  .cx-pair-card__arrow { font-size: .9rem; color: var(--rb-blue-700, #1D4ED8); font-weight: 700; }
  .cx-pair-card__to {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1rem; font-weight: 800; color: var(--rb-blue-700, #1D4ED8);
  }
  .cx-pair-card__region { font-size: .75rem; color: var(--rb-gray-400, #9CA3AF); font-weight: 500; }
  .cx-pairs-footer {
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
    padding: 16px 0; border-top: 1px solid var(--rb-gray-100, #F3F4F6);
    font-size: .875rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .cx-pairs-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .875rem; font-weight: 600; color: var(--rb-blue-700, #1D4ED8);
    text-decoration: none; transition: opacity .15s;
  }
  .cx-pairs-link:hover { opacity: .75; }
  @media (max-width: 860px) { .cx-pairs-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .cx-pairs-grid { grid-template-columns: 1fr; } }

  /* ── Use cases ── */
  .cx-use-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 1px; background: var(--rb-gray-200, #E5E7EB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; overflow: hidden;
  }
  .cx-use-card {
    background: var(--rb-white, #fff); padding: 36px 32px; transition: background .18s;
  }
  .cx-use-card:hover { background: var(--rb-blue-50, #EFF6FF); }
  .cx-use-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 10px;
  }
  .cx-use-card__desc { font-size: .875rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8; }
  @media (max-width: 640px) { .cx-use-grid { grid-template-columns: 1fr; } }

  /* ── Treasury banner ── */
  .cx-treasury-banner {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 20px;
    padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr;
    gap: 56px; align-items: start; background: var(--rb-white, #fff);
  }
  .cx-treasury-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800;
    letter-spacing: -.025em; color: var(--rb-gray-900, #111827);
    line-height: 1.15; margin-bottom: 14px;
  }
  .cx-treasury-banner__sub {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8; margin-bottom: 28px;
  }
  .cx-treasury-banner__features { display: flex; flex-direction: column; }
  .cx-treasury-feature {
    display: flex; gap: 14px; align-items: flex-start;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6); padding: 22px 0;
  }
  .cx-treasury-feature:first-child { border-top: none; padding-top: 0; }
  .cx-treasury-feature:last-child { padding-bottom: 0; }
  .cx-treasury-feature__icon {
    width: 26px; height: 26px; border-radius: 7px;
    background: #ECFDF5; border: 1px solid #A7F3D0;
    display: flex; align-items: center; justify-content: center;
    color: #10B981; flex-shrink: 0; margin-top: 1px;
  }
  .cx-treasury-feature__title {
    font-size: .9rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 4px;
  }
  .cx-treasury-feature__desc { font-size: .82rem; color: var(--rb-gray-500, #6B7280); line-height: 1.7; }
  @media (max-width: 780px) {
    .cx-treasury-banner { grid-template-columns: 1fr; padding: 36px 28px; gap: 36px; }
  }

  /* ── Security banner ── */
  .cx-security-banner {
    background: var(--rb-gray-900, #111827); border-radius: 20px;
    padding: 56px 48px; display: grid; grid-template-columns: 1fr 1fr;
    gap: 56px; align-items: start;
  }
  .cx-security-icon { color: #60A5FA; margin-bottom: 16px; }
  .cx-security-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.15; margin-bottom: 14px;
  }
  .cx-security-banner__sub { font-size: .9rem; color: #9CA3AF; line-height: 1.8; margin-bottom: 28px; }
  .cx-trust-badges { display: flex; flex-wrap: wrap; gap: 8px; }
  .cx-trust-badge {
    background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12);
    border-radius: 6px; padding: 4px 12px;
    font-size: 10.5px; font-weight: 700; color: rgba(255,255,255,.5); letter-spacing: .04em;
  }
  .cx-security-banner__right { display: flex; flex-direction: column; }
  .cx-security-item {
    display: flex; gap: 14px; align-items: flex-start;
    border-top: 1px solid rgba(255,255,255,.08); padding: 24px 0;
  }
  .cx-security-item:first-child { border-top: none; padding-top: 0; }
  .cx-security-item:last-child { padding-bottom: 0; }
  .cx-security-item__check {
    width: 26px; height: 26px; border-radius: 7px;
    background: rgba(16,185,129,.15); border: 1px solid rgba(16,185,129,.25);
    display: flex; align-items: center; justify-content: center;
    color: #34D399; flex-shrink: 0;
  }
  .cx-security-item__title { font-size: .9rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
  .cx-security-item__desc { font-size: .82rem; color: #6B7280; line-height: 1.7; }
  @media (max-width: 780px) {
    .cx-security-banner { grid-template-columns: 1fr; padding: 36px 28px; gap: 36px; }
  }

  /* ── Testimonial ── */
  .cx-testi {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 20px;
    padding: 48px 56px; max-width: 860px; margin: 0 auto;
  }
  .cx-testi__stars { color: #F59E0B; font-size: 14px; letter-spacing: 2px; margin-bottom: 20px; }
  .cx-testi__quote {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.1rem, 2vw, 1.35rem); font-weight: 600;
    color: var(--rb-gray-700, #374151); line-height: 1.7;
    letter-spacing: -.01em; margin-bottom: 28px;
  }
  .cx-testi__author { display: flex; align-items: center; gap: 12px; }
  .cx-testi__avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: var(--rb-blue-50, #EFF6FF); border: 1px solid var(--rb-blue-200, #BFDBFE);
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 700; color: var(--rb-blue-700, #1D4ED8);
  }
  .cx-testi__name { font-size: .9rem; font-weight: 700; color: var(--rb-gray-900, #111827); }
  .cx-testi__role { font-size: .8rem; color: var(--rb-gray-400, #9CA3AF); }
  @media (max-width: 640px) { .cx-testi { padding: 32px 24px; } }

  /* ── CTA banner ── */
  .cx-cta-banner {
    background: var(--rb-gray-900, #111827); border-radius: 20px;
    padding: 72px 48px; text-align: center;
  }
  .cx-cta-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .cx-cta-banner__sub {
    font-size: 1rem; color: #9CA3AF; line-height: 1.8;
    max-width: 480px; margin: 0 auto 32px;
  }
  .cx-cta-banner__actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  @media (max-width: 640px) { .cx-cta-banner { padding: 48px 24px; } }
`;
