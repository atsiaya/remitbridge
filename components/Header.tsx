"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
const IcoMenu     = () => <Ico d="M3 12h18M3 6h18M3 18h18" />;
const IcoClose    = () => <Ico d="M18 6L6 18M6 6l12 12" />;
type IcoChevronProps = {
  open: boolean;
};

const IcoChevron = ({ open }: IcoChevronProps) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    style={{
      transition: "transform .2s",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const IcoArrow = () => <Ico d="M5 12h14M12 5l7 7-7 7" size={14} />;

// ─── SOLUTIONS DROPDOWN DATA ──────────────────────────────────────────────────
const solutionsLinks = [
  {
    title: "Money transfers",
    desc: "Send internationally to 50+ countries",
    href: "/solutions/money-transfers",
  },
  {
    title: "Currency exchange",
    desc: "Convert between 65 currencies at mid-market rates",
    href: "/solutions/currency-exchange",
  },
  {
    title: "Mobile top-ups",
    desc: "Recharge airtime and data plans overseas",
    href: "/solutions/mobile-topups",
  },
  {
    title: "Global eSIM",
    desc: "Stay connected in 50+ countries instantly",
    href: "/solutions/esim",
  },
];

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Products", href: "/products" },
  { label: "Company",  href: "/company" },
];

// ─── HEADER ───────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <style>{HEADER_STYLES}</style>

      <header className="hdr">
        <div className="hdr__inner rb-wrap">
          {/* Logo */}
          <Link href="/" className="hdr__logo">
            RemitBridge
          </Link>

          {/* Desktop nav */}
          <nav className="hdr__nav" aria-label="Primary navigation">
            <Link href="/" className="hdr__link">Home</Link>
            <Link href="/products" className="hdr__link">Products</Link>

            {/* Solutions dropdown */}
            <div
              className="hdr__dropdown"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <Link
                href="/solutions"
                className="hdr__link hdr__link--dropdown"
                onFocus={() => setSolutionsOpen(true)}
              >
                Solutions <IcoChevron open={solutionsOpen} />
              </Link>

              <div className={`hdr__dropdown-panel ${solutionsOpen ? "hdr__dropdown-panel--open" : ""}`}>
                {solutionsLinks.map((item, i) => (
                  <Link key={i} href={item.href} className="hdr__dropdown-item">
                    <div className="hdr__dropdown-item__title">{item.title}</div>
                    <div className="hdr__dropdown-item__desc">{item.desc}</div>
                  </Link>
                ))}
                <Link href="/solutions" className="hdr__dropdown-footer">
                  View all solutions <IcoArrow />
                </Link>
              </div>
            </div>

            <Link href="/company" className="hdr__link">Company</Link>
          </nav>

          {/* Desktop actions */}
          <div className="hdr__actions">
            <Link href="/download-app" className="hdr__signin">Sign in</Link>
            <Link href="/register" className="hdr__cta">Get started</Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="hdr__mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <IcoMenu />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="hdr-mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="hdr-mobile-panel" onClick={(e) => e.stopPropagation()}>
            <div className="hdr-mobile-panel__header">
              <span className="hdr__logo">RemitBridge</span>
              <button
                className="hdr-mobile-panel__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <IcoClose />
              </button>
            </div>

            <div className="hdr-mobile-panel__body">
              <nav className="hdr-mobile-nav">
                {navLinks.map((l, i) => (
                  <Link
                    key={i}
                    href={l.href}
                    className="hdr-mobile-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}

                {/* Solutions expandable section in mobile */}
                <div className="hdr-mobile-solutions">
                  <div className="hdr-mobile-solutions__label">Solutions</div>
                  {solutionsLinks.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="hdr-mobile-solutions__item"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="hdr-mobile-panel__actions">
                <Link
                  href="/download-app"
                  className="hdr-mobile-btn hdr-mobile-btn--outline"
                  onClick={() => setMobileOpen(false)}
                >
                  Download app
                </Link>
                <Link
                  href="/register"
                  className="hdr-mobile-btn hdr-mobile-btn--solid"
                  onClick={() => setMobileOpen(false)}
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const HEADER_STYLES = `
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Header shell ── */
  .hdr {
    position: sticky; top: 0; z-index: 200;
    background: rgba(255,255,255,.93);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--rb-gray-200, #E5E7EB);
    height: 64px;
  }
  .hdr__inner {
    height: 64px; display: flex; align-items: center;
    justify-content: space-between; gap: 32px;
  }
  .hdr__logo {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 18px; font-weight: 800;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: -.02em; text-decoration: none; flex-shrink: 0;
  }

  /* ── Desktop nav ── */
  .hdr__nav {
    display: flex; align-items: center; gap: 28px;
    flex: 1; justify-content: center;
  }
  .hdr__link {
    display: flex; align-items: center; gap: 5px;
    font-size: 13.5px; color: var(--rb-gray-500, #6B7280);
    text-decoration: none; font-weight: 500;
    transition: color .15s; white-space: nowrap;
    padding: 6px 0; background: none; border: none; cursor: pointer;
  }
  .hdr__link:hover { color: var(--rb-gray-900, #111827); }

  /* ── Dropdown ── */
  .hdr__dropdown { position: relative; }
  .hdr__link--dropdown svg { color: var(--rb-gray-400, #9CA3AF); }

  .hdr__dropdown-panel {
    position: absolute; left: 50%; transform: translateX(-50%) translateY(-6px);
    top: calc(100% + 12px); width: 320px;
    background: #fff; border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 14px; box-shadow: 0 12px 32px rgba(0,0,0,.1);
    padding: 8px; opacity: 0; visibility: hidden;
    transition: opacity .18s, visibility .18s, transform .18s;
    z-index: 50;
  }
  .hdr__dropdown-panel--open {
    opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0);
  }
  .hdr__dropdown-item {
    display: block; padding: 10px 14px; border-radius: 10px;
    text-decoration: none; transition: background .15s;
  }
  .hdr__dropdown-item:hover { background: var(--rb-blue-50, #EFF6FF); }
  .hdr__dropdown-item__title {
    font-size: .85rem; font-weight: 600;
    color: var(--rb-gray-900, #111827); margin-bottom: 2px;
  }
  .hdr__dropdown-item__desc {
    font-size: .75rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .hdr__dropdown-footer {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600;
    color: var(--rb-blue-700, #1D4ED8); text-decoration: none;
    padding: 10px 14px; margin-top: 4px;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .hdr__dropdown-footer:hover { opacity: .75; }

  /* ── Desktop actions ── */
  .hdr__actions { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
  .hdr__signin {
    font-size: 13.5px; font-weight: 600;
    color: var(--rb-gray-700, #374151); text-decoration: none;
    padding: 8px 14px; border-radius: 8px;
    transition: background .15s; white-space: nowrap;
  }
  .hdr__signin:hover { background: var(--rb-gray-100, #F3F4F6); }
  .hdr__cta {
    font-size: 13.5px; font-weight: 600;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    text-decoration: none; padding: 9px 20px; border-radius: 8px;
    transition: background .15s; white-space: nowrap;
  }
  .hdr__cta:hover { background: var(--rb-blue-800, #1e40af); }

  /* ── Mobile toggle ── */
  .hdr__mobile-toggle {
    display: none; background: none; border: none; cursor: pointer;
    color: var(--rb-gray-700, #374151); padding: 4px;
  }
  @media (max-width: 760px) {
    .hdr__nav     { display: none; }
    .hdr__actions { display: none; }
    .hdr__mobile-toggle { display: flex; }
  }

  /* ── Mobile overlay ── */
  .hdr-mobile-overlay {
    position: fixed; inset: 0; z-index: 300;
    background: rgba(17,24,39,.4); backdrop-filter: blur(2px);
    animation: hdr-fade-in .2s ease;
  }
  @keyframes hdr-fade-in { from { opacity: 0; } to { opacity: 1; } }

  .hdr-mobile-panel {
    position: fixed; top: 0; right: 0; bottom: 0;
    width: min(320px, 86vw);
    background: #fff;
    box-shadow: -8px 0 32px rgba(0,0,0,.12);
    display: flex; flex-direction: column;
    animation: hdr-slide-in .25s ease;
  }
  @keyframes hdr-slide-in {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }

  .hdr-mobile-panel__header {
    display: flex; align-items: center; justify-content: space-between;
    height: 64px; padding: 0 20px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    flex-shrink: 0;
  }
  .hdr-mobile-panel__close {
    background: none; border: none; cursor: pointer;
    color: var(--rb-gray-500, #6B7280); padding: 6px;
    border-radius: 8px; transition: background .15s;
  }
  .hdr-mobile-panel__close:hover { background: var(--rb-gray-100, #F3F4F6); }

  .hdr-mobile-panel__body {
    flex: 1; display: flex; flex-direction: column;
    justify-content: space-between; padding: 24px 20px;
    overflow-y: auto;
  }

  .hdr-mobile-nav { display: flex; flex-direction: column; gap: 4px; }
  .hdr-mobile-link {
    font-size: .95rem; font-weight: 600;
    color: var(--rb-gray-900, #111827); text-decoration: none;
    padding: 12px 10px; border-radius: 8px;
    transition: background .15s;
  }
  .hdr-mobile-link:hover { background: var(--rb-gray-50, #F9FAFB); }

  .hdr-mobile-solutions {
    margin-top: 12px; padding-top: 16px;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .hdr-mobile-solutions__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    padding: 0 10px; margin-bottom: 8px;
  }
  .hdr-mobile-solutions__item {
    display: block; font-size: .875rem; font-weight: 500;
    color: var(--rb-gray-500, #6B7280); text-decoration: none;
    padding: 10px 10px; border-radius: 8px;
    transition: background .15s, color .15s;
  }
  .hdr-mobile-solutions__item:hover {
    background: var(--rb-blue-50, #EFF6FF); color: var(--rb-blue-700, #1D4ED8);
  }

  .hdr-mobile-panel__actions {
    display: flex; flex-direction: column; gap: 10px;
    margin-top: 24px; padding-top: 20px;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
  }
  .hdr-mobile-btn {
    display: block; text-align: center; font-size: .875rem; font-weight: 600;
    padding: 12px; border-radius: 9px; text-decoration: none;
    transition: all .15s;
  }
  .hdr-mobile-btn--outline {
    border: 1.5px solid var(--rb-gray-200, #E5E7EB);
    color: var(--rb-gray-700, #374151); background: #fff;
  }
  .hdr-mobile-btn--outline:hover { background: var(--rb-gray-50, #F9FAFB); }
  .hdr-mobile-btn--solid {
    background: var(--rb-blue-700, #1D4ED8); color: #fff; border: none;
  }
  .hdr-mobile-btn--solid:hover { background: var(--rb-blue-800, #1e40af); }
`;
