"use client";

import { motion } from "framer-motion";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const sections = [
  {
    id: "intro",
    num: "01",
    title: "Overview",
    body: [
      "This Privacy Policy explains how RemitBridge collects, uses, discloses, and otherwise processes your information when you visit our website, use our mobile application, or use our Services. Please read this policy carefully to understand how your information is handled, including how we work with third-party services to securely access and process financial data.",
    ],
  },
  {
    id: "personal-info",
    num: "02",
    title: "Personal Information We Collect",
    body: [
      "\"Personal Information\" refers to information that can identify you, directly or indirectly. We may collect the following categories:",
    ],
    list: [
      { label: "Identifiers", desc: "Name, email address, phone number, IP address, and other online identifiers." },
      { label: "Customer records", desc: "Device IP, browser type, operating system, and platform information." },
      { label: "Internet & electronic activity", desc: "Pages visited and actions taken on our website or app." },
    ],
    note: "We do not intentionally collect sensitive personal information under applicable privacy law.",
  },
  {
    id: "how-collected",
    num: "03",
    title: "How We Collect Personal Information",
    list: [
      { label: "Identity data", desc: "Name, email, country, and postal code." },
      { label: "Transaction data", desc: "Payment information processed by secure third-party processors — never stored directly by RemitBridge." },
      { label: "Technical data", desc: "Device information, IP address, browser type, and operating system." },
      { label: "Usage data", desc: "Your interactions with our website and mobile application." },
      { label: "Other data", desc: "Information submitted via contact forms or direct correspondence." },
    ],
  },
  {
    id: "how-used",
    num: "04",
    title: "How We Use Personal Information",
    list: [
      { label: "Respond to requests", desc: "Answer your questions and provide customer support." },
      { label: "Marketing communications", desc: "Send relevant updates via email or SMS — opt out anytime." },
      { label: "Service improvement", desc: "Improve our platform, products, and underlying technology." },
      { label: "Security", desc: "Protect the integrity and security of our website and app." },
      { label: "Fraud prevention", desc: "Detect and prevent fraud or illegal activity on our platform." },
    ],
  },
  {
    id: "how-shared",
    num: "05",
    title: "How We Share Personal Information",
    list: [
      { label: "Service providers", desc: "Hosting, payment processing, analytics, and customer support partners." },
      { label: "Business transfers", desc: "In connection with a merger, acquisition, or sale of company assets." },
      { label: "Legal requirements", desc: "To comply with law, protect our rights, prevent fraud, or ensure user safety." },
    ],
  },
  {
    id: "cookies",
    num: "06",
    title: "Cookies & Tracking",
    list: [
      { label: "Strictly necessary cookies", desc: "Required for core functionality of our Services." },
      { label: "Functionality cookies", desc: "Remember your preferences across sessions." },
      { label: "Preference cookies", desc: "Store your privacy settings and account information." },
      { label: "Analytics cookies", desc: "Google Analytics, Mixpanel, and Hotjar — used to improve our Services." },
    ],
    body2: [
      "You can manage cookie preferences directly in your browser settings.",
    ],
  },
  {
    id: "your-rights",
    num: "07",
    title: "Your Privacy Rights",
    list: [
      { label: "Correct your information", desc: "Request corrections to inaccurate personal data." },
      { label: "Manage cookie preferences", desc: "Adjust tracking and analytics settings at any time." },
      { label: "Opt out of marketing", desc: "Unsubscribe from promotional emails or SMS instantly." },
    ],
  },
  {
    id: "security-retention",
    num: "08",
    title: "Security & Data Retention",
    body: [
      "We maintain administrative, technical, and physical safeguards designed to protect your Personal Information. We retain Personal Information only for as long as necessary to provide our Services and to fulfil the purposes outlined in this policy, including legal, accounting, and regulatory requirements.",
    ],
  },
  {
    id: "third-party",
    num: "09",
    title: "Third-Party Websites",
    body: [
      "Our Services may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites — we encourage you to review their policies directly.",
    ],
  },
  {
    id: "dnt",
    num: "10",
    title: "Do-Not-Track Signals",
    body: [
      "Our website may not respond to browser Do-Not-Track (DNT) signals, as there is currently no uniform industry standard for recognizing and implementing such signals.",
    ],
  },
  {
    id: "children",
    num: "11",
    title: "Children's Privacy",
    body: [
      "We do not knowingly collect Personal Information from children under the age of 13, or the equivalent minimum age in your jurisdiction. If we become aware that we have inadvertently collected such information, we will take steps to delete it.",
    ],
  },
  {
    id: "international",
    num: "12",
    title: "International Users",
    body: [
      "Your information may be stored or processed in the United States or other jurisdictions, which may have data protection laws different from those in your home country. By using our Services, you consent to this transfer and processing.",
    ],
  },
  {
    id: "changes",
    num: "13",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised \"Last updated\" date. Your continued use of our Services after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
];

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
const IcoShield = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" size={18} />;
const IcoMail   = () => <Ico d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 9 8-9" size={14} />;
const IcoCheck  = () => <Ico d="M20 6L9 17l-5-5" size={13} />;
const IcoExternal = () => <Ico d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" size={12} />;

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="pp-page">
        <div className="rb-wrap">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <motion.div
            className="pp-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pp-eyebrow-pill">
              <IcoShield /> Legal
            </div>
            <h1 className="pp-h1">Privacy Policy</h1>
            <p className="pp-updated">Last updated: January 6, 2026</p>
            <p className="pp-intro">
              This policy explains how RemitBridge collects, uses, and protects
              your information across our website, mobile app, and Services —
              and the choices available to you.
            </p>
          </motion.div>

          {/* ── BODY GRID — TOC + content ────────────────────────────────── */}
          <div className="pp-grid">

            {/* Sticky table of contents */}
            <aside className="pp-toc">
              <div className="pp-toc__label">On this page</div>
              <nav className="pp-toc__list">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="pp-toc__link">
                    <span className="pp-toc__num">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="pp-toc__contact">
                <div className="pp-toc__contact-label">Privacy questions?</div>
                <a href="mailto:privacy@remitbridge.com" className="pp-toc__contact-link">
                  <IcoMail /> privacy@remitbridge.com
                </a>
              </div>
            </aside>

            {/* Content */}
            <div className="pp-content">
              {sections.map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="pp-section"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="pp-section__head">
                    <span className="pp-section__num">{section.num}</span>
                    <h2 className="pp-section__title">{section.title}</h2>
                  </div>

                  {section.body?.map((p, j) => (
                    <p key={j} className="pp-section__p">{p}</p>
                  ))}

                  {section.list && (
                    <div className="pp-list">
                      {section.list.map((item, k) => (
                        <div key={k} className="pp-list__item">
                          <span className="pp-list__icon"><IcoCheck /></span>
                          <div>
                            <div className="pp-list__label">{item.label}</div>
                            <div className="pp-list__desc">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="pp-note">{section.note}</div>
                  )}

                  {section.body2?.map((p, j) => (
                    <p key={`b2-${j}`} className="pp-section__p" style={{ marginTop: 16 }}>
                      {p}{" "}
                      <a
                        href="https://www.allaboutcookies.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pp-inline-link"
                      >
                        Learn more at allaboutcookies.org <IcoExternal />
                      </a>
                    </p>
                  ))}
                </motion.section>
              ))}

              {/* Closing contact card */}
              <div className="pp-footer-card">
                <div className="pp-footer-card__title">Questions about your data?</div>
                <p className="pp-footer-card__desc">
                  Our privacy team is available to address any questions about
                  how your information is collected, used, or protected.
                </p>
                <a href="mailto:privacy@remitbridge.com" className="btn-blue">
                  <IcoMail /> Contact privacy team
                </a>
              </div>
            </div>
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

  /* ── Page ── */
  .pp-page {
    background: var(--rb-white, #fff);
    padding: 88px 0 96px;
  }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero ── */
  .pp-hero {
    max-width: 720px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-bottom: 56px;
  }
  .pp-eyebrow-pill {
    display: inline-flex; align-items: center; gap: 7px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase;
    margin-bottom: 24px;
  }
  .pp-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800; line-height: 1.08;
    letter-spacing: -.03em; color: var(--rb-gray-900, #111827);
    margin-bottom: 12px;
  }
  .pp-updated {
    font-size: .875rem; color: var(--rb-gray-400, #9CA3AF);
    margin-bottom: 20px;
  }
  .pp-intro {
    font-size: 1rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 600px;
  }

  /* ── Body grid ── */
  .pp-grid {
    display: grid; grid-template-columns: 240px 1fr;
    gap: 64px; align-items: start;
  }
  @media (max-width: 860px) {
    .pp-grid { grid-template-columns: 1fr; gap: 32px; }
  }

  /* ── TOC ── */
  .pp-toc {
    position: sticky; top: 96px;
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 24px 20px;
    background: var(--rb-gray-50, #F9FAFB);
  }
  .pp-toc__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 14px;
  }
  .pp-toc__list {
    display: flex; flex-direction: column; gap: 2px;
    max-height: 420px; overflow-y: auto; margin-bottom: 20px;
  }
  .pp-toc__link {
    display: flex; align-items: baseline; gap: 8px;
    font-size: .8rem; color: var(--rb-gray-500, #6B7280);
    text-decoration: none; padding: 6px 8px; border-radius: 6px;
    transition: background .15s, color .15s;
  }
  .pp-toc__link:hover {
    background: var(--rb-blue-50, #EFF6FF); color: var(--rb-blue-700, #1D4ED8);
  }
  .pp-toc__num {
    font-size: .7rem; font-weight: 700; color: var(--rb-gray-300, #D1D5DB);
    font-family: monospace; flex-shrink: 0;
  }
  .pp-toc__contact {
    border-top: 1px solid var(--rb-gray-200, #E5E7EB);
    padding-top: 16px;
  }
  .pp-toc__contact-label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .pp-toc__contact-link {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600;
    color: var(--rb-blue-700, #1D4ED8); text-decoration: none;
  }
  .pp-toc__contact-link:hover { opacity: .8; }
  @media (max-width: 860px) {
    .pp-toc { position: static; }
    .pp-toc__list { max-height: none; }
  }

  /* ── Content ── */
  .pp-content { display: flex; flex-direction: column; }

  .pp-section {
    padding: 32px 0;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    scroll-margin-top: 96px;
  }
  .pp-content > .pp-section:first-child { padding-top: 0; }

  .pp-section__head {
    display: flex; align-items: baseline; gap: 12px;
    margin-bottom: 16px;
  }
  .pp-section__num {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: .85rem; font-weight: 800;
    color: var(--rb-blue-700, #1D4ED8); flex-shrink: 0;
  }
  .pp-section__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.3rem; font-weight: 700;
    letter-spacing: -.015em; color: var(--rb-gray-900, #111827);
  }
  .pp-section__p {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.85; margin-bottom: 12px;
  }
  .pp-section__p:last-child { margin-bottom: 0; }

  /* ── List items (category cards) ── */
  .pp-list {
    display: flex; flex-direction: column; gap: 14px; margin-top: 16px;
  }
  .pp-list__item {
    display: flex; gap: 12px; align-items: flex-start;
    padding: 14px 16px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 10px;
  }
  .pp-list__icon {
    width: 22px; height: 22px; border-radius: 6px;
    background: #ECFDF5; border: 1px solid #A7F3D0;
    display: flex; align-items: center; justify-content: center;
    color: #10B981; flex-shrink: 0; margin-top: 1px;
  }
  .pp-list__label {
    font-size: .85rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 3px;
  }
  .pp-list__desc {
    font-size: .82rem; color: var(--rb-gray-500, #6B7280); line-height: 1.65;
  }

  /* ── Note callout ── */
  .pp-note {
    margin-top: 16px; padding: 12px 16px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 10px;
    font-size: .825rem; color: var(--rb-blue-700, #1D4ED8);
    font-weight: 500; line-height: 1.6;
  }

  /* ── Inline link with icon ── */
  .pp-inline-link {
    display: inline-flex; align-items: center; gap: 4px;
    color: var(--rb-blue-700, #1D4ED8); text-decoration: none;
    font-weight: 600;
  }
  .pp-inline-link:hover { opacity: .8; }

  /* ── Closing card ── */
  .pp-footer-card {
    margin-top: 40px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 36px 32px;
  }
  .pp-footer-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.15rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 10px;
  }
  .pp-footer-card__desc {
    font-size: .875rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; margin-bottom: 20px; max-width: 480px;
  }
`;
