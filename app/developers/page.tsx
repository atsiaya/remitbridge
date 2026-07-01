"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
const IcoArrow    = ({ size = 14 }) => <Ico d="M5 12h14M12 5l7 7-7 7" size={size} />;
const IcoCheck    = ({ size = 13 }) => <Ico d="M20 6L9 17l-5-5" size={size} />;
const IcoCopy     = ({ size = 14 }) => <Ico d="M9 9h10v10H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" size={size} />;
const IcoEye      = () => <Ico d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" size={14} />;
const IcoEyeOff   = () => <Ico d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.4 18.4 0 0 1 4.06-5.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 7 11 7a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22M9.5 9.5a3 3 0 0 0 4.24 4.24" size={14} />;
const IcoPlus     = () => <Ico d="M12 5v14M5 12h14" size={14} />;
const IcoTrash    = () => <Ico d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6" size={14} />;
const IcoTerminal = () => <Ico d="M4 17l6-6-6-6M12 19h8" size={20} />;
const IcoBook     = () => <Ico d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z" size={20} />;
const IcoKey      = () => <Ico d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" size={20} />;
const IcoWebhook  = () => <Ico d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 1 1 2 18.84M18 16.98a4 4 0 1 0-4.7-6.74M12 12a4 4 0 0 0-4.7 6.74" size={20} />;
type IcoChevronProps = {
  open: boolean;
};

