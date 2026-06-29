"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ─── ICONS ───────────────────────────────────────────────────────────────────
interface IcoProps {
  d: string;
  size?: number;
}

const Ico = ({ d, size = 16 }: IcoProps) => (
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
const IcoArrow  = () => <Ico d="M5 12h14M12 5l7 7-7 7" />;
const IcoHome   = () => <Ico d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />;
const IcoMail   = () => <Ico d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 9 8-9" />;
const IcoGlobe  = () => <Ico d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-2.5 3-4 6.5-4 10s1.5 7 4 10m0-20c2.5 3 4 6.5 4 10s-1.5 7-4 10M2 12h20" size={18} />;
const IcoZap    = () => <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" size={18} />;
const IcoShield = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={18} />;

// ─── QUICK LINKS ─────────────────────────────────────────────────────────────
const quickLinks = [
  { label: "Open an account",      href: "/register",    desc: "Start sending money globally today" },
  { label: "Explore products",     href: "/products",    desc: "Accounts, cards, FX, payouts & more" },
  { label: "Read the docs",        href: "/developers",  desc: "API reference and integration guides"  },
  { label: "Talk to sales",        href: "/contact",     desc: "Get a tailored solution for your team"  },
];

const upcomingFeatures = [
  { icon: <IcoGlobe />,  label: "Crypto-to-fiat corridors",  eta: "Q3 2025" },
  { icon: <IcoZap />,    label: "Instant card issuing API",   eta: "Q3 2025" },
  { icon: <IcoShield />, label: "Self-serve compliance suite", eta: "Q4 2025" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function NotFound() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="nf-page">

        <div className="rb-wrap">
          <div className="nf-grid">

            {/* ── LEFT — main message ─────────────────────────────────────── */}
            <motion.div
              className="nf-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              {/* Eyebrow */}
              <div className="nf-eyebrow-pill">
                <span className="nf-eyebrow-dot" />
                Something's coming here
              </div>

              {/* Heading */}
              <h1 className="nf-h1">
                This page is<br />
                <span className="nf-h1__accent">on its way</span>
              </h1>

              <p className="nf-sub">
                We're building fast — and this corner of RemitBridge isn't
                quite ready yet. It might be a new product, a feature page,
                or something we haven't announced. Either way, check back soon.
              </p>

              {/* Actions */}
              <div className="nf-actions">
                <Link href="/" className="btn-blue">
                  <IcoHome /> Back to home
                </Link>
                <Link href="/products" className="btn-outline">
                  Explore products <IcoArrow />
                </Link>
              </div>

              {/* Notify strip */}
              <div className="nf-notify">
                <IcoMail />
                <span>
                  Want to be notified when we launch?{" "}
                  <Link href="/register" className="nf-notify__link">
                    Create a free account →
                  </Link>
                </span>
              </div>
            </motion.div>

            {/* ── RIGHT — status card ──────────────────────────────────────── */}
            <motion.div
              className="nf-right"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Status card */}
              <div className="nf-card">
                <div className="nf-card__header">
                  <div>
                    <div className="nf-card__eyebrow">Page status</div>
                    <div className="nf-card__title">Coming soon</div>
                  </div>
                  <span className="nf-card__badge">In progress</span>
                </div>

                {/* Platform status row */}
                <div className="nf-card__status-row">
                  <span className="nf-card__status-dot" />
                  <span className="nf-card__status-text">
                    Platform fully operational — this URL is under construction
                  </span>
                </div>

                {/* Quick links */}
                <div className="nf-card__section-label">Where would you like to go?</div>
                <div className="nf-links">
                  {quickLinks.map((link, i) => (
                    <Link key={i} href={link.href} className="nf-link-row">
                      <div>
                        <div className="nf-link-row__label">{link.label}</div>
                        <div className="nf-link-row__desc">{link.desc}</div>
                      </div>
                      <div className="nf-link-row__arrow"><IcoArrow /></div>
                    </Link>
                  ))}
                </div>

                {/* Upcoming features */}
                <div className="nf-card__section-label" style={{ marginTop: 24 }}>
                  Coming to RemitBridge
                </div>
                <div className="nf-upcoming">
                  {upcomingFeatures.map((f, i) => (
                    <div key={i} className="nf-upcoming-row">
                      <div className="nf-upcoming-icon">{f.icon}</div>
                      <div className="nf-upcoming-label">{f.label}</div>
                      <div className="nf-upcoming-eta">{f.eta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
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

  /* ── Page shell ── */
  .nf-page {
    min-height: calc(100vh - 96px);
    background: var(--rb-white, #fff);
    display: flex; align-items: center;
    padding: 80px 0;
  }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; width: 100%; }

  /* ── Two-col grid ── */
  .nf-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 860px) {
    .nf-grid { grid-template-columns: 1fr; gap: 48px; }
  }

  /* ── Left ── */
  .nf-left { display: flex; flex-direction: column; gap: 0; }

  .nf-eyebrow-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase;
    width: fit-content; margin-bottom: 28px;
  }
  .nf-eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8);
    animation: nf-pulse 2s infinite;
  }
  @keyframes nf-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: .5; transform: scale(1.5); }
  }

  .nf-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.8rem, 5.5vw, 4.4rem);
    font-weight: 800; line-height: 1.06;
    letter-spacing: -.035em; color: var(--rb-gray-900, #111827);
    margin-bottom: 20px;
  }
  .nf-h1__accent { color: var(--rb-blue-700, #1D4ED8); }

  .nf-sub {
    font-size: 1.05rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 480px; margin-bottom: 36px;
  }

  .nf-actions {
    display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 28px;
  }

  .nf-notify {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: .875rem; color: var(--rb-gray-400, #9CA3AF);
    line-height: 1.6;
    padding: 16px 20px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 12px;
    max-width: 440px;
  }
  .nf-notify svg { flex-shrink: 0; margin-top: 2px; }
  .nf-notify__link {
    color: var(--rb-blue-700, #1D4ED8);
    text-decoration: none; font-weight: 600;
    transition: opacity .15s;
  }
  .nf-notify__link:hover { opacity: .75; }

  /* ── Right card ── */
  .nf-right { display: flex; flex-direction: column; gap: 0; }

  .nf-card {
    background: var(--rb-white, #fff);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 20px; padding: 32px;
    box-shadow: 0 8px 32px rgba(0,0,0,.06);
  }

  .nf-card__header {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 12px;
    margin-bottom: 20px;
  }
  .nf-card__eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 5px;
  }
  .nf-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.5rem; font-weight: 800;
    color: var(--rb-gray-900, #111827); letter-spacing: -.02em;
  }
  .nf-card__badge {
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    color: var(--rb-blue-700, #1D4ED8);
    font-size: 11px; font-weight: 700; letter-spacing: .05em;
    text-transform: uppercase; border-radius: 6px;
    padding: 4px 12px; white-space: nowrap; flex-shrink: 0;
  }

  .nf-card__status-row {
    display: flex; align-items: center; gap: 9px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 10px; padding: 12px 16px;
    margin-bottom: 24px;
  }
  .nf-card__status-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #10B981; flex-shrink: 0;
  }
  .nf-card__status-text {
    font-size: 12.5px; color: var(--rb-gray-500, #6B7280); font-weight: 500;
  }

  .nf-card__section-label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 10px;
  }

  /* ── Quick links ── */
  .nf-links {
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 12px; overflow: hidden;
  }
  .nf-link-row {
    display: flex; justify-content: space-between; align-items: center;
    gap: 12px; padding: 14px 18px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    text-decoration: none; background: var(--rb-white, #fff);
    transition: background .15s;
  }
  .nf-link-row:last-child { border-bottom: none; }
  .nf-link-row:hover { background: var(--rb-blue-50, #EFF6FF); }
  .nf-link-row__label {
    font-size: .875rem; font-weight: 600;
    color: var(--rb-gray-900, #111827); margin-bottom: 2px;
  }
  .nf-link-row__desc {
    font-size: .78rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .nf-link-row__arrow {
    color: var(--rb-gray-300, #D1D5DB); flex-shrink: 0;
    transition: color .15s, transform .15s;
  }
  .nf-link-row:hover .nf-link-row__arrow {
    color: var(--rb-blue-700, #1D4ED8); transform: translateX(3px);
  }

  /* ── Upcoming features ── */
  .nf-upcoming {
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 12px; overflow: hidden;
  }
  .nf-upcoming-row {
    display: flex; align-items: center; gap: 12px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .nf-upcoming-row:last-child { border-bottom: none; }
  .nf-upcoming-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    display: flex; align-items: center; justify-content: center;
    color: var(--rb-blue-700, #1D4ED8); flex-shrink: 0;
  }
  .nf-upcoming-label {
    font-size: .85rem; font-weight: 600;
    color: var(--rb-gray-700, #374151); flex: 1;
  }
  .nf-upcoming-eta {
    font-size: .78rem; font-weight: 600;
    color: var(--rb-blue-700, #1D4ED8);
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 100px; padding: 2px 10px;
    white-space: nowrap; font-family: monospace;
  }
`;
