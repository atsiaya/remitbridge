"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── ICONS ───────────────────────────────────────────────────────────────────
type IcoProps = {
  d: string;
  size?: number;
};

const Ico = ({ d, size = 18 }: IcoProps) => (
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
const IcoGlobe    = () => <Ico d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-2.5 3-4 6.5-4 10s1.5 7 4 10m0-20c2.5 3 4 6.5 4 10s-1.5 7-4 10M2 12h20" />;
const IcoShield   = () => <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const IcoZap      = () => <Ico d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />;
const IcoArrow    = () => <Ico d="M5 12h14M12 5l7 7-7 7" />;
const IcoCheck    = () => <Ico d="M20 6L9 17l-5-5" size={15} />;
const IcoChart    = () => <Ico d="M12 20V10M18 20V4M6 20v-6" />;
const IcoLock     = () => <Ico d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4" />;
const IcoClock    = () => <Ico d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 6v6l4 2" />;
const IcoUsers    = () => <Ico d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm14 14v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
const IcoBriefcase = () => <Ico d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
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
      transition: "transform .25s",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// ─── CURRENCY TICKER ─────────────────────────────────────────────────────────
const PAIRS = [
  { pair: "USD/KES", rate: "129.45", change: "+0.12%" },
  { pair: "EUR/USD", rate: "1.0842", change: "+0.08%" },
  { pair: "GBP/USD", rate: "1.2671", change: "−0.04%" },
  { pair: "USD/NGN", rate: "1,601.50", change: "+0.31%" },
  { pair: "USD/GHS", rate: "15.62",  change: "−0.09%" },
  { pair: "USD/ZAR", rate: "18.34",  change: "+0.18%" },
  { pair: "EUR/GBP", rate: "0.8557", change: "+0.05%" },
  { pair: "USD/INR", rate: "83.72",  change: "+0.02%" },
  { pair: "USD/SGD", rate: "1.3461", change: "−0.03%" },
  { pair: "XOF/EUR", rate: "0.00152",change: "+0.01%" },
];

function Ticker() {
  return (
    <div style={{
      background: "#1D4ED8", overflow: "hidden", padding: "7px 0",
      borderBottom: "1px solid #1e40af",
    }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker 48s linear infinite" }}>
        {[...PAIRS, ...PAIRS].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "0 28px", whiteSpace: "nowrap" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.6)", letterSpacing: ".07em", fontFamily: "monospace" }}>{item.pair}</span>
            <span style={{ fontSize: 12, color: "#fff", fontFamily: "monospace" }}>{item.rate}</span>
            <span style={{ fontSize: 11, color: item.change.startsWith("+") ? "#6EE7B7" : "#FCA5A5", fontFamily: "monospace" }}>{item.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── NETWORK MAP ─────────────────────────────────────────────────────────────
function NetworkMap() {
  const nodes = [
    { id: "NY", x: 170, y: 130, label: "New York" },
    { id: "LN", x: 370, y: 85,  label: "London" },
    { id: "DB", x: 460, y: 100, label: "Dubai" },
    { id: "SG", x: 570, y: 155, label: "Singapore" },
    { id: "NG", x: 385, y: 195, label: "Lagos" },
    { id: "NR", x: 435, y: 210, label: "Nairobi" },
    { id: "JP", x: 615, y: 115, label: "Tokyo" },
    { id: "BR", x: 230, y: 240, label: "São Paulo" },
    { id: "IN", x: 510, y: 148, label: "Mumbai" },
  ];
  const edges = [
    ["NY","LN"],["LN","NG"],["LN","NR"],["LN","DB"],
    ["DB","SG"],["SG","JP"],["NY","BR"],["IN","SG"],
    ["DB","IN"],["NY","DB"],["NG","NR"],["LN","SG"],
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(e => (e + 1) % edges.length), 1300);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", background: "#F0F4FF", borderRadius: 20, border: "1px solid #DBEAFE", overflow: "hidden" }}>
      {/* subtle grid */}
      <svg viewBox="0 50 760 270" style={{ width: "100%", display: "block" }} aria-hidden="true">
        <defs>
          <filter id="blueGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* grid */}
        {[90,130,170,210,250,290].map(y =>
          <line key={y} x1="100" y1={y} x2="670" y2={y} stroke="#DBEAFE" strokeWidth="1" />
        )}
        {[150,250,350,450,550,650].map(x =>
          <line key={x} x1={x} y1="55" x2={x} y2="300" stroke="#DBEAFE" strokeWidth="1" />
        )}
        {/* edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[i];
          const nb = nodes[i + 1];

          if (!na || !nb) return null;

          const isActive = i === active;

          return (
            <g key={i}>
              <line
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke={isActive ? "#1D4ED8" : "#BFDBFE"}
                strokeWidth={isActive ? 1.8 : 1}
              />

              {isActive && (
                <motion.circle
                  r="5"
                  fill="#1D4ED8"
                  filter="url(#blueGlow)"
                  initial={{ cx: na.x, cy: na.y }}
                  animate={{ cx: nb.x, cy: nb.y }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              )}
            </g>
          );
        })}
        {/* nodes */}
        {nodes.map(n => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r="20" fill="white" stroke="#BFDBFE" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="7" fill="#1D4ED8" />
            <circle cx={n.x} cy={n.y} r="12" fill="none" stroke="#1D4ED8" strokeWidth="1" opacity="0.3">
              <animate attributeName="r" from="7" to="18" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <text x={n.x} y={n.y + 32} textAnchor="middle" fontSize="9.5"
              fill="#6B7280" fontFamily="Inter, sans-serif" fontWeight="500">{n.label}</text>
          </g>
        ))}
      </svg>
      <div style={{
        position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
        background: "white", border: "1px solid #DBEAFE", borderRadius: 100,
        padding: "6px 14px", fontSize: 11, color: "#1D4ED8", whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 7, boxShadow: "0 2px 8px rgba(29,78,216,.1)",
        fontWeight: 600,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "inline-block", animation: "pulse 1.8s infinite" }} />
        Live network · 47 active corridors
      </div>
    </div>
  );
}

// ─── COUNTER ─────────────────────────────────────────────────────────────────
type CounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
};

function Counter({
  target,
  suffix = "",
  prefix = "",
}: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !on) {
          setOn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, [on]);

  useEffect(() => {
    if (!on) return;

    let s = 0;
    const step = target / 55;

    const t = setInterval(() => {
      s += step;

      if (s >= target) {
        setVal(target);
        clearInterval(t);
      } else {
        setVal(Math.floor(s));
      }
    }, 16);

    return () => clearInterval(t);
  }, [on, target]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function RemitBridge() {
  const [tab, setTab] = useState("send");
  const [faq, setFaq] = useState<number | null>(null);

  const features = [
    { icon: <IcoGlobe />,     title: "50+ Countries",           desc: "Direct local rails in every major market. No correspondent chains, no opaque routing fees — just clean, traceable transfers." },
    { icon: <IcoZap />,       title: "Sub-3s Settlement",        desc: "On supported corridors, payments confirm in under three seconds. Real-time credit notifications to sender and recipient." },
    { icon: <IcoShield />,    title: "Segregated Client Funds",  desc: "Your money never commingles with ours. Held in ring-fenced accounts at tier-1 custodian banks in each operating region." },
    { icon: <IcoChart />,     title: "Transparent FX",           desc: "Mid-market rates refreshed every 30 seconds. Our spread is shown before you confirm — 0.4% on Business plans, no hidden markups." },
    { icon: <IcoLock />,      title: "Compliance Built In",      desc: "Automated AML screening, OFAC/UN/EU sanctions checking, and KYB verification — handled at the platform level, not bolted on." },
    { icon: <IcoUsers />,     title: "Team & Role Controls",     desc: "Granular permissions, multi-signature approval flows, and a full immutable audit log for every transaction your team touches." },
  ];

  const steps = [
    { n: "01", title: "Verify your business",  desc: "Upload company documents and complete KYB in minutes. Automated checks mean most businesses are approved within the hour." },
    { n: "02", title: "Fund your wallet",      desc: "Deposit via SWIFT, SEPA, ACH, or local bank transfer. Multi-currency wallets activated instantly on approval." },
    { n: "03", title: "Send or receive",       desc: "Initiate payments manually through the dashboard or programmatically via our REST API with full webhook support." },
    { n: "04", title: "Reconcile instantly",   desc: "Every transaction generates a structured record. Export to CSV, MT940, or push directly to your ERP via API." },
  ];

  const plans = [
    {
      name: "Starter", price: "$0", period: "/mo",
      desc: "For early-stage teams getting started with cross-border payments.",
      features: ["5 currencies", "50 transactions/month", "FX at 0.8% spread", "Email support", "API access (read-only)"],
      cta: "Get started — free", hi: false,
    },
    {
      name: "Business", price: "$149", period: "/mo",
      desc: "For finance teams running regular international payment flows.",
      features: ["30+ currencies", "Unlimited transactions", "FX at 0.4% spread", "72h FX rate locks", "Full API + webhooks", "Batch payouts (up to 5,000)", "Priority support"],
      cta: "Start 14-day free trial", hi: true,
    },
    {
      name: "Enterprise", price: "Custom", period: "",
      desc: "For high-volume businesses and financial institutions needing bespoke infrastructure.",
      features: ["All 65 currencies", "Dedicated liquidity pool", "Institutional FX spreads", "Custom SLA (99.99%)", "Dedicated solutions engineer", "On-premise deployment option", "White-label available"],
      cta: "Talk to our team", hi: false,
    },
  ];

  const testimonials = [
    { name: "Amara Diallo",  role: "CFO, Kobo360",         text: "We process over $40M monthly across eight African markets. RemitBridge gave us the settlement speed and transparency that our previous bank simply couldn't match.",  initials: "AD" },
    { name: "Marcus Chen",   role: "Treasury Lead, Flutterwave", text: "The FX rate locking and bulk payout features cut our FX exposure costs by 34% in the first quarter. The API is genuinely the cleanest we've integrated.",    initials: "MC" },
    { name: "Priya Nair",    role: "Head of Finance, Zipline", text: "Compliance was a genuine blocker for us expanding into new markets. RemitBridge's built-in AML and KYB handled every jurisdiction we operate in.",          initials: "PN" },
  ];

  const faqs = [
    { q: "How long does an international transfer take?", a: "On major corridors (US, UK, EU, UAE, Singapore), payments settle in under 30 seconds. Emerging market corridors are typically same-day. We display live estimated settlement times before you confirm any payment." },
    { q: "What currencies and countries do you support?", a: "We support 65 currencies for account balances and 50+ destination countries. You can hold USD, EUR, GBP, KES, NGN, GHS, ZAR, SGD, INR, JPY, and dozens more simultaneously in a single account." },
    { q: "How are FX rates calculated?", a: "We use mid-market interbank rates refreshed every 30 seconds from a composite of five liquidity providers. Our spread — 0.4% on Business, 0.8% on Starter — is shown before you confirm. No hidden conversion charges, ever." },
    { q: "Is RemitBridge regulated?", a: "Yes. We are licensed as a Money Services Business (MSB) in the US, authorised by the Financial Conduct Authority (FCA) in the UK, and registered with the relevant regulators in all other operating regions. Client funds are held in segregated custodian accounts." },
    { q: "Can I integrate RemitBridge with my existing ERP or accounting software?", a: "Our REST API covers 100% of platform functionality. We provide SDKs for Node.js, Python, PHP, and Go. Pre-built integrations exist for Xero, QuickBooks, NetSuite, SAP, and all major ERPs. Webhooks deliver real-time payment events directly to your systems." },
    { q: "What happens if a payment fails?", a: "Failed payments are flagged in real time with a plain-language reason code. Funds are returned to your wallet immediately — no hold periods. Our support team is notified automatically for any failure on Business or Enterprise plans." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap');
        @keyframes ticker  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulse   { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#fff;color:#111827;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;}

        /* NAV */
        .nav{
          position:fixed;top:0;left:0;right:0;z-index:200;
          background:rgba(255,255,255,.92);backdrop-filter:blur(14px);
          border-bottom:1px solid #E5E7EB;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 48px;height:64px;
        }
        .nav-logo{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:#1D4ED8;letter-spacing:-.02em;}
        .nav-links{display:flex;gap:28px;}
        .nav-lk{font-size:13.5px;color:#4B5563;text-decoration:none;font-weight:500;transition:color .15s;}
        .nav-lk:hover{color:#111827;}
        .nav-right{display:flex;gap:10px;align-items:center;}
        .nav-signin{font-size:13.5px;font-weight:600;color:#374151;text-decoration:none;padding:8px 16px;border-radius:8px;transition:background .15s;}
        .nav-signin:hover{background:#F3F4F6;}
        .nav-btn{font-size:13.5px;font-weight:600;background:#1D4ED8;color:#fff;text-decoration:none;padding:9px 20px;border-radius:8px;transition:background .15s;}
        .nav-btn:hover{background:#1e40af;}
        @media(max-width:720px){.nav-links{display:none;}.nav{padding:0 20px;}}

        /* LAYOUT */
        .wrap{max-width:1160px;margin:0 auto;padding:0 24px;}

        /* HERO */
        .hero{padding:120px 0 80px;background:#fff;}
        .hero-inner{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
        .hero-tag{display:inline-flex;align-items:center;gap:8px;background:#EFF6FF;border:1px solid #BFDBFE;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#1D4ED8;letter-spacing:.04em;text-transform:uppercase;margin-bottom:24px;}
        .hero-tag-dot{width:6px;height:6px;border-radius:50%;background:#1D4ED8;animation:pulse 2s infinite;}
        .hero-h1{font-family:'Sora',sans-serif;font-size:clamp(2.4rem,4.5vw,3.8rem);font-weight:800;line-height:1.06;letter-spacing:-.03em;color:#111827;margin-bottom:20px;}
        .hero-h1 strong{color:#1D4ED8;}
        .hero-p{font-size:1.05rem;color:#6B7280;line-height:1.8;max-width:480px;margin-bottom:36px;}
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px;}
        .btn-blue{display:inline-flex;align-items:center;gap:8px;background:#1D4ED8;color:#fff;font-size:14px;font-weight:600;padding:13px 24px;border-radius:9px;text-decoration:none;transition:background .15s;border:none;cursor:pointer;}
        .btn-blue:hover{background:#1e40af;}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#374151;font-size:14px;font-weight:600;padding:13px 24px;border-radius:9px;text-decoration:none;border:1.5px solid #D1D5DB;transition:all .15s;}
        .btn-outline:hover{border-color:#9CA3AF;background:#F9FAFB;}
        .hero-trust{display:flex;align-items:center;gap:14px;flex-wrap:wrap;}
        .trust-item{display:flex;align-items:center;gap:6px;font-size:12px;color:#9CA3AF;font-weight:500;}
        .trust-item svg{color:#10B981;}
        .trust-sep{width:1px;height:14px;background:#E5E7EB;}
        @media(max-width:820px){.hero-inner{grid-template-columns:1fr;gap:48px;}}

        /* METRICS */
        .metrics{background:#1D4ED8;padding:0;}
        .metrics-grid{display:grid;grid-template-columns:repeat(4,1fr);}
        .metric{padding:40px 32px;border-right:1px solid rgba(255,255,255,.1);text-align:center;}
        .metric:last-child{border-right:none;}
        .metric-n{font-family:'Sora',sans-serif;font-size:2.6rem;font-weight:800;color:#fff;line-height:1;}
        .metric-l{font-size:12px;color:rgba(255,255,255,.6);margin-top:8px;font-weight:500;}
        @media(max-width:700px){.metrics-grid{grid-template-columns:repeat(2,1fr);}.metric:nth-child(2){border-right:none;}.metric:nth-child(3){border-right:1px solid rgba(255,255,255,.1);}}

        /* SECTION */
        .section{padding:96px 0;}
        .section-alt{background:#F9FAFB;border-top:1px solid #F3F4F6;border-bottom:1px solid #F3F4F6;}
        .section-blue{background:#EFF6FF;border-top:1px solid #DBEAFE;border-bottom:1px solid #DBEAFE;}
        .eyebrow{font-size:11.5px;font-weight:700;letter-spacing:.09em;color:#1D4ED8;text-transform:uppercase;margin-bottom:14px;}
        .sec-h2{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3.5vw,2.7rem);font-weight:800;letter-spacing:-.025em;color:#111827;line-height:1.12;margin-bottom:14px;}
        .sec-p{font-size:.95rem;color:#6B7280;line-height:1.8;max-width:500px;}

        /* FEATURES */
        .feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#E5E7EB;border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;margin-top:48px;}
        .feat-card{background:#fff;padding:36px 28px;transition:background .2s;}
        .feat-card:hover{background:#F9FAFB;}
        .feat-icon{width:42px;height:42px;border-radius:10px;background:#EFF6FF;border:1px solid #BFDBFE;display:flex;align-items:center;justify-content:center;color:#1D4ED8;margin-bottom:18px;}
        .feat-title{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:9px;}
        .feat-desc{font-size:.85rem;color:#6B7280;line-height:1.75;}
        @media(max-width:900px){.feat-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:560px){.feat-grid{grid-template-columns:1fr;}}

        /* HOW */
        .how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-top:56px;}
        .how-card{position:relative;}
        .how-connector{position:absolute;top:20px;left:calc(50% + 20px);right:calc(-50% + 20px);height:1px;background:#DBEAFE;z-index:0;}
        .how-num{width:40px;height:40px;border-radius:50%;background:#1D4ED8;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative;z-index:1;}
        .how-title{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:9px;}
        .how-desc{font-size:.85rem;color:#6B7280;line-height:1.75;}
        @media(max-width:800px){.how-grid{grid-template-columns:repeat(2,1fr);}.how-connector{display:none;}}
        @media(max-width:500px){.how-grid{grid-template-columns:1fr;}}

        /* TWO COL */
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
        @media(max-width:820px){.two-col{grid-template-columns:1fr;gap:48px;}}

        /* DEMO CARD */
        .demo-tabs{display:flex;background:#F3F4F6;border-radius:9px;padding:4px;width:fit-content;margin-bottom:24px;}
        .d-tab{padding:7px 18px;border-radius:7px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:transparent;color:#6B7280;transition:all .18s;}
        .d-tab.on{background:#fff;color:#111827;box-shadow:0 1px 4px rgba(0,0,0,.08);}
        .d-card{background:#fff;border:1px solid #E5E7EB;border-radius:16px;padding:28px;box-shadow:0 4px 24px rgba(0,0,0,.05);}
        .d-label{font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:.06em;margin-bottom:7px;}
        .d-input{background:#F9FAFB;border:1px solid #E5E7EB;border-radius:9px;padding:13px 16px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;}
        .d-amount{font-size:18px;font-weight:700;color:#111827;font-family:'Sora',sans-serif;}
        .d-ccy{font-size:12px;color:#6B7280;font-weight:600;background:#E5E7EB;padding:4px 10px;border-radius:6px;}
        .d-mid{display:flex;align-items:center;gap:10px;margin:6px 0 14px;}
        .d-line{flex:1;height:1px;background:#E5E7EB;}
        .d-rate{background:#EFF6FF;border:1px solid #BFDBFE;border-radius:100px;padding:4px 12px;font-size:11px;font-weight:600;color:#1D4ED8;font-family:monospace;white-space:nowrap;}
        .d-send{width:100%;background:#1D4ED8;color:#fff;font-size:14px;font-weight:700;padding:13px;border-radius:9px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .15s;margin-top:6px;}
        .d-send:hover{background:#1e40af;}
        .d-note{font-size:11.5px;color:#9CA3AF;text-align:center;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:6px;}
        .tx-list{margin-top:20px;border-top:1px solid #F3F4F6;padding-top:16px;}
        .tx-row{display:flex;justify-content:space-between;align-items:center;padding:11px 0;border-bottom:1px solid #F9FAFB;}
        .tx-row:last-child{border-bottom:none;}
        .tx-name{font-size:13px;font-weight:600;color:#111827;}
        .tx-meta{font-size:11px;color:#9CA3AF;margin-top:2px;}
        .tx-amt{font-size:13px;font-weight:700;color:#10B981;font-family:monospace;}
        .tx-badge{font-size:10.5px;background:#ECFDF5;color:#059669;border-radius:100px;padding:2px 9px;font-weight:600;margin-top:2px;display:inline-block;}

        /* PRICING */
        .price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;}
        .p-card{border:1px solid #E5E7EB;border-radius:16px;padding:32px 26px;background:#fff;display:flex;flex-direction:column;position:relative;}
        .p-card.hi{border-color:#1D4ED8;box-shadow:0 0 0 4px rgba(29,78,216,.07);}
        .p-badge{position:absolute;top:-1px;right:24px;background:#1D4ED8;color:#fff;font-size:10.5px;font-weight:700;padding:4px 14px;border-radius:0 0 8px 8px;letter-spacing:.05em;}
        .p-name{font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;}
        .p-price{font-family:'Sora',sans-serif;font-size:2.8rem;font-weight:800;color:#111827;line-height:1;}
        .p-period{font-size:14px;color:#9CA3AF;font-weight:400;}
        .p-desc{font-size:.85rem;color:#6B7280;margin:10px 0 22px;line-height:1.7;}
        .p-list{list-style:none;flex:1;margin-bottom:24px;}
        .p-item{display:flex;align-items:flex-start;gap:9px;font-size:.875rem;color:#374151;margin-bottom:12px;}
        .p-check{color:#10B981;margin-top:1px;flex-shrink:0;}
        @media(max-width:860px){.price-grid{grid-template-columns:1fr;}}

        /* TESTIMONIALS */
        .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px;}
        .t-card{background:#fff;border:1px solid #E5E7EB;border-radius:16px;padding:28px;display:flex;flex-direction:column;gap:16px;}
        .t-header{display:flex;align-items:center;gap:12px;}
        .t-avatar{width:42px;height:42px;border-radius:50%;background:#EFF6FF;border:1px solid #BFDBFE;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#1D4ED8;flex-shrink:0;}
        .t-name{font-size:14px;font-weight:700;color:#111827;}
        .t-role{font-size:12px;color:#9CA3AF;}
        .t-stars{color:#F59E0B;font-size:12px;letter-spacing:1px;}
        .t-text{font-size:.875rem;color:#4B5563;line-height:1.8;flex:1;}
        @media(max-width:860px){.testi-grid{grid-template-columns:1fr;}}

        /* TRUST LOGOS */
        .logos{display:flex;flex-wrap:wrap;gap:14px;margin-top:40px;}
        .logo-pill{background:#fff;border:1px solid #E5E7EB;border-radius:10px;padding:14px 24px;font-size:13.5px;font-weight:700;color:#6B7280;letter-spacing:.02em;transition:all .18s;}
        .logo-pill:hover{border-color:#93C5FD;color:#1D4ED8;}

        /* FAQ */
        .faq-list{border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;margin-top:48px;}
        .faq-item{border-bottom:1px solid #F3F4F6;}
        .faq-item:last-child{border-bottom:none;}
        .faq-q{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:22px 26px;cursor:pointer;background:#fff;transition:background .15s;}
        .faq-q:hover{background:#F9FAFB;}
        .faq-q-text{font-size:.9rem;font-weight:600;color:#111827;}
        .faq-chevron{color:#9CA3AF;flex-shrink:0;}
        .faq-a{padding:0 26px 22px;font-size:.875rem;color:#6B7280;line-height:1.85;}

        /* SECURITY BAR */
        .sec-bar{background:#F9FAFB;border-top:1px solid #E5E7EB;border-bottom:1px solid #E5E7EB;padding:22px 0;}
        .sec-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:32px;}
        .sec-item{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#6B7280;font-weight:500;}
        .sec-item svg{color:#10B981;}

        /* CTA BANNER */
        .cta-banner{background:#111827;border-radius:20px;padding:72px 48px;text-align:center;}
        .cta-h2{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;color:#fff;letter-spacing:-.025em;margin-bottom:14px;}
        .cta-p{font-size:1rem;color:#9CA3AF;margin-bottom:36px;}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
        .btn-white{display:inline-flex;align-items:center;gap:8px;background:#fff;color:#111827;font-size:14px;font-weight:700;padding:13px 24px;border-radius:9px;text-decoration:none;transition:background .15s;}
        .btn-white:hover{background:#F3F4F6;}
        .btn-outline-white{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;font-size:14px;font-weight:600;padding:13px 24px;border-radius:9px;text-decoration:none;border:1.5px solid rgba(255,255,255,.2);transition:border-color .15s;}
        .btn-outline-white:hover{border-color:rgba(255,255,255,.4);}

        /* FOOTER */
        .footer{border-top:1px solid #E5E7EB;padding:64px 0 32px;background:#fff;}
        .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;}
        .f-brand{font-family:'Sora',sans-serif;font-size:18px;font-weight:800;color:#1D4ED8;margin-bottom:10px;}
        .f-tag{font-size:.85rem;color:#9CA3AF;line-height:1.7;max-width:230px;}
        .f-col-h{font-size:11px;font-weight:700;color:#111827;letter-spacing:.07em;text-transform:uppercase;margin-bottom:14px;}
        .f-link{display:block;font-size:.85rem;color:#6B7280;text-decoration:none;margin-bottom:9px;transition:color .15s;}
        .f-link:hover{color:#1D4ED8;}
        .footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid #F3F4F6;font-size:.8rem;color:#9CA3AF;flex-wrap:wrap;gap:12px;}
        .f-badges{display:flex;gap:8px;flex-wrap:wrap;}
        .f-badge{background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;padding:3px 10px;font-size:10.5px;color:#9CA3AF;font-weight:600;}
        @media(max-width:760px){.footer-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:480px){.footer-grid{grid-template-columns:1fr;}}
      `}</style>

      <section className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                Global payments infrastructure
              </div>
              <h1 className="hero-h1">
                Cross-border payments<br />
                that work the way<br />
                <strong>your business does</strong>
              </h1>
              <p className="hero-p">
                RemitBridge gives finance teams one platform to send, receive, hold, and convert money across 50+ countries — with bank-grade compliance, real-time settlement, and fully transparent FX pricing.
              </p>
              <div className="hero-btns">
                <a href="/download-app" className="btn-blue">Get the app <IcoArrow /></a>
                <a href="#" className="btn-outline">See how it works</a>
              </div>
              <div className="hero-trust">
                <div className="trust-item"><IcoCheck /> SOC 2 Type II</div>
                <div className="trust-sep" />
                <div className="trust-item"><IcoCheck /> FCA Authorised</div>
                <div className="trust-sep" />
                <div className="trust-item"><IcoCheck /> PCI-DSS Level 1</div>
                <div className="trust-sep" />
                <div className="trust-item"><IcoCheck /> ISO 27001</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
              <NetworkMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECURITY BAR */}
      <div className="sec-bar">
        <div className="wrap">
          <div className="sec-inner">
            {[
              { icon: <IcoShield />, txt: "Funds held in segregated custodian accounts" },
              { icon: <IcoLock />,   txt: "256-bit AES encryption end-to-end" },
              { icon: <IcoClock />,  txt: "99.98% uptime — five consecutive years" },
              { icon: <IcoChart />,  txt: "$14.2B+ processed in 2024" },
            ].map((s, i) => (
              <div key={i} className="sec-item">{s.icon} {s.txt}</div>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        <div className="wrap" style={{ padding: 0, maxWidth: "100%" }}>
          <div className="metrics-grid">
            {[
              { val: 50, suf: "+", label: "Countries & territories" },
              { val: 3,   pre: "< ", suf: "s", label: "Average settlement time" },
              { val: 65,  suf: "",  label: "Currencies supported" },
              { val: 14,  pre: "$", suf: "B+", label: "Processed in 2024" },
            ].map((m, i) => (
              <div key={i} className="metric">
                <div className="metric-n"><Counter target={m.val} suffix={m.suf} prefix={m.pre || ""} /></div>
                <div className="metric-l">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="section">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="eyebrow">Platform capabilities</div>
            <h2 className="sec-h2">Everything your global<br />finance team needs</h2>
            <p className="sec-p">One regulated, auditable platform covering every layer of international money movement.</p>
          </motion.div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <motion.div key={i} className="feat-card"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: .45, delay: i * .06 }}>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="eyebrow">Getting started</div>
          <h2 className="sec-h2">Live in under an hour,<br />not months</h2>
          <div className="how-grid">
            {steps.map((s, i) => (
              <motion.div key={i} className="how-card"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: .45, delay: i * .1 }}>
                {i < steps.length - 1 && <div className="how-connector" />}
                <div className="how-num">{i + 1}</div>
                <div className="how-title">{s.title}</div>
                <div className="how-desc">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT DEMO */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="eyebrow">Product demo</div>
              <h2 className="sec-h2">Send in three clicks.<br />Automate with one API call.</h2>
              <p className="sec-p" style={{ marginBottom: 28 }}>
                Whether you're a finance manager making a one-off supplier payment or an engineer building automated payroll across 20 markets — RemitBridge works the way you do.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Bulk payouts to 5,000 recipients in a single API call",
                  "FX rate locks valid for up to 72 hours before confirmation",
                  "Real-time tracking from initiation to recipient credit",
                  "Automated reconciliation exports to your ERP or accounting tool",
                  "Webhook notifications for every payment state change",
                ].map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#10B981", marginTop: 2, flexShrink: 0 }}><IcoCheck /></span>
                    <span style={{ fontSize: ".9rem", color: "#6B7280" }}>{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="demo-tabs">
                {["send", "receive", "convert"].map(t => (
                  <button key={t} className={`d-tab ${tab === t ? "on" : ""}`} onClick={() => setTab(t)}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="d-card">
                <div className="d-label">You send</div>
                <div className="d-input">
                  <span className="d-amount">10,000.00</span>
                  <span className="d-ccy">🇺🇸 USD</span>
                </div>
                <div className="d-mid">
                  <div className="d-line" />
                  <div className="d-rate">1 USD = 129.45 KES · 0.4% fee</div>
                  <div className="d-line" />
                </div>
                <div className="d-label">Recipient gets</div>
                <div className="d-input" style={{ marginBottom: 14 }}>
                  <span className="d-amount">1,293,100.00</span>
                  <span className="d-ccy">🇰🇪 KES</span>
                </div>
                <div className="d-label">Transfer fee</div>
                <div className="d-input" style={{ marginBottom: 16 }}>
                  <span style={{ fontSize: 14, color: "#6B7280" }}>Platform fee (0.4%)</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>$40.00</span>
                </div>
                <button className="d-send">Confirm & send payment <IcoArrow /></button>
                <div className="d-note">
                  <IcoLock /> Rate guaranteed · Est. arrival: under 30 seconds
                </div>
                <div className="tx-list">
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>
                    Recent transactions
                  </div>
                  {[
                    { name: "Kobo360 · Lagos payroll", meta: "Today 14:32 · Batch #4421", amt: "KES 2.6M", },
                    { name: "Zipline · Accra supplier", meta: "Today 11:17 · Batch #4420", amt: "GHS 84,000", },
                    { name: "FX: USD → EUR",           meta: "Yesterday · Order #FX-9971", amt: "€ 9,180", },
                  ].map((tx, i) => (
                    <div key={i} className="tx-row">
                      <div>
                        <div className="tx-name">{tx.name}</div>
                        <div className="tx-meta">{tx.meta}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div className="tx-amt">{tx.amt}</div>
                        <span className="tx-badge">Settled</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section-blue">
        <div className="wrap">
          <div className="eyebrow">Infrastructure partners</div>
          <h2 className="sec-h2">Backed by the world's<br />most trusted financial networks</h2>
          <p className="sec-p">Our payment infrastructure connects directly to the global networks your business already relies on.</p>
          <div className="logos">
            {["Visa","Mastercard","SWIFT","Circle","Stripe Treasury","MTN Mobile Money","Airtel Money","Flutterwave","M-Pesa"].map(p => (
              <div key={p} className="logo-pill">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="wrap">
          <div className="eyebrow">Customer stories</div>
          <h2 className="sec-h2">Trusted by finance teams<br />moving money at scale</h2>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="t-card"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: .45, delay: i * .1 }}>
                <div className="t-header">
                  <div className="t-avatar">{t.initials}</div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
                <div className="t-stars">★★★★★</div>
                <p className="t-text">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h2 className="sec-h2">Transparent pricing.<br />No hidden markups.</h2>
          <p className="sec-p">No setup fees. No minimum volume. Cancel anytime. The spread you see is the spread you pay.</p>
          <div className="price-grid">
            {plans.map((p, i) => (
              <motion.div key={i} className={`p-card ${p.hi ? "hi" : ""}`}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: .45, delay: i * .1 }}>
                {p.hi && <div className="p-badge">MOST POPULAR</div>}
                <div className="p-name">{p.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                  <span className="p-price">{p.price}</span>
                  <span className="p-period">{p.period}</span>
                </div>
                <div className="p-desc">{p.desc}</div>
                <ul className="p-list">
                  {p.features.map((f, j) => (
                    <li key={j} className="p-item">
                      <span className="p-check"><IcoCheck /></span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#" className={p.hi ? "btn-blue" : "btn-outline"} style={{ justifyContent: "center", textAlign: "center" }}>
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="wrap" style={{ maxWidth: 740 }}>
          <div className="eyebrow">FAQ</div>
          <h2 className="sec-h2">Questions we hear<br />from finance teams</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item">
              <div
                className="faq-q"
                onClick={() => setFaq(faq === i ? null : i)}
              >
                <span className="faq-q-text">{f.q}</span>

                <span className="faq-chevron">
                  <IcoChevron open={faq === i} />
                </span>
              </div>

              <AnimatePresence>
                {faq === i && (
                  <motion.div
                    className="faq-a"
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

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div className="cta-banner">
            <h2 className="cta-h2">Ready to move money<br />at global scale?</h2>
            <p className="cta-p">Open a RemitBridge account in under 10 minutes. No commitment required.</p>
            <div className="cta-btns">
              <a href="#" className="btn-white">Open account — free <IcoArrow /></a>
              <a href="#" className="btn-outline-white">Talk to our team</a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
