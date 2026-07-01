"use client";

import { motion } from "framer-motion";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const sections = [
  {
    id: "acceptance",
    num: "01",
    title: "Acceptance",
    body: [
      "These Terms of Service (\"Agreement\") govern your use of RemitBridge's website and mobile application (\"Services\"). By using our Services, you agree to be bound by this Agreement. If you do not agree, do not access or use the Services.",
    ],
  },
  {
    id: "changes",
    num: "02",
    title: "Changes to Terms",
    body: [
      "We may update this Agreement at any time. Updated terms will be posted on the website, and your continued use of the Services constitutes acceptance of those changes.",
    ],
  },
  {
    id: "fees",
    num: "03",
    title: "Service Fees",
    body: [
      "You may incur fees for certain services, including transaction or third-party fees. Any applicable fees will be shown before you complete a transaction.",
    ],
    subsections: [
      {
        title: "3.1 — No FDIC Insurance",
        body: "RemitBridge is not an FDIC-insured bank. Funds held on the platform are not covered by deposit insurance.",
      },
      {
        title: "3.2 — Cryptocurrency Risk Disclosure",
        body: "Virtual currencies fluctuate in value and may result in total loss. Transactions are irreversible. RemitBridge does not control blockchain protocols and is not responsible for price changes, fraud, or security breaches at the personal wallet level.",
      },
      {
        title: "3.3 — Error Resolution",
        body: "If you notice errors or issues with your account, contact our support team via chat, email, the help portal, or phone — as soon as possible.",
      },
      {
        title: "3.4 — Taxes",
        body: "You are solely responsible for any taxes arising from your use of our Services.",
      },
      {
        title: "3.5 — Account Security",
        body: "You are responsible for safeguarding your login credentials. Notify support immediately of any unauthorized access or suspected breach.",
      },
      {
        title: "3.6 — Protection from Unauthorized Transactions",
        body: "Review your account activity regularly to detect unauthorized transactions and report any discrepancies immediately.",
      },
    ],
  },
  {
    id: "access",
    num: "04",
    title: "Accessing the Services",
    body: [
      "We may restrict or suspend access to the Services at any time, at our discretion. You must provide accurate registration information and comply with our Privacy Policy at all times.",
    ],
  },
  {
    id: "your-info",
    num: "05",
    title: "Use of Your Information",
    body: [
      "By submitting content (\"User Submissions\"), you grant RemitBridge a worldwide, royalty-free license to use, display, and distribute your submissions. You confirm that you hold all necessary rights to grant this license.",
    ],
  },
  {
    id: "electronic-comms",
    num: "06",
    title: "Electronic Communications",
    body: [
      "You consent to receive notices and communications from us electronically. Promotional emails may be sent periodically, and you may opt out of these at any time.",
    ],
  },
  {
    id: "mobile-charges",
    num: "07",
    title: "Mobile Service Charges",
    body: [
      "Your mobile carrier may impose data or other charges in connection with your use of the Services. You are solely responsible for any such fees.",
    ],
  },
  {
    id: "reservation",
    num: "08",
    title: "Reservation of Rights",
    body: [
      "We may modify or discontinue any part of the Services at our discretion, and may suspend or terminate accounts found to be in violation of these Terms or applicable law.",
    ],
  },
  {
    id: "ip",
    num: "09",
    title: "Intellectual Property",
    body: [
      "All content on the website and app — including but not limited to text, graphics, logos, and software — is owned by RemitBridge or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.",
    ],
  },
  {
    id: "permitted",
    num: "10",
    title: "Permitted Uses",
    body: [
      "You must be 18 years of age or older, not subject to U.S. sanctions, and in compliance with all applicable laws. The Services may only be used for lawful purposes consistent with this Agreement.",
    ],
  },
  {
    id: "prohibited",
    num: "11",
    title: "Prohibited Uses",
    body: [
      "You may not use the Services for unlawful, fraudulent, or harmful purposes, including but not limited to money laundering, terrorist financing, or market manipulation.",
    ],
  },
  {
    id: "reliance",
    num: "12",
    title: "Reliance on Information",
    body: [
      "We do not guarantee the accuracy, completeness, or timeliness of any information provided through the Services. Any reliance on such information is at your own risk.",
    ],
  },
  {
    id: "third-party",
    num: "13",
    title: "Third-Party Links",
    body: [
      "Our Services may contain links to third-party websites or services. RemitBridge is not responsible for the content, accuracy, or privacy practices of any third-party sites.",
    ],
  },
  {
    id: "agent",
    num: "14",
    title: "Agent of Payee Appointment",
    body: [
      "By using the Services, you appoint RemitBridge as your Agent of Payee, or under a similar designation, where applicable under local payment regulations.",
    ],
  },
  {
    id: "warranties",
    num: "15",
    title: "Disclaimer of Warranties",
    body: [
      "The Services are provided \"as is\" and \"as available\" without warranties of any kind, express or implied. RemitBridge does not guarantee the accuracy, reliability, security, or uninterrupted availability of the Services.",
    ],
  },
  {
    id: "liability",
    num: "16",
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, RemitBridge and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from or related to your use of the Services.",
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
const IcoAlert = () => <Ico d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A2 2 0 0 0 3.93 21h16.14a2 2 0 0 0 1.82-2.96L13.71 3.86a2 2 0 0 0-3.42 0z" size={18} />;
const IcoMail  = () => <Ico d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 9 8-9" size={14} />;

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TermsOfServicePage() {
  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="tos-page">
        <div className="rb-wrap">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <motion.div
            className="tos-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="tos-eyebrow-pill">Legal</div>
            <h1 className="tos-h1">Terms of Service</h1>
            <p className="tos-updated">Last updated: January 6, 2026</p>

            {/* Important notice banner */}
            <div className="tos-notice">
              <span className="tos-notice__icon"><IcoAlert /></span>
              <div>
                <div className="tos-notice__title">This notice is important — please read carefully</div>
                <div className="tos-notice__body">
                  Certain sections of this Agreement may limit your ability to bring claims
                  or require individual arbitration. Please review Sections 15 and 16 closely.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── BODY GRID — TOC + content ────────────────────────────────── */}
          <div className="tos-grid">

            {/* Sticky table of contents */}
            <aside className="tos-toc">
              <div className="tos-toc__label">On this page</div>
              <nav className="tos-toc__list">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="tos-toc__link">
                    <span className="tos-toc__num">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </nav>

              <div className="tos-toc__contact">
                <div className="tos-toc__contact-label">Questions?</div>
                <a href="mailto:support@remitbridge.com" className="tos-toc__contact-link">
                  <IcoMail /> support@remitbridge.com
                </a>
              </div>
            </aside>

            {/* Content */}
            <div className="tos-content">
              {sections.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="tos-section"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="tos-section__head">
                    <span className="tos-section__num">{section.num}</span>
                    <h2 className="tos-section__title">{section.title}</h2>
                  </div>

                  {section.body.map((p, j) => (
                    <p key={j} className="tos-section__p">{p}</p>
                  ))}

                  {section.subsections && (
                    <div className="tos-subsections">
                      {section.subsections.map((sub, k) => (
                        <div key={k} className="tos-subsection">
                          <h3 className="tos-subsection__title">{sub.title}</h3>
                          <p className="tos-subsection__body">{sub.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              ))}

              {/* Closing contact card */}
              <div className="tos-footer-card">
                <div className="tos-footer-card__title">Still have questions?</div>
                <p className="tos-footer-card__desc">
                  Our support and compliance teams are available to clarify any
                  part of this Agreement before you continue using our Services.
                </p>
                <a href="mailto:support@remitbridge.com" className="btn-blue">
                  <IcoMail /> Contact support
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
  .tos-page {
    background: var(--rb-white, #fff);
    padding: 88px 0 96px;
  }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero ── */
  .tos-hero {
    max-width: 720px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-bottom: 56px;
  }
  .tos-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700;
    color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase;
    margin-bottom: 24px;
  }
  .tos-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800; line-height: 1.08;
    letter-spacing: -.03em; color: var(--rb-gray-900, #111827);
    margin-bottom: 12px;
  }
  .tos-updated {
    font-size: .875rem; color: var(--rb-gray-400, #9CA3AF);
    margin-bottom: 28px;
  }

  /* Notice banner */
  .tos-notice {
    display: flex; gap: 14px; align-items: flex-start;
    background: #FFFBEB; border: 1px solid #FDE68A;
    border-radius: 12px; padding: 18px 20px;
  }
  .tos-notice__icon { color: #D97706; flex-shrink: 0; margin-top: 1px; }
  .tos-notice__title {
    font-size: .875rem; font-weight: 700;
    color: #92400E; margin-bottom: 4px;
  }
  .tos-notice__body {
    font-size: .825rem; color: #92400E; opacity: .85; line-height: 1.65;
  }

  /* ── Body grid ── */
  .tos-grid {
    display: grid; grid-template-columns: 240px 1fr;
    gap: 64px; align-items: start;
  }
  @media (max-width: 860px) {
    .tos-grid { grid-template-columns: 1fr; gap: 32px; }
  }

  /* ── TOC ── */
  .tos-toc {
    position: sticky; top: 96px;
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 24px 20px;
    background: var(--rb-gray-50, #F9FAFB);
  }
  .tos-toc__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 14px;
  }
  .tos-toc__list {
    display: flex; flex-direction: column; gap: 2px;
    max-height: 420px; overflow-y: auto; margin-bottom: 20px;
  }
  .tos-toc__link {
    display: flex; align-items: baseline; gap: 8px;
    font-size: .8rem; color: var(--rb-gray-500, #6B7280);
    text-decoration: none; padding: 6px 8px; border-radius: 6px;
    transition: background .15s, color .15s;
  }
  .tos-toc__link:hover {
    background: var(--rb-blue-50, #EFF6FF); color: var(--rb-blue-700, #1D4ED8);
  }
  .tos-toc__num {
    font-size: .7rem; font-weight: 700; color: var(--rb-gray-300, #D1D5DB);
    font-family: monospace; flex-shrink: 0;
  }
  .tos-toc__contact {
    border-top: 1px solid var(--rb-gray-200, #E5E7EB);
    padding-top: 16px;
  }
  .tos-toc__contact-label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .tos-toc__contact-link {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600;
    color: var(--rb-blue-700, #1D4ED8); text-decoration: none;
  }
  .tos-toc__contact-link:hover { opacity: .8; }
  @media (max-width: 860px) {
    .tos-toc { position: static; }
    .tos-toc__list { max-height: none; }
  }

  /* ── Content ── */
  .tos-content { display: flex; flex-direction: column; }

  .tos-section {
    padding: 32px 0;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    scroll-margin-top: 96px;
  }
  .tos-content > .tos-section:first-child { padding-top: 0; }

  .tos-section__head {
    display: flex; align-items: baseline; gap: 12px;
    margin-bottom: 16px;
  }
  .tos-section__num {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: .85rem; font-weight: 800;
    color: var(--rb-blue-700, #1D4ED8); flex-shrink: 0;
  }
  .tos-section__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.3rem; font-weight: 700;
    letter-spacing: -.015em; color: var(--rb-gray-900, #111827);
  }
  .tos-section__p {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.85; margin-bottom: 12px;
  }
  .tos-section__p:last-child { margin-bottom: 0; }

  /* Subsections */
  .tos-subsections {
    display: flex; flex-direction: column; gap: 18px;
    margin-top: 20px; padding-left: 20px;
    border-left: 2px solid var(--rb-blue-100, #DBEAFE);
  }
  .tos-subsection__title {
    font-size: .875rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 6px;
  }
  .tos-subsection__body {
    font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8;
  }

  /* ── Closing card ── */
  .tos-footer-card {
    margin-top: 40px;
    background: var(--rb-gray-50, #F9FAFB);
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 16px; padding: 36px 32px;
  }
  .tos-footer-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.15rem; font-weight: 700;
    color: var(--rb-gray-900, #111827); margin-bottom: 10px;
  }
  .tos-footer-card__desc {
    font-size: .875rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; margin-bottom: 20px; max-width: 480px;
  }
`;
