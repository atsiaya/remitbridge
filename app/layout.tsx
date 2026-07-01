import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./../app/globals.css";

// ─── FONTS ────────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "RemitBridge — Global Payments Infrastructure",
  description:
    "Move money across 190+ countries with multi-currency accounts, real-time settlement, and fully transparent FX pricing. Built for modern finance teams.",
  keywords: [
    "cross-border payments",
    "international transfers",
    "multi-currency accounts",
    "FX rates",
    "global payments infrastructure",
    "remittance",
    "fintech",
  ],
  openGraph: {
    title: "RemitBridge — Global Payments Infrastructure",
    description:
      "Send, receive, hold, and convert money globally with bank-grade compliance and real-time settlement.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemitBridge — Global Payments Infrastructure",
    description:
      "Cross-border payments that work the way your business does.",
  },
};

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        {/* ── FX Ticker ───────────────────────────────────────────────────── */}
        <div className="rb-ticker">
          <div className="rb-ticker__track">
            {TICKER_PAIRS.concat(TICKER_PAIRS).map((item, i) => (
              <span key={i} className="rb-ticker__item">
                <span className="rb-ticker__pair">{item.pair}</span>
                <span className="rb-ticker__rate">{item.rate}</span>
                <span
                  className={
                    item.change.startsWith("+")
                      ? "rb-ticker__change rb-ticker__change--up"
                      : "rb-ticker__change rb-ticker__change--down"
                  }
                >
                  {item.change}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Navigation ──────────────────────────────────────────────────── */}
        <header className="rb-nav">
          <div className="rb-nav__inner rb-wrap">
            <a href="/" className="rb-nav__logo" aria-label="RemitBridge home">
              RemitBridge
            </a>

            <nav className="rb-nav__links" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="rb-nav__link">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="rb-nav__right">
              <a href="/download-app" className="rb-nav__signin">
                Sign in
              </a>
              <a href="/register" className="rb-nav__cta">
                Open account →
              </a>
            </div>

            {/* Mobile menu button — wire up with client component if needed */}
            <button
              className="rb-nav__mobile-toggle"
              aria-label="Open navigation menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── Page content ────────────────────────────────────────────────── */}
        {/*
          pt-[128px]: 32px ticker + 64px nav header + 32px breathing room
          Pages with a hero that should bleed to the very top can opt out
          by applying a negative margin-top on their first section.
        */}
        <main className="rb-main">{children}</main>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer className="rb-footer">
          <div className="rb-wrap">
            {/* Top grid */}
            <div className="rb-footer__grid">
              {/* Brand column */}
              <div className="rb-footer__brand-col">
                <div className="rb-footer__logo">RemitBridge</div>
                <p className="rb-footer__tagline">
                  Global payments infrastructure for modern finance teams.
                  Licensed, regulated, and built for scale.
                </p>
                {/* Compliance badges */}
                <div className="rb-footer__badges">
                  {COMPLIANCE_BADGES.map((badge) => (
                    <span key={badge} className="rb-footer__badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.heading} className="rb-footer__col">
                  <h3 className="rb-footer__col-heading">{col.heading}</h3>
                  <ul className="rb-footer__col-list">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="rb-footer__link">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact column */}
              <div className="rb-footer__col">
                <h3 className="rb-footer__col-heading">Contact</h3>
                <ul className="rb-footer__col-list">
                  <li className="rb-footer__contact-item">
                    <span className="rb-footer__contact-label">Email</span>
                    <a
                      href="mailto:support@remitbridge.com"
                      className="rb-footer__link"
                    >
                      support@remitbridge.com
                    </a>
                  </li>
                  <li className="rb-footer__contact-item">
                    <span className="rb-footer__contact-label">Phone</span>
                    <a href="tel:+15552038841" className="rb-footer__link">
                      +1 (555) 203-8841
                    </a>
                  </li>
                  <li className="rb-footer__contact-item">
                    <span className="rb-footer__contact-label">HQ</span>
                    <span className="rb-footer__contact-value">
                      New York, USA · London, UK
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="rb-footer__divider" />

            {/* Bottom bar */}
            <div className="rb-footer__bottom">
              <div className="rb-footer__legal">
                <p>
                  © {new Date().getFullYear()} RemitBridge Ltd. All rights
                  reserved. Registered in England &amp; Wales.
                </p>
                <p>
                  RemitBridge is authorised by the Financial Conduct Authority
                  (FCA) and registered as a Money Services Business (MSB) with
                  FinCEN. RemitBridge is not a bank. Funds held in segregated
                  custodian accounts are not FDIC-insured.
                </p>
                <p>
                  Services are subject to our{" "}
                  <a href="/terms-of-service" className="rb-footer__legal-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="rb-footer__legal-link">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="rb-footer__bottom-right">
                <div className="rb-footer__status">
                  <span className="rb-footer__status-dot" />
                  All systems operational
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* ── Global styles ────────────────────────────────────────────────── */}
        <style>{GLOBAL_STYLES}</style>
      </body>
    </html>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const TICKER_PAIRS = [
  { pair: "USD/KES",  rate: "129.45",   change: "+0.12%" },
  { pair: "EUR/USD",  rate: "1.0842",   change: "+0.08%" },
  { pair: "GBP/USD",  rate: "1.2671",   change: "−0.04%" },
  { pair: "USD/NGN",  rate: "1,601.50", change: "+0.31%" },
  { pair: "USD/GHS",  rate: "15.62",    change: "−0.09%" },
  { pair: "USD/ZAR",  rate: "18.34",    change: "+0.18%" },
  { pair: "EUR/GBP",  rate: "0.8557",   change: "+0.05%" },
  { pair: "USD/INR",  rate: "83.72",    change: "+0.02%" },
  { pair: "USD/SGD",  rate: "1.3461",   change: "−0.03%" },
  { pair: "XOF/EUR",  rate: "0.00152",  change: "+0.01%" },
];

const NAV_LINKS = [
  { label: "Product",    href: "/products"    },
  { label: "Solutions",    href: "/solutions"    },
  { label: "Developers", href: "/developers" },
  { label: "About",      href: "/company"      },
  { label: "Blog",       href: "/blog"       },
];

const COMPLIANCE_BADGES = ["FCA Authorised", "SOC 2 Type II", "PCI-DSS L1", "ISO 27001"];

const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Multi-currency accounts", href: "/product#accounts"  },
      { label: "Cross-border transfers",  href: "/product#transfers" },
      { label: "FX rates",                href: "/product#fx"        },
      { label: "Batch payouts",           href: "/product#batch"     },
      { label: "API & Webhooks",          href: "/developers"        },
      { label: "Dashboard",               href: "/download-app"             },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups",      href: "/solutions/startups"      },
      { label: "Scale-ups",     href: "/solutions/scaleups"      },
      { label: "Enterprises",   href: "/solutions/enterprise"    },
      { label: "Marketplaces",  href: "/solutions/marketplaces"  },
      { label: "Financial institutions", href: "/solutions/fi"   },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",         href: "/about"        },
      { label: "Careers",       href: "/careers"      },
      { label: "Blog",          href: "/blog"         },
      { label: "Press",         href: "/press"        },
      { label: "Security",      href: "/security"     },
      { label: "System status", href: "/status"       },
    ],
  },
];

