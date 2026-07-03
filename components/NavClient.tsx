"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

interface SolutionLink {
  title: string;
  desc: string;
  href: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: "Product",    href: "/products"    },
  { label: "Solutions",  href: "/solutions"   },
  { label: "Developers", href: "/developers"  },
  { label: "About",      href: "/company"     },
  { label: "Blog",       href: "/blog"        },
];

const SOLUTIONS_LINKS: SolutionLink[] = [
  { title: "Money transfers",   desc: "Send internationally to 50+ countries",             href: "/solutions/money-transfers"   },
  { title: "Currency exchange", desc: "Convert between 65 currencies at mid-market rates",  href: "/solutions/currency-exchange" },
  { title: "Mobile top-ups",    desc: "Recharge airtime and data plans overseas",            href: "/solutions/mobile-topups"     },
  { title: "Global eSIM",       desc: "Stay connected in 50+ countries instantly",         href: "/solutions/esim"              },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const IcoMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

const IcoClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const IcoChevron = ({ open }: { open: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
    style={{ transition: "transform .2s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const IcoArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function NavClient() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change (keyboard Escape)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMobileOpen(false); setSolutionsOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolOpen(false);
  };

  return (
    <>
      <style>{NAV_STYLES}</style>

      {/* ── DESKTOP + MOBILE TOP BAR ────────────────────────────────────── */}
      <header className="nav">
        <div className="nav__inner rb-wrap">

          {/* Logo */}
          <Link href="/" className="nav__logo" onClick={closeMobile}>
            RemitBridge
          </Link>

          {/* Desktop nav links */}
          <nav className="nav__links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              if (link.label === "Solutions") {
                return (
                  <div
                    key="solutions"
                    className="nav__dropdown-wrap"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <Link
                      href="/solutions"
                      className="nav__link nav__link--has-dropdown"
                      aria-expanded={solutionsOpen}
                      onFocus={() => setSolutionsOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.closest(".nav__dropdown-wrap")?.contains(e.relatedTarget as Node)) {
                          setSolutionsOpen(false);
                        }
                      }}
                    >
                      Solutions <IcoChevron open={solutionsOpen} />
                    </Link>

                    <div
                      className={`nav__dropdown ${solutionsOpen ? "nav__dropdown--open" : ""}`}
                      role="menu"
                    >
                      {SOLUTIONS_LINKS.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="nav__dropdown-item"
                          role="menuitem"
                          onClick={() => setSolutionsOpen(false)}
                        >
                          <span className="nav__dropdown-item__title">{s.title}</span>
                          <span className="nav__dropdown-item__desc">{s.desc}</span>
                        </Link>
                      ))}
                      <Link
                        href="/solutions"
                        className="nav__dropdown-footer"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        View all solutions <IcoArrow />
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <Link key={link.href} href={link.href} className="nav__link">
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="nav__actions">
            <Link href="/"    className="nav__signin">Sign in</Link>
            <Link href="/download-app" className="nav__cta">Get the app →</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav__burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IcoClose /> : <IcoMenu />}
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ───────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`nav-backdrop ${mobileOpen ? "nav-backdrop--open" : ""}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        className={`nav-drawer ${mobileOpen ? "nav-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="nav-drawer__header">
          <Link href="/" className="nav__logo" onClick={closeMobile}>
            RemitBridge
          </Link>
          <button
            className="nav-drawer__close"
            onClick={closeMobile}
            aria-label="Close menu"
          >
            <IcoClose />
          </button>
        </div>

        {/* Drawer body */}
        <div className="nav-drawer__body">
          <nav className="nav-drawer__nav">

            {/* Simple links */}
            {NAV_LINKS.filter((l) => l.label !== "Solutions").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-drawer__link"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}

            {/* Solutions accordion */}
            <div className="nav-drawer__accordion">
              <button
                className="nav-drawer__accordion-trigger"
                onClick={() => setMobileSolOpen((v) => !v)}
                aria-expanded={mobileSolOpen}
              >
                Solutions
                <IcoChevron open={mobileSolOpen} />
              </button>

              <div className={`nav-drawer__accordion-body ${mobileSolOpen ? "nav-drawer__accordion-body--open" : ""}`}>
                {SOLUTIONS_LINKS.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="nav-drawer__sub-link"
                    onClick={closeMobile}
                  >
                    <span className="nav-drawer__sub-link__title">{s.title}</span>
                    <span className="nav-drawer__sub-link__desc">{s.desc}</span>
                  </Link>
                ))}
                <Link
                  href="/solutions"
                  className="nav-drawer__sub-all"
                  onClick={closeMobile}
                >
                  View all solutions <IcoArrow />
                </Link>
              </div>
            </div>

          </nav>

          {/* Drawer CTAs */}
          <div className="nav-drawer__actions">
            <Link href="/"    className="nav-drawer__btn nav-drawer__btn--outline" onClick={closeMobile}>
              Sign in
            </Link>
            <Link href="/download-app" className="nav-drawer__btn nav-drawer__btn--solid"   onClick={closeMobile}>
              Get the app →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const NAV_STYLES = `
  /* ── Top bar ── */
  .nav {
    position: sticky; top: 0; z-index: 200;
    background: rgba(255,255,255,.94);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--rb-gray-200, #E5E7EB);
    height: 64px;
  }
  .nav__inner {
    height: 64px; display: flex; align-items: center;
    justify-content: space-between; gap: 124px;
  }

  /* Logo */
  .nav__logo {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 18px; font-weight: 800;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: -.02em; text-decoration: none; flex-shrink: 0;
  }

  /* Desktop links */
  .nav__links {
    display: flex; align-items: center; gap: 4px;
    flex: 1; justify-content: center;
  }
  .nav__link {
    display: inline-flex; align-items: center; gap: 4px;
    font-size: 13.5px; font-weight: 500;
    color: var(--rb-gray-500, #6B7280);
    text-decoration: none; padding: 6px 12px; border-radius: 7px;
    transition: color .15s, background .15s; white-space: nowrap;
    border: none; background: none; cursor: pointer;
  }
  .nav__link:hover { color: var(--rb-gray-900, #111827); background: var(--rb-gray-50, #F9FAFB); }
  .nav__link--has-dropdown { cursor: pointer; }

  /* Desktop dropdown */
  .nav__dropdown-wrap { position: relative; }
  .nav__dropdown {
    position: absolute; left: 50%;
    transform: translateX(-50%) translateY(-4px);
    top: calc(100% + 10px); width: 300px;
    background: #fff; border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 14px; box-shadow: 0 16px 40px rgba(0,0,0,.1);
    padding: 8px; z-index: 100;
    opacity: 0; visibility: hidden; pointer-events: none;
    transition: opacity .18s ease, transform .18s ease, visibility .18s;
  }
  .nav__dropdown--open {
    opacity: 1; visibility: visible; pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  .nav__dropdown-item {
    display: flex; flex-direction: column; gap: 2px;
    padding: 10px 14px; border-radius: 9px;
    text-decoration: none; transition: background .15s;
  }
  .nav__dropdown-item:hover { background: var(--rb-blue-50, #EFF6FF); }
  .nav__dropdown-item__title {
    font-size: .85rem; font-weight: 600; color: var(--rb-gray-900, #111827);
  }
  .nav__dropdown-item__desc {
    font-size: .73rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .nav__dropdown-footer {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600; color: var(--rb-blue-700, #1D4ED8);
    text-decoration: none; padding: 10px 14px;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6); margin-top: 4px;
    transition: opacity .15s;
  }
  .nav__dropdown-footer:hover { opacity: .75; }

  /* Desktop CTAs */
  .nav__actions { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
  .nav__signin {
    font-size: 13.5px; font-weight: 600;
    color: var(--rb-gray-700, #374151); text-decoration: none;
    padding: 8px 14px; border-radius: 8px; transition: background .15s; white-space: nowrap;
  }
  .nav__signin:hover { background: var(--rb-gray-100, #F3F4F6); }
  .nav__cta {
    font-size: 13.5px; font-weight: 600;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    text-decoration: none; padding: 9px 18px; border-radius: 8px;
    transition: background .15s; white-space: nowrap;
  }
  .nav__cta:hover { background: var(--rb-blue-800, #1e40af); }

  /* Burger — mobile only */
  .nav__burger {
    display: none; background: none; border: none; cursor: pointer;
    color: var(--rb-gray-700, #374151); padding: 6px; border-radius: 8px;
    transition: background .15s; flex-shrink: 0;
  }
  .nav__burger:hover { background: var(--rb-gray-100, #F3F4F6); }

  /* ── Hide / show breakpoint ── */
  @media (max-width: 768px) {
    .nav__links  { display: none; }
    .nav__actions{ display: none; }
    .nav__burger { display: flex; align-items: center; justify-content: center; }
  }

  /* ── Backdrop ── */
  .nav-backdrop {
    position: fixed; inset: 0; z-index: 298;
    background: rgba(17,24,39,.45);
    backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);
    opacity: 0; visibility: hidden; pointer-events: none;
    transition: opacity .25s ease, visibility .25s;
  }
  .nav-backdrop--open {
    opacity: 1; visibility: visible; pointer-events: auto;
  }

  /* ── Mobile drawer ── */
  .nav-drawer {
    position: fixed; top: 0; right: 0; bottom: 0; z-index: 299;
    width: min(320px, 88vw);
    background: #fff;
    box-shadow: -8px 0 40px rgba(0,0,0,.14);
    display: flex; flex-direction: column;
    transform: translateX(100%);
    transition: transform .28s cubic-bezier(.4,0,.2,1);
    overflow: hidden;
  }
  .nav-drawer--open {
    transform: translateX(0);
  }

  /* Drawer header */
  .nav-drawer__header {
    display: flex; align-items: center; justify-content: space-between;
    height: 64px; padding: 0 20px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    flex-shrink: 0;
  }
  .nav-drawer__close {
    background: none; border: none; cursor: pointer;
    color: var(--rb-gray-500, #6B7280); padding: 6px; border-radius: 8px;
    transition: background .15s; display: flex; align-items: center;
  }
  .nav-drawer__close:hover { background: var(--rb-gray-100, #F3F4F6); }

  /* Drawer body */
  .nav-drawer__body {
    flex: 1; display: flex; flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 24px; overflow-y: auto;
  }

  /* Drawer nav links */
  .nav-drawer__nav { display: flex; flex-direction: column; gap: 2px; }
  .nav-drawer__link {
    font-size: .95rem; font-weight: 600;
    color: var(--rb-gray-900, #111827); text-decoration: none;
    padding: 13px 14px; border-radius: 9px;
    transition: background .15s, color .15s;
    display: block;
  }
  .nav-drawer__link:hover { background: var(--rb-gray-50, #F9FAFB); }

  /* Drawer Solutions accordion */
  .nav-drawer__accordion { margin-top: 2px; }
  .nav-drawer__accordion-trigger {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    font-size: .95rem; font-weight: 600; color: var(--rb-gray-900, #111827);
    padding: 13px 14px; border-radius: 9px; border: none; background: none;
    cursor: pointer; text-align: left; transition: background .15s;
  }
  .nav-drawer__accordion-trigger:hover { background: var(--rb-gray-50, #F9FAFB); }

  .nav-drawer__accordion-body {
    display: none; flex-direction: column; gap: 2px;
    padding: 6px 0 4px 14px; overflow: hidden;
  }
  .nav-drawer__accordion-body--open { display: flex; }

  .nav-drawer__sub-link {
    display: flex; flex-direction: column; gap: 2px;
    text-decoration: none; padding: 10px 12px; border-radius: 8px;
    transition: background .15s;
  }
  .nav-drawer__sub-link:hover { background: var(--rb-blue-50, #EFF6FF); }
  .nav-drawer__sub-link__title {
    font-size: .875rem; font-weight: 600; color: var(--rb-gray-900, #111827);
  }
  .nav-drawer__sub-link__desc {
    font-size: .75rem; color: var(--rb-gray-400, #9CA3AF);
  }
  .nav-drawer__sub-all {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 700; color: var(--rb-blue-700, #1D4ED8);
    text-decoration: none; padding: 10px 12px;
    border-top: 1px solid var(--rb-gray-100, #F3F4F6); margin-top: 4px;
  }
  .nav-drawer__sub-all:hover { opacity: .75; }

  /* Drawer action buttons */
  .nav-drawer__actions {
    display: flex; flex-direction: column; gap: 10px;
    padding-top: 20px; border-top: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-top: 20px;
  }
  .nav-drawer__btn {
    display: block; text-align: center; font-size: .9rem; font-weight: 600;
    padding: 13px; border-radius: 9px; text-decoration: none;
    transition: background .15s, border-color .15s;
  }
  .nav-drawer__btn--outline {
    background: #fff; color: var(--rb-gray-700, #374151);
    border: 1.5px solid var(--rb-gray-200, #E5E7EB);
  }
  .nav-drawer__btn--outline:hover { background: var(--rb-gray-50, #F9FAFB); }
  .nav-drawer__btn--solid {
    background: var(--rb-blue-700, #1D4ED8); color: #fff; border: none;
  }
  .nav-drawer__btn--solid:hover { background: var(--rb-blue-800, #1e40af); }
`;