const IcoChevron = ({ open }: IcoChevronProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    style={{
      transition: "transform .22s",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const quickStartSteps = [
  {
    n: "01",
    title: "Create your developer account",
    desc: "Sign up for a RemitBridge account and complete business verification. Sandbox access is granted immediately — no waiting on approval.",
  },
  {
    n: "02",
    title: "Generate API credentials",
    desc: "Create a sandbox key pair from your developer portal below. Test against our sandbox environment with simulated transactions and zero risk.",
  },
  {
    n: "03",
    title: "Make your first request",
    desc: "Authenticate with your secret key and call any endpoint — transfers, FX quotes, account balances — using our REST API or official SDKs.",
  },
  {
    n: "04",
    title: "Go live",
    desc: "Once your integration is tested, request production credentials from your dashboard. No code changes — just swap the base URL and keys.",
  },
];

const endpoints = [
  { method: "POST", path: "/v1/transfers",              desc: "Create a new cross-border transfer" },
  { method: "GET",  path: "/v1/transfers/:id",          desc: "Retrieve transfer status and details" },
  { method: "GET",  path: "/v1/fx/quote",               desc: "Get a live mid-market FX quote" },
  { method: "POST", path: "/v1/fx/lock",                desc: "Lock an FX rate for up to 72 hours" },
  { method: "GET",  path: "/v1/accounts/:id/balance",   desc: "Retrieve current account balance" },
  { method: "POST", path: "/v1/payouts/batch",          desc: "Submit a bulk payout batch (up to 5,000 recipients)" },
  { method: "POST", path: "/v1/cards",                  desc: "Issue a new virtual card" },
  { method: "GET",  path: "/v1/webhooks/events",        desc: "List recent webhook delivery events" },
];

const sdks = [
  { name: "Node.js", install: "npm install @remitbridge/sdk" },
  { name: "Python",  install: "pip install remitbridge" },
  { name: "PHP",     install: "composer require remitbridge/sdk" },
  { name: "Go",      install: "go get github.com/remitbridge/sdk-go" },
];

const faqs = [
  {
    q: "What's the difference between sandbox and production keys?",
    a: "Sandbox keys connect to a fully simulated environment — no real money moves, settlement is instant, and you can generate test scenarios for failures, delays, and edge cases. Production keys connect to live infrastructure and move real funds.",
  },
  {
    q: "How do I rotate or revoke an API key?",
    a: "From the credentials panel below, click the menu next to any key and select \"Revoke.\" Revocation is immediate and cannot be undone — generate a replacement key before revoking if you have live integrations depending on it.",
  },
  {
    q: "What rate limits apply to the API?",
    a: "Sandbox: 100 requests/minute. Production (Business plan): 600 requests/minute. Production (Enterprise plan): custom limits negotiated with your solutions engineer. Rate limit headers are included in every response.",
  },
  {
    q: "Do you support webhooks?",
    a: "Yes. Every payment, FX lock, and payout state change emits a webhook event. Configure your endpoint URL and event subscriptions in the dashboard, and verify payloads using the signing secret found in your webhook settings.",
  },
];

// ─── MOCK CREDENTIALS STATE ───────────────────────────────────────────────────
const initialKeys = [
  { id: "key_1", label: "Sandbox — Default",   env: "sandbox",    publicKey: "pk_sandbox_4f9a2c8e1b3d", secretKey: "sk_sandbox_7d3e9f1a2b4c6e8a0d2f4b6c8e1a3d5f", created: "Jun 12, 2026", lastUsed: "2 hours ago" },
  { id: "key_2", label: "Production — Server", env: "production", publicKey: "pk_live_9b2e7a4c1f6d",    secretKey: "sk_live_1a3c5e7f9b1d3f5a7c9e1b3d5f7a9c1e", created: "May 28, 2026", lastUsed: "14 minutes ago" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function DevelopersPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [keys, setKeys] = useState(initialKeys);
  const [portalUnlocked, setPortalUnlocked] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newKeyLabel, setNewKeyLabel] = useState("");
  const [newKeyEnv, setNewKeyEnv] = useState("sandbox");
  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toggleReveal = (id: string) => {
    setRevealedKeys((prev) => ({
      ...prev,
      [id]: !(prev[id] ?? false),
    }));
  };

 const copyToClipboard = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }

    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const revokeKey = (id: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== id));
  };

  const createKey = () => {
    if (!newKeyLabel.trim()) return;
    const id = `key_${Date.now()}`;
    const rand = () => Math.random().toString(36).slice(2, 10);
    const newKey = {
      id,
      label: newKeyLabel,
      env: newKeyEnv,
      publicKey: `pk_${newKeyEnv === "sandbox" ? "sandbox" : "live"}_${rand()}`,
      secretKey: `sk_${newKeyEnv === "sandbox" ? "sandbox" : "live"}_${rand()}${rand()}`,
      created: "Just now",
      lastUsed: "Never",
    };
    setKeys((prev) => [newKey, ...prev]);
    setShowCreateModal(false);
    setNewKeyLabel("");
    setNewKeyEnv("sandbox");
  };

  type IconProps = {
  size?: number;
};

  const IcoKey = ({ size = 24 }: IconProps) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="..." />
    </svg>
  );

  const maskKey = (key: string): string =>
  key.slice(0, 8) + "•".repeat(18) + key.slice(-4);

  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="dv-page">
        <div className="rb-wrap">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <section className="dv-hero">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="dv-eyebrow-pill">
                <span className="dv-eyebrow-dot" />
                Developer Platform
              </div>
              <h1 className="dv-h1">
                Build on RemitBridge's<br />
                <span className="dv-h1__accent">global payments API</span>
              </h1>
              <p className="dv-sub">
                One REST API for transfers, FX, multi-currency wallets, cards,
                and payouts across 190+ countries. Sandbox access in minutes —
                production-ready when you are.
              </p>
              <div className="dv-hero__actions">
                <a href="#credentials" className="btn-blue">
                  <IcoKey /> Get API credentials
                </a>
                <a href="#quickstart" className="btn-outline">
                  View quickstart <IcoArrow />
                </a>
              </div>
            </motion.div>
          </section>

          {/* ── STATS BAR ─────────────────────────────────────────────── */}
          <div className="dv-stats-bar">
            {[
              { val: "99.98%", label: "API uptime SLA" },
              { val: "< 80ms", label: "P50 response time" },
              { val: "190+",   label: "Countries supported" },
              { val: "4",      label: "Official SDKs" },
            ].map((s, i) => (
              <div key={i} className="dv-stat">
                <div className="dv-stat__val">{s.val}</div>
                <div className="dv-stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── QUICKSTART STEPS ──────────────────────────────────────── */}
          <section id="quickstart" className="dv-section">
            <div className="eyebrow">Quickstart</div>
            <h2 className="sec-h2">From sign-up to your<br />first API call</h2>
            <p className="dv-section-sub">
              Four steps. No sales call required to start building in sandbox.
            </p>

            <div className="dv-steps-grid">
              {quickStartSteps.map((s, i) => (
                <motion.div
                  key={i}
                  className="dv-step"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  {i < quickStartSteps.length - 1 && <div className="dv-step__connector" />}
                  <div className="dv-step__num">{i + 1}</div>
                  <div className="dv-step__label">{s.n}</div>
                  <div className="dv-step__title">{s.title}</div>
                  <div className="dv-step__desc">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── CODE EXAMPLE ──────────────────────────────────────────── */}
          <section className="dv-section dv-section--alt">
            <div className="dv-code-grid">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="eyebrow">Your first request</div>
                <h2 className="sec-h2">Send a transfer<br />in five lines of code</h2>
                <p className="dv-section-sub" style={{ marginBottom: 28 }}>
                  Authenticate with your secret key, specify the amount and
                  destination, and RemitBridge handles routing, FX, and
                  compliance automatically.
                </p>
                <div className="dv-code-features">
                  {[
                    "Idempotency keys prevent duplicate transfers",
                    "Webhooks fire on every status change",
                    "Sandbox mirrors production response shapes exactly",
                  ].map((f, i) => (
                    <div key={i} className="dv-code-feature">
                      <span className="dv-code-feature__icon"><IcoCheck /></span>
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="dv-code-block"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="dv-code-block__header">
                  <div className="dv-code-block__dots">
                    <span /><span /><span />
                  </div>
                  <span className="dv-code-block__lang">cURL</span>
                </div>
                <pre className="dv-code-block__pre">
{`curl -X POST https://api.remitbridge.com/v1/transfers \\
  -H "Authorization: Bearer sk_sandbox_••••••••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 10000,
    "currency": "USD",
    "destination_currency": "KES",
    "recipient_id": "rcp_8f3a2c1d"
  }'`}
                </pre>
                <div className="dv-code-block__response">
                  <div className="dv-code-block__response-label">Response · 201 Created</div>
                  <pre className="dv-code-block__pre dv-code-block__pre--response">
{`{
  "id": "tr_4f9a2c8e",
  "status": "processing",
  "amount": 10000,
  "fx_rate": 129.45,
  "eta_seconds": 3
}`}
                  </pre>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── ENDPOINTS REFERENCE ───────────────────────────────────── */}
          <section className="dv-section">
            <div className="eyebrow">API reference</div>
            <h2 className="sec-h2">Core endpoints</h2>
            <p className="dv-section-sub">
              A snapshot of the most-used routes. Full reference and request/response schemas live in our complete API documentation.
            </p>

            <div className="dv-endpoints">
              {endpoints.map((ep, i) => (
                <motion.div
                  key={i}
                  className="dv-endpoint-row"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <span className={`dv-method dv-method--${ep.method.toLowerCase()}`}>{ep.method}</span>
                  <code className="dv-endpoint-path">{ep.path}</code>
                  <span className="dv-endpoint-desc">{ep.desc}</span>
                  <span className="dv-endpoint-arrow"><IcoArrow /></span>
                </motion.div>
              ))}
            </div>

            <a href="#" className="dv-full-docs-link">
              <IcoBook /> View full API reference <IcoArrow />
            </a>
          </section>

          {/* ── SDKs ──────────────────────────────────────────────────── */}
          <section className="dv-section dv-section--alt">
            <div className="eyebrow">Official SDKs</div>
            <h2 className="sec-h2">Integrate in your<br />language of choice</h2>
            <p className="dv-section-sub">
              Every SDK covers 100% of platform functionality, with full TypeScript / type hints support.
            </p>

            <div className="dv-sdk-grid">
              {sdks.map((sdk, i) => (
                <motion.div
                  key={i}
                  className="dv-sdk-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="dv-sdk-card__name">{sdk.name}</div>
                  <div className="dv-sdk-card__install">
                    <code>{sdk.install}</code>
                    <button
                      className="dv-sdk-card__copy"
                      onClick={() => copyToClipboard(sdk.install, `sdk-${i}`)}
                      aria-label={`Copy install command for ${sdk.name}`}
                    >
                      {copiedKey === `sdk-${i}` ? <IcoCheck /> : <IcoCopy />}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── DEVELOPER CREDENTIALS PORTAL ──────────────────────────── */}
          <section id="credentials" className="dv-section">
            <div className="eyebrow">Developer portal</div>
            <h2 className="sec-h2">Manage your API credentials</h2>
            <p className="dv-section-sub">
              Create, view, and revoke API keys for sandbox and production environments.
            </p>

            {!portalUnlocked ? (
              <motion.div
                className="dv-portal-gate"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="dv-portal-gate__icon"><IcoKey size={28} /></div>
                <h3 className="dv-portal-gate__title">Sign in to access your credentials</h3>
                <p className="dv-portal-gate__desc">
                  API key management lives in your authenticated developer
                  dashboard. Sign in or create a free account to generate
                  sandbox credentials in under a minute.
                </p>
                <div className="dv-portal-gate__actions">
                  <button className="btn-blue" onClick={() => setPortalUnlocked(true)}>
                    Test our sandbox env <IcoArrow />
                  </button>
                  <a href="/register" className="btn-outline">Create free account</a>
                </div>
                <div className="dv-portal-gate__note">
                  This is a live interactive preview — no real account required to explore.
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="dv-portal"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Portal header */}
                <div className="dv-portal__header">
                  <div className="dv-portal__header-left">
                    <div className="dv-portal__status-dot" />
                    <span>Connected as <strong>demo@remitbridge.com</strong></span>
                  </div>
                  <button className="btn-blue dv-portal__create-btn" onClick={() => setShowCreateModal(true)}>
                    <IcoPlus /> New API key
                  </button>
                </div>

                {/* Keys table */}
                <div className="dv-keys-table">
                  <div className="dv-keys-table__head">
                    <span>Key</span>
                    <span>Environment</span>
                    <span>Public key</span>
                    <span>Secret key</span>
                    <span>Last used</span>
                    <span></span>
                  </div>

                  {keys.length === 0 && (
                    <div className="dv-keys-empty">
                      No API keys yet. Create one to get started.
                    </div>
                  )}

                  <AnimatePresence>
                    {keys.map((k) => (
                      <motion.div
                        key={k.id}
                        className="dv-keys-table__row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="dv-key-label">
                          <div className="dv-key-label__name">{k.label}</div>
                          <div className="dv-key-label__created">Created {k.created}</div>
                        </div>

                        <span className={`dv-env-badge dv-env-badge--${k.env}`}>
                          {k.env === "sandbox" ? "Sandbox" : "Production"}
                        </span>

                        <div className="dv-key-cell">
                          <code className="dv-key-cell__code">{k.publicKey}</code>
                          <button
                            className="dv-key-cell__btn"
                            onClick={() => copyToClipboard(k.publicKey, `pub-${k.id}`)}
                            aria-label="Copy public key"
                          >
                            {copiedKey === `pub-${k.id}` ? <IcoCheck /> : <IcoCopy />}
                          </button>
                        </div>

                        <div className="dv-key-cell">
                          <code className="dv-key-cell__code">
                            {revealedKeys[k.id] ? k.secretKey : maskKey(k.secretKey)}
                          </code>
                          <button
                            className="dv-key-cell__btn"
                            onClick={() => toggleReveal(k.id)}
                            aria-label={revealedKeys[k.id] ? "Hide secret key" : "Reveal secret key"}
                          >
                            {revealedKeys[k.id] ? <IcoEyeOff /> : <IcoEye />}
                          </button>
                          <button
                            className="dv-key-cell__btn"
                            onClick={() => copyToClipboard(k.secretKey, `sec-${k.id}`)}
                            aria-label="Copy secret key"
                          >
                            {copiedKey === `sec-${k.id}` ? <IcoCheck /> : <IcoCopy />}
                          </button>
                        </div>

                        <span className="dv-key-lastused">{k.lastUsed}</span>

                        <button
                          className="dv-key-revoke"
                          onClick={() => revokeKey(k.id)}
                          aria-label="Revoke key"
                        >
                          <IcoTrash />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Warning note */}
                <div className="dv-portal__warning">
                  <IcoKey size={15} />
                  Secret keys are shown only once in full at creation time in
                  a production environment. Treat this preview as illustrative —
                  never share secret keys in client-side code or version control.
                </div>
              </motion.div>
            )}
          </section>

          {/* ── WEBHOOKS CALLOUT ──────────────────────────────────────── */}
          <section className="dv-section dv-section--alt">
            <div className="dv-webhook-banner">
              <div className="dv-webhook-banner__left">
                <div className="dv-webhook-icon"><IcoWebhook /></div>
                <div className="eyebrow" style={{ color: "#93C5FD" }}>Real-time events</div>
                <h2 className="dv-webhook-banner__h2">
                  Subscribe to webhooks for<br />every payment state change
                </h2>
                <p className="dv-webhook-banner__sub">
                  Configure your endpoint once, and receive signed payloads
                  for transfer updates, FX lock expirations, payout batch
                  completions, and card transactions — in real time.
                </p>
                <a href="#" className="btn-white">
                  Webhook documentation <IcoArrow />
                </a>
              </div>
              <div className="dv-webhook-banner__right">
                <div className="dv-webhook-event">
                  <span className="dv-webhook-event__dot" />
                  <code>transfer.completed</code>
                </div>
                <div className="dv-webhook-event">
                  <span className="dv-webhook-event__dot" />
                  <code>fx_lock.expiring</code>
                </div>
                <div className="dv-webhook-event">
                  <span className="dv-webhook-event__dot" />
                  <code>payout_batch.completed</code>
                </div>
                <div className="dv-webhook-event">
                  <span className="dv-webhook-event__dot" />
                  <code>card.transaction.created</code>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ───────────────────────────────────────────────────── */}
          <section className="dv-section">
            <div className="dv-faq-wrap">
              <div className="eyebrow">FAQ</div>
              <h2 className="sec-h2">Common developer questions</h2>

              <div className="dv-faq-list">
                {faqs.map((f, i) => (
                  <div key={i} className="dv-faq-item">
                    <div className="dv-faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                      <span className="dv-faq-q-text">{f.q}</span>
                      <span className="dv-faq-chevron"><IcoChevron open={faqOpen === i} /></span>
                    </div>
                    <AnimatePresence>
                      {faqOpen === i && (
                        <motion.div
                          className="dv-faq-a"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                        >
                          {f.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────── */}
          <section className="dv-section">
            <div className="dv-cta-banner">
              <div className="dv-cta-icon"><IcoTerminal /></div>
              <h2 className="dv-cta-banner__h2">Ready to start building?</h2>
              <p className="dv-cta-banner__sub">
                Create your sandbox account and make your first API call in
                under five minutes. No credit card required.
              </p>
              <div className="dv-cta-banner__actions">
                <a href="/register" className="btn-white">
                  Create developer account <IcoArrow />
                </a>
                <a href="#" className="btn-outline-white">
                  Read full documentation
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ── CREATE KEY MODAL ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            className="dv-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              className="dv-modal"
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dv-modal__title">Create new API key</div>
              <p className="dv-modal__sub">
                Give your key a descriptive label so you can identify it later.
              </p>

              <label className="dv-modal__label">Key label</label>
              <input
                type="text"
                className="dv-modal__input"
                placeholder="e.g. Production — Payroll Service"
                value={newKeyLabel}
                onChange={(e) => setNewKeyLabel(e.target.value)}
                autoFocus
              />

              <label className="dv-modal__label">Environment</label>
              <div className="dv-modal__env-toggle">
                <button
                  className={`dv-modal__env-btn ${newKeyEnv === "sandbox" ? "dv-modal__env-btn--active" : ""}`}
                  onClick={() => setNewKeyEnv("sandbox")}
                >
                  Sandbox
                </button>
                <button
                  className={`dv-modal__env-btn ${newKeyEnv === "production" ? "dv-modal__env-btn--active" : ""}`}
                  onClick={() => setNewKeyEnv("production")}
                >
                  Production
                </button>
              </div>

              <div className="dv-modal__actions">
                <button className="btn-outline" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button className="btn-blue" onClick={createKey} disabled={!newKeyLabel.trim()}>
                  <IcoPlus /> Create key
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
  .btn-blue:disabled { opacity: .5; cursor: not-allowed; }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-700, #374151);
    font-size: 14px; font-weight: 600; padding: 13px 24px;
    border-radius: 9px; text-decoration: none;
    border: 1.5px solid var(--rb-gray-200, #E5E7EB);
    transition: border-color .15s, background .15s; cursor: pointer;
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

  /* ── Typography ── */
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
  .dv-page { background: var(--rb-white, #fff); }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero ── */
  .dv-hero {
    padding: 88px 0 56px;
    max-width: 760px;
  }
  .dv-eyebrow-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase; margin-bottom: 24px;
  }
  .dv-eyebrow-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8); animation: dv-pulse 2s infinite;
  }
  @keyframes dv-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
  .dv-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.4rem, 4.5vw, 3.6rem); font-weight: 800;
    line-height: 1.08; letter-spacing: -.03em;
    color: var(--rb-gray-900, #111827); margin-bottom: 20px;
  }
  .dv-h1__accent { color: var(--rb-blue-700, #1D4ED8); }
  .dv-sub {
    font-size: 1.05rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 540px; margin-bottom: 32px;
  }
  .dv-hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

  /* ── Stats bar ── */
  .dv-stats-bar {
    display: grid; grid-template-columns: repeat(4, 1fr);
    background: var(--rb-blue-700, #1D4ED8);
    border-radius: 16px; overflow: hidden; margin-bottom: 8px;
  }
  .dv-stat { padding: 28px 24px; text-align: center; border-right: 1px solid rgba(255,255,255,.12); }
  .dv-stat:last-child { border-right: none; }
  .dv-stat__val {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 2rem; font-weight: 800; color: #fff; line-height: 1;
  }
  .dv-stat__label { font-size: 11.5px; color: rgba(255,255,255,.6); margin-top: 6px; font-weight: 500; }
  @media (max-width: 640px) {
    .dv-stats-bar { grid-template-columns: repeat(2, 1fr); }
    .dv-stat:nth-child(2) { border-right: none; }
    .dv-stat:nth-child(3) { border-right: 1px solid rgba(255,255,255,.12); }
  }

  /* ── Section helpers ── */
  .dv-section { padding: 80px 0; }
  .dv-section--alt {
    background: var(--rb-gray-50, #F9FAFB);
    border-top: 1px solid var(--rb-gray-100, #F3F4F6);
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-left: -24px; margin-right: -24px; padding-left: 24px; padding-right: 24px;
  }
  .dv-section-sub {
    font-size: .95rem; color: var(--rb-gray-500, #6B7280);
    line-height: 1.8; max-width: 520px; margin-bottom: 48px;
  }

  /* ── Quickstart steps ── */
  .dv-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
  .dv-step { position: relative; }
  .dv-step__connector {
    position: absolute; top: 19px; left: calc(50% + 20px); right: calc(-50% + 20px);
    height: 1px; background: var(--rb-blue-200, #BFDBFE); z-index: 0;
  }
  .dv-step__num {
    width: 38px; height: 38px; border-radius: 50%;
    background: var(--rb-blue-700, #1D4ED8); color: #fff;
    font-size: 13px; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px; position: relative; z-index: 1;
  }
  .dv-step__label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .08em;
    color: var(--rb-blue-700, #1D4ED8); text-transform: uppercase; margin-bottom: 8px;
  }
  .dv-step__title { font-size: .95rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 8px; }
  .dv-step__desc { font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.7; }
  @media (max-width: 800px) {
    .dv-steps-grid { grid-template-columns: repeat(2, 1fr); }
    .dv-step__connector { display: none; }
  }
  @media (max-width: 480px) { .dv-steps-grid { grid-template-columns: 1fr; } }

  /* ── Code example ── */
  .dv-code-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
  .dv-code-features { display: flex; flex-direction: column; gap: 12px; }
  .dv-code-feature {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: .875rem; color: var(--rb-gray-500, #6B7280); line-height: 1.6;
  }
  .dv-code-feature__icon { color: #10B981; flex-shrink: 0; margin-top: 1px; }

  .dv-code-block {
    background: #0B1120; border-radius: 16px; overflow: hidden;
    box-shadow: 0 16px 40px rgba(0,0,0,.18);
  }
  .dv-code-block__header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 18px; background: #131C2E; border-bottom: 1px solid #1E293B;
  }
  .dv-code-block__dots { display: flex; gap: 6px; }
  .dv-code-block__dots span {
    width: 9px; height: 9px; border-radius: 50%; background: #334155;
  }
  .dv-code-block__lang {
    font-size: 11px; font-weight: 700; letter-spacing: .06em;
    color: #64748B; text-transform: uppercase;
  }
  .dv-code-block__pre {
    margin: 0; padding: 20px; font-family: 'SF Mono', Menlo, monospace;
    font-size: 12.5px; line-height: 1.7; color: #C7D2E0;
    overflow-x: auto; white-space: pre;
  }
  .dv-code-block__response {
    border-top: 1px solid #1E293B; background: #0E1626;
  }
  .dv-code-block__response-label {
    font-size: 10.5px; font-weight: 700; letter-spacing: .07em;
    color: #34D399; text-transform: uppercase; padding: 14px 20px 0;
  }
  .dv-code-block__pre--response { color: #93C5FD; padding-top: 10px; }
  @media (max-width: 860px) { .dv-code-grid { grid-template-columns: 1fr; gap: 36px; } }

  /* ── Endpoints table ── */
  .dv-endpoints {
    border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 14px; overflow: hidden; margin-bottom: 20px;
  }
  .dv-endpoint-row {
    display: grid; grid-template-columns: 64px 220px 1fr 16px;
    align-items: center; gap: 16px; padding: 14px 20px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    transition: background .15s; cursor: pointer;
  }
  .dv-endpoint-row:last-child { border-bottom: none; }
  .dv-endpoint-row:hover { background: var(--rb-gray-50, #F9FAFB); }
  .dv-method {
    font-size: 10.5px; font-weight: 700; letter-spacing: .04em;
    padding: 3px 8px; border-radius: 5px; text-align: center; font-family: monospace;
  }
  .dv-method--get  { background: #EFF6FF; color: #1D4ED8; }
  .dv-method--post { background: #ECFDF5; color: #059669; }
  .dv-endpoint-path {
    font-size: .8rem; font-family: 'SF Mono', Menlo, monospace;
    color: var(--rb-gray-900, #111827); font-weight: 600;
  }
  .dv-endpoint-desc { font-size: .82rem; color: var(--rb-gray-500, #6B7280); }
  .dv-endpoint-arrow { color: var(--rb-gray-300, #D1D5DB); }
  @media (max-width: 700px) {
    .dv-endpoint-row { grid-template-columns: 56px 1fr; grid-template-areas: "method path" "desc desc"; }
    .dv-endpoint-desc { grid-area: desc; margin-top: 4px; }
    .dv-endpoint-arrow { display: none; }
  }

  .dv-full-docs-link {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: .9rem; font-weight: 600; color: var(--rb-blue-700, #1D4ED8);
    text-decoration: none;
  }
  .dv-full-docs-link:hover { opacity: .8; }

  /* ── SDK grid ── */
  .dv-sdk-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .dv-sdk-card {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 14px;
    padding: 24px; background: #fff;
  }
  .dv-sdk-card__name {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 14px;
  }
  .dv-sdk-card__install {
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
    background: var(--rb-gray-50, #F9FAFB); border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 8px; padding: 9px 12px;
  }
  .dv-sdk-card__install code {
    font-size: .72rem; color: var(--rb-gray-700, #374151);
    font-family: 'SF Mono', Menlo, monospace; overflow: hidden;
    text-overflow: ellipsis; white-space: nowrap;
  }
  .dv-sdk-card__copy {
    background: none; border: none; cursor: pointer;
    color: var(--rb-gray-400, #9CA3AF); flex-shrink: 0; padding: 2px;
    transition: color .15s;
  }
  .dv-sdk-card__copy:hover { color: var(--rb-blue-700, #1D4ED8); }
  @media (max-width: 900px) { .dv-sdk-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .dv-sdk-grid { grid-template-columns: 1fr; } }

  /* ── Portal gate ── */
  .dv-portal-gate {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 18px;
    padding: 56px 48px; text-align: center;
    background: var(--rb-gray-50, #F9FAFB);
    display: flex; flex-direction: column; align-items: center;
  }
  .dv-portal-gate__icon {
    width: 56px; height: 56px; border-radius: 14px;
    background: var(--rb-blue-50, #EFF6FF); border: 1px solid var(--rb-blue-200, #BFDBFE);
    color: var(--rb-blue-700, #1D4ED8);
    display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
  }
  .dv-portal-gate__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.25rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 12px;
  }
  .dv-portal-gate__desc {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8;
    max-width: 440px; margin-bottom: 28px;
  }
  .dv-portal-gate__actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; margin-bottom: 16px; }
  .dv-portal-gate__note { font-size: .78rem; color: var(--rb-gray-400, #9CA3AF); }

  /* ── Portal ── */
  .dv-portal {
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 18px;
    overflow: hidden; background: #fff;
  }
  .dv-portal__header {
    display: flex; justify-content: space-between; align-items: center;
    gap: 16px; padding: 20px 24px;
    background: var(--rb-gray-50, #F9FAFB); border-bottom: 1px solid var(--rb-gray-200, #E5E7EB);
    flex-wrap: wrap;
  }
  .dv-portal__header-left {
    display: flex; align-items: center; gap: 8px;
    font-size: .85rem; color: var(--rb-gray-500, #6B7280);
  }
  .dv-portal__header-left strong { color: var(--rb-gray-900, #111827); }
  .dv-portal__status-dot {
    width: 8px; height: 8px; border-radius: 50%; background: #10B981; flex-shrink: 0;
  }
  .dv-portal__create-btn { padding: 9px 18px; font-size: 13px; }

  /* ── Keys table ── */
  .dv-keys-table { padding: 8px; }
  .dv-keys-table__head {
    display: grid; grid-template-columns: 1.4fr .9fr 1.5fr 1.6fr .9fr 40px;
    gap: 12px; padding: 12px 16px;
    font-size: 10.5px; font-weight: 700; letter-spacing: .06em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase;
  }
  .dv-keys-table__row {
    display: grid; grid-template-columns: 1.4fr .9fr 1.5fr 1.6fr .9fr 40px;
    gap: 12px; align-items: center; padding: 14px 16px;
    border-radius: 10px; transition: background .15s;
  }
  .dv-keys-table__row:hover { background: var(--rb-gray-50, #F9FAFB); }
  .dv-key-label__name { font-size: .85rem; font-weight: 600; color: var(--rb-gray-900, #111827); }
  .dv-key-label__created { font-size: .72rem; color: var(--rb-gray-400, #9CA3AF); margin-top: 2px; }

  .dv-env-badge {
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 10.5px; font-weight: 700; letter-spacing: .04em;
    border-radius: 100px; padding: 3px 10px; width: fit-content;
  }
  .dv-env-badge--sandbox { background: var(--rb-blue-50, #EFF6FF); color: var(--rb-blue-700, #1D4ED8); border: 1px solid var(--rb-blue-200, #BFDBFE); }
  .dv-env-badge--production { background: #ECFDF5; color: #059669; border: 1px solid #A7F3D0; }

  .dv-key-cell {
    display: flex; align-items: center; gap: 6px;
    background: var(--rb-gray-50, #F9FAFB); border: 1px solid var(--rb-gray-100, #F3F4F6);
    border-radius: 8px; padding: 6px 10px; min-width: 0;
  }
  .dv-key-cell__code {
    font-size: .72rem; font-family: 'SF Mono', Menlo, monospace;
    color: var(--rb-gray-700, #374151); overflow: hidden;
    text-overflow: ellipsis; white-space: nowrap; flex: 1; min-width: 0;
  }
  .dv-key-cell__btn {
    background: none; border: none; cursor: pointer; flex-shrink: 0;
    color: var(--rb-gray-400, #9CA3AF); padding: 2px; transition: color .15s;
  }
  .dv-key-cell__btn:hover { color: var(--rb-blue-700, #1D4ED8); }

  .dv-key-lastused { font-size: .8rem; color: var(--rb-gray-400, #9CA3AF); }

  .dv-key-revoke {
    background: none; border: none; cursor: pointer;
    color: var(--rb-gray-300, #D1D5DB); padding: 6px; border-radius: 6px;
    transition: color .15s, background .15s;
  }
  .dv-key-revoke:hover { color: #EF4444; background: #FEF2F2; }

  .dv-keys-empty {
    padding: 32px; text-align: center; font-size: .875rem; color: var(--rb-gray-400, #9CA3AF);
  }

  @media (max-width: 920px) {
    .dv-keys-table__head { display: none; }
    .dv-keys-table__row {
      grid-template-columns: 1fr; gap: 8px;
      border: 1px solid var(--rb-gray-100, #F3F4F6); margin-bottom: 10px;
    }
  }

  .dv-portal__warning {
    display: flex; align-items: flex-start; gap: 10px;
    font-size: .8rem; color: #92400E; line-height: 1.6;
    background: #FFFBEB; border-top: 1px solid #FDE68A;
    padding: 16px 24px;
  }
  .dv-portal__warning svg { flex-shrink: 0; margin-top: 2px; color: #D97706; }

  /* ── Webhook banner ── */
  .dv-webhook-banner {
    background: var(--rb-gray-900, #111827); border-radius: 20px;
    padding: 56px 48px; display: grid; grid-template-columns: 1.1fr .9fr;
    gap: 56px; align-items: center;
  }
  .dv-webhook-icon { color: #60A5FA; margin-bottom: 16px; }
  .dv-webhook-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.6rem, 2.8vw, 2.2rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.15; margin-bottom: 14px;
  }
  .dv-webhook-banner__sub { font-size: .9rem; color: #9CA3AF; line-height: 1.8; margin-bottom: 24px; }
  .dv-webhook-banner__right { display: flex; flex-direction: column; gap: 10px; }
  .dv-webhook-event {
    display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1);
    border-radius: 10px; padding: 12px 16px;
  }
  .dv-webhook-event__dot { width: 7px; height: 7px; border-radius: 50%; background: #34D399; flex-shrink: 0; }
  .dv-webhook-event code { font-size: .8rem; color: #C7D2E0; font-family: 'SF Mono', Menlo, monospace; }
  @media (max-width: 780px) {
    .dv-webhook-banner { grid-template-columns: 1fr; padding: 36px 28px; gap: 32px; }
  }

  /* ── FAQ ── */
  .dv-faq-wrap { max-width: 740px; margin: 0 auto; }
  .dv-faq-list { border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 16px; overflow: hidden; }
  .dv-faq-item { border-bottom: 1px solid var(--rb-gray-100, #F3F4F6); }
  .dv-faq-item:last-child { border-bottom: none; }
  .dv-faq-q {
    display: flex; justify-content: space-between; align-items: center; gap: 16px;
    padding: 22px 26px; cursor: pointer; background: #fff; transition: background .15s;
  }
  .dv-faq-q:hover { background: var(--rb-gray-50, #F9FAFB); }
  .dv-faq-q-text { font-size: .9rem; font-weight: 600; color: var(--rb-gray-900, #111827); }
  .dv-faq-chevron { color: var(--rb-gray-400, #9CA3AF); flex-shrink: 0; }
  .dv-faq-a { padding: 0 26px 22px; font-size: .875rem; color: var(--rb-gray-500, #6B7280); line-height: 1.85; }

  /* ── CTA banner ── */
  .dv-cta-banner {
    background: var(--rb-gray-900, #111827); border-radius: 20px;
    padding: 72px 48px; text-align: center;
  }
  .dv-cta-icon { color: #60A5FA; margin-bottom: 20px; display: flex; justify-content: center; }
  .dv-cta-banner__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800;
    letter-spacing: -.025em; color: #fff; line-height: 1.12; margin-bottom: 14px;
  }
  .dv-cta-banner__sub {
    font-size: 1rem; color: #9CA3AF; line-height: 1.8;
    max-width: 480px; margin: 0 auto 32px;
  }
  .dv-cta-banner__actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* ── Modal ── */
  .dv-modal-overlay {
    position: fixed; inset: 0; z-index: 400;
    background: rgba(17,24,39,.5); backdrop-filter: blur(3px);
    display: flex; align-items: center; justify-content: center; padding: 24px;
  }
  .dv-modal {
    background: #fff; border-radius: 18px; padding: 32px;
    width: 100%; max-width: 420px; box-shadow: 0 24px 60px rgba(0,0,0,.25);
  }
  .dv-modal__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.2rem; font-weight: 700; color: var(--rb-gray-900, #111827); margin-bottom: 6px;
  }
  .dv-modal__sub { font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.6; margin-bottom: 22px; }
  .dv-modal__label {
    display: block; font-size: 11px; font-weight: 700; letter-spacing: .06em;
    color: var(--rb-gray-400, #9CA3AF); text-transform: uppercase; margin-bottom: 8px;
  }
  .dv-modal__input {
    width: 100%; border: 1.5px solid var(--rb-gray-200, #E5E7EB); border-radius: 10px;
    padding: 11px 14px; font-size: .9rem; color: var(--rb-gray-900, #111827);
    margin-bottom: 20px; outline: none; transition: border-color .15s;
  }
  .dv-modal__input:focus { border-color: var(--rb-blue-700, #1D4ED8); }
  .dv-modal__env-toggle {
    display: flex; gap: 8px; margin-bottom: 24px;
  }
  .dv-modal__env-btn {
    flex: 1; padding: 10px; border-radius: 9px; font-size: .85rem; font-weight: 600;
    border: 1.5px solid var(--rb-gray-200, #E5E7EB); background: #fff;
    color: var(--rb-gray-500, #6B7280); cursor: pointer; transition: all .15s;
  }
  .dv-modal__env-btn--active {
    border-color: var(--rb-blue-700, #1D4ED8); background: var(--rb-blue-50, #EFF6FF);
    color: var(--rb-blue-700, #1D4ED8);
  }
  .dv-modal__actions { display: flex; gap: 10px; justify-content: flex-end; }
`;
