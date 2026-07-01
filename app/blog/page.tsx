"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
const IcoArrow  = ({ size = 14 }) => <Ico d="M5 12h14M12 5l7 7-7 7" size={size} />;
const IcoClock  = () => <Ico d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 6v6l4 2" size={13} />;
const IcoMail   = () => <Ico d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 0l8 9 8-9" size={16} />;
const IcoSearch = () => <Ico d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35" size={16} />;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const categories = ["All", "Product", "Engineering", "Compliance", "Company news", "Guides"];

const featuredPost = {
  category: "Product",
  title: "How we built sub-3-second settlement across 47 payment corridors",
  excerpt: "A look inside the routing engine that powers RemitBridge's fastest transfers — and the architecture decisions that made it possible to settle in seconds instead of days.",
  author: "Amara Diallo",
  role: "VP of Engineering",
  initials: "AD",
  date: "Jun 24, 2026",
  readTime: "8 min read",
  href: "/blog/sub-3-second-settlement",
};

const posts = [
  {
    category: "Compliance",
    title: "What changes under the EU's new instant payments regulation",
    excerpt: "Starting January 2027, EU payment providers must support instant SEPA credit transfers by default. Here's what it means for cross-border businesses.",
    author: "Priya Nair",
    initials: "PN",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    href: "/blog/eu-instant-payments-regulation",
  },
  {
    category: "Engineering",
    title: "Designing an FX rate-lock system that can't be gamed",
    excerpt: "Locking a currency rate for 72 hours sounds simple until you account for arbitrage, latency, and adversarial timing. Here's how we built ours.",
    author: "Marcus Chen",
    initials: "MC",
    date: "Jun 11, 2026",
    readTime: "10 min read",
    href: "/blog/fx-rate-lock-system",
  },
  {
    category: "Guides",
    title: "A finance team's guide to running payroll across 8 countries",
    excerpt: "Multi-country payroll breaks most finance stacks. We talked to five RemitBridge customers about how they actually run it.",
    author: "David Mwangi",
    initials: "DM",
    date: "Jun 4, 2026",
    readTime: "7 min read",
    href: "/blog/multi-country-payroll-guide",
  },
  {
    category: "Company news",
    title: "RemitBridge is now authorised by the FCA in the United Kingdom",
    excerpt: "We're expanding our regulatory footprint to better serve UK-based businesses moving money internationally.",
    author: "Sarah Kim",
    initials: "SK",
    date: "May 27, 2026",
    readTime: "3 min read",
    href: "/blog/fca-authorisation",
  },
  {
    category: "Product",
    title: "Introducing batch payouts: pay 5,000 recipients in one API call",
    excerpt: "Bulk payroll, supplier payments, and marketplace payouts no longer require looping through individual transfer requests.",
    author: "Amara Diallo",
    initials: "AD",
    date: "May 20, 2026",
    readTime: "5 min read",
    href: "/blog/introducing-batch-payouts",
  },
  {
    category: "Engineering",
    title: "Why we moved our ledger from PostgreSQL to a purpose-built engine",
    excerpt: "At a certain transaction volume, general-purpose databases start fighting you. Here's the migration story, mistakes included.",
    author: "Marcus Chen",
    initials: "MC",
    date: "May 13, 2026",
    readTime: "12 min read",
    href: "/blog/ledger-migration-story",
  },
  {
    category: "Guides",
    title: "FX hedging basics for startups expanding internationally",
    excerpt: "You don't need a treasury desk to manage currency risk. Here's what early-stage finance teams should actually know.",
    author: "Priya Nair",
    initials: "PN",
    date: "May 6, 2026",
    readTime: "9 min read",
    href: "/blog/fx-hedging-basics-startups",
  },
  {
    category: "Compliance",
    title: "Inside our KYB process: what we check and why it matters",
    excerpt: "Know Your Business verification can feel like a black box. We're opening it up so you know exactly what to expect.",
    author: "David Mwangi",
    initials: "DM",
    date: "Apr 29, 2026",
    readTime: "6 min read",
    href: "/blog/inside-our-kyb-process",
  },
];