// ─── STYLES ───────────────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  /* ── Design tokens ── */
  :root {
    --rb-white:       #ffffff;
    --rb-gray-50:     #F9FAFB;
    --rb-gray-100:    #F3F4F6;
    --rb-gray-200:    #E5E7EB;
    --rb-gray-400:    #9CA3AF;
    --rb-gray-500:    #6B7280;
    --rb-gray-700:    #374151;
    --rb-gray-800:    #1F2937;
    --rb-gray-900:    #111827;
    --rb-blue-50:     #EFF6FF;
    --rb-blue-200:    #BFDBFE;
    --rb-blue-600:    #2563EB;
    --rb-blue-700:    #1D4ED8;
    --rb-blue-800:    #1e40af;
    --rb-green-500:   #10B981;
    --rb-font-sans:   var(--font-inter), system-ui, sans-serif;
    --rb-font-display: var(--font-sora), system-ui, sans-serif;
  }

  /* ── Reset ── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html  { scroll-behavior: smooth; }
  body  {
    background: var(--rb-white);
    color: var(--rb-gray-900);
    font-family: var(--rb-font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; }
  button { font-family: inherit; }

  /* ── Layout helpers ── */
  .rb-wrap {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── Ticker ── */
  .rb-ticker {
    background: var(--rb-blue-700);
    overflow: hidden;
    padding: 7px 0;
    border-bottom: 1px solid var(--rb-blue-800);
    position: relative;
    z-index: 300;
  }
  .rb-ticker__track {
    display: flex;
    width: max-content;
    animation: rb-ticker-scroll 48s linear infinite;
  }
  @keyframes rb-ticker-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .rb-ticker__item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 28px;
    white-space: nowrap;
  }
  .rb-ticker__pair {
    font-size: 11px;
    font-weight: 700;
    color: rgba(255,255,255,.55);
    letter-spacing: .07em;
    font-family: monospace;
  }
  .rb-ticker__rate {
    font-size: 12px;
    color: #fff;
    font-family: monospace;
  }
  .rb-ticker__change { font-size: 11px; font-family: monospace; }
  .rb-ticker__change--up   { color: #6EE7B7; }
  .rb-ticker__change--down { color: #FCA5A5; }

  /* ── Navigation ── */
  .rb-nav {
    position: sticky;
    top: 0;
    z-index: 200;
    background: rgba(255,255,255,.93);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--rb-gray-200);
    height: 64px;
  }
  .rb-nav__inner {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
  .rb-nav__logo {
    font-family: var(--rb-font-display);
    font-size: 18px;
    font-weight: 800;
    color: var(--rb-blue-700);
    letter-spacing: -.02em;
    text-decoration: none;
    flex-shrink: 0;
  }
  .rb-nav__links {
    display: flex;
    gap: 28px;
    flex: 1;
    justify-content: center;
  }
  .rb-nav__link {
    font-size: 13.5px;
    color: var(--rb-gray-500);
    text-decoration: none;
    font-weight: 500;
    transition: color .15s;
    white-space: nowrap;
  }
  .rb-nav__link:hover { color: var(--rb-gray-900); }
  .rb-nav__right {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-shrink: 0;
  }
  .rb-nav__signin {
    font-size: 13.5px;
    font-weight: 600;
    color: var(--rb-gray-700);
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 8px;
    transition: background .15s;
    white-space: nowrap;
  }
  .rb-nav__signin:hover { background: var(--rb-gray-100); }
  .rb-nav__cta {
    font-size: 13.5px;
    font-weight: 600;
    background: var(--rb-blue-700);
    color: #fff;
    text-decoration: none;
    padding: 9px 20px;
    border-radius: 8px;
    transition: background .15s;
    white-space: nowrap;
  }
  .rb-nav__cta:hover { background: var(--rb-blue-800); }
  .rb-nav__mobile-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--rb-gray-700);
    padding: 4px;
  }
  @media (max-width: 720px) {
    .rb-nav__links   { display: none; }
    .rb-nav__signin  { display: none; }
    .rb-nav__mobile-toggle { display: flex; }
  }

  /* ── Main ── */
  .rb-main {
    /* Accounts for 32px ticker + 64px nav */
    padding-top: 0;
    min-height: 60vh;
  }

  /* ── Footer ── */
  .rb-footer {
    background: var(--rb-white);
    border-top: 1px solid var(--rb-gray-200);
    padding: 64px 0 0;
  }
  .rb-footer__grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 48px;
  }
  .rb-footer__logo {
    font-family: var(--rb-font-display);
    font-size: 18px;
    font-weight: 800;
    color: var(--rb-blue-700);
    margin-bottom: 12px;
  }
  .rb-footer__tagline {
    font-size: .875rem;
    color: var(--rb-gray-500);
    line-height: 1.7;
    max-width: 240px;
    margin-bottom: 20px;
  }
  .rb-footer__badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .rb-footer__badge {
    background: var(--rb-gray-50);
    border: 1px solid var(--rb-gray-200);
    border-radius: 6px;
    padding: 3px 10px;
    font-size: 10.5px;
    color: var(--rb-gray-400);
    font-weight: 600;
    letter-spacing: .02em;
  }
  .rb-footer__col-heading {
    font-size: 11px;
    font-weight: 700;
    color: var(--rb-gray-900);
    letter-spacing: .07em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .rb-footer__col-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .rb-footer__link {
    font-size: .875rem;
    color: var(--rb-gray-500);
    text-decoration: none;
    transition: color .15s;
    line-height: 1.5;
  }
  .rb-footer__link:hover { color: var(--rb-blue-700); }
  .rb-footer__contact-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .rb-footer__contact-label {
    font-size: 10.5px;
    font-weight: 700;
    color: var(--rb-gray-900);
    text-transform: uppercase;
    letter-spacing: .06em;
  }
  .rb-footer__contact-value {
    font-size: .875rem;
    color: var(--rb-gray-500);
  }
  .rb-footer__divider {
    height: 1px;
    background: var(--rb-gray-100);
    margin-bottom: 28px;
  }
  .rb-footer__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    padding-bottom: 32px;
    flex-wrap: wrap;
  }
  .rb-footer__legal {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-width: 680px;
  }
  .rb-footer__legal p {
    font-size: .78rem;
    color: var(--rb-gray-400);
    line-height: 1.65;
  }
  .rb-footer__legal-link {
    color: var(--rb-gray-500);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color .15s;
  }
  .rb-footer__legal-link:hover { color: var(--rb-blue-700); }
  .rb-footer__status {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    color: var(--rb-gray-500);
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .rb-footer__status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--rb-green-500);
    flex-shrink: 0;
  }

  /* ── Footer responsive ── */
  @media (max-width: 1024px) {
    .rb-footer__grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .rb-footer__brand-col {
      grid-column: 1 / -1;
    }
    .rb-footer__badges {
      flex-direction: row;
    }
  }
  @media (max-width: 640px) {
    .rb-footer__grid {
      grid-template-columns: 1fr 1fr;
    }
    .rb-footer__bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-width: 400px) {
    .rb-footer__grid {
      grid-template-columns: 1fr;
    }
  }

  /* ── Reduced motion ── */
  @media (prefers-reduced-motion: reduce) {
    .rb-ticker__track { animation: none; }
    * { transition-duration: .01ms !important; animation-duration: .01ms !important; }
  }
`;
