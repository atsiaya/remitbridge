"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── ICONS ───────────────────────────────────────────────────────────────────
type IcoProps = {
  d: string;
  size?: number;
};

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
const IcoCheck  = () => <Ico d="M20 6L9 17l-5-5" size={14} />;
const IcoStar   = () => <Ico d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={14} />;

const appFeatures = [
  "Send money to 190+ countries in seconds",
  "Real-time exchange rates — no hidden markups",
  "Multi-currency wallet in your pocket",
  "Instant payment notifications",
  "Biometric login & 256-bit encryption",
  "Track every transaction end-to-end",
];



// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function DownloadAppPage() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="dl-page">
        <div className="rb-wrap">

          {/* ── HERO GRID ───────────────────────────────────────────────── */}
          <div className="dl-grid">

            {/* Left — copy */}
            <motion.div
              className="dl-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="dl-eyebrow-pill">
                <span className="dl-eyebrow-dot" />
                Now available on iOS &amp; Android
              </div>

              <h1 className="dl-h1">
                Global payments,<br />
                <span className="dl-h1__accent">in your pocket</span>
              </h1>

              <p className="dl-sub">
                Send and receive money across 190+ countries, pay with
                multi-currency wallets, lock FX rates, and track every
                transaction in real time — all from the RemitBridge app.
              </p>

              {/* Feature checklist */}
              <ul className="dl-features">
                {appFeatures.map((f, i) => (
                  <li key={i} className="dl-feature">
                    <span className="dl-feature__icon"><IcoCheck /></span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Store buttons */}
              <div className="dl-store-btns">
                <a
                  href="https://play.google.com/store/apps/details?id=com.remitbridge.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dl-store-btn"
                  aria-label="Download on Google Play"
                >
                  {/* Google Play SVG badge */}
                  <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="dl-store-btn__svg">
                    <rect width="135" height="40" rx="8" fill="#111827"/>
                    <text x="42" y="14" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="Inter,sans-serif">GET IT ON</text>
                    <text x="42" y="28" fill="#ffffff" fontSize="14" fontFamily="Inter,sans-serif" fontWeight="700">Google Play</text>
                    {/* Play icon */}
                    <polygon points="14,10 14,30 30,20" fill="white" opacity="0.9"/>
                  </svg>
                </a>

                <a
                  href="https://apps.apple.com/app/remitbridge/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dl-store-btn"
                  aria-label="Download on the App Store"
                >
                  {/* App Store SVG badge */}
                  <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="dl-store-btn__svg">
                    <rect width="135" height="40" rx="8" fill="#111827"/>
                    <text x="42" y="14" fill="rgba(255,255,255,.6)" fontSize="7" fontFamily="Inter,sans-serif">Download on the</text>
                    <text x="42" y="28" fill="#ffffff" fontSize="14" fontFamily="Inter,sans-serif" fontWeight="700">App Store</text>
                    {/* Apple icon path */}
                    <path d="M22 10c-1.2 1.4-1.1 3.5.2 4.7C23.5 13.4 23.3 11.3 22 10z M26.5 14.5c-1.5-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.3-.9-2.3-3.5 0-2.2 1.8-3.2 1.9-3.3-1-1.6-2.7-1.9-3.4-2z" fill="white" opacity="0.9"/>
                  </svg>
                </a>
              </div>

              {/* Rating strip */}
              <div className="dl-rating-strip">
                <div className="dl-rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="dl-star"><IcoStar /></span>
                  ))}
                </div>
                <span className="dl-rating-text">
                  <strong>4.8 / 5</strong> · Rated by 12,000+ users on App Store &amp; Google Play
                </span>
              </div>
            </motion.div>

            {/* Right — QR card + app preview */}
            <motion.div
              className="dl-right"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              {/* QR card */}
              <div className="dl-qr-card">
                <div className="dl-qr-card__header">
                  <div className="dl-qr-card__eyebrow">Scan to download</div>
                  <div className="dl-qr-card__title">Open your phone camera and point it at the code</div>
                </div>

                <div className="dl-qr-wrap">
                  <Image
                    src="/images/app-qr-code.png"
                    alt="Scan to download RemitBridge app"
                    width={180}
                    height={180}
                    className="dl-qr-img"
                  />
                </div>

                <div className="dl-qr-card__divider" />

                {/* Direct APK */}
                <div className="dl-apk-row">
                  <div className="dl-apk-row__left">
                    <div className="dl-apk-row__label">Direct APK download</div>
                    <div className="dl-apk-row__desc">For Android sideloading</div>
                  </div>
                  <a href="/debug-apk/app-release.apk" className="dl-apk-btn">
                    Download
                  </a>
                </div>

                {/* Legal */}
                <p className="dl-qr-card__legal">
                  By downloading you agree to our{" "}
                  <Link href="/privacy-policy" className="dl-legal-link">Privacy Policy</Link>
                  {" "}and{" "}
                  <Link href="/terms-of-service" className="dl-legal-link">Terms of Service</Link>.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── STATS BAR ───────────────────────────────────────────────── */}
          

          {/* ── TRUST STRIP ─────────────────────────────────────────────── */}
          <div className="dl-trust-strip">
            {["256-bit AES encryption", "SOC 2 Type II certified", "PCI-DSS Level 1", "ISO 27001"].map((b, i) => (
              <div key={i} className="dl-trust-item">
                <span className="dl-trust-check"><IcoCheck /></span>
                {b}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  /* ── Page ── */
  .dl-page {
    background: var(--rb-white, #fff);
    min-height: calc(100vh - 96px);
    padding: 88px 0 80px;
  }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero grid ── */
  .dl-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
    margin-bottom: 64px;
  }
  @media (max-width: 860px) {
    .dl-grid { grid-template-columns: 1fr; gap: 48px; }
  }

  /* ── Left ── */
  .dl-left { display: flex; flex-direction: column; }

  .dl-eyebrow-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase;
    width: fit-content; margin-bottom: 28px;
  }
  .dl-eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8);
    animation: dl-pulse 2s infinite;
  }
  @keyframes dl-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.5; transform:scale(1.5); }
  }

  .dl-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.4rem, 4.5vw, 3.8rem);
    font-weight: 800; line-height: 1.07;
    letter-spacing: -.03em; color: var(--rb-gray-900, #111827);
    margin-bottom: 20px;
  }
  .dl-h1__accent { color: var(--rb-blue-700, #1D4ED8); }

  .dl-sub {
    font-size: 1rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 480px; margin-bottom: 28px;
  }

  /* Features */
  .dl-features {
    list-style: none; display: flex; flex-direction: column;
    gap: 10px; margin-bottom: 32px;
  }
  .dl-feature {
    display: flex; align-items: center; gap: 10px;
    font-size: .9rem; color: var(--rb-gray-500, #6B7280);
  }
  .dl-feature__icon {
    width: 22px; height: 22px; border-radius: 6px;
    background: #ECFDF5; border: 1px solid #A7F3D0;
    display: flex; align-items: center; justify-content: center;
    color: #10B981; flex-shrink: 0;
  }

  /* Store buttons */
  .dl-store-btns {
    display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px;
  }
  .dl-store-btn {
    display: inline-flex; text-decoration: none;
    transition: opacity .15s, transform .15s;
  }
  .dl-store-btn:hover { opacity: .88; transform: translateY(-1px); }
  .dl-store-btn__svg { width: 152px; height: 48px; }

  /* Rating */
  .dl-rating-strip {
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
    padding: 14px 18px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 10px;
    max-width: 420px;
  }
  .dl-rating-stars { display: flex; gap: 2px; }
  .dl-star { color: #F59E0B; }
  .dl-rating-text {
    font-size: 12.5px; color: var(--rb-gray-500, #6B7280); line-height: 1.5;
  }
  .dl-rating-text strong { color: var(--rb-gray-900, #111827); }

  /* ── Right ── */
  .dl-right { display: flex; flex-direction: column; gap: 0; }

  /* QR card */
  .dl-qr-card {
    background: var(--rb-white, #fff);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 20px; padding: 32px;
    box-shadow: 0 8px 32px rgba(0,0,0,.06);
  }
  .dl-qr-card__eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 6px;
  }
  .dl-qr-card__title {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.6; margin-bottom: 24px;
  }

  .dl-qr-wrap {
    display: flex; justify-content: center; align-items: center;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 14px; padding: 28px;
    margin-bottom: 24px;
  }
  .dl-qr-img { border-radius: 10px; display: block; }

  .dl-qr-card__divider {
    height: 1px; background: var(--rb-gray-100, #F3F4F6);
    margin-bottom: 20px;
  }

  /* APK row */
  .dl-apk-row {
    display: flex; justify-content: space-between; align-items: center;
    gap: 12px; margin-bottom: 20px;
  }
  .dl-apk-row__label {
    font-size: .875rem; font-weight: 600;
    color: var(--rb-gray-900, #111827); margin-bottom: 2px;
  }
  .dl-apk-row__desc {
    font-size: .78rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .dl-apk-btn {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    font-size: 13px; font-weight: 600;
    padding: 9px 20px; border-radius: 8px;
    text-decoration: none; white-space: nowrap;
    transition: background .15s; flex-shrink: 0;
  }
  .dl-apk-btn:hover { background: var(--rb-blue-800, #1e40af); }

  /* Legal */
  .dl-qr-card__legal {
    font-size: .78rem; color: var(--rb-gray-400, #9CA3AF);
    line-height: 1.7; text-align: center;
  }
  .dl-legal-link {
    color: var(--rb-blue-700, #1D4ED8); text-decoration: none;
    font-weight: 500; transition: opacity .15s;
  }
  .dl-legal-link:hover { opacity: .75; }

  /* ── Stats bar ── */
  .dl-stats-bar {
    display: grid; grid-template-columns: repeat(4, 1fr);
    background: var(--rb-blue-700, #1D4ED8);
    border-radius: 16px; overflow: hidden;
    margin-bottom: 24px;
  }
  .dl-stat {
    padding: 28px 24px; text-align: center;
    border-right: 1px solid rgba(255,255,255,.12);
  }
  .dl-stat:last-child { border-right: none; }
  .dl-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .dl-stat__label {
    font-size: 11.5px; color: rgba(255,255,255,.6);
    margin-top: 6px; font-weight: 500;
  }
  @media (max-width: 640px) {
    .dl-stats-bar { grid-template-columns: repeat(2, 1fr); border-radius: 12px; }
    .dl-stat:nth-child(2) { border-right: none; }
    .dl-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Trust strip ── */
  .dl-trust-strip {
    display: flex; align-items: center; justify-content: center;
    gap: 28px; flex-wrap: wrap;
    padding: 20px 24px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 12px;
  }
  .dl-trust-item {
    display: flex; align-items: center; gap: 7px;
    font-size: 12.5px; color: var(--rb-gray-500, #6B7280); font-weight: 500;
  }
  .dl-trust-check {
    color: #10B981;
  }
`;