const categoryColors = {
  Product:        { bg: "var(--rb-blue-50, #EFF6FF)",  fg: "var(--rb-blue-700, #1D4ED8)",  bd: "var(--rb-blue-200, #BFDBFE)" },
  Engineering:    { bg: "#F5F3FF", fg: "#7C3AED", bd: "#DDD6FE" },
  Compliance:     { bg: "#ECFDF5", fg: "#059669", bd: "#A7F3D0" },
  "Company news": { bg: "#FFF7ED", fg: "#C2410C", bd: "#FED7AA" },
  Guides:         { bg: "#FDF4FF", fg: "#A21CAF", bd: "#F5D0FE" },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <style>{PAGE_STYLES}</style>

      <div className="bl-page">
        <div className="rb-wrap">

          {/* ── HERO ───────────────────────────────────────────────────── */}
          <section className="bl-hero">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="bl-eyebrow-pill">Blog</div>
              <h1 className="bl-h1">
                Notes on building global<br />
                <span className="bl-h1__accent">payments infrastructure</span>
              </h1>
              <p className="bl-sub">
                Product updates, engineering deep-dives, compliance explainers,
                and practical guides for finance teams operating across borders.
              </p>
            </motion.div>

            {/* Search */}
            <div className="bl-search">
              <span className="bl-search__icon"><IcoSearch /></span>
              <input
                type="text"
                className="bl-search__input"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </section>

          {/* ── CATEGORY FILTER ──────────────────────────────────────────── */}
          <div className="bl-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`bl-cat-pill ${activeCategory === cat ? "bl-cat-pill--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── FEATURED POST ────────────────────────────────────────────── */}
          {activeCategory === "All" && !search && (
            <motion.a
              href={featuredPost.href}
              className="bl-featured"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bl-featured__media">
                <div className="bl-featured__media-pattern" />
                <div className="bl-featured__media-tag">Featured</div>
              </div>
              <div className="bl-featured__content">
                <span
                  className="bl-cat-tag"
                  style={{
                    background:
                      categoryColors[
                        featuredPost.category as keyof typeof categoryColors
                      ].bg,
                    color:
                      categoryColors[
                        featuredPost.category as keyof typeof categoryColors
                      ].fg,
                    borderColor:
                      categoryColors[
                        featuredPost.category as keyof typeof categoryColors
                      ].bd,
                  }}
                >
                  {featuredPost.category}
                </span>
                <h2 className="bl-featured__title">{featuredPost.title}</h2>
                <p className="bl-featured__excerpt">{featuredPost.excerpt}</p>

                <div className="bl-post-meta">
                  <div className="bl-avatar">{featuredPost.initials}</div>
                  <div className="bl-post-meta__text">
                    <div className="bl-post-meta__author">{featuredPost.author}</div>
                    <div className="bl-post-meta__sub">
                      {featuredPost.role} · {featuredPost.date}
                    </div>
                  </div>
                  <div className="bl-post-meta__read">
                    <IcoClock /> {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </motion.a>
          )}

          {/* ── POSTS GRID ───────────────────────────────────────────────── */}
          <div className="bl-grid">
            {filtered.length === 0 ? (
              <div className="bl-empty">
                No articles match "{search}". Try a different search or category.
              </div>
            ) : (
              filtered.map((post, i) => (
                <motion.a
                  key={i}
                  href={post.href}
                  className="bl-card"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                >
                  <div className="bl-card__media">
                    <div
                      className="bl-card__media-pattern"
                      style={{
                      background: categoryColors[post.category as keyof typeof categoryColors]?.bg,
                    }}
                    />
                  </div>

                  <span
                    className="bl-cat-tag"
                    style={{
  background: categoryColors[post.category as keyof typeof categoryColors]?.bg,
}}
                  >
                    {post.category}
                  </span>

                  <h3 className="bl-card__title">{post.title}</h3>
                  <p className="bl-card__excerpt">{post.excerpt}</p>

                  <div className="bl-post-meta bl-post-meta--card">
                    <div className="bl-avatar bl-avatar--sm">{post.initials}</div>
                    <div className="bl-post-meta__text">
                      <div className="bl-post-meta__author">{post.author}</div>
                      <div className="bl-post-meta__sub">{post.date}</div>
                    </div>
                    <div className="bl-post-meta__read">
                      <IcoClock /> {post.readTime}
                    </div>
                  </div>

                  <div className="bl-card__cta">
                    Read article <IcoArrow />
                  </div>
                </motion.a>
              ))
            )}
          </div>

          {/* ── NEWSLETTER ───────────────────────────────────────────────── */}
          <section className="bl-newsletter">
            <div className="bl-newsletter__icon">
              <Mail size={22} />
            </div>
            <h2 className="bl-newsletter__h2">Get new posts in your inbox</h2>
            <p className="bl-newsletter__sub">
              One email a month. Product updates, engineering writeups, and
              the occasional compliance deep-dive. No spam, unsubscribe anytime.
            </p>
            <form className="bl-newsletter__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="bl-newsletter__input"
                placeholder="you@company.com"
                required
              />
              <button type="submit" className="btn-white">
                Subscribe <IcoArrow />
              </button>
            </form>
          </section>

        </div>
      </div>
    </>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────
const PAGE_STYLES = `
  /* ── Buttons ── */
  .btn-white {
    display: inline-flex; align-items: center; gap: 8px;
    background: #fff; color: var(--rb-gray-900, #111827);
    font-size: 14px; font-weight: 700; padding: 13px 22px;
    border-radius: 9px; border: none; cursor: pointer;
    transition: background .15s; white-space: nowrap;
  }
  .btn-white:hover { background: var(--rb-gray-100, #F3F4F6); }

  /* ── Page ── */
  .bl-page { background: var(--rb-white, #fff); padding: 88px 0 96px; }
  .rb-wrap { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

  /* ── Hero ── */
  .bl-hero {
    display: flex; justify-content: space-between; align-items: flex-end;
    gap: 32px; padding-bottom: 40px;
    border-bottom: 1px solid var(--rb-gray-100, #F3F4F6);
    margin-bottom: 32px; flex-wrap: wrap;
  }
  .bl-eyebrow-pill {
    display: inline-flex; align-items: center;
    background: var(--rb-blue-50, #EFF6FF);
    border: 1px solid var(--rb-blue-200, #BFDBFE);
    border-radius: 6px; padding: 5px 14px;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700, #1D4ED8);
    letter-spacing: .06em; text-transform: uppercase; margin-bottom: 24px;
  }
  .bl-h1 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(2.2rem, 4vw, 3.2rem); font-weight: 800;
    line-height: 1.1; letter-spacing: -.03em;
    color: var(--rb-gray-900, #111827); margin-bottom: 16px; max-width: 600px;
  }
  .bl-h1__accent { color: var(--rb-blue-700, #1D4ED8); }
  .bl-sub {
    font-size: 1rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8; max-width: 480px;
  }

  /* Search */
  .bl-search {
    position: relative; flex-shrink: 0; width: 280px;
  }
  .bl-search__icon {
    position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
    color: var(--rb-gray-400, #9CA3AF); pointer-events: none;
  }
  .bl-search__input {
    width: 100%; border: 1.5px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 10px; padding: 11px 14px 11px 40px;
    font-size: .875rem; color: var(--rb-gray-900, #111827);
    outline: none; transition: border-color .15s;
  }
  .bl-search__input:focus { border-color: var(--rb-blue-700, #1D4ED8); }
  @media (max-width: 700px) { .bl-search { width: 100%; } }

  /* ── Category filter ── */
  .bl-categories {
    display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 40px;
  }
  .bl-cat-pill {
    border: 1.5px solid var(--rb-gray-200, #E5E7EB); border-radius: 100px;
    background: #fff; padding: 7px 16px; font-size: 13px; font-weight: 600;
    color: var(--rb-gray-500, #6B7280); cursor: pointer; transition: all .15s;
  }
  .bl-cat-pill:hover { border-color: var(--rb-blue-700, #1D4ED8); color: var(--rb-blue-700, #1D4ED8); }
  .bl-cat-pill--active {
    background: var(--rb-blue-700, #1D4ED8); border-color: var(--rb-blue-700, #1D4ED8); color: #fff;
  }
  .bl-cat-pill--active:hover { color: #fff; }

  /* ── Category tag (on cards) ── */
  .bl-cat-tag {
    display: inline-flex; align-items: center;
    font-size: 11px; font-weight: 700; letter-spacing: .04em;
    border-radius: 6px; border: 1px solid; padding: 4px 10px;
    width: fit-content; margin-bottom: 16px;
  }

  /* ── Featured post ── */
  .bl-featured {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 0; border: 1px solid var(--rb-gray-200, #E5E7EB);
    border-radius: 20px; overflow: hidden; text-decoration: none;
    margin-bottom: 56px; transition: box-shadow .2s, border-color .2s;
  }
  .bl-featured:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,.07);
    border-color: var(--rb-blue-200, #BFDBFE);
  }
  .bl-featured__media {
    position: relative; background: var(--rb-gray-900, #111827);
    min-height: 280px; display: flex; align-items: flex-end; padding: 24px;
    overflow: hidden;
  }
  .bl-featured__media-pattern {
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(96,165,250,.25), transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(96,165,250,.15), transparent 50%),
      repeating-linear-gradient(45deg, rgba(255,255,255,.02) 0px, rgba(255,255,255,.02) 1px, transparent 1px, transparent 14px);
  }
  .bl-featured__media-tag {
    position: relative; z-index: 1;
    background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2);
    color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .06em;
    text-transform: uppercase; border-radius: 100px; padding: 5px 14px;
  }
  .bl-featured__content { padding: 40px; display: flex; flex-direction: column; }
  .bl-featured__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.5rem; font-weight: 700; letter-spacing: -.02em;
    color: var(--rb-gray-900, #111827); line-height: 1.25; margin-bottom: 14px;
  }
  .bl-featured__excerpt {
    font-size: .9rem; color: var(--rb-gray-500, #6B7280); line-height: 1.8;
    margin-bottom: 28px; flex: 1;
  }
  @media (max-width: 800px) {
    .bl-featured { grid-template-columns: 1fr; }
    .bl-featured__media { min-height: 160px; }
    .bl-featured__content { padding: 28px; }
  }

  /* ── Post meta ── */
  .bl-post-meta { display: flex; align-items: center; gap: 10px; }
  .bl-post-meta--card { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--rb-gray-100, #F3F4F6); }
  .bl-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--rb-blue-50, #EFF6FF); border: 1px solid var(--rb-blue-200, #BFDBFE);
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700; color: var(--rb-blue-700, #1D4ED8); flex-shrink: 0;
  }
  .bl-avatar--sm { width: 30px; height: 30px; font-size: 10.5px; }
  .bl-post-meta__text { flex: 1; min-width: 0; }
  .bl-post-meta__author { font-size: .82rem; font-weight: 600; color: var(--rb-gray-900, #111827); }
  .bl-post-meta__sub { font-size: .74rem; color: var(--rb-gray-400, #9CA3AF); }
  .bl-post-meta__read {
    display: flex; align-items: center; gap: 5px;
    font-size: .74rem; color: var(--rb-gray-400, #9CA3AF); white-space: nowrap; flex-shrink: 0;
  }

  /* ── Posts grid ── */
  .bl-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 80px;
  }
  .bl-card {
    display: flex; flex-direction: column;
    border: 1px solid var(--rb-gray-200, #E5E7EB); border-radius: 16px;
    padding: 24px; text-decoration: none; background: #fff;
    transition: border-color .18s, box-shadow .18s, transform .18s;
  }
  .bl-card:hover {
    border-color: var(--rb-blue-200, #BFDBFE);
    box-shadow: 0 8px 24px rgba(0,0,0,.06);
    transform: translateY(-2px);
  }
  .bl-card__media {
    height: 120px; border-radius: 10px; overflow: hidden; margin-bottom: 18px;
  }
  .bl-card__media-pattern {
    width: 100%; height: 100%;
    background-image: repeating-linear-gradient(135deg, rgba(0,0,0,.03) 0px, rgba(0,0,0,.03) 1px, transparent 1px, transparent 12px);
  }
  .bl-card__title {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: 1.05rem; font-weight: 700; letter-spacing: -.015em;
    color: var(--rb-gray-900, #111827); line-height: 1.35; margin-bottom: 10px;
  }
  .bl-card__excerpt {
    font-size: .85rem; color: var(--rb-gray-500, #6B7280); line-height: 1.7; margin-bottom: 20px;
  }
  .bl-card__cta {
    display: flex; align-items: center; gap: 6px;
    font-size: .8rem; font-weight: 600; color: var(--rb-blue-700, #1D4ED8);
    margin-top: 16px; transition: gap .15s;
  }
  .bl-card:hover .bl-card__cta { gap: 10px; }
  @media (max-width: 960px) { .bl-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .bl-grid { grid-template-columns: 1fr; } }

  .bl-empty {
    grid-column: 1 / -1; text-align: center; padding: 64px 24px;
    font-size: .95rem; color: var(--rb-gray-400, #9CA3AF);
  }

  /* ── Newsletter ── */
  .bl-newsletter {
    background: var(--rb-gray-900, #111827); border-radius: 20px;
    padding: 64px 48px; text-align: center;
    display: flex; flex-direction: column; align-items: center;
  }
  .bl-newsletter__icon {
    width: 52px; height: 52px; border-radius: 14px;
    background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.15);
    color: #60A5FA; display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px;
  }
  .bl-newsletter__h2 {
    font-family: var(--rb-font-display, 'Sora', sans-serif);
    font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 800;
    letter-spacing: -.02em; color: #fff; margin-bottom: 12px;
  }
  .bl-newsletter__sub {
    font-size: .9rem; color: #9CA3AF; line-height: 1.8;
    max-width: 440px; margin-bottom: 28px;
  }
  .bl-newsletter__form { display: flex; gap: 10px; width: 100%; max-width: 420px; }
  .bl-newsletter__input {
    flex: 1; border: 1.5px solid rgba(255,255,255,.15); border-radius: 9px;
    background: rgba(255,255,255,.06); padding: 13px 16px;
    font-size: .875rem; color: #fff; outline: none; transition: border-color .15s;
  }
  .bl-newsletter__input::placeholder { color: rgba(255,255,255,.35); }
  .bl-newsletter__input:focus { border-color: #60A5FA; }
  @media (max-width: 560px) {
    .bl-newsletter__form { flex-direction: column; }
    .bl-newsletter { padding: 40px 24px; }
  }
`;
